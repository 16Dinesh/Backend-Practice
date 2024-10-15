import { useSelector } from "react-redux";
import './NewUser.css';

const NewComments = () => {
    const newComments = useSelector((state) => state.newComment.comment);

    if (!newComments || newComments.length === 0) {
        return <div className='userSection'>No comments found.</div>;
    }

    return (
        <div className='commentSection'>
            <h4>Comments:</h4>
            <div className='scrollContainer'>
                {newComments.map((item, idx) => (
                    <div key={idx} className="listItem">
                        <ul>
                            <li>{item}</li>
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NewComments;
