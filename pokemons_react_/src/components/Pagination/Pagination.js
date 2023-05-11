import React from "react"
import ReactPaginate from "react-paginate";
import classes from "../Pagination/Pagination.module.css"


const Pagination=({handleChangePage, page,count})=>{
    return(
        <ReactPaginate
        breakLabel={"..."}
        nextLabel={">>>"}
        previousLabel={"<<<"}
        pageCount={count}
        pageRangeDisplayed={page}
        onPageChange={(e)=>handleChangePage(e.selected+1)}
        renderOnPageChange={null}
        className={classes.pagination}

        >
            {page}
        </ReactPaginate>
    )
}

export default Pagination;