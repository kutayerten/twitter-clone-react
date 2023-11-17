import React from 'react'
import PropTypes from "prop-types";

export default function StickyHeader({ title }) {
  return (
   <header 
   className='sticky top-0 z-10 bg-[color:var(--background-primary-alpha)] !backdrop-blur-md'
   >
    <h3 className='px-4 h-[3.313rem] flex item-center text-xl font-bold'>
        {title}
    </h3>
   </header>
  )
}

StickyHeader.propTypes = {
    title: PropTypes.string.isRequired
}