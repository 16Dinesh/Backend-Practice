function Handlevent() {
    console.log("Button")
} 

function MouseHandelr() {
    console.log("hoverd")
}

function Handlerdbclick() {
    console.log("Clicked!")
}

export default function Button() {
    return (
        <div>
            <button onClick={Handlevent}>Button</button>
            <p onMouseOver={MouseHandelr}> 
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci repellendus quisquam rem magnam saepe odit hic accusamus eos aliquam doloribus asperiores laborum odio aspernatur, quod repudiandae autem a quasi id.
            </p>
            <button onDoubleClick={Handlerdbclick}>DoubleClick</button>
        </div>
    )
}