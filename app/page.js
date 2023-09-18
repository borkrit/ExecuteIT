import styles from './page.module.css'

import Loads from './load'
import { getLaunches } from './helper/_api'

export default async function Home() {

  const lanchesList = await getLaunches()


  return (
    <>
        <h1 className={styles.title__page} >Top Hot</h1>
        <Loads list={lanchesList}/>
    </>
    
  )
}

