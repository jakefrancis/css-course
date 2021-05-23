import Icon from "./Icon"

const Description = () => {

  const listItems = [
    'Close to the Beach',
    'Breakfast Included',
    'Free Aiport Shuttle',
    'Free Wifi in all Rooms',
    'Air conditioning and heating',
    'Pets Allowed',
    'We speak all languages',
    'Perfect for families'
  ]

  const friends =[
    {
      src: 'img/user-3.jpg',
      alt: 'Friend 3'
    },
    {
      src: 'img/user-4.jpg',
      alt: 'Friend 4'
    },
    {
      src: 'img/user-5.jpg',
      alt: 'Friend 5'
    },
    {
      src: 'img/user-6.jpg',
      alt: 'Friend 6'
    },  
  ]

  return (
    <div className='description'>
      <p className='paragraph'>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nisi dignissimos debitis ratione sapiente saepe. Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate.
      </p>
      <p className='paragraph'>
      Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate delectus, inventore iure aliquid aliquam.
      </p>
      <ul className='list'>
        {listItems.map(item => <li className='list__item'><Icon component='list__item' iconName='chevron-thin-right' />{item}</li>)}
      </ul>
      <div className='recommend'>
        <p className='recommend__count'>
            Lucy and Three other friends recommend this hotel.
        </p>
        <div className='recommend__friends'>
          {friends.map(friend => <img className='recommend__photo' src={friend.src} alt={friend.alt} />)}
        </div>

      </div>
    </div>
  )
}


export default Description