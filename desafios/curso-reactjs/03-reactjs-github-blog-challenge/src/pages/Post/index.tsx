import { useParams } from 'react-router-dom'
import { TitlePost } from '../../components/TitlePost'
import { useContext, useMemo } from 'react'
import { PostsContext } from '../../contexts/PostsContext'
import Markdown from 'react-markdown'

export function Post() {
  const { id } = useParams()
  const { state } = useContext(PostsContext)
  const idNumber = Number(id)

  const post = useMemo(() => {
    const post = state.posts.find((post) => post.number === idNumber)

    return post
  }, [idNumber, state])

  return (
    <>
      {post?.title && (
        <section className="md:w-[54rem] md:mx-auto md:px-0 w-full px-4">
          <TitlePost
            title={post.title}
            body={post.body}
            number={post.number}
            updated_at={post.updated_at}
          />
          <Markdown className="mt-8">{post.body}</Markdown>
        </section>
      )}
    </>
  )
}
