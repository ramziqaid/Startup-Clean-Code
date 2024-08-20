import { BaseEntity } from "src/app/entities/baseEntity"

export interface AdminUserEntity extends BaseEntity<number> {
    name: string
    username: string
    email: string
    phone: string
    website: string
}
