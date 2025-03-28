'use client'
import React, {useState, useEffect} from 'react'

import { useParams } from 'next/navigation'

const Page = () => {
  const { id } = useParams();

  const fetchDashboard = async (id: string) => {
    const response = await fetch(
      "https://fakerapi.it/api/v2/products?_quantity=1&_taxes=12&_categories_type=uuid",
      { cache: 'no-store' }
    )
    const data = await response.json()
    return data.data
  }
  const [dashboard, setDashboard] = useState(null)
  useEffect(() => {
    if (id) {
      fetchDashboard(id as string).then((data) => {
        setDashboard(data)
      })
    } 
  }
  , [id])

  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  )
}
export default Page
