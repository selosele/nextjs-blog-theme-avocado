import Link from 'next/link'
import { Post } from 'contentlayer/generated'
import { useMDXComponent } from 'next-contentlayer/hooks'
import type { MDXComponents } from 'mdx/types'

const mdxComponents: MDXComponents = {
  a: ({ href, children }) => <Link href={href as string}>{children}</Link>,
}

/** Post detail component */
export default function View(props: ViewProps) {
  const MDXContent = useMDXComponent(props.post.body.code)

  return (
    <article className={`mx-auto prose`}>
      <div className={`mb-8 text-center`}>
        <time dateTime={props.post.date} className={`mb-1 text-xs text-gray-600`}>
          {new Intl.DateTimeFormat('ko').format(new Date(props.post.date))}
        </time>

        <h1 className={`text-3xl font-bold`}>{props.post.title}</h1>
        <h2>{props.post.subtitle}</h2>
      </div>

      <MDXContent components={mdxComponents} />
    </article>
  )
}

/** Post detail props interface */
interface ViewProps {

  /** Post data */
  post: Post
}