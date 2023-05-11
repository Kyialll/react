
import classes from '../Input/Input.module.css'
const Input=({placeholder,onChange,value,name,type,action})=>{
    return(
        <input

               type={type}
               placeholder={placeholder}
               name={name}
               onChange={onChange}
               value={value}
               className={classes['input'] + ' ' +  classes[action]}>
        </input>)}

export default Input ;

