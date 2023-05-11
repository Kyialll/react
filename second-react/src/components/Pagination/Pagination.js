import classes from '../Pagination/Pagination.module.css'


const Pagination=({page,handleNext,handlePrev})=>{
    return(
    <div className={classes.pagination}>
        <div className={classes.paginationBlock}>
            <button onClick={handlePrev}>Prev</button>
            <h5>{page}</h5>
            <button onClick={handleNext}>Next</button>
        </div>
    </div>)
}

export default Pagination;