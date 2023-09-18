"use client"
import React from 'react'
import style from './style.module.scss'
import { useRouter } from 'next/navigation';

export default  function ButtonBack() {
  const router = useRouter()

  const handelBack = ()=>{
    router.back()
  }


  return (
    <> 
    <button onClick={handelBack} className={style.btn__back}> Back </button>
     
    </>
  )
}

