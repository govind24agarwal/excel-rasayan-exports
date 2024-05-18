'use client'

import React, { useEffect, useState } from "react"
import {
  Table,
  TableHead,
  TableHeader,
  TableBody,
  TableRow,
  TableCell
} from '@/components/ui/table';

function ProductTable() {
  const data = [
    {
      companyName: 'Sparx',
      chemicalFormula: 'Imidacloprid 70% W.G',
      category: 'Insecticides',
      targetedCrops: ['Cotton', 'Rice', 'Okra', 'Cucumber'],
      targetedPests: ['Jassids', 'Aphids', 'Thrips']
    },
    {
      companyName: 'Excel Fipro SC',
      chemicalFormula: 'Fipronil 5% S.C',
      category: 'Insecticides',
      targetedCrops: ['Cotton', 'Rice', 'Cabbage', 'Chilli', 'Sugarcane'],
      targetedPests: ['Aphid', 'Jassid', 'Thrips', 'White fly', 'Boll worms']
    },
    // Additional entries...
  ];

  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }


  return (
    <Table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
      <TableHead className="bg-gray-800">
        <TableRow>
          <TableHeader className="text-left p-4 font-semibold text-white">Company Name</TableHeader>
          <TableHeader className="text-left p-4 font-semibold text-white">Chemical Formula</TableHeader>
          <TableHeader className="text-left p-4 font-semibold text-white">Category</TableHeader>
          <TableHeader className="text-left p-4 font-semibold text-white">Targeted Crops</TableHeader>
          <TableHeader className="text-left p-4 font-semibold text-white">Targeted Pests</TableHeader>
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((item, index) => (
          <TableRow key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
            <TableCell className="p-4 border-b border-gray-200">{item.companyName}</TableCell>
            <TableCell className="p-4 border-b border-gray-200">{item.chemicalFormula}</TableCell>
            <TableCell className="p-4 border-b border-gray-200">{item.category}</TableCell>
            <TableCell className="p-4 border-b border-gray-200">
              <div className="overflow-y-auto max-h-32">
                <table className="min-w-full">
                  <tbody>
                    {item.targetedCrops.map((crop, idx) => (
                      <tr key={idx}>
                        <td className="py-1">{crop}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </TableCell>
            <TableCell className="p-4 border-b border-gray-200">
              <div className="overflow-y-auto max-h-32">
                <table className="min-w-full">
                  <tbody>
                    {item.targetedPests.map((pest, idx) => (
                      <tr key={idx}>
                        <td className="py-1">{pest}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default ProductTable;
