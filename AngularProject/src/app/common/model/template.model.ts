import { BaseModule } from "src/app/data/model/baseModel";



export class TemplateModel extends BaseModule<number> {
    name: string;
    logo: string;
    isPublished: boolean;
    slug: string;
    logoFile?: File;
}