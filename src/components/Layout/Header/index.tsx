import SiteTitle from '../SiteTitle'
import SiteDescription from '../SiteDescription'
import SiteNav from '../SiteNav'

/** Layout header component */
export default function Header() {
  return (
    <header className={`flex flex-wrap justify-center gap-4 px-6 py-14`}>
      <SiteTitle name="Next.js blog theme Avocado" />

      <SiteDescription name="Generated by create next app" />

      <SiteNav />
    </header>
  )
}