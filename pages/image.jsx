import React from "react";
import lqip from "lqip-modern";

import { normalizeUrl } from "@/utils";
import LqipImg from "@/components/lqipImg";
import ResponsiveImg from "@/components/responsiveImg";

export default function ImagePage({ image }) {
  return (
    <>
      <ResponsiveImg />
      <LqipImg image={image} />
    </>
  );
}

export async function getStaticProps() {
  const url = normalizeUrl("photo-1482192505345-5655af888cc4");
  const fetchData = await fetch(url);
  const arrayBufferData = await fetchData.arrayBuffer();
  const lqipData = await lqip(Buffer.from(arrayBufferData));

  return {
    props: {
      image: {
        src: url.href,
        width: lqipData.metadata.originalWidth,
        height: lqipData.metadata.originalHeight,
        blurDataURL: lqipData.metadata.dataURIBase64,
      },
    },
  };
}
