import { cn } from '@/lib/utils';
import Link, { LinkProps } from 'next/link';

interface WikiLinkProps extends React.HTMLAttributes<LinkProps> {}

export function WikiLink({ children, className }: WikiLinkProps) {
  return (
    <Link
      href={`https://bg3.wiki/wiki//${(children as string).split(' ').join('_')}`}
      rel='noopener noreferrer'
      target='_blank'
      className={cn('underline hover:underline cursor-pointer underline-offset-[3px]', className)}
    >
      {children}
    </Link>
  );
}
