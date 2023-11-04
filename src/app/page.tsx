'use client';

import { DataTable } from '@/components/data-table';
import { columns } from '@/components/columns';
import { data } from '@/components/data';
import { useStore } from '@/lib/store';

export default function Home() {
  const { hideCompleted, completed } = useStore();
  const filteredData = hideCompleted ? data.filter(d => !completed.includes(d.name)) : data;

  return <DataTable columns={columns} data={filteredData} />;
}
