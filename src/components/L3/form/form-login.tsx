"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import IconFB from "@/components/L1/icons/icon-facebook";
import IconTwitter from "@/components/L1/icons/icon-twitter";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  email: z.string().email({ message: "Email khong dung" }),
  password: z.string().min(2).max(10),
  message: z.string().min(2).max(50),
});

export default function FormLogin() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      message: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <div className="form-contact">
      <div className="text-center font-bold text-5xl my-20">
        <span className="font-bold ">Contact </span>
      </div>
      <div className=" container max-w-7xl mx-auto  ">
        <div className="relative mx-auto flex-shrink-0 grid grid-cols-2 gap-12">
          <div className=" grid grid-cols-1  border-box   ">
            <div className="flex ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="size-4 me-3 w-5 h-5 "
              >
                <path
                  fillRule="evenodd"
                  d="M7.605 2.112a.75.75 0 0 1 .79 0l5.25 3.25A.75.75 0 0 1 13 6.707V12.5h.25a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1 0-1.5H3V6.707a.75.75 0 0 1-.645-1.345l5.25-3.25ZM4.5 8.75a.75.75 0 0 1 1.5 0v3a.75.75 0 0 1-1.5 0v-3ZM8 8a.75.75 0 0 0-.75.75v3a.75.75 0 0 0 1.5 0v-3A.75.75 0 0 0 8 8Zm2 .75a.75.75 0 0 1 1.5 0v3a.75.75 0 0 1-1.5 0v-3ZM8 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
                  clipRule="evenodd"
                />
              </svg>
              <div className="flex  ">
                <div className="text ">
                  <span className="font-semibold ">ADDRESS</span>
                  <p className="flex-col text-gray-500">
                    Photo booth tattooed prism, portland taiyaki hoodie neutra
                    typewriter
                  </p>
                </div>
              </div>
            </div>
            <div className="flex  mb-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-4 w-5 h-5 me-3 "
              >
                <path d="M19.5 22.5a3 3 0 0 0 3-3v-8.174l-6.879 4.022 3.485 1.876a.75.75 0 1 1-.712 1.321l-5.683-3.06a1.5 1.5 0 0 0-1.422 0l-5.683 3.06a.75.75 0 0 1-.712-1.32l3.485-1.877L1.5 11.326V19.5a3 3 0 0 0 3 3h15Z" />
                <path d="M1.5 9.589v-.745a3 3 0 0 1 1.578-2.642l7.5-4.038a3 3 0 0 1 2.844 0l7.5 4.038A3 3 0 0 1 22.5 8.844v.745l-8.426 4.926-.652-.351a3 3 0 0 0-2.844 0l-.652.351L1.5 9.589Z" />
              </svg>
              <div className="flex flex-col">
                <span className="font-semibold "> EMAIL</span>
                <p className="flex-col text-gray-500">nc.example@example.com</p>
              </div>
            </div>
            <div className="flex  mb-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-4 w-5 h-5 me-3 "
              >
                <path
                  fillRule="evenodd"
                  d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                  clipRule="evenodd"
                />
              </svg>

              <div className="flex flex-col">
                <span className="font-semibold ">PHONE</span>
                <p className="flex-col text-gray-500">000-123-456-7890</p>
              </div>
            </div>
            <div className="flex">
              <IconFB />
              <IconTwitter />
            </div>
          </div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input placeholder="shadcn" {...field} />
                    </FormControl>
                    <FormDescription>
                      This is your public display name.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">Submit</Button>
            </form>
          </Form>
          <form className="max-w-sm mx-14" method="POST">
            <div className="mb-5">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@flowbite.com"
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="password"
                className=" mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your password
              </label>
              <input
                type="password"
                id="password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            {/* <div className="flex items-start mb-5">
              <div className="flex items-center h-5">
                <input
                  id="remember"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                  
                />
              </div>
              <label
                htmlFor="remember"
                className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Remember me
              </label>
            </div> */}
            <div className="max-w-sm mx-auto">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your message
              </label>
              <textarea
                id="message"
                rows={4}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Leave a comment..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 mt-6 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
