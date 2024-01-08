import { ReactNode, createContext, useEffect, useReducer } from 'react'
import { api } from '../api'

interface ChildrenProps {
  children: ReactNode
}

interface PerfilProps {
  name: string
  avatar_url: string
  bio: string
  followers: number
  login: string
  html_url: string
  company: string | null
}

interface PostProps {
  number: number
  title: string
  body: string
  updated_at: string
}

interface StateProps {
  profile: PerfilProps
  posts: PostProps[]
}

type ActionProps =
  | { type: 'loadProfile'; payload: PerfilProps }
  | { type: 'loadPosts'; payload: PostProps[] }
  | { type: 'loadPost'; payload: PostProps }

interface PostsContextProps {
  state: StateProps
}

export const PostsContext = createContext({} as PostsContextProps)

export function PostsProvider({ children }: ChildrenProps) {
  const [state, dispatch] = useReducer(
    (state: StateProps, action: ActionProps) => {
      if (action.type === 'loadProfile')
        return { ...state, profile: action.payload }

      if (action.type === 'loadPosts')
        return { ...state, posts: action.payload }

      if (action.type === 'loadPost') return { ...state, post: action.payload }

      return state
    },
    {
      profile: {
        name: '',
        avatar_url: '',
        bio: '',
        followers: 0,
        login: '',
        html_url: '',
        company: null,
      },
      posts: [],
      post: {
        number: 0,
        title: '',
        body: '',
        updated_at: '',
      },
    },
  )
  async function loadProfile() {
    const response = await api.get('/users/maiconDeSouza')
    const {
      name,
      avatar_url: avatarUrl,
      bio,
      followers,
      login,
      html_url: htmlURL,
      company,
    }: PerfilProps = response.data
    const profile = {
      name,
      avatar_url: avatarUrl,
      bio,
      followers,
      login,
      html_url: htmlURL,
      company,
    }
    dispatch({ type: 'loadProfile', payload: profile })
  }

  async function loadPosts() {
    const response = await api.get(
      '/repos/maiconDeSouza/reactjs-github-blog-challenge/issues',
    )
    const data = response.data
    const posts = data.map((post: PostProps) => {
      const { number, title, body, updated_at: updatedAt } = post
      const newPost = { number, title, body, updated_at: updatedAt }
      return newPost
    })
    dispatch({ type: 'loadPosts', payload: posts })
  }

  useEffect(() => {
    loadProfile()
    loadPosts()
  }, [])
  return (
    <PostsContext.Provider value={{ state }}>{children}</PostsContext.Provider>
  )
}
