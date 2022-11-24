const Button = (props) => {
    return (
        <button id={props.role} className="button" onClick={() => props.click(props.role)}>{props.role}</button>
    )
}
export default Button;