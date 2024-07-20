import Link from "next/link"
import ProjectImage from '../images/mejiro.png'
import ProjectImage2 from '../images/doggy.png'
import ProjectImage3 from '../images/project3.png'
import CardBackground from '../images/mesh-898.png'

export default function About() {
  return(
    <section id="portfolio" className="py-12 md:py-24 lg:py-32">
      <h2 className="text-center px-4 md:px-6 gap-8 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Portfolio</h2>
      <div className="px-4 md:px-6 space-y-12">
        <div className="text-center">
          <p className="mt-4 mb-8 text-muted-foreground md:text-xl/relaxed">
            今まで携わらせていただいた案件と、自作したポートフォリオです。
          </p>
        </div>
        <div className="flex justify-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-muted rounded-lg overflow-hidden">
            <img
              src={ProjectImage.src}
              width={400}
              height={300}
              alt="目白駅前クリニック"
              className="w-full h-48 object-contain"
            />
            <div className="p-4 bg-cover" style={{"backgroundImage": 'url('+CardBackground.src+')'}}>
              <h3 className="text-lg font-bold">目白駅前クリニック</h3>
              <p className="mt-2 text-muted-foreground">デザインリニューアルに携わらせていただいたサイトです。</p>
              <div className="mt-4">
                <Link
                  href="https://mejiroekimae.com/"
                  className="inline-flex items-center gap-2 text-primary hover:animate-pulse"
                  prefetch={false}
                >
                  <span>View Project</span>
                  <ArrowRightIcon className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
          <div className="bg-muted rounded-lg overflow-hidden">
            <img
              src={ProjectImage2.src}
              width={400}
              height={300}
              alt="hello doggy"
              className="w-full h-48 object-contain"
            />
            <div className="p-4 bg-cover" style={{"backgroundImage": 'url('+CardBackground.src+')'}}>
              <h3 className="text-lg font-bold">hello doggy</h3>
              <p className="mt-2 text-muted-foreground">
                Rust製の犬の画像を見るだけのアプリです。Docker / wasm-pack
              </p>
              <div className="mt-4">
                <Link
                  href="https://github.com/ixap2i/hello-doggy"
                  className="inline-flex items-center gap-2 text-primary hover:animate-pulse"
                  prefetch={false}
                >
                  <span>View Project</span>
                  <ArrowRightIcon className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
          <div className="bg-muted rounded-lg overflow-hidden">
            <img
              src={ProjectImage3.src}
              width={400}
              height={300}
              alt="try-react-app"
              className="w-full h-48 object-contain"
            />
            <div className="p-4 bg-cover" style={{"backgroundImage": 'url('+CardBackground.src+')'}}>
              <h3 className="text-lg font-bold">try-react-app</h3>
              <p className="mt-2 text-muted-foreground">
                React.jsを1週間勉強して作ったポートフォリオです。
              </p>
              <div className="mt-4">
                <Link
                  href="https://ixap2i.github.io/try-react-app/"
                  className="inline-flex items-center gap-2 text-primary hover:animate-pulse"
                  prefetch={false}
                >
                  <span>View Project</span>
                  <ArrowRightIcon className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};

function ArrowRightIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  )
};