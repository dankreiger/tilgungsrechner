export type Replace<T, Old extends keyof T, New extends string> = Omit<T, Old> &
  Record<New, T[Old]>;
