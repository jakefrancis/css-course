import Icon from "./Icon"


const Overview = ({hotelName, rating}) => {

  const buildRating = () => {
    const halfRating = Math.round(rating / 2)
    let starArray = []
    for(let i = 0; i < 5; i++){
      if(i < halfRating){
        starArray.push('star')
      }
      else{
        starArray.push('star-outlined')
      }
    }
    return starArray
  }


  return (
    <div className='overview'>
      <h1 className="overview__heading">
        {hotelName}
      </h1>
      <div className='overview__stars'>
        {buildRating().map(item => <Icon component='overview' iconName={item} componentTrail='--star' />)}
      </div>
      <div className='overview__location'>
        <Icon component='overview' iconName='location-pin' componentTrail='--location'/>
        <button className='btn-inline'>Albufeira, Portugal</button>
      </div>
      <div className='overview__rating'>
        <div className='overview__rating--average'>{rating}</div>
        <div className='overview_rating--count'>429 votes</div>
      </div>

    </div>
  )
}

export default Overview