import React, { useState } from 'react'



const Pagination = ({moviesPerPage, total_pages, handlePage}) => {

   

    

    const pageNumbers = [];
    for(let i =1; i <= Math.ceil(total_pages / moviesPerPage); i++){
        pageNumbers.push(i);
    }
    return (
       <nav>
           <ul className = "pagination">
             {pageNumbers.map(number =>(
                 <li key ={number} onClick = {()=> handlePage(number)}className = "page-item">
                   < span className = "page-link">
                       {number}
                   </span>
                 </li>
             ))}
           </ul>
       </nav>
    )
}

export default Pagination
