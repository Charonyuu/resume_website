import {useMemo} from 'react'
import useSWR from "swr";
import { USER_DOC_API_URL,USER_COLLECTION_API_URL } from '../constant';
export function useFetchDocData(get_doc_type){
    
   const fetcher = (url, params) => fetch(url + '?doc_type=' + params.doc_type).then(r => r.json());
    const doc_type = get_doc_type;
    const params = useMemo(() => ({ doc_type }), [doc_type]);
    const { data,error } = useSWR(
        [USER_DOC_API_URL, params],
        fetcher
    );

    return {data  , error }
}

export function useFetchCollectionData(get_doc_type,get_collection_type){

   const fetcher = (url, params) => fetch(url + '?doc_type=' + params.doc_type + '&collection_type=' + params.collection_type).then(r => r.json());
    const doc_type = get_doc_type;
    const collection_type = get_collection_type;

    const params = useMemo(() => ({ doc_type,collection_type }), [doc_type]);
    const { data,error } = useSWR(
        [USER_COLLECTION_API_URL, params],
        fetcher
    );

    return {data  , error }
}
