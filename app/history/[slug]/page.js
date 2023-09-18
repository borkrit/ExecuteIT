import SingleItem from '@/app/component/SingleItem'
import React from 'react'
import { getHistory } from '@/app/helper/_api';

export default async function page({params}) {
  const data = await getHistory(params);
  
  return (
    <> 
     <SingleItem data={data} />
    </>
  )
}


