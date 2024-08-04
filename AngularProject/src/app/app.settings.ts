export class Settings {
    //-------------------------GLOBAL SETTINGS-------------------------


    public static showCaughtExceptions = true; //should be set to true in production



    /*
     * Set system clocks to 12 hour format by default
     */
    public static is12hourSystem: boolean = false;
    /*
     * Set default dialogs width in percentage (%)
     */
    public static dialogsWidthPercentage: number = 60;
    /*
     * Set default dialogs height in pixels
     */
    public static dialogsHeightInPixels: number = 80;




    //-------------------------THE FOLLOWING SETTINGS CAN HAVE CUSTOM VALUES IN SCREENS-------------------------

    /*
     * Set string used as date separator in calendars
     */
    public static dateSeperator: string = '/';

    /*
     * Set maximum allowed size in Kilo Bytes for uploaded files on the system(the default max)
     */
    public static maxUploadSizeInKB: number = 1000;

    /*
     * Set maximum allowed characteres for a word in user input (the default max)
     */
    public static defaultLongWordsMax: number = 20;
    /*
     * Set system default format for phone inputs
     */
    public static defaultPhoneType: "saudi" | "international" = "international";
    /*
    * Set default number of visible rows in datatable
    */
    public static defaultDatatablePageSize: number = 10;
    /*
    * Set default translation key for the default item in dropDownLists
    */
    public static defaultDDLItemKey: string = "SHD_DROP_DOWN_DEFAULT";
    /*
   * Set default type of rating values
   */
    public static defaultRatingType: 'integer' | 'float' = 'float';
    /*
   * Set default tree layout
   */
    public static defaultTreeLayout: 'horizontal' | 'vertical' = 'vertical';



    //-------------------------TODO:-------------------------
    public static reportsExportFormats: string[];


}
