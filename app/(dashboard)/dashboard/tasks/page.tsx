import BreadCrumb from '@/components/breadcrumb';
import { KanbanBoard } from '@/components/kanban/kanban-board';
import NewTaskDialog from '@/components/kanban/new-task-dialog';
import { Heading } from '@/components/ui/heading';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tasks'
};

const breadcrumbItems = [{ title: 'Tasks', link: '/dashboard/tasks' }];
export default function page() {
  return (
    <>
      <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
        <BreadCrumb items={breadcrumbItems} />
        <div className="flex items-start justify-between">
          <Heading
            title="Tasks Kanban"
            description="Manage tasks by Drag n Drop"
          />
          <NewTaskDialog />
        </div>
        <KanbanBoard />
      </div>
    </>
  );
}
