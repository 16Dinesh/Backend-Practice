import {useState} from 'react'



const CommentForm = () => {
    const [userComment, setUserComment] = useState('');



    const commentHandler = (e)=>{
        setUserComment(e.target.value)
    }

    const submitHandler = (e)=>{
            e.preventDefault();
            console.log("New Comments: ", userComment)
            setUserComment("")
    }


  return (
    <div>
        <form className='formSection' onSubmit={submitHandler}>
            <h4>Leave your comment</h4>
            <div className="commentInput">
                <textarea value={userComment} onChange={commentHandler} id="" cols="50" rows="4"></textarea>
            </div>
            <button>Submit</button>
        </form>
    </div>
  )
}

export default CommentForm