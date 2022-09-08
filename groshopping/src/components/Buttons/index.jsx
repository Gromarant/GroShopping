export const Button = ( {className, type, value} ) => {
  return (
    <>
    <input className={className} type={type} value={value}></input>
    </>
  )
}

export const ButtonIcon = ( {className, type, icon} ) => {
    return (
      <>
      <input className={className} type={type}> {icon} </input>
      </>
    )
  }