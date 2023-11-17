import Items from './items'
import Item from './item'
import Content from './content'

import PropTypes from "prop-types"
import { TabContext } from './context'
import { useEffect, useState } from 'react'

export default function Tab({children,activeTab}) {

  const [active, setActive] = useState(activeTab)

  const contents = children.filter(c => c.type === Content)
  const items = children.filter(c => c.type === Items)

  const content = contents.find(c=> c.props.id === active)

  useEffect(() => {
    setActive(activeTab)
  }, [activeTab])

  const data = {
    active,
    setActive
  }

  return (
    <TabContext.Provider value={data}>
      <div className='border-b border-[color:var(--background-third)] sticky top-[3.313rem] z-10 bg-[color:var(--background-primary-alpha)] !backdrop-blur-md'>
      {items}
      </div>
      {content}
    </TabContext.Provider>
  )
}

Tab.Items = Items
Tab.Item = Item
Tab.Content = Content

Tab.propTypes = {
  children: PropTypes.arrayOf(
    PropTypes.node
  ),
  activeTab: PropTypes.string.isRequired
}