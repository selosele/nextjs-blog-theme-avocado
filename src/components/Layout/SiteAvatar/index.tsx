/** Site avatar component */
export default function SiteAvatar(props: SiteAvatarProps) {
  return (
    <p className={`inline-flex w-20 h-20 rounded-full`}>
      {/* TODO: alt 값에 사용자 닉네임 바인딩 */}
      <img src={props.img} alt="selosele" className={`w-full h-full rounded-full object-cover shrink-0`} />
    </p>
  )
}

/** Site avatar props interface */
interface SiteAvatarProps {

  /** Site avatar image */
  img: string
}