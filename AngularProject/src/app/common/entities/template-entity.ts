import { BaseEntity } from "src/app/entities/baseEntity"

export interface TemplateEntity extends BaseEntity<number> {
    name: string;
    logo: string;
    isPublished: boolean;
    slug: string;
    logoFile?: File;
}
