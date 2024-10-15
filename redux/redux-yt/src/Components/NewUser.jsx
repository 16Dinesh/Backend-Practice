import { useSelector } from 'react-redux';
import './NewUser.css'; // Importing the CSS file for styles

const NewUser = () => {
    const newUser = useSelector((state) => state.subnew.users);

    if (!newUser || newUser.length === 0) {
        return <div className='userSection'>No subscribers found.</div>;
    }

    return (
        <div className='userSection'>
            Subscribers:
            <div className='scrollContainer'>
                {newUser.map((item, idx) => (
                    <div key={idx} className='listItem'>
                        <ul>
                            <li>{item}</li>
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NewUser;
