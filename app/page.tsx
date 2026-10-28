import Image from "next/image";

const projects = [
  {
    number: "01",
    name: "Sonal Beauty",
    category: "FULL-STACK WEB APPLICATION",
    description:
      "A salon booking website featuring service listings, promotional deals, appointment booking and a Supabase database.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
    image: "/images/sonal-beauty.png",
    live: "https://sonal-beauty-8qb9mpj8y-sonal-beauty.vercel.app",
    github: "https://github.com/sonalrairai24-lab/sonal-beauty",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#faf7f2] text-[#30251f]">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:px-12">
        <a href="#home" className="text-xl font-bold tracking-tight">
          SONAL<span className="text-[#a47c52]">.</span>
        </a>

        <div className="flex gap-5 text-sm md:gap-8">
          <a href="#about" className="hover:text-[#a47c52]">About</a>
          <a href="#projects" className="hover:text-[#a47c52]">Projects</a>
          <a href="#contact" className="hover:text-[#a47c52]">Contact</a>
        </div>
      </nav>

      <section
        id="home"
        className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:px-12 md:py-28"
      >
        <div>
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-[#a47c52]">
            Welcome to my portfolio
          </p>

          <h1 className="text-5xl font-semibold leading-tight tracking-tight md:text-7xl">
            Building digital
            <span className="block font-serif italic text-[#a47c52]">
              experiences.
            </span>
          </h1>

          <p className="mt-6 max-w-lg text-base leading-8 text-[#76665a] md:text-lg">
            Hi, I&apos;m Sonal. I create modern, user-friendly websites and
            enjoy turning ideas into practical digital experiences.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-full bg-[#30251f] px-7 py-4 text-sm font-medium text-white transition hover:bg-[#5b4435]"
            >
              Explore My Work ↗
            </a>
            <a
              href="#contact"
              className="rounded-full border border-[#d8cabb] px-7 py-4 text-sm font-medium transition hover:bg-[#eee5da]"
            >
              Contact Me
            </a>
          </div>

          <p className="mt-8 text-xs tracking-wide text-[#928174]">
            WEB DEVELOPMENT · DESIGN · CONTINUOUS LEARNING
          </p>
        </div>

        <div className="relative mx-auto w-full max-w-7xl">
  <div className="absolute -inset-3 rounded-[2rem] border border-[#e3d4c3]" />

  <div className="relative overflow-hidden rounded-[1.5rem] bg-white shadow-xl">
    <Image
     src="/images/portfolio-banner.png"
      alt="Sonal Rai — Building Digital Experiences"
      width={1600}
      height={700}
      priority
      unoptimized
      className="h-auto w-full object-cover"
    />
  </div>
</div>
            </section>


      <section id="about" className="border-y border-[#e8ded2] bg-white/50">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-12">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#a47c52]">
            A little about me
          </p>
          <h2 className="mt-4 max-w-2xl text-3xl font-semibold leading-snug md:text-4xl">
            Learning, building, and growing one project at a time.
          </h2>
          <p className="mt-5 max-w-3xl leading-8 text-[#76665a]">
            I am developing my skills in frontend and full-stack web
            development by building real projects. My goal is to create
            useful, attractive and responsive websites while continuously
            improving my technical knowledge.
          </p>
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-7xl px-6 py-24 md:px-12">

        
<section id="skills" className="border-y border-[#e8ded2] bg-white/50">
  <div className="mx-auto max-w-7xl px-6 py-20 md:px-12">
    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#a47c52]">
      What I work with
    </p>

    <h2 className="mt-3 text-4xl font-semibold">
      My Skills
    </h2>

    <p className="mt-4 max-w-2xl leading-7 text-[#76665a]">
      Technologies I use while learning and building modern websites.
    </p>

    <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {[
        { name: "HTML & CSS", detail: "Web page structure and styling" },
        { name: "JavaScript", detail: "Interactive website features" },
        { name: "React & Next.js", detail: "Modern website development" },
        { name: "TypeScript", detail: "Typed JavaScript code" },
        { name: "Tailwind CSS", detail: "Responsive website design" },
        { name: "Supabase", detail: "Database and backend services" },
        { name: "Git & GitHub", detail: "Code management and projects" },
        { name: "Responsive Design", detail: "Mobile and desktop layouts" },
      ].map((skill) => (
        <div
          key={skill.name}
          className="rounded-2xl border border-[#e8ded2] bg-white p-6 transition hover:-translate-y-1 hover:shadow-md"
        >
          <h3 className="font-semibold">{skill.name}</h3>
          <p className="mt-2 text-sm leading-6 text-[#76665a]">
            {skill.detail}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>

        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#a47c52]">
              My work
            </p>
            <h2 className="mt-3 text-4xl font-semibold">Featured project</h2>
          </div>
          <p className="text-sm text-[#928174]">01 project · More to come</p>
        </div>

        {projects.map((project) => (
          <article
            key={project.number}
            className="mt-10 grid overflow-hidden rounded-[1.5rem] border border-[#e8ded2] bg-white md:grid-cols-2"
          >


<div className="flex items-center justify-center overflow-hidden bg-white p-0">
  <Image
    src={project.image}
    alt={`${project.name} website preview`}
    width={1200}
    height={800}
    unoptimized
    className="block h-auto w-full object-contain"
  />
</div>

     <div className="flex flex-col justify-center p-7 md:p-10">
              <p className="text-xs font-semibold tracking-[0.2em] text-[#a47c52]">
                PROJECT {project.number}
              </p>
              <h3 className="mt-3 text-3xl font-semibold">{project.name}</h3>
              <p className="mt-2 text-xs tracking-wider text-[#928174]">
                {project.category}
              </p>
              <p className="mt-5 leading-7 text-[#76665a]">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-[#f3ece3] px-3 py-2 text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-[#30251f] px-5 py-3 text-sm text-white hover:bg-[#5b4435]"
                >
                  Live Demo ↗
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-[#d8cabb] px-5 py-3 text-sm hover:bg-[#f3ece3]"
                >
                  GitHub Code ↗
                </a>
              </div>
            </div>
          </article>
        ))}
      </section>

      <section id="contact" className="bg-[#30251f] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-12">
          <p className="text-sm uppercase tracking-[0.2em] text-[#d5b895]">
            Get in touch
          </p>
          <h2 className="mt-4 max-w-2xl text-4xl font-semibold md:text-5xl">
            Have a project in mind?
          </h2>
          <p className="mt-5 max-w-xl leading-7 text-[#d5c9be]">
            I&apos;m growing my web development skills and always interested
            in learning about new ideas and projects.
          </p>
          <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=sonalrairai24@gmail.com"
            className="mt-8 inline-block rounded-full bg-[#f0e3d3] px-7 py-4 text-sm font-medium text-[#30251f] hover:bg-white"
          >
            Email Me ↗
          </a>
          <p className="mt-3 text-xs text-[#b8a89a]">
            Feel free to email me about your next project.
          </p>
        </div>
      </section>

      <footer className="flex flex-wrap justify-between gap-3 px-6 py-6 text-xs text-[#928174] md:px-12">
        <span>© 2026 Sonal. All rights reserved.</span>
        <a href="#home" className="hover:text-[#a47c52]">Back to top ↑</a>
      </footer>
    </main>
  );
}
