import { allPosts } from '.contentlayer/generated'
import { compareDesc } from 'date-fns'
import { Post } from '@/components/Post'

/** Main contents component */
export default function Home() {
  const posts = allPosts.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))

  return (
    <main className={`flex min-h-screen flex-col items-center justify-between p-24`}>
      <ul className={`max-w-5xl w-full`}>
        {posts
          .filter((post) => post.published)
          .map((post) => (
            <Post.Card key={post._id} {...post} />
        ))}
      </ul>
    </main>
  )
}
