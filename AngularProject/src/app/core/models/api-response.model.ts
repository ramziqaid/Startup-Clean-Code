import { LocalizedFieldResultModel } from "./localized-field-result.model";

 
export interface ApiResponseModel<T> {
    succeeded: boolean;
    errorMessage: LocalizedFieldResultModel ;
    errorCode: string  ;
    data: T; 
}