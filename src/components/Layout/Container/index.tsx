import { Children } from '@/types/global'

/** Layout container component */
export default function Container({ children }: Children) {
  return (
    <div>
    {/* <div className={`lg:container mx-auto lg:px-7 md:px-6 px-5 py-8`}> */}
      {children}
    </div>
  )
}