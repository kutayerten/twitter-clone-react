import React from 'react'
import PropTypes from "prop-types"
import { Link } from 'react-router-dom'

export default function SidebarSection({title , children , more}) {
  return (
    <section className='bg-[#16181c] mb-4 rounded-2xl border border-[#16181c]'>
       <h5 className='py-3 px-4 flex items-center text-xl font-bold'>
         {title}
      </h5>
      <div className='grid'>
        {children}
        {more && (
            <Link to={more} className="h-[52px] flex items-center text-left text-[15px] text-[#1d9bf0] px-4 transition-colors w-full hover:bg-[#3c424452] rounded-b-2xl">
                Show more
             </Link>
        )}
      </div>
      </section>
  )
}


SidebarSection.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    more: PropTypes.oneOfType([PropTypes.bool, PropTypes.string])
}

SidebarSection.defaultProps ={
    more: false
}