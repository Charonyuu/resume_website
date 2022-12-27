import React from 'react'
import Desktop_Nav from './desktop_nav'
import Mobile_Nav from './mobile_nav';
import useWindowSize from '../../hooks/useWindowSize'
import styles from './index.module.scss'

export default function Nav({children}) {
  const { width } = useWindowSize();
  if (width > 960) {
    return (
      <section className={styles.desktop}>
        <div className={styles.left_container}>
          <Desktop_Nav />
        </div>
        <div className={styles.right_container}>
          {children}
        </div>
      </section>
    )
  }else{
    return (
      <section className={styles.mobile}>
        <Mobile_Nav />
        <div className={styles.down_container}>
          {children}
        </div>
      </section>
    )
  }
  
}
