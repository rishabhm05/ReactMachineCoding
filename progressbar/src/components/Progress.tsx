
interface progressprops{
    progress:number
}

const Progress = ({progress}:progressprops) => {

  return (
    <div className="progress-container">
      <div  style={{ transform: `translateX(${progress - 100}%)` }} className="progress">

      </div>

    </div>
  )
}

export default Progress