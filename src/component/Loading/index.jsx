import React from 'react'
import styles from './index.module.scss'

export default function Loading() {
  return (
    <div className={styles.container}>
        <div className={styles.loader}>
            <span></span>
            <p>Loading</p>
        </div>
    </div>
  )
}
