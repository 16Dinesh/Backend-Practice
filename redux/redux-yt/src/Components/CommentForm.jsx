import {useState} from 'react'
import {useDispatch} from "react-redux";
import { addComment } from '../redux/userSlice';


const CommentForm = () => {
    const [userComment, setUserComment] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const dispatch = useDispatch();

    const commentHandler = (e) => {
        setUserComment(e.target.value);
        setError(''); // Clear error on input change
    };

    const submitHandler = (e) => {
        e.preventDefault();
        if (userComment.trim() === '') {
            setError('Comment cannot be empty'); // Validation check
            return;
        }
        
        dispatch(addComment(userComment));
        setSuccess('Comment submitted successfully!'); // Success message
        setUserComment(''); // Clear the input
    };

    return (
        <div>
            <form className='formSection' onSubmit={submitHandler}>
                <h4>Leave your comment</h4>
                <div className="commentInput">
                    <textarea 
                        value={userComment} 
                        onChange={commentHandler} 
                        cols="50" 
                        rows="4" 
                        placeholder="Type your comment here..." // Placeholder for better UX
                    />
                </div>
                {error && <p className='errorMessage'>{error}</p>} {/* Display error message */}
                {success && <p className='successMessage'>{success}</p>} {/* Display success message */}
                <button type='submit' disabled={!userComment.trim()}>Submit</button> {/* Disable button if empty */}
            </form>
        </div>
    );
};

export default CommentForm; 