import React from "react";
import Image from "next/image";
import mountain from "../public/mountain-lake.jpeg";

export default function ResponsiveImg() {
  return (
    <div className="container">
      <h2>Responsive Grid Images</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[mountain, mountain, mountain].map((img) => {
          return (
            <Image
              src={img}
              key={img.src}
              alt="Mountains static image"
              placeholder="blur"
              className="rounded"
              sizes="(max-width: 640px) 100vw, 
                    (max-width: 1024px) 50vw, 
                    33vw"
            />
          );
        })}
      </div>
      <h3>Remote Image</h3>
      <div className="relative w-full h-80 sm:h-[450px] lg:h-[600px]">
        <Image
          src="https://images.unsplash.com/photo-1482192505345-5655af888cc4"
          className="rounded object-contain"
          alt="reponsive images"
          fill
        />
      </div>

      <div className="py-4">
        <h3>Local Image Image</h3>
        <Image
          placeholder="blur"
          src={mountain}
          alt="mountain reponsive img"
          width={5760}
          height={3240}
          sizes="100vw"
        />
      </div>
    </div>
  );
}
