import React from 'react'
import { useParams } from 'react-router-dom'

export default function Profile() {
  const {slug} = useParams()
  return (
    <div>Profile - {slug}</div>
  )
}
