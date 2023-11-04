import { DataTable } from '@/components/data-table';
import { columns } from '@/components/columns';
import { data } from '@/components/data';

export default function Home() {
  return <DataTable columns={columns} data={data} />;
}
