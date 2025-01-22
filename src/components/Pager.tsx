import React from 'react'
import './Pager.css'

/**
 * Pager component
 * @param {object} props - Component props
 * 1. current: number - Current page number
 * 2. total: number - Total number of items
 * 3. limit: number - Number of items per page
 * 4. panelNumber: number - The max number of page numbers to show
 * 
 
*/ 


interface PagerProps {
    current?: number;
    total?: number;
    limit?: number;
    panelNumber?: number;
}

const Pager = (props: PagerProps) => {
    console.log(props)
    const totalPageNumber = calculateTotalPages(props)
    
    return (
    <>
        <span className={props.current ===1 ?'item disabled':'item'}>Start</span>
        <span className={props.current ===1 ?'item disabled':'item'}>Previous</span>

        {/* numeric pages */}

        <span className={props.current ===totalPageNumber ?'item disabled':'item'}>Next</span>
        <span className={props.current ===totalPageNumber ?'item disabled':'item'}>End</span>

        <span>{props.current}</span> / <span>{totalPageNumber}</span>
    </>
  )
}

/**
 * calculate the total number of pages
 * @param {*} props - Total number of items
*/

function calculateTotalPages(props: PagerProps) {
    return Math.ceil(props.total! / props.limit!)
}

export default Pager