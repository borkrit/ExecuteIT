import React from 'react'
import ButtonBack from '../component/ButtonBack';
import { getLaunch } from '../helper/_api';
import SingleItem from '../component/SingleItem';

export default async function page({params}) {
  const data = await getLaunch(params)

  return (
    <> 

     <SingleItem data={data} />
    
    </>
  )
}


