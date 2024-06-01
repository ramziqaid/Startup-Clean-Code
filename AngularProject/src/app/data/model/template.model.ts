import { BaseModule } from "./baseModel"


export class TemplateModel extends  BaseModule<number>
{ 
    name: string;
    logo: string;
    isPublished: boolean; 
    slug: string; 
    logoFile?: File;
}