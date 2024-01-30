import { Post } from '.contentlayer/generated'
import { format, parseISO } from 'date-fns'
import Link from 'next/link'

/** Post list item component */
export default function Card(post: Post) {
  return (
    <li className={`list-disc mb-4 p-2 w-full`}>
      <Link href={post.url} className={`font-bold text-2xl no-underline`}>
        {post.title}
      </Link>
      <time dateTime={post.date} className={`block`}>
        {format(parseISO(post.date), 'LLLL d, yyyy')}
      </time>
    </li>
  )
}