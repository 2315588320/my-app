const Button = (props) => {
    const onBtnPressed = () => {
        props.updateText("CLICK")
    }
    return (
        <div>
            <button onClick={onBtnPressed}>Click Me</button>
        </div>
    )
}

export default Button;