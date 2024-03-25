using SchoolProject.Data.Entities;
using System.Globalization;

namespace SchoolProject.Data.Commons
{
    public class GeneralLocalizableEntity: ISoftDelete
    {
        public string Localize(string textAr, string textEN)
        {
            CultureInfo CultureInfo = Thread.CurrentThread.CurrentCulture;
            if (CultureInfo.TwoLetterISOLanguageName.ToLower().Equals("ar"))
                return textAr;
            return textEN;
        }
    }
}
