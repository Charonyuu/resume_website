import React, { useState,useEffect,useRef } from 'react'
import styles from './index.module.scss'
import {useFetchNotesData} from '../../hooks/useFetchData';
import {Link} from "react-router-dom";
import Loading from './note_loading';
export default function NotePage() {
  
  const [lastId,setLastId] = useState(null)
  const { data,notes, loading, hasMore } = useFetchNotesData(lastId)
  const lastNoteRef = useRef(null)

  if (!data) return <div>loading...</div>;
  
  return (
    <div className={styles.note_page}>
      {data.map((note,idx)=>
        {
          if (data.length == idx + 1) {
            return(
              <div className={styles.card} key={note.id} data-id={note.id}>
                <h1>{note.title}</h1>
                <p className={styles.content}>{note.intro}</p>
                <div className={styles.keyword_container}>
                  {note.keyword.map((item,idx)=>
                    <div className={styles.keyword} key={idx}>{item}</div>
                  )}
                </div>
                <p className={styles.time}>{note.Date}</p>
                <Link to={`note/${note.id}`} className={styles.read_more}>閱讀更多</Link>
              </div>
            )
          }else{
            return(
              <div className={styles.card} key={note.id}>
                <h1>{note.title}</h1>
                <p className={styles.content}>{note.intro}</p>
                <div className={styles.keyword_container}>
                  {note.keyword.map((item,idx)=>
                    <div className={styles.keyword} key={idx}>{item}</div>
                  )}
                </div>
                <p className={styles.time}>{note.Date}</p>
                <Link to={`note/${note.id}`} className={styles.read_more}>閱讀更多</Link>
              </div>
            )
          }
        }
      )}
      <Loading/>
    </div>
  )
}
