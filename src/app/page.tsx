export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#050505] text-zinc-900 dark:text-zinc-100 selection:bg-zinc-200 dark:selection:bg-zinc-800">
      <main className="max-w-3xl mx-auto px-6 pt-32 pb-20 space-y-12">
        {/* Hero Section */}
        <section className="space-y-6">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              안녕하세요, <span className="text-zinc-500">홍길동</span>입니다.
            </h1>
            <p className="text-xl text-zinc-600 dark:text-zinc-400">
              사용자 경험을 고민하는 프론트엔드 개발자입니다.
            </p>
          </div>
          
          <div className="prose prose-zinc dark:prose-invert max-w-none">
            <p className="text-lg leading-relaxed">
              복잡한 문제를 단순하고 직관적인 코드로 해결하는 것을 좋아하며, 
              항상 새로운 기술과 디자인 트렌드에 관심을 가지고 학습하고 있습니다.
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
              href="mailto:contact@example.com" 
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

      <footer className="max-w-3xl mx-auto px-6 py-12 border-t border-zinc-100 dark:border-zinc-900 text-zinc-500 text-sm">
        <p>© 2026 Gildong Hong. Built with Next.js</p>
      </footer>
    </div>
  );
}
