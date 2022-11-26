import { useEffect, useState } from 'react';
import axios from 'axios';
import { TEST_API_URL } from '../constant';
export default function useFetchData(get_collection_type,get_doc_type){

    const [data,setData] = useState();
    const [loading,setLoading] = useState(true);
    const [error,setError] =useState('')

    const FetchData = (async()=>{
        await axios.get(TEST_API_URL,{
            //URL参數放在params屬性裏面
            params: {
                collection_type: get_collection_type,
                doc_type: get_doc_type,
            }
        })
        .then((response)=>{
            setLoading(false)
            setData(response.data.data);
        }).catch((err)=>{
            console.log('error:' + err);
            setError(err.toString())
        })
    })
    useEffect(()=>{
        setLoading(true)
        FetchData();
    },[])
    return {data , loading , error }
}
