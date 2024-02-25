function FunctionEvent () {
    function handleClick(){
        console.log("Button is clicked!");
    }
    return (
        <div>
            Functional component
            <button onClick= {handleClick()}>Click Here</button>
        </div>
    );
}
export default FunctionEvent;