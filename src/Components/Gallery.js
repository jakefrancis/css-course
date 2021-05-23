import React from 'react'
import GalleryFigure from './GalleryFigure'


const Gallery = () => {

  const galleryData = [
    {
      src: '/img/hotel-1.jpg',
      alt: 'hotel at night'
    },
    {
      src: '/img/hotel-2.jpg',
      alt: 'hotel pool'
    },
    {
      src: '/img/hotel-3.jpg',
      alt: 'hotel beach'
    }

  ]
  return(
    <div className='gallery'>
      {galleryData.map(item => <GalleryFigure src={item.src} alt={item.alt} />)}
    </div>
  )
}


export default Gallery