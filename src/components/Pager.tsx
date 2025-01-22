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
    return (
    <>
        <span className='item'>Start</span>
    </>
  )
}


export default Pager