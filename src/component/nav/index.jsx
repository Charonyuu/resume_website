import React from 'react'
import Desktop_Nav from './desktop_nav'
export default function Nav({page,setPage}) {
  return (
    <Desktop_Nav 
        page={page}
        setPage={setPage}
    />
  )
}
