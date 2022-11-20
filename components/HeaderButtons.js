import { useState } from "react"
import classNames from 'classnames'

import Icon from "./Icons"

const HeaderButtons = ({ afterName, iconType, colorWhite, colorDark }) => {


  return (
    <div className={`p-2 flex flex-row `}>
      <Icon type={iconType} colorWhite={colorWhite} colorDark={colorDark} />
    </div >
  )
}
export default HeaderButtons