import { LoadingPropsType } from '../types/propsTypes'

const Loading = ({ image, status }: LoadingPropsType ) => {
  return (
    <div className='loading'>
      <div className='loading-animation'>
        <div className='loading-circle'></div>
        <img src={image} height={100} alt="" />
      </div>
      <p>{status}</p>
    </div>
  )
}

export default Loading