import { AppSettingsService } from 'src/app/core/services/app-settings.service';

export class ApiCommonUrls {
  private static readonly version: string = "V1";

  public static get Rule(): string {
    return `${this.getApiUrl()}/${this.version}/Authentication`;
  }

  private static getApiUrl() {
    return AppSettingsService.appSettings?.apiUrl ?? '';
  }

  static login() {
    return `${this.Rule}/SignIn`;
  }
}
