"use client";

import Image from "next/image";
// import { MouseEventHandler } from "react";
import { Expand } from "lucide-react";
import { useRouter } from "next/navigation";

import IconButton  from "@/components/ui/icon-button";
// import usePreviewModal from "@/hooks/use-preview-modal";
import { Product } from "@/types";
import Link from "next/link";
import { cn, slugify } from "@/lib/utils";

interface ProductCard {
  data: Product,
  className? :string,
}

const ProductCard: React.FC<ProductCard> = ({
  data,
  className
}) => {
  // const previewModal = usePreviewModal();
  const router = useRouter();
  // const onPreview: MouseEventHandler<HTMLButtonElement> = (event) => {
  //   event.stopPropagation();

  //   previewModal.onOpen(data);
  // };
  
  const productString = `${data.id}/${slugify(data.compnay)}/${slugify(data.chemical)}`
  
  return ( 
    <Link href={`/product/${productString}`} className={cn("bg-white group cursor-pointer rounded-md border p-3 space-y-4",className)}>
      {/* Image & actions */}
      <div className="aspect-square rounded-md bg-gray-100 relative">
        <Image 
          src={data.imageUrl} 
          alt="" 
          fill
          className="aspect-square object-cover rounded-md border"
        />
        {/* <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
          <div className="flex gap-x-6 justify-center">
            <IconButton 
              onClick={() => {}} 
              icon={<Expand size={20} className="text-gray-600" />}
            />
          </div>
        </div> */}
      </div>
      {/* Description */}
      <div>
        <p className="font-semibold text-base md:text-lg capitalize">{data.compnay}</p>
        <p className="text-xs md:text-sm text-gray-500">{data.chemical}</p>
      </div>
    </Link>
  );
}

export default ProductCard;
