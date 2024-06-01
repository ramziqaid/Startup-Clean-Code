import { AppSettingsService } from 'src/app/core/services/app-settings.service';
 
 export  class ApitUrls 
 { 
  private static readonly version: string = "V1";
  public static readonly Rule: string = `${this.getApiUrl()}/${this.version}/`

  private static getApiUrl() {     
    return AppSettingsService.appSettings?.apiUrl;
  }  
}

 
export class accountRoot extends ApitUrls 
{  
  private static readonly Prefix: string = `${this.Rule}Authentication`;
  public static login = `${this.Prefix}/SignIn`; 
  public static refershToken = `${this.Prefix}/Refresh-Token`; 
 }
export class userAdminRoot extends ApitUrls 
{
  private static readonly Prefix: string = `${this.Rule}adminUser`;
  public static getList = `${this.Prefix}/GetList`; 
}

export class templateRoot extends ApitUrls 
{
  public static readonly Prefix: string = `${this.Rule}Student`;
  public static getList = `${this.Prefix}/List`; 
  public static getOne = `${this.Prefix}/Brand`; 
  public static create = `${this.Prefix}/Create`; 
  public static update = `${this.Prefix}/Update`; 
  public static delete = `${this.Prefix}/Delete`; 
  public static download = `${this.Prefix}/Download`; 
}

export class fileManagerRoot extends ApitUrls 
{
  private static readonly Prefix: string = `${this.Rule}`; 
  public static Upload = `${this.Prefix}/Upload`;  
  public static Download = `${this.Prefix}/Download`;  
}
 