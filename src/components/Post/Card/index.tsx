import { Post } from '.contentlayer/generated'
import { format, parseISO } from 'date-fns'
import Link from 'next/link'

/** Post list item component */
export default function Card(post: Post) {
  return (
    <li className={`mb-8 p-2 w-full`}>
      <Link href={post.url} className={`font-bold text-2xl no-underline`}>
        {post.title}
      </Link>
      
      <p>
        {post.body.raw.substring(0, 200)}
      </p>

      <time dateTime={post.date} className={`block text-gray-500`}>
        {format(parseISO(post.date), 'LLLL d, yyyy')}
      </time>
    </li>
  )
}