import Image from "next/image";

export default function HotelItem() {
  return (
    <div className="item">
      <div className="caption">
        <h2 className="text-3xl font-semibold">Featured places to stay</h2>
        <div className="mt-4">
          <span className="text-base font-normal text-gray-500 ">
            Popular places to stay that Chisfis recommends for you
          </span>
        </div>
      </div>
      <div className="relative py-16 grid grid-cols-2 gap-8">
        {new Array(6).fill(0).map((_, idx) => (
          <a
            key={idx}
            href="#"
            className="flex flex-col relative items-center bg-white  rounded-lg shadow md:flex-row  hover:bg-gray-100 p-2"
          >
            <div className="flex justify-end text-red-500 absolute top-3 right-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                />
              </svg>
            </div>
            <div className="flex flex-[0_0_200px] w-[100px] h-full">
              <Image
                width={200}
                height={200}
                className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                src="/1.jpg"
                alt=""
              />
            </div>
            <div className="flex flex-col justify-between p-4 leading-normal">
              <div className="hashtag pb-3">
                <span className="bg-blue-100 text-blue-800  text-xs font-medium me-2 px-2.5 py-1 rounded-full  ">
                  Default
                </span>
                <span className="bg-yellow-100 text-yellow-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded">
                  Yellow
                </span>
              </div>

              <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>
              <div className="flex text-gray-400 ">
                <div className="flex  ">
                  <span className="  text-xs font-medium me-2 px-2.5 py-1 rounded-full  ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-5  "
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.288 15.038a5.25 5.25 0 0 1 7.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 0 1 1.06 0Z"
                      />
                    </svg>
                  </span>
                  <span className="">wifi</span>
                </div>
                <div className="flex">
                  <span className=" text-xs font-medium me-2 px-2.5 py-1 rounded-full  ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
                      />
                    </svg>
                  </span>
                  <span>people</span>
                </div>
              </div>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
              <hr />
              <div className="flex items-center justify-between mt-2 ">
                <div className="flex items-center">
                  <svg
                    className="w-4 h-4 text-yellow-400 me-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>

                  <span>
                    4.89{" "}
                    <span className="text-slate-400 font-normal">(128)</span>
                  </span>
                </div>
                <button
                  type="button"
                  className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
                >
                  $25000
                </button>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
