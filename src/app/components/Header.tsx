import Link from "next/link"

export default function Header() {
  return(
    <header className="bg-primary text-primary-foreground px-4 lg:px-6 py-4 flex items-center justify-between">
      <Link href="#about" className="text-2xl font-bold" prefetch={false}></Link>
      <nav className="hidden md:flex gap-4">
        <Link href="#about" className="text-3xl hover:animate-pulse" prefetch={false}>
          About
        </Link>
        <Link href="#portfolio" className="text-3xl hover:animate-pulse" prefetch={false}>
          Portfolio
        </Link>
        <Link href="#blog" className="text-3xl hover:animate-pulse" prefetch={false}>
          Tech Blog
        </Link>
        <Link href="#skills" className="text-3xl hover:animate-pulse" prefetch={false}>
          Skills
        </Link>
        <Link href="#experience" className="text-3xl hover:animate-pulse" prefetch={false}>
          Experience
        </Link>
      </nav>
    </header>
  )
}