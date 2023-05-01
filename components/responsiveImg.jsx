import React from "react";
import Image from "next/image";
import mountain from "../public/mountain-lake.jpeg";

export default function ResponsiveImg() {
  return (
    <div className="container">
      <h3>Remote Image</h3>
      <div className="relative w-full h-80 sm:h-[450px] lg:h-[600px]">
        <Image
          src="https://images.unsplash.com/photo-1482192505345-5655af888cc4"
          className="rounded object-cover"
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
