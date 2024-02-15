/** Site description component */
export default function SiteDescription(props: SiteDescriptionProps) {
  return (
    <p className={`w-full text-center`}>
      {props.name}
    </p>
  )
}

/** Site description props interface */
interface SiteDescriptionProps {

  /** Site description name */
  name: string
}