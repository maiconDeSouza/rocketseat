import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { PostsContext } from '../../contexts/PostsContext'
import { ArrowUpRight, Building, Github, MoveLeft, Users } from 'lucide-react'

interface PostProps {
  number: number
  title: string
  body: string
  updated_at: string
}
export function TitlePost(post: PostProps) {
  const { state } = useContext(PostsContext)
  return (
    <article className="bg-mcn-base-profile rounded-md w-full min-h-[13.25rem] mt-[-6rem] p-8 shadow shadow-mcn-blue relative z-50 flex flex-col justify-between">
      <div className="flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <MoveLeft />
          <span className="text-sm">VOLTAR</span>
        </Link>
        <Link
          to={state.profile.html_url}
          className="flex items-center gap-1 text-mcn-blue cursor-pointer hover:border-b hover:border-mcn-blue"
        >
          <span className="text-sm font-bold">GITHUB</span>
          <ArrowUpRight size={16} />
        </Link>
      </div>
      <div>
        <h1 className="text-2xl">{post.title}</h1>
      </div>
      <div className="flex gap-4 flex-wrap">
        <div className="flex items-center gap-1 text-mcn-blue">
          <Github size={20} />
          <span>{state.profile.login}</span>
        </div>
        <div className="flex items-center gap-1 text-mcn-blue">
          <Building size={20} />
          <span>Movement</span>
        </div>
        <div className="flex items-center gap-1 text-mcn-blue">
          <Users size={20} />
          <span>{state.profile.followers} seguidore</span>
        </div>
      </div>
    </article>
  )
}
