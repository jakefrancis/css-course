

const Review = ({alt, src, rating, name, date, review}) => {

  return (

    <figure className='review'>
      <blockquote className='review__paragraph'>
        {review}
      </blockquote>
      <div className='review__box'>
        <img className ='review__box--photo' src={src} alt={alt}/>
        <div className='review__box__info'>
            <p className='review__box__info--name'>
              {name}
            </p>
            <p className='review__box__info--date'>
              {date} 
            </p>
        </div>
        <div className='review__rating'>
          {rating}
        </div>
      </div>
    </figure>
  )
}


export default Review