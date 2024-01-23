import Link from 'next/link'

/** Site navigation component */
export default function SiteNav() {
  return (
    <nav className={`flex justify-center gap-10 w-full mt-3`}>
      <ul className={`flex gap-10`}>
        <li>
          <Link href="/search">Search</Link>
        </li>
        <li>
          <Link href="/archive">Archive</Link>
        </li>
      </ul>
    </nav>
  )
}