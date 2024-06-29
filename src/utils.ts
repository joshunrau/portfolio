import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import type { Get, IfUnknown } from 'type-fest';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Replicates _.get from lodash, without pulling in a bunch of unnecessary code for legacy browsers
 */
export function get<TData, TPath extends string>(
  data: TData,
  path: TPath
): IfUnknown<Get<TData, TPath>, undefined, Get<TData, TPath>> {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-assignment
  return path.split('.').reduce((value, key) => value?.[key], data as any);
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 */
export function isObjectLike(value: unknown): value is object {
  return value !== null && typeof value === 'object';
}

/**
 * Checks if `value` is a plain object. An object is plain if it is created by either
 * `{}`, `new Object()`, or `Object.create(null)`.
 */
export function isPlainObject(value: unknown): value is { [key: string]: unknown } {
  if (!isObjectLike(value)) {
    return false;
  }
  const prototype: unknown = Object.getPrototypeOf(value);
  return (
    (prototype === null || prototype === Object.prototype || Object.getPrototypeOf(prototype) === null) &&
    !(Symbol.toStringTag in value) &&
    !(Symbol.iterator in value)
  );
}
