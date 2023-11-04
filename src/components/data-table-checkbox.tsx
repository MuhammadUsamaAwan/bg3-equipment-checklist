'use client';

import { useStore } from '@/lib/store';
import { Checkbox } from '@/components/ui/checkbox';
import { Row } from '@tanstack/react-table';
import { Equipment } from '@/components/columns';

interface DataTableCheckboxProps {
  row: Row<Equipment>;
}

export function DataTableCheckbox({ row }: DataTableCheckboxProps) {
  const { isCompleted, toggleCompleted } = useStore();
  if (isCompleted(row.getValue('name'))) row.toggleSelected(true);

  return (
    <Checkbox
      checked={row.getIsSelected()}
      onCheckedChange={value => {
        row.toggleSelected(!!value);
        toggleCompleted(row.getValue('name'));
      }}
      aria-label='Mark completed'
      className='translate-y-[2px]'
    />
  );
}
