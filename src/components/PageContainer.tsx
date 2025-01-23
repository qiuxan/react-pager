import React, { useState } from 'react'
import Pager from './Pager';

const PageContainer = () => {
  const [current, setCurrent] = useState<number | undefined>(3);
  const [total, setTotal] = useState<number | undefined>(100);
  const [limit, setLimit] = useState<number | undefined>(10);
  const [panelNumber, setPanelNumber] = useState<number | undefined>(5);

  function handlePageChange(pageNumber: number) {
    console.log({pageNumber});
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