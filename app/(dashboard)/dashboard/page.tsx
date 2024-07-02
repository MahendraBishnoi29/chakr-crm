import { CommandModal } from '@/components/modal/command-menu';

export default function page() {
  return (
    <div className="mt-40 flex h-screen flex-col gap-4 text-center">
      <h2 className="text-4xl font-bold tracking-tight">
        Hi, Welcome to Chakr CRM 👋
      </h2>

      <CommandModal />
    </div>
  );
}
