/** 아이콘 버튼 컴포넌트 */
export default function IconButton(props: IconButtonProps) {
  return (
    <button type="button" className={`text-3xl`}>
      <i className={props.icon} aria-hidden="true"></i>
      {
        props?.text &&
        <span className={`sr-only`}>{props.text}</span>
      }
    </button>
  )
}

/** 아이콘 버튼 인터페이스 */
interface IconButtonProps {

  /** 아이콘 클래스 명 */
  icon: string

  /** 텍스트 */
  text?: string
}