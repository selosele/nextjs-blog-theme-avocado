import Link from 'next/link'

/** Site title component */
export default function SiteTitle(props: SiteTitleProps) {
  return (
    <Link href="/" className={`text-center text-3xl text-[#87a922] font-extrabold`}>
      {props.name}
    </Link>
  )
}

/** Site title props interface */
interface SiteTitleProps {

  /** Site title name */
  name: string
}