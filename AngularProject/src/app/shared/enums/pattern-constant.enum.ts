export class patternConstants {
    public static MobileNumber = '^05(5|0|3|6|4|9|1|8|7)([0-9]{7})$';
    public static PhoneNumber = '^01([0-9]{8})$';
    public static Fax = '^([0-9]{10})$';
    public static TenDigitsNumberOnly = '^([0-9]{10})$';
    public static NumberOnly = '^[\u0660-\u06690-9]*$';
    public static NumberValueOnly = '^[\u0661-\u06691-9][\u0660-\u06690-9]*$';
    public static CharOnly =  '[\u0621-\u064Aa-zA-Z]+'
    public static NumberAndCharOnly = '^[\u0621-\u064A\u0660-\u0669A-Za-z0-9]*$';
    public static WordNumberOnly = '^[0-9 ]*$';
    public static WordCharOnly =  '^[\u0621-\u064Aa-zA-Z- ]*$'
    public static WordCharOnly_Dot =  '^[\u0621-\u064Aa-zA-Z. ]*$'
    public static WordNumberAndCharOnly = '^[\u0621-\u064A\u0660-\u0669A-Za-z0-9 \n]*$';
    public static WordNumberAndCharOnly_Dot_Underscore_Hyphen_Comma = '^[\u0621-\u064A\u0660-\u0669A-Za-z0-9\\r\\n ._,-]*$';
    public static NumberAndCharOnly_Dot_Underscore_Hyphen = '^[\u0621-\u064A\u0660-\u0669A-Za-z0-9._-]*$';

    public static Email = '([\\w-\\.]+)@((?:[\\w-]+\\.)+)([a-zA-Z\-]{2,4})';
    public static FixedLength = '\b(.{5,10})';
    public static RestrictSpecialCharacters = '^[\ 0-9a-zA-Z\u0621-\u064A\u0660-\u0669\\r\\n.,/@()-]+$';
    public static url = '(http[s]?://)?([\\da-z0-9.-]+)\\.([a-z0-9.!]{2,6}(:[0-9])?)[/\\w .-]*/?';
    public static IdIQamaNumber = '^([1]{1}|[2]{1})([0-9]{9})$';
    public static IdNumber = '^[1]{1}([0-9]{9})$';
    public static IqamaNumber = '^[2]{1}([0-9]{9})$';
    public static Password  = '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$';
    public static NumberAndCharAndHyphenOnly = '^[\u0621-\u064A\u0660-\u0669A-Za-z0-9-]*$';
    public static NumberValueOnlyWith0Value = "^[0-9]*$"
    public static PositiveNumberDecimal = '^(([\u0660-\u06690-9]+(\\.[\u0660-\u06690-9]{1,5})?))$';

}
