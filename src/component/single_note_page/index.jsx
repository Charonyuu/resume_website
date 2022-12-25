import React from 'react'
import styles from './index.module.scss'
import {useFetchSingleNote} from '../../hooks/useFetchData';
import {Link, useParams} from "react-router-dom";
import './quill.snow.scss';

export default function SingleNotePage() {
  let { id } = useParams();
  const { data:note } = useFetchSingleNote(id)
  if (!note) return <div>loading...</div>;

  return (
    <div className={styles.container}>
      <Link to={'/note'} className={styles.backBtn}>回到文章列表</Link>
      <div className={styles.title}>{note.title}</div>
      <div className={styles.date}>{note.Date}</div>
      <div 
        className={"ql-editor"}
        dangerouslySetInnerHTML={{__html: note.content}} 
      />
    </div>
  )
}
