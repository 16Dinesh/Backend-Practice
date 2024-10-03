import { useState } from "react"

function Like_button()  {
    const [isLiked, setisLiked] = useState(false);

    let liked = () => {
        setisLiked(!isLiked);
    }
  return (
    <>
    <div>Like_button</div>
    <p>Click on the Like button</p>
    <p onClick={liked}>
        { isLiked ? <i className="fa-solid fa-heart fa-2xl" style={ {color: "#e10909"} }></i>: <i className="fa-regular fa-heart fa-2xl"></i> }
        
    </p>
    
    </>
  )
}

export default Like_button