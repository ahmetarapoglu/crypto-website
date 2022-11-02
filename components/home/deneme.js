import Image from "next/image";
import React from "react";

const Deneme = () => {
  return (
    <div>
      <Image
        alt="Mountains"
        src={"/images/mountains.jpg"}
        width={700}
        height={250}
        sizes="100vw"
        style={{
          width: "100%",
          height: "auto",
        }}
      />
    </div>
  );
};

export default Deneme;
