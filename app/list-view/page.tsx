import React from 'react'
import { DataTable } from './data-table'
import { columns } from "./columns"
import { productsData } from "@/data";

const page = () => {
  return (
    <div>
      <DataTable columns={columns} data={productsData} />
    </div>
  )
}

export default page
