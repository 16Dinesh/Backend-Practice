import { useSelector } from "react-redux"

const NavBar = () => {

    const updateLikes = useSelector((state) => state.counter.value)
    
  return (
    <div className='navSection'>
        <div className="navTitle">
            Redux
        </div>
        <div className="navUser">
            Subscribers:
        </div>
        <div className="navComments">
            Comments:
        </div>
        <div className="navLikes">
            Likes: {updateLikes}
        </div>
    </div>
  )
}

export default NavBar