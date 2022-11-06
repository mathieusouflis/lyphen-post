import { useState } from "react"
import classNames from 'classnames'

import Icon from "./Icons"

const HeaderButtons = ({ afterName, iconType, colorWhite, colorDark }) => {
  const [state, setState] = useState(false)

  const classBtn = classNames(
    'absolute', 'left-14', 'bg-white', 'dark:bg-zinc-500', 'dark:text-zinc-100', 'p-2', 'rounded-md', 'transition-all', 'duration-100',
    {
      'opacity-100': state,
      'opacity-0': !state
    }
  );


  return (
    <div className={`p-2 flex flex-row `} onMouseOver={() => setState(true)} onMouseLeave={() => setState(false)}>
      <Icon type={iconType} colorWhite={colorWhite} colorDark={colorDark} />
      <p className={classBtn}>{afterName}</p>
    </div >
  )
}
export default HeaderButtons