export interface BaseEntity<T> {
    id: T
    rowVersion:string;
}
