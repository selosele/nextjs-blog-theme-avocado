import { allPosts } from '.contentlayer/generated'
import { notFound } from 'next/navigation'
import { Post } from '@/components/Post'

export const generatedStaticParams = async () => {
  allPosts.map((post) => {
    if (post.published) {
      const date = new Date(post.date)
      return {
        year: date.getFullYear(),
        month: date.getMonth() + 1,
        day: date.getDate(),
        slug: post._raw.flattenedPath
      }
    }
  })
}

export const generatedMetadata = ({ params }: { params: PostParams }) => {
  const post = allPosts.find((post) => {
    if (post.published) {
      const paramPath = `${params.year}/${params.month}/${params.day}/${params.slug}`
      return post._raw.flattenedPath === paramPath
    }
  })
  if (!post) notFound()
}

export default function Page({ params }: { params: PostParams }) {
  const post = allPosts.find((post) => {
    if (post.published) {
      const paramPath = `${params.year}/${params.month}/${params.day}/${params.slug}`
      return post._raw.flattenedPath === paramPath
    }
  })
  if (!post) notFound()

  return (
    <Post.View post={post} />
  )
}

/** Post Parameters interface */
interface PostParams {

  /** Post create date(year) */
  year: string

  /** Post create date(month) */
  month: string

  /** Post create date(day) */
  day: string

  /** Post title */
  slug: string
}