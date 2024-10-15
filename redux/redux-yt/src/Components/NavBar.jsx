import { useSelector } from "react-redux"

const NavBar = () => {

    const updateLikes = useSelector((state) => state.counter.value)
    const updatedSub = useSelector((state) => state.subnew.users)
    const updatedComments = useSelector((state) => state.newComment.comment)
    
  return (
    <div className='navSection'>
        <div className="navTitle">
            Redux
        </div>
        <div className="navUser">
            Subscribers: {updatedSub.length}
        </div>
        <div className="navComments">
            Comments: {updatedComments.length}
        </div>
        <div className="navLikes">
            Likes: {updateLikes}
        </div>
    </div>
  )
}

export default NavBar