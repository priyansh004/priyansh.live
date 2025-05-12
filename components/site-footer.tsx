export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-black/60 backdrop-blur-md">
      <div className="container flex flex-col items-center justify-between gap-4 py-6 md:h-16 md:flex-row md:py-0">
        <div className="text-center md:text-left">
          <p className="text-sm text-zinc-500">&copy; {new Date().getFullYear()} PC buildspace. All rights reserved.</p>
        </div>
        <p className="text-sm text-zinc-500 italic">"Exploring the universe, one line of code at a time."</p>
      </div>
    </footer>
  )
}
