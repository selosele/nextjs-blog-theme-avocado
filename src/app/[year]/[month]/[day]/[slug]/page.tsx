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

/** 포스트 파라미터 인터페이스 */
interface PostParams {

  /** 포스트 작성일시(연도) */
  year: string

  /** 포스트 작성일시(월) */
  month: string

  /** 포스트 작성일시(일) */
  day: string

  /** 포스트 제목 */
  slug: string
}