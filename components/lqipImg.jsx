import React from "react";
import Image from "next/image";

import { imageLoader } from "@/utils";

export default function LqipImg({ image }) {
  return (
    <div className="container">
      <h2>Loader Image Example</h2>
      <Image
        loader={imageLoader}
        alt="lqip-example"
        placeholder="blur"
        src={image.src}
        width={image.width}
        height={image.height}
        blurDataURL={image.blurDataURL}
        priority={true}
      />
    </div>
  );
}
