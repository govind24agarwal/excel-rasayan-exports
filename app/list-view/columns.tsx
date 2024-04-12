"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Product } from "@/types";
import { cn } from "@/lib/utils";

/**
export interface Product {
  id: string;
  compnay: string;
  chemical: string;
  description?: string;
  price?: string;
  isFeatured: boolean;
  imageUrl: string;
  categoryId: string;
  crop: Array<any>;
  packing: string;
}; 
 */

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export const columns: ColumnDef<Product>[] = [
  {
    accessorKey: "compnay",
    header: "Company Name",
  },
  {
    accessorKey: "chemical",
    header: "Chemical Formula",
  },
  {
    accessorKey: "categoryId",
    header: "Category",
  },
  {
    accessorKey: "crop",
    header: () => <div className="flex"><p className="flex-1 text-right">Targeted Crops</p><p className="flex-1 text-right">Targeted Pests</p></div>,
    cell: ({ row }) => {
      row.index
      const cropData = row.getValue("crop") as Array<any>;
      const cropArray = cropData.map(crop => {

        return `${crop.crop} ( ${crop.target} )`
      })
 
      return (
        <div className="text-left font-medium">
          {
            cropData.map((crop,idx) => {
              return(
                <div key={idx} className={cn("flex border", row.index % 2 ? 'border-white' : '')}>
                  <p className={cn("flex-1 border-r ml-2 p-1", row.index % 2 ? 'border-white' : '')}>{crop.crop}</p>
                  <p className="flex-1 ml-2 p-1">{crop.target}</p>
                </div>
              )
            })
          }
        </div>
      )
    },
  },
]
