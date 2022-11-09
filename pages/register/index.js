import { useState } from "react";
import Link from "next/link"
import { useRouter } from "next/router";
import Input from "/components/Input.js"
import SubmitButton from "/components/SubmitButton.js"

const Register = () => {
  const router = useRouter();
  const [usernameUsedStatus, setUsernameValidityStatus] = useState(true)
  const [usernameLengthStatus, setUsernameLengthStatus] = useState(true)
  const [emailValidityStatus, setemailValidityStatus] = useState(true)
  const [passwordStatus, setPasswordStatus] = useState(true)
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const checkUsernameLenght = async (username_loc) => {
    if (username_loc.length < 2) {
      setUsernameLengthStatus(false)
      return
    } else {
      setUsernameLengthStatus(true)
    }
  }

  const submitRegister = async (e) => {
    e.preventDefault()

    const register = await fetch('/api/user/create/', {
      method: "POST",
      body: JSON.stringify({
        username: username,
        email: email,
        password: password,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    })
    const registerJSON = await register.json()
    console.log(registerJSON)
    if (register.status != 200) {
      !registerJSON.usernameValidity ? setUsernameValidityStatus(false) : setUsernameValidityStatus(true)
      !registerJSON.emailValidity ? setemailValidityStatus(false) : setemailValidityStatus(true)
      !registerJSON.passwordValidity ? setPasswordStatus(false) : setPasswordStatus(true)
      return
    }
    router.push("/login")

  }

  return (
    <>
      <div className="w-screen bg-zinc-200 dark:bg-zinc-700 h-screen flex justify-center items-center">
        <div className="regBox bg-zinc-100 dark:bg-zinc-600 border-t dark:border-zinc-600 shadow-2xl rounded-xl p-10 lg:w-auto 2xl:w-1/4">
          <div className="flex flex-col">
            <h1 className="text-black dark:text-white text-center text-5xl mb-10">Register</h1>
            <form className="flex flex-col" autoComplete="off" onSubmit={async (e) => await submitRegister(e)}>
              <Input type="text" minChar="2" maxChar="20" placeholder="username" required={true} onChange={async (e) => {
                setUsername(e.target.value)
                await checkUsernameLenght(e.target.value)
              }} />
              <p className="text-red-500" hidden={usernameUsedStatus === false ? false : true}>Le nom d'utilisateur n'est pas disponible.</p>
              <p className="text-red-500" hidden={usernameLengthStatus === false ? false : true}>Vottre nom d'utilisateur doit faire au moins deux caractères.</p>
              <Input type="email" placeholder="your@email.domain" required={true} onChange={async (e) => {
                setEmail(e.target.value)
              }} />
              <p className="text-red-500" hidden={emailValidityStatus === false ? false : true}>Vottre email est déjà utilisée ou invalide.</p>
              <Input type="password" minChar="8" placeholder="password" required={true} onChange={async (e) => {
                setPassword(e.target.value)
              }} />
              <p className="text-red-500" hidden={passwordStatus === false ? false : true}>Vottre mot de passe doit faire plus de 8 caractères.</p>
              <SubmitButton value="Continue" />
              <div className="h-px my-5 bg-zinc-300 dark:bg-zinc-500" />
              <span className="flex flex-row gap-1 justify-center">
                <p className="text-black dark:text-white">Allready have an account ?</p>
                <Link href="/login" className="text-blue-600 dark:text-yellow-400 hover:underline underline-offset-auto">Login !</Link>
              </span>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Register;
