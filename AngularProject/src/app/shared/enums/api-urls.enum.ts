import { AppSettingsService } from 'src/app/core/services/app-settings.service';

export class ApitUrls {
  private static readonly version: string = "V1";

  public static get Rule(): string {
    return `${this.getApiUrl()}/${this.version}/`;
  }

  private static getApiUrl() {
    return AppSettingsService.appSettings?.apiUrl ?? '';
  }

  static lookupGetServiceCategory() {
    return `${this.getApiUrl()}Lookup/GetServiceCategory`;
  }
}



export class fileManagerRoot extends ApitUrls {
  private static readonly Prefix: string = `${this.Rule}`;
  public static Upload = `${this.Prefix}/Upload`;
  public static Download = `${this.Prefix}/Download`;
}
