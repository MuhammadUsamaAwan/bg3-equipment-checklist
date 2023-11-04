'use client';

import { ColumnDef } from '@tanstack/react-table';
import { Checkbox } from '@/components/ui/checkbox';
import { DataTableColumnHeader } from '@/components/data-table-column-header';
import { WikiLink } from '@/components/wiki-link';

export type Equipment = {
  name: string;
  location: React.ReactNode;
};

function getCompleted(): string[] {
  if (typeof window === 'undefined') return [];
  let completedData = localStorage.getItem('completed');
  if (completedData) {
    completedData = JSON.parse(completedData);
    if (Array.isArray(completedData) && completedData.every(i => typeof i === 'string')) return completedData;
  }
  return [];
}

let completedData = getCompleted();

function setCompleted(name: string, completed: boolean) {
  if (completed) completedData.push(name);
  else completedData = completedData.filter(i => i !== name);
  localStorage.setItem('completed', JSON.stringify(completedData));
}

export const columns: ColumnDef<Equipment>[] = [
  {
    id: 'completed',
    cell: ({ row }) => {
      const isCompleted = completedData.includes(row.getValue('name'));
      if (isCompleted) row.toggleSelected(true);
      return (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={value => {
            row.toggleSelected(!!value);
            setCompleted(row.getValue('name'), !!value);
          }}
          aria-label='Mark completed'
          className='translate-y-[2px]'
        />
      );
    },
    enableSorting: false,
  },
  {
    accessorKey: 'name',
    header: ({ column }) => <DataTableColumnHeader column={column} title='Name' />,
    cell: ({ row }) => <WikiLink className='no-underline'>{row.getValue('name')}</WikiLink>,
  },
  {
    accessorKey: 'location',
    header: ({ column }) => <DataTableColumnHeader column={column} title='Location' />,
    cell: ({ row }) => row.getValue('location'),
    enableSorting: false,
  },
];
