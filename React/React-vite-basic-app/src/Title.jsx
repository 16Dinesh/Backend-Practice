function Title() {
    return (
        <h1>Hello World!</h1>
    )
  };

  function Description() {
    return (
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque animi minima praesentium maiores! Aliquid, repellendus. Facilis quasi quo quas excepturi, culpa quos odit reiciendis optio voluptates ipsum, veritatis totam a.</p>
    )
  };

function Text() {
    let name = 'Dinesh'
    return (
        <>
        <p>sum if 2*2 = {2*2}</p>
        <h1>Hello this is {name}</h1>
        </>
        
        
    )
}

//export default Title;
export {Title, Description,Text};