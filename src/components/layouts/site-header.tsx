import Link from 'next/link';
import { ThemeToggle } from '@/components/theme-toggle';

export function SiteHeader() {
  return (
    <header className='supports-backdrop-blur:bg-background/60 sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur'>
      <div className='container flex h-14 items-center justify-between'>
        <Link className='mr-6 flex items-center space-x-2 font-bold truncate' href='/'>
          Baldur's Gate 3 Equipment Checklist
        </Link>
        <ThemeToggle />
      </div>
    </header>
  );
}
