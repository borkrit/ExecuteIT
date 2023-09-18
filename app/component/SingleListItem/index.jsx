import React from 'react'
import Link from 'next/link'
import style from './style.module.scss'

const SingleListItem = ({...props}) => {
   
    const {id, title, details} = props.item
    const urlPath = window.location.pathname !='/'?window.location.pathname: '';
  return (
    <div key={id} className={style.item}>
      <Link href={`${urlPath}/${id}`}>
        <div className={style.default__img}>{props.item.__typename}</div>
        
        <p className={style.item__title}>{ title ? title : props.item.mission_name }</p>
      </Link>
   </div>
  )
}

export default SingleListItem