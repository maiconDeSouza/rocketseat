import { ArrowUpRight, Building, Github, Users } from 'lucide-react'

export function Profile() {
  return (
    <article className="bg-mcn-base-profile rounded-md w-full min-h-[13.25rem] mt-[-6rem] shadow shadow-mcn-blue">
      <div className="w-full min-h-[13.25rem] flex flex-col items-center p-4  md:flex-row">
        <section className="w-[10.25rem] h-[9.25rem] flex justify-center">
          <img
            src="https://avatars.githubusercontent.com/u/67662178?v=4"
            alt=""
            className="w-[9.25rem] rounded-md object-cover"
          />
        </section>
        <section className="flex-1 h-[9.25rem] flex flex-col justify-between">
          <div className="flex flex-col justify-between items-center gap-2 md:flex-row">
            <h1 className="text-mcn-base-title text-3xl font-bold">
              Maicon Souza
            </h1>
            <a
              href="#"
              className="flex items-center gap-1 text-mcn-blue cursor-pointer hover:border-b hover:border-mcn-blue"
            >
              <span className="text-sm font-bold">GITHUB</span>
              <ArrowUpRight />
            </a>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Exercitationem sint labore reprehenderit, id alias voluptate ipsa?
              Incidunt accusamus
            </p>
          </div>
          <div className="flex gap-4 flex-wrap">
            <div className="flex items-center gap-1 text-mcn-blue">
              <Github size={20} />
              <span>maiconDeSouza</span>
            </div>
            <div className="flex items-center gap-1 text-mcn-blue">
              <Building size={20} />
              <span>Movement</span>
            </div>
            <div className="flex items-center gap-1 text-mcn-blue">
              <Users size={20} />
              <span>32 seguidore</span>
            </div>
          </div>
        </section>
      </div>
    </article>
  )
}

// p-8 w-full min-h-[13.25rem] bg-mcn-base-profile rounded-md mt-[-6rem] shadow shadow-mcn-blue md:flex md:flex-row flex-col justify-center
