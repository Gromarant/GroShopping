export const Img = ( {className, alt} ) => {
  return (
    <>
        <img src={'https://avatars.githubusercontent.com/u/23740599?s=280&v=4'} alt={alt} className={className} />
    </>
  )
}

export const ImgWithTitle = ( {className, src, alt, title} ) => {
  return (
    <>
        <img src={src} alt={alt} className={className} title={title} />
    </>
  )
}