


const GalleryFigure = ({src, alt}) => {

  return (
    <figure className='Gallery__item'>
      <img src={src} alt={alt} className={'gallery__photo'}/>
    </figure>
  )
}

export default GalleryFigure