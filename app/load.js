'use client'

import React, { useEffect, useRef, useState } from 'react'
import chunkArray from './helper/helper'
import styles from './page.module.css'
import SingleListItem from './component/SingleListItem'

 const Loads = ({list}) => {
    const [lanch, setLanch] = useState(chunkArray(list,15))
    const [lanchesList, setLanchesList] =useState([]);
    const [page, setPage] = useState(0)

    const refItem = useRef()
    
    useEffect(()=>{
        if(lanchesList.length == 0 ) {
            setLanchesList(lanch[page])
        }
    },[])
  
    useEffect(()=>{
        if( page < lanch.length ){
            setLanchesList([...lanchesList,lanch[page]])
        }
    },[page])

   
    useEffect(()=>{
        const handleScroll = () => {
            const windowHeight = window.innerHeight;
            const documentHeight = Math.max(
              document.body.scrollHeight,
              document.documentElement.scrollHeight
            );
            const scrollPosition = window.scrollY;
          
            if (documentHeight - (scrollPosition + windowHeight) <= 200) {
              setPage((prev) => prev + 1);
            }
          };
          
          window.addEventListener("scroll", handleScroll);
          
          return () => {
            window.removeEventListener("scroll", handleScroll);
          };

    },[])
    
    
    return (
    <div className={styles.wrapper} ref={refItem}>
        {
            lanchesList && lanchesList.map(lists=>(
                lists.map((item)=>(
                        <SingleListItem item={item} key={item.id}  /> 
                ))
             ))
        }
    </div>
  )
}

export default Loads