import React from 'react'
import Link from 'next/link'
import style from './style.module.scss'

export const Header = () => {
  return (
    <>
        <header className={style.header} >
            <nav className={style.navigation}>
                <Link href='/history'>history </Link>
                <Link href='/'>Recent </Link>
            </nav>
        </header>
    </>
    
  )
}
