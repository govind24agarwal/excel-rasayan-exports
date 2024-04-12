"use client"
import React, { useEffect } from "react"
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
  ColumnFiltersState,
  getFilteredRowModel,
  getPaginationRowModel,
} from "@tanstack/react-table"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
}

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  )

  const onSelectChange = (e : any, table: any) => {
    const val = e.target.value;
    if(val === 'showAll'){
      table.getColumn("categoryId")?.setFilterValue("")
    }
    else{
      table.getColumn("categoryId")?.setFilterValue(val)
    }
  }

  const table = useReactTable({
    data,
    columns,
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getCoreRowModel: getCoreRowModel(),
    state:{
      columnFilters,
    }
  })

  useEffect(()=>{
    table.setPageSize(20)
  },[table])
  return (
    <div className="rounded-md border">
      <div className="flex w-full justify-end items-center gap-2 py-4">
          <label className="border p-[6px] px-2 rounded-md border-stone-600">
            Search by Chemical Name:
            <input
              onChange={(event) => table.getColumn("chemical")?.setFilterValue(event.target.value)}
              value={(table.getColumn("chemical")?.getFilterValue() as string) ?? ""}
              className="border-b px-1 ml-2 border-black w-[300px] "
            />
          </label>
          <select className="w-[250px] border rounded-md mr-4 p-2 px-2 border-stone-600" onChange={(e) => onSelectChange(e, table)}>
            <option value="showAll">Show All</option>
            <option value="insecticides">Insecticides</option>
            <option value="herbicides">Herbicides</option>
            <option value="fungicides">Fungicides</option>
            <option value="plant-growth-regulators">Plant Growth Regulators</option>
          </select>
      </div>
      <Table>
        <TableHeader className="bg-stone-600">
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead className="text-white" key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                )
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row, index) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
                className={cn(index % 2 ? 'bg-stone-200 border-white' : '')}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      <div className="flex items-center justify-end space-x-2 py-4 mr-4">
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Previous
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Next
        </Button>
      </div>
    </div>
  )
}
