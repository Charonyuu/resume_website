import {useEffect, useMemo, useState} from 'react'
import useSWR from "swr";
import axios from 'axios';

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

export function useFetchNotesData(lastId){
    const api_url = location.host.includes('localhost') ? LOCAL_NOTES_API_URL : NOTES_API_URL

    const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);
	const [notes, setNotes] = useState([]);
	const [hasMore, setHasMore] = useState(true);

	useEffect(() => {
		setLoading(true);
		setError(false);

		if (lastId) {
			setTimeout(() => {
				axios.get(api_url + '?lastId=' + lastId)
					.then((result) => {
						setNotes(prevNotes => [...prevNotes, ...result.data]);
						setHasMore(result.data.length > 0);
						setLoading(false);
					})
					.catch(() => {
						setError(true);
					})
			}, 700)
		} else {
			// 第一次進入頁面
			axios.get(api_url)
				.then((result) => {
					setNotes(result.data);
					setHasMore(result.data.length > 0);
					setLoading(false);
				})
				.catch(() => {
					setError(true);
				})
		}
	}, [lastId])

	return { loading, error, notes, hasMore };
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