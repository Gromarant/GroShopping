export const Img = ( {className, src, alt} ) => {
  return (
    <>
        <img src={src} alt={alt} className={className} />
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