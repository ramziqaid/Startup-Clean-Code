import { AppSettingsService } from 'src/app/core/services/app-settings.service';

export class ApiFea1Urls {
  private static readonly version: string = "V1";
  public static get Rule(): string {
    return `${this.getApiUrl()}/${this.version}/Authentication`;
  }

  private static getApiUrl() {
    return AppSettingsService.appSettings?.fea1Url ?? '';
  }

  static login() {
    return `${this.Rule}/SignIn`;
  }
}


