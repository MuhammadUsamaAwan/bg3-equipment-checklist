'use client';

import { ColumnDef } from '@tanstack/react-table';
import { DataTableColumnHeader } from '@/components/data-table-column-header';
import { DataTableCheckbox } from '@/components/data-table-checkbox';
import { WikiLink } from '@/components/wiki-link';

export type Equipment = {
  name: string;
  location: React.ReactNode;
};

export const columns: ColumnDef<Equipment>[] = [
  {
    id: 'completed',
    cell: ({ row }) => <DataTableCheckbox row={row} />,
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
