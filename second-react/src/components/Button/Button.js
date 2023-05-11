import classes from '../Button/Button.module.css'

const Button = ({ children,onClick,className}) => {
    return (
        <button onClick={() => onClick()} className={className} >{children}</button>
    )
}

export default Button;