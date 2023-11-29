import { ReactNode } from 'react'

interface IconAndText {
  children: ReactNode
  text: string
  color: string
}

export function IconAndText({ children, text, color }: IconAndText) {
  return (
    <div className="flex items-center gap-2">
      <div
        className={`${color} w-[2rem] h-[2rem] rounded-full flex justify-center items-center`}
      >
        {children}
      </div>
      <span className="font-roboto text-base">{text}</span>
    </div>
  )
}
