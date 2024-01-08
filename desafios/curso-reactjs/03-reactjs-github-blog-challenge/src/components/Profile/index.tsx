import { ArrowUpRight, Building, Github, Users } from 'lucide-react'
import { useContext } from 'react'
import { PostsContext } from '../../contexts/PostsContext'
import { Link } from 'react-router-dom'

export function Profile() {
  const { state } = useContext(PostsContext)
  return (
    <article className="bg-mcn-base-profile rounded-md w-full min-h-[13.25rem] mt-[-6rem] shadow shadow-mcn-blue relative z-50">
      <div className="w-full min-h-[13.25rem] flex flex-col items-center p-4  md:flex-row">
        <section className="w-[10.25rem] h-[9.25rem] flex justify-center">
          <img
            src={state.profile.avatar_url}
            alt=""
            className="w-[9.25rem] rounded-md object-cover"
          />
        </section>
        <section className="flex-1 h-[9.25rem] flex flex-col justify-between">
          <div className="flex flex-col justify-between items-center gap-2 md:flex-row">
            <h1 className="text-mcn-base-title text-3xl font-bold">
              {state.profile.name}
            </h1>
            <Link
              to={state.profile.html_url}
              className="flex items-center gap-1 text-mcn-blue cursor-pointer hover:border-b hover:border-mcn-blue"
            >
              <span className="text-sm font-bold">GITHUB</span>
              <ArrowUpRight size={16} />
            </Link>
          </div>
          <div>
            <p>{state.profile.bio}</p>
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
        </section>
      </div>
    </article>
  )
}

// p-8 w-full min-h-[13.25rem] bg-mcn-base-profile rounded-md mt-[-6rem] shadow shadow-mcn-blue md:flex md:flex-row flex-col justify-center
