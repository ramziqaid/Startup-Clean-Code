import { AppSettingsService } from 'src/app/core/services/app-settings.service';

export class ApitUrls {
  private static readonly version: string = "V1";
  public static readonly Rule: string = `${this.getApiUrl()}/${this.version}/`

  private static getApiUrl() {
    debugger
    return AppSettingsService.appSettings?.apiUrl;
  }
}



export class fileManagerRoot extends ApitUrls {
  private static readonly Prefix: string = `${this.Rule}`;
  public static Upload = `${this.Prefix}/Upload`;
  public static Download = `${this.Prefix}/Download`;
}
