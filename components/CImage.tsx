import Image from "next/image";
import React from "react";

interface CImageProps {
  src: string;
  caption?: string;
  height?: number;
  width?: number;
  classname?: string;
}

function CImage({ src, caption = "", classname }: CImageProps) {
  return (
    <div>
      <Image
        unoptimized
        loading="lazy"
        alt={caption}
        width={0}
        height={0}
        src={src}
        className={
          "w-auto h-auto max-w-full object-contain max-h-[90vh] justify-self-center " +
          (!caption && " mb-5 ") +
          classname
        }
      />
      {caption && (
        <figcaption className="text-center -mt-6 font-bold dark:text-gray-100/95">
          {caption}
        </figcaption>
      )}
    </div>
  );
}

export default CImage;
