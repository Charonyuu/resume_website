import React,{useState} from 'react'
import Desktop_Nav from './desktop_nav'
export default function Nav() {
    const [page, setPage] = useState('home')

  return (
    <Desktop_Nav 
        page={page}
        setPage={setPage}
    />
  )
}
