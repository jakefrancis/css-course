import Review from "./Review"

const UserReviews = () => {

  const reviews = [
    {
      alt: 'friend 1',
      src: 'img/user-1.jpg',
      rating: 7.6,
      name: 'Nick Smith',
      date: 'Feb 23rd, 2019',
      review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloremque architecto dicta animi, totam, itaque officia ex.'
    },
    {
      alt: 'friend 2',
      src: 'img/user-2.jpg',
      rating: 9.3,
      name: 'Mary Thomas',
      date: 'June 10th, 2018',
      review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloremque architecto dicta animi.'
    },
  ]

  return (
    <div className='user-reviews'>
      {reviews.map(r => <Review alt={r.src} src={r.src} rating={r.rating} name={r.name} date={r.date} review={r.review} />)}
      <button className='btn-inline'>Show All <span>&rarr;</span></button>
    </div>
  )
}


export default UserReviews