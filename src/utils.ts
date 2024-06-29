import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import type { Get, IfUnknown } from 'type-fest';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function get<TData, TPath extends string>(
  data: TData,
  path: TPath
): IfUnknown<Get<TData, TPath>, undefined, Get<TData, TPath>> {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-assignment
  return path.split('.').reduce((value, key) => value?.[key], data as any);
}
