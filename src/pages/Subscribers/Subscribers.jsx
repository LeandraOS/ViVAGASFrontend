import React from 'react'
import StudentTable from '../../components/TableSelection/StudentTable'
import { BackButton } from '../../components/BackButton/BackButton'

export const Subscribers = () => {
  return (
    <div>
      <BackButton />
      <StudentTable></StudentTable>
    </div>
  )
}

