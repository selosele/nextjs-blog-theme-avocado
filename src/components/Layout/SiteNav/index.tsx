import IconButton from '@/components/Button/IconButton'

/** 사이트 네비게이션 컴포넌트 */
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