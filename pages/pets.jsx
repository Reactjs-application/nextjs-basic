import React from "react";
import Image from "next/image";
import milad from "../public/milad.png";

export default function PetsPage() {
  return (
    <div
      style={{
        width: "100vw",
      }}
    >
      <Image src={milad} placeholder="blur" alt="milad" sizes="100vw" />
    </div>
  );
}
