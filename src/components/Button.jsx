import React from 'react'

const Button = ({name,style}) => {
  return (
    <div>
      <button className={style}>{name}</button>
    </div>
  )
}

export default Button