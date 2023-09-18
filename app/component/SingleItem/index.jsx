import React from 'react'
import ButtonBack from '../ButtonBack'
import style from './style.module.scss'


const SingleItem = ({data}) => {
  return (
    <>
      <article className={style.article}>
      
        <ButtonBack />
        <div className={style.article__header}>
        <h1>
                {data.title ? data.title : data.mission_name}
        </h1>
        </div>
          <div>
              
              <div className={style.article__links}>
                Social link : 
              {Object.keys(data.links).filter(item=> item !== '__typename' ).map((item,index)=>(
                <>
                {
                    data.links[item] ? ( <div><a href={data.links[item]} keys={index}>
                      {item}  
                      </a></div> ) : null
                  }
                </>
                   
                  ))}
              </div>
          </div>
        <div className={style.article__information}>
            {data.details} 

        </div>

      </article>
      </>
    
  )
}

export default SingleItem