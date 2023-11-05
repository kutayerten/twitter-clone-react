import React from 'react'
import PropTypes from "prop-types"
import { Link } from 'react-router-dom'

export default function SidebarSection({title , children , more}) {
  return (
    <section className='bg-[color:var(--background-secondary)] mb-4 rounded-2xl border border-[color:var(--background-secondary)]'>
       <h5 className='py-3 px-4 flex items-center text-xl font-bold '>
         {title}
      </h5>
      <div className='grid'>
        {children}
        {more && (
            <Link to={more} className="h-[52px] flex items-center text-left text-[15px] text-[color:var(--color-primary)] px-4 transition-colors w-full hover:bg-[color:var(--background-third)] 1 rounded-b-2xl">
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