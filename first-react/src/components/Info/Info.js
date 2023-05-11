import classes from './Info.module.css'

const Info=(props)=>{
    return <h3 className={classes.info}>{props.title}</h3>
}
export default Info;