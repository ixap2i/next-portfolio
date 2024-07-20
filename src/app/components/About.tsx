import Avatar from '../images/explosion_mtfuji.jpg'

export default function About() {
  return(
    <section id="about" className="py-12 md:py-24 lg:py-32 bg-muted">
      <h2 className="text-center px-4 md:px-6 gap-8 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">About Me</h2>
      <div className="flex justify-center">
        <div className="px-4 md:px-6 gap-8 flex flex-col">
          <div className="rounded-full">
            <img src={Avatar.src}
              className="rounded-full"
              alt="アバター" />
          </div>
          <div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-3xl md:text-3xl">Name: </h2>
            <span className="text-3xl tracking-tighter sm:text-3xl md:text-3xl">Akane Yamashita</span>
          </div>
          <div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-3xl md:text-3xl">Job: </h2>
            <span className="text-3xl tracking-tighter sm:text-3xl md:text-3xl">Backend / Frontend Engineer</span>
          </div>
        </div>
      </div>
    </section>
  )
}
