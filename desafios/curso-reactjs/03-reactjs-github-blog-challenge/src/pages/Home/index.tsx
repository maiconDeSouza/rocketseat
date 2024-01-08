import { useContext } from 'react'
import { PreviewPost } from '../../components/PreviewPost'
import { Profile } from '../../components/Profile'
import { Search } from '../../components/Search'
import { PostsContext } from '../../contexts/PostsContext'

export function Home() {
  const { state } = useContext(PostsContext)
  return (
    <section className="md:w-[54rem] md:mx-auto md:px-0 w-full px-4">
      <Profile />
      <section className="mt-14">
        <Search />
        <ul className="my-8 flex justify-between flex-wrap gap-8">
          {state.posts.map((post) => {
            return (
              <li key={post.number}>
                <PreviewPost
                  body={post.body}
                  number={post.number}
                  title={post.title}
                  updated_at={post.updated_at}
                />
              </li>
            )
          })}
        </ul>
      </section>
    </section>
  )
}
