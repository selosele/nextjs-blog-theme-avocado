import { Children } from "@/types/global"

/** 컨테이너 컴포넌트 */
export default function Container({ children }: Children) {
  return (
    <div className={`lg:container mx-auto lg:px-7 md:px-6 px-5 py-8`}>
      {children}
    </div>
  )
}