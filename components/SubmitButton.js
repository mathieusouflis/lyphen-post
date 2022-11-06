const ButtonSubmit = ({ value = "Button" }) => {
  return (
    <input className="my-5 bg-blue-600 dark:bg-yellow-400 rounded-xl text-white dark:text-black py-2 duration-300 hover:bg-blue-700 dark:hover:bg-yellow-500 hover:shadow-md shadow-dark" type="submit" value={value} />
  )
}

export default ButtonSubmit