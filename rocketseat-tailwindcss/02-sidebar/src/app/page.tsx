export default function Home() {
  return (
    <button
      disabled
      type="button"
      className="mt-4 flex flex-col items-center justify-center rounded-md bg-sky-500 px-4 py-2 font-medium enabled:hover:bg-sky-600 disabled:cursor-not-allowed disabled:opacity-60"
    >
      Sign in
    </button>
  )
}
