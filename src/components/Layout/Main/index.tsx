import { Children } from "@/types/global";

/** Main component */
export default function Main({ children }: Children) {
  return (
    <main className={`flex flex-col items-center justify-between px-6 py-20 bg-[#f8f8f8]`}>
      {children}
    </main>
  )
}