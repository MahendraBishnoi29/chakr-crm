'use client';

import { CheckSquare, CreditCard, UserCircle } from 'lucide-react';
import * as React from 'react';

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut
} from '@/components/ui/command';
import Link from 'next/link';

const users = [
  {
    name: 'Priyanshu',
    id: '1',
    slug: 'https://github.com/PriyanshuSinghR'
  },
  {
    name: 'Mahendra',
    id: '2',
    slug: 'https://github.com/MahendraBishnoi29'
  }
];

export function CommandModal() {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  return (
    <>
      <p className="text-lg text-muted-foreground">
        Press{' '}
        <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
          <span className="text-xs">⌘</span>K
        </kbd>{' '}
        for more
      </p>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <Link href="/dashboard/profile">
              <CommandItem>
                <UserCircle className="mr-2 h-4 w-4" />
                <span>Profile</span>
                <CommandShortcut>⌘P</CommandShortcut>
              </CommandItem>
            </Link>
            <Link href="/dashboard/tasks">
              <CommandItem>
                <CheckSquare className="mr-2 h-4 w-4" />
                <span>Tasks</span>
                <CommandShortcut>⌘T</CommandShortcut>
              </CommandItem>
            </Link>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Users">
            {users.map((user) => (
              <Link key={user.id} href={user.slug}>
                <CommandItem>
                  <span>{user.name}</span>
                </CommandItem>
              </Link>
            ))}
          </CommandGroup>
          <CommandGroup heading="Settings">
            <CommandItem>
              <CreditCard className="mr-2 h-4 w-4" />
              <span>Billing</span>
              <CommandShortcut>⌘B</CommandShortcut>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
