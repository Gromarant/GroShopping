import React from 'react'

export const InputText = ({ className, value, onChange, placeholder, areaLabel }) => {
  return (
       <input className={className} type="text" value={value} onChange={onChange} placeholder={ placeholder } area-label={areaLabel}></input>
    )
}
