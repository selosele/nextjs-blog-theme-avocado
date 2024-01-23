import SiteTitle from '../SiteTitle'
import SiteNav from '../SiteNav'

/** Layout header component */
export default function Header() {
  return (
    <header className={`flex justify-between items-center gap-4`}>
      <SiteTitle name="Avocado" />

      <SiteNav />
    </header>
  )
}