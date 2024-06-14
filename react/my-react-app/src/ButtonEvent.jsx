
function ButtonEvent() {

    /*
    let count = 0;

    const handleClick = (name) => {
        if(count < 3) {
            count++;
            console.log(`${name} you click me ${count} time/s`);
            
        } else {
            console.log(`${name} stop click me!`);
        }
    }
    */

    // const handleClick2 = (name) => console.log(`${name} stop clicking me`);

    const handleClick3 = (e) => {
        console.log(e);
        // e.target.textContext = "OUCH! 😊";
        e.target.innerText = "OUCH! 😊";
    }

    return (
        // <button onClick={handleClick}>Click me 😄</button>
        <div>
            
            <button onClick={(e) => handleClick3(e)}>Click me 😄</button>
            
        </div>
        // <button onDoubleClick={(e) => handleClick3(e)}><b>Click me 😄</b></button>
    )

}

export default ButtonEvent
