import type { Metadata } from 'next';
import Link from 'next/link';
import { Home } from 'lucide-react';
import './globals.css';

export const metadata: Metadata = {
  title: 'Life 2080',
  description: 'Life 2080 Web Services',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className="dark">
      <body className="bg-slate-950 text-slate-50 min-h-screen flex flex-col font-sans antialiased overflow-x-hidden">
        {/* Global Navigation Header (Glassmorphism) */}
        <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-slate-950/60 backdrop-blur-md">
          <div className="container mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
            <Link 
              href="/" 
              className="group flex items-center gap-2 font-bold text-xl tracking-tight transition-transform hover:scale-105"
            >
              <div className="p-1.5 rounded-lg bg-white/10 group-hover:bg-white/20 transition-colors">
                <Home className="w-5 h-5 text-purple-400" />
              </div>
              <span className="text-white">
                Life <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-400">2080</span>
              </span>
            </Link>

            {/* 추후 추가될 글로벌 메뉴 등을 위한 빈 여백 */}
            <nav className="flex items-center gap-4 text-sm font-medium text-slate-300">
              <Link href="/services" className="hover:text-white transition-colors">
                전체 서비스
              </Link>
            </nav>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 relative w-full flex flex-col">
          {children}
        </main>
      </body>
    </html>
  );
}
