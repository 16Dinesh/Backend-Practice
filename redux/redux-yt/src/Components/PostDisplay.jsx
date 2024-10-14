import {useState} from 'react'
import NewUser from './NewUser';
import NewComments from './NewComments';
import UserForm from './UserForm';
import CommentForm from './CommentForm';


const PostDisplay = () => {

    const [showUser, setShowUser] = useState(false);
    const [showComment, setShowComment] = useState(false)




  
    const userHandler =()=>{
      setShowUser(true)
    }
    const commentHandler =()=>{
      setShowComment(true)
    }
  

  return (
    <div className='postSection' >
    <div className="poster">
    <div className="postImage">
             <img src="assets/Kashmir.jpg" alt="" />
         </div>
         <div className="postButtons">
             <button onClick={userHandler}>Subscribe</button>
             <button onClick={commentHandler}>Comment</button>
             <button>Like</button>
         </div>
         <div className="userForm">
          {showUser && <UserForm />}
         {showComment && <CommentForm />}
         </div>
    </div>
         <div className="subSection">
             <NewUser />
             <NewComments />
         </div>
     </div>
  )
}

export default PostDisplay