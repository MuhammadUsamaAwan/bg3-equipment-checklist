'use client';

import { Table } from '@tanstack/react-table';
import { Input } from '@/components/ui/input';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { useStore } from '@/lib/store';

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
}

export function DataTableToolbar<TData>({ table }: DataTableToolbarProps<TData>) {
  const hideCompleted = useStore(state => state.hideCompleted);
  const toggleHideCompleted = useStore(state => state.toggleHideCompleted);

  return (
    <div className='flex items-center justify-between'>
      <div className='flex flex-1 items-center space-x-2'>
        <Input
          placeholder='Search...'
          value={(table.getColumn('name')?.getFilterValue() as string) ?? ''}
          onChange={event => table.getColumn('name')?.setFilterValue(event.target.value)}
          className='h-8 w-[150px] md:w-96'
        />
      </div>
      <div className='flex items-center space-x-2'>
        <Switch id='hide-completed' checked={hideCompleted} onCheckedChange={toggleHideCompleted} />
        <Label htmlFor='hide-completed'>Hide Completed</Label>
      </div>
    </div>
  );
}
