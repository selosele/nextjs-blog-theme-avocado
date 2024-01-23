import IconButton from '@/components/Button/IconButton'

/** Site navigation component */
export default function SiteNav() {
  return (
    <nav className={`flex gap-10`}>
      <IconButton
        icon="xi-search"
        text="포스트 검색"
      />

      <IconButton
        icon="xi-bars"
        text="메뉴"
      />
    </nav>
  )
}