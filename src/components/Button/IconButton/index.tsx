/** Icon button component */
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

/** Icon button props interface */
interface IconButtonProps {

  /** Icon className */
  icon: string

  /** Icon button text */
  text?: string
}