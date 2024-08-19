import Image from "next/image";

export default function CardBanner(){
   return(
      <div>
        <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
          <div className="hidden duration-700 ease-in-out">
            <Image
              width={300}
              height={300}
              src="/1.jpg"
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            ></Image>
          </div>
        </div>
      </div>
   )
}