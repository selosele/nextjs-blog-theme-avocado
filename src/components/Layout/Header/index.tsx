import SiteTitle from '../SiteTitle'
import SiteDescription from '../SiteDescription'
import SiteNav from '../SiteNav'
import SiteAvatar from '../SiteAvatar'

/** Layout header component */
export default function Header() {
  return (
    <header className={`flex flex-wrap justify-center gap-4 px-6 py-14`}>
      <div className={`flex items-center gap-2`}>
        <SiteAvatar img="https://res.cloudinary.com/dbrgfvqgb/image/upload/v1674216501/tmqkwumctsy0ta6zb57t.jpg" />
        <SiteTitle name="Next.js blog theme Avocado" />
      </div>

      <SiteDescription name="Generated by create next app" />

      <SiteNav />
    </header>
  )
}