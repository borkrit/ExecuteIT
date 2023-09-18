import React from 'react'
import Loads from '../load'
import { getHistories } from '../helper/_api'
import styles from '../page.module.css'

export default async function History() {
  const historyList = await getHistories() 

  return (
    <>
      <h1 className={styles.title__page} >History</h1>
      <Loads list={historyList} />
     
    </>
  )
}

