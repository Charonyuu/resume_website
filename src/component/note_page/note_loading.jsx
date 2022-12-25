import React from 'react'
import styles from './note_loading.module.scss'

export default function NoteLoading() {
  return (
    <div className={styles.loading_container}>
      <div className={styles.title_placeholder} />
      <div className={styles.content_placeholder} />
      <div className={styles.sec_content_placeholder} />
      <div className={styles.keyword_placeholder} />

    </div>
  )
}
