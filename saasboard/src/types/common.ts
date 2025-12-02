export type Id = string;

export type ProjectId = Id;
export type ClientId = Id;
export type TaskId = Id;
export type UserId = Id;

export type ISODateString = string;

// helper for values that can be null or undefined
export type Maybe<T> = T | null | undefined;

export interface PaginationMeta {
    page: number;
    pageSize: number;
    totalItems: number;
    totalPages: number;
}