import React, { useState,useRef,useCallback } from 'react'
import styles from './index.module.scss'
import {useFetchNotesData} from '../../hooks/useFetchData';
import {Link} from "react-router-dom";
import NoteLoading from './note_loading';

export default function NotePage() {
  
  const [lastId,setLastId] = useState(null)
  const { notes, loading, hasMore } = useFetchNotesData(lastId)

  const observer = useRef();
  const lastNoteRef = useCallback(node => {
    if (loading) {
      return;
    }
    if (observer.current) {
      observer.current.disconnect();
    }
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore) {
        setLastId(node.dataset.id);
      }
    })
    if (node) observer.current.observe(node)
  }, [loading])

  return (
    <div className={styles.note_page}>
      {!notes.length ? <NoteLoading /> : (
        <>
        {notes.map((note,idx)=>
          {
            if (notes.length == idx + 1) {
              return(
                <>
                  <div className={styles.card} key={note.id} data-id={note.id} ref={lastNoteRef}>
                    <Link to={{pathname: `note/${note.id}`,state:note}} ><h1>{note.title}</h1></Link>
                    <p className={styles.content}>{note.intro}</p>
                    <div className={styles.keyword_container}>
                      {note.keyword.map((item,idx)=>
                        <div className={styles.keyword} key={idx}>{item}</div>
                      )}
                    </div>
                    <p className={styles.time}>{note.Date}</p>
                    <Link to={{pathname: `note/${note.id}`,state:note}} className={styles.read_more}>閱讀更多</Link>
                  </div>
                  {loading && <NoteLoading />}
                  {!hasMore && <p className={styles.no_more}>沒有更多了....</p>}
                </>
              )
            }else{
              return(
                <div className={styles.card} key={note.id}>
                  <Link to={{pathname: `note/${note.id}`,state:note}} ><h1>{note.title}</h1></Link>
                  <p className={styles.content}>{note.intro}</p>
                  <div className={styles.keyword_container}>
                    {note.keyword.map((item,idx)=>
                      <div className={styles.keyword} key={idx}>{item}</div>
                    )}
                  </div>
                  <p className={styles.time}>{note.Date}</p>
                  <Link to={{pathname: `note/${note.id}`,state:note}} className={styles.read_more}>閱讀更多</Link>
                </div>
              )
            }
          }
        )}
        </>
      )}
    </div>
  )
}
