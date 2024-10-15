import {useSelector, useDispatch} from "react-redux"
import {inc, dec} from "../../redux/page-2/Likes.js"

export default function ReduxCounter() {

    const count = useSelector((state) => state.incDncp2.value)
    const dispatch = useDispatch()

    return (
        <div>
            <div>
                <button
                aria-label="Increment value"
                onClick={() => dispatch(inc())}
                >
                    Increment
                </button>
                <br/><br/><br/><br/>
                <span>Count : {count}</span>
                <br/><br/><br/>
                <button 
               aria-label="Decrement value"
               onClick={() => dispatch(dec())} 
                >
                    Decrement
                </button>
            </div>
        </div>
    )
}