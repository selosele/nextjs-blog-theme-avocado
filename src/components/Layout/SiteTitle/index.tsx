import Link from "next/link"

/** 사이트 타이틀 컴포넌트 */
export default function SiteTitle(props: SiteTitle) {
  return (
    <Link href="/" className={`text-3xl text-[#87a922] font-extrabold`}>
      {props.name}
    </Link>
  )
}

/** 사이트 타이틀 인터페이스 */
interface SiteTitle {

  /** 사이트 타이틀 명 */
  name: string
}