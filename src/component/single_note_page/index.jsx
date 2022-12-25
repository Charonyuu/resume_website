import React,{useState,useEffect} from 'react'
import styles from './index.module.scss'
import {useFetchSingleNote} from '../../hooks/useFetchData';
import {Link,useLocation, useParams} from "react-router-dom";
import './quill.snow.scss';

export default function SingleNotePage() {
  let note;
  const location = useLocation();

  const state_data = location.state || ''
  if (!state_data){
    const { id } = useParams();
    const { data } =  useFetchSingleNote(id)
    note = data
  }else{
    note = state_data 
  }
 
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
