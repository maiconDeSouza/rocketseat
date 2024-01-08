export function Search() {
  return (
    <form>
      <div className="flex items-center justify-between mb-4">
        <span>Publicações</span>
        <span>6 publicações</span>
      </div>
      <input
        type="text"
        className="h-[3.125rem] w-full bg-mcn-base-input rounded-md placeholder:text-mcn-base-label p-4"
        placeholder="Busca por Conteúdo"
      />
    </form>
  )
}
