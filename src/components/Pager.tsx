import React from 'react'
import './Pager.css'
import { PagerProps } from './PageInterface'

/**
 * Pager component
 * @param {object} props - Component props
 * 1. current: number - Current page number
 * 2. total: number - Total number of items
 * 3. limit: number - Number of items per page
 * 4. panelNumber: number - The max number of page numbers to show
 * 5. onPageChange: function - Callback function when page number is clicked
 * 
 
*/ 




const Pager = (props: PagerProps) => {
    console.log(props)
    const totalPageNumber = calculateTotalPages(props)
    
    return (
    <>
        <span 
            className={props.current ===1 ?'item disabled':'item'}
            onClick={() => {
                if(props.current === 1) return;

                props.onPageChange&& props.onPageChange(1)
            }}
        >
            Start
        </span>
        <span className={props.current ===1 ?'item disabled':'item'}>Previous</span>

        {/* numeric pages */}

        <span className={props.current ===totalPageNumber ?'item disabled':'item'}>Next</span>
        <span className={props.current ===totalPageNumber ?'item disabled':'item'}>End</span>

        <span className='current'>{props.current}</span> / <span>{totalPageNumber}</span>
    </>
  )
}

function toPage(target: number, props: PagerProps) {
    if(target === props.current) return;

    props.onPageChange&& props.onPageChange(target)
}



/**
 * calculate the total number of pages
 * @param {*} props - Total number of items
*/

function calculateTotalPages(props: PagerProps) {
    const total = props.total ?? 0;
    const limit = props.limit ?? 1;
    return Math.ceil(total / limit);
}

export default Pager