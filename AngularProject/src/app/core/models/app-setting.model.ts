export class AppSettingModel {
    apiUrl: string = window.location.href;
    commonUrl: string = window.location.href;
    fea1Url: string = window.location.href;
    fea2Url: string = window.location.href;
    fea3Url: string = window.location.href;
    production: boolean = false;
    withCredentials: boolean;
    /**
     *
     */
    constructor() {
    }
}

