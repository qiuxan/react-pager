import React, { useState } from 'react'
import Pager from './Pager';

const PageContainer = () => {
  const [current, setCurrent] = useState<number>(3);
  const [total, setTotal] = useState<number>(100);
  const [limit, setLimit] = useState<number>(10);
  const [panelNumber, setPanelNumber] = useState<number>(5);

  function handlePageChange(pageNumber: number) {
    setCurrent(pageNumber); 
  }

  return (
    <Pager 
      current={current}
      total={total}
      limit={limit}
      panelNumber={panelNumber}

      onPageChange={
        (pageNumber: number) => {
          handlePageChange(pageNumber);
        }
      }
    />
  ) 
}

export default PageContainer