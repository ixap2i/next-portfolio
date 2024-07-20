/**
 * v0 by Vercel.
 * @see https://v0.dev/t/ugHXc2GMmNl
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client";
import Header from "./components/Header"
import About from "./components/About"
import Portfolio from "./components/Portfolio"
import BlogParts from "./components/BlogParts"
import Skill from "./components/Skill"
import Experience from "./components/Experience"

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh">
      <Background />
      <Header />
      <main className="flex-1">
        <About />
        <Portfolio />
        <BlogParts />
        <Skill />
        <Experience />
      </main>
      <section id="copyright">
        <p className="font-mono text-center">© 2024 Akane Yamashita</p>
      </section>
      <Footer />
    </div>
  )
};

function Background() {
  return(
    <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 390" xmlns="http://www.w3.org/2000/svg" className="transition duration-300 ease-in-out delay-150"><path d="M 0,400 L 0,100 C 87.89285714285714,91.98214285714286 175.78571428571428,83.96428571428571 314,85 C 452.2142857142857,86.03571428571429 640.75,96.125 783,127 C 925.25,157.875 1021.2142857142858,209.53571428571428 1123,246 C 1224.7857142857142,282.4642857142857 1332.392857142857,303.7321428571429 1440,325 L 1440,400 L 0,400 Z" stroke="none" strokeWidth="0" fill="#F82E08" fillOpacity="0.53" className="transition-all duration-300 ease-in-out delay-150 path-0" transform="rotate(-180 720 200)"></path>
      <path d="M 0,400 L 0,233 C 138.03571428571428,236.91071428571428 276.07142857142856,240.82142857142858 404,244 C 531.9285714285714,247.17857142857142 649.75,249.625 766,275 C 882.25,300.375 996.9285714285716,348.67857142857144 1109,383 C 1221.0714285714284,417.32142857142856 1330.5357142857142,437.6607142857143 1440,458 L 1440,400 L 0,400 Z" stroke="none" strokeWidth="0" fill="#F82E08" fillOpacity="1" className="transition-all duration-300 ease-in-out delay-150 path-1" transform="rotate(-180 720 200)"></path>
      <text x="25" y="100" style={{'fontSize': '7rem'}} className="md:px-6 gap-8 font-bold tracking-tighter">Akane Yamashita Portfolio</text>
    </svg>
  )
};

function Footer() {
  return(
    <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 390" xmlns="http://www.w3.org/2000/svg" className="transition duration-300 ease-in-out delay-150"><path d="M 0,400 L 0,100 C 89.14285714285714,70.44642857142857 178.28571428571428,40.89285714285714 300,70 C 421.7142857142857,99.10714285714286 575.9999999999999,186.87499999999997 695,211 C 814.0000000000001,235.12500000000003 897.7142857142858,195.6071428571429 1016,204 C 1134.2857142857142,212.3928571428571 1287.142857142857,268.69642857142856 1440,325 L 1440,400 L 0,400 Z" stroke="none" strokeWidth="0" fill="#F82E08" fillOpacity="0.53" className="transition-all duration-300 ease-in-out delay-150 path-2"></path><path d="M 0,400 L 0,233 C 149.85714285714286,245.01785714285714 299.7142857142857,257.0357142857143 400,257 C 500.2857142857143,256.9642857142857 550.9999999999999,244.87499999999994 670,279 C 789.0000000000001,313.12500000000006 976.2857142857142,393.4642857142857 1116,431 C 1255.7142857142858,468.5357142857143 1347.857142857143,463.2678571428571 1440,458 L 1440,400 L 0,400 Z" stroke="none" strokeWidth="0" fill="#F82E08" fillOpacity="1" className="transition-all duration-300 ease-in-out delay-150 path-3"></path></svg>
  )
};
