import SiteTitle from '../SiteTitle'
import SiteNav from '../SiteNav'

/** 레이아웃 Header 컴포넌트 */
export default function Header() {
  return (
    <header className={`flex justify-between items-center gap-4`}>
      <SiteTitle name="Avocado" />

      <SiteNav />
    </header>
  )
}