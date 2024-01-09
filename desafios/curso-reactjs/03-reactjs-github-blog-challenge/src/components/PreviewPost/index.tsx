import Markdown from 'react-markdown'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { Link } from 'react-router-dom'

interface PreviewPostProps {
  number: number
  title: string
  body: string
  updated_at: string
}
export function PreviewPost(post: PreviewPostProps) {
  function sliceString(input: string, quantidadeCaracteres: number): string {
    const resultado = input.slice(0, quantidadeCaracteres)

    return resultado
  }
  return (
    <Link to={`/post/${post.number}`}>
      <article className="md:w-[26rem] max-w-full h-[16.25rem] py-8 px-4 bg-mcn-base-post rounded-md flex flex-col justify-center gap-4">
        <header className="flex">
          <span className="text-xl">{post.title}</span>
          <span className="w-40 text-sm flex justify-center">
            {formatDistanceToNow(post.updated_at, {
              addSuffix: true,
              locale: ptBR,
            })}
          </span>
        </header>
        <main className="max-w-full">
          <Markdown>{`${sliceString(post.body, 100)}...`}</Markdown>
        </main>
      </article>
    </Link>
  )
}
