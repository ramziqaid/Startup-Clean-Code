import { AppSettingsService } from 'src/app/core/services/app-settings.service';

export class ApiCoreUrls {
  private static readonly version: string = "V1";

  public static get Rule(): string {
    return `${this.getApiUrl()}/${this.version}/Authentication`;
  }

  private static getApiUrl() {
    return AppSettingsService.appSettings?.commonUrl ?? '';
  }

  static login() {
    return `${this.Rule}/SignIn`;
  }
}
