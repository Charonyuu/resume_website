import React from 'react'
import Desktop_Nav from './desktop_nav'

export default function Nav({children}) {
  return (
    <section className="all">
      <div className="left_section">
        <Desktop_Nav />
      </div>
      <div className="right_section">
        {children}
      </div>
    </section>
    
  )
}
