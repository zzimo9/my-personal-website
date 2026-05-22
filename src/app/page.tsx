export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#050505] text-zinc-900 dark:text-zinc-100 selection:bg-zinc-200 dark:selection:bg-zinc-800">
      <main className="max-w-5xl mx-auto px-6 pt-32 pb-20 space-y-12">
        {/* Hero Section */}
        <section className="space-y-6">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              안녕하세요, <span className="text-zinc-500">DEV_KU</span>입니다.
            </h1>
            <p className="text-xl text-zinc-600 dark:text-zinc-400">
              금융권 인프라를 최적화하고 시스템 자동화를 설계하는 시스템 엔지니어입니다.
            </p>
          </div>
          
          <div className="prose prose-zinc dark:prose-invert max-w-none">
            <p className="text-lg leading-relaxed">
              안정성과 효율성을 최우선으로 하며, 복잡한 인프라 문제를 자동화와 혁신적인 아키텍처로 해결하는 과정에 보람을 느낍니다. 
              현재는 금융 시스템의 신뢰성을 높이기 위한 기술적 도전들을 즐기고 있습니다.
              <br />
              AX를 통한 시스템인프라의 신뢰성과 편의성을 높이기 위한 기술들을 학습하고 정리하는 공간입니다.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 pt-4">
            <a 
              href="#projects" 
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium transition-all rounded-full bg-zinc-900 text-zinc-50 hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
            >
              프로젝트 보기
            </a>
            <a 
              href="mailto:zzimo9@gmail.com" 
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium transition-all border rounded-full border-zinc-200 hover:bg-zinc-50 dark:border-zinc-800 dark:hover:bg-zinc-900"
            >
              연락하기
            </a>
          </div>
        </section>

        {/* Featured Section Placeholder */}
        <section id="projects" className="pt-20 border-t border-zinc-100 dark:border-zinc-900">
          <h2 className="text-2xl font-semibold mb-8">Selected Projects</h2>
          <div className="grid grid-cols-1 gap-6">
            <div className="group relative p-6 rounded-2xl border border-zinc-100 dark:border-zinc-900 hover:bg-zinc-50 dark:hover:bg-zinc-900/50 transition-all">
              <h3 className="text-lg font-medium mb-2">My Awesome Project</h3>
              <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                Next.js와 Tailwind를 사용하여 구축한 개인 홈페이지입니다.
              </p>
              <div className="flex gap-2">
                <span className="text-xs px-2 py-1 bg-zinc-100 dark:bg-zinc-800 rounded">Next.js</span>
                <span className="text-xs px-2 py-1 bg-zinc-100 dark:bg-zinc-800 rounded">Tailwind</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="max-w-5xl mx-auto px-6 py-12 border-t border-zinc-100 dark:border-zinc-900 text-zinc-500 text-sm">
        <p>© 2026 DEV_KU. Built with Next.js</p>
      </footer>
    </div>
  );
}
