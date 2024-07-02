import ThemeToggle from '@/components/layout/theme-toggle/theme-toggle';
import { cn } from '@/lib/utils';
import { MobileSidebar } from './mobile-sidebar';
import { UserNav } from './user-nav';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <div className="supports-backdrop-blur:bg-background/60 fixed left-0 right-0 top-0 z-20 border-b bg-background/95 backdrop-blur">
      <nav className="flex h-14 items-center justify-between pl-4 pr-6">
        <div className="hidden lg:block">
          <Link
            className="flex items-center justify-center gap-2"
            href="https://chakr.in"
            target="_blank"
          >
            <Image src="/logo.png" alt="logo" width={55} height={100} />
            <span className="font-sans text-base font-medium">Chakr CRM</span>
          </Link>
        </div>
        <div className={cn('block lg:!hidden')}>
          <MobileSidebar />
        </div>

        <div className="flex items-center gap-3">
          <UserNav />
          <ThemeToggle />
        </div>
      </nav>
    </div>
  );
}
