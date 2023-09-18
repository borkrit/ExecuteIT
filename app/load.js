'use client'

import React, { useEffect, useRef, useState } from 'react'
import chunkArray from './helper/helper'
import styles from './page.module.css'
import SingleListItem from './component/SingleListItem'

 const Loads = ({list}) => {
    const [lanch, setLanch] = useState(chunkArray(list,15))
    const [LanchesList, setLanchesList] =useState([]);
    const [page, setPage] = useState(0)

    const refItem = useRef()

    useEffect(()=>{
        if(LanchesList.length == 0 ) {
            setLanchesList(lanch[page])
        }
    },[])
  
    useEffect(()=>{
        if( page < lanch.length ){
            setLanchesList([...LanchesList,lanch[page]])
        }
    },[page])

   
    useEffect(()=>{
        const l = ()=>{
                    if(window.scrollY > refItem.current.scrollHeight-refItem.current.scrollHeight/2){
                        setPage(prev=> prev+1)

                    }
        }

        window.addEventListener('scroll',l)


        return () => window.removeEventListener('scroll',l)



    },[])
    
    
    return (
    <div className={styles.wrapper} ref={refItem}>
        {
            LanchesList && LanchesList.map(lists=>(
                lists.map((item)=>(
                    <>
                        <SingleListItem item={item} key={item.id}  /> 
                    </>
                ))
             ))
        }
    </div>
  )
}

export default Loads