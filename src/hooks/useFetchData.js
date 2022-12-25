import {useEffect, useMemo, useState} from 'react'
import useSWR from "swr";
import { 
    USER_DOC_API_URL,
    USER_COLLECTION_API_URL,
    LOCAL_USER_DOC_API_URL,
    LOCAL_USER_COLLECTION_API_URL,
    NOTES_API_URL,
    SINGLE_NOTE_API_URL,
    LOCAL_NOTES_API_URL,
    LOCAL_SINGLE_NOTE_API_URL,
} from '../constant';

export function useFetchDocData(get_doc_type){
    const api_url = location.host.includes('localhost') ? LOCAL_USER_DOC_API_URL : USER_DOC_API_URL
   const fetcher = (url, params) => fetch(url + '?doc_type=' + params.doc_type).then(r => r.json());
    const doc_type = get_doc_type;
    const params = useMemo(() => ({ doc_type }), [doc_type]);
    const { data,error } = useSWR(
        [api_url, params],
        fetcher
    );

    return {data  , error }
}

export function useFetchCollectionData(get_doc_type,get_collection_type){
    const api_url = location.host.includes('localhost') ? LOCAL_USER_COLLECTION_API_URL : USER_COLLECTION_API_URL

   const fetcher = (url, params) => fetch(url + '?doc_type=' + params.doc_type + '&collection_type=' + params.collection_type).then(r => r.json());
    const doc_type = get_doc_type;
    const collection_type = get_collection_type;

    const params = useMemo(() => ({ doc_type,collection_type }), [doc_type]);
    const { data,error } = useSWR(
        [api_url, params],
        fetcher
    );

    return {data  , error }
}

export function useFetchNotesData(get_lastId){
    // const [notes,setNotes] = useState([]);
    // const [hasMore,setHasMore] = useState(true);
    // const [loading,setLoading] = useState(true);
    const api_url = location.host.includes('localhost') ? LOCAL_NOTES_API_URL : NOTES_API_URL

   const fetcher = (url, params) => fetch(url + '?lastId=' + params.lastId).then(r => r.json());
    const lastId = get_lastId || '';

    const params = useMemo(() => ({ lastId }), [lastId]);
    const { data,error } = useSWR(
        [api_url, params],
        fetcher
    );

    // useEffect(()=>{

        
    //     const fetchData = () =>{
            
    //         setLoading(true)
    //         if(get_id){
    //             setNotes(prevNotes => {
    //                 return [...prevNotes, data]
    //             })
    //             setHasMore(data.length > 0);
    //             setLoading(false)
    //         }else{
    //             setNotes(data)
    //             setHasMore(data.length > 0);
    //             setLoading(false)
    //         }
    //     }
    //     fetchData();
        
    // },[get_id])
    return {data  , error }
}

export function useFetchSingleNote(get_id){
    const api_url = location.host.includes('localhost') ? LOCAL_SINGLE_NOTE_API_URL : SINGLE_NOTE_API_URL
    const fetcher = (url, params) => fetch(url + '?id=' + params.id).then(r => r.json());
    const id = get_id;

    const params = useMemo(() => ({ id }), [id]);
    const { data,error } = useSWR(
        [api_url, params],
        fetcher
    );

    

    return {data, error }
}