 
using Microsoft.EntityFrameworkCore;
using SchoolProject.Infrustructure.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SchoolProject.Infrustructure.Seeder
{
    public class SeedDataService
    {
        public static void SeedData(ApplicationDBContext context)
        {
             
          //  if (!context.Countries.Any())
          //  {
          //      context.Countries.AddRange(
          //           new Country {   Name = "Country1", TwoLetterIsoCode = "C1", ThreeLetterIsoCode = "CT1", FlagUrl = "https://flagurl1.com", DisplayOrder = 1 },
          //             new Country {  Name = "Country2", TwoLetterIsoCode = "C2", ThreeLetterIsoCode = "CT2", FlagUrl = "https://flagurl2.com", DisplayOrder = 2 },
          //             new Country {  Name = "Country3", TwoLetterIsoCode = "C3", ThreeLetterIsoCode = "CT3", FlagUrl = "https://flagurl3.com", DisplayOrder = 3 },
          //             new Country {  Name = "Country4", TwoLetterIsoCode = "C4", ThreeLetterIsoCode = "CT4", FlagUrl = "https://flagurl4.com", DisplayOrder = 4 },
          //             new Country {  Name = "Country5", TwoLetterIsoCode = "C5", ThreeLetterIsoCode = "CT5", FlagUrl = "https://flagurl5.com", DisplayOrder = 5 },
          //             new Country {  Name = "Country6", TwoLetterIsoCode = "C6", ThreeLetterIsoCode = "CT6", FlagUrl = "https://flagurl6.com", DisplayOrder = 6 },
          //             new Country {  Name = "Country7", TwoLetterIsoCode = "C7", ThreeLetterIsoCode = "CT7", FlagUrl = "https://flagurl7.com", DisplayOrder = 7 },
          //             new Country {  Name = "Country8", TwoLetterIsoCode = "C8", ThreeLetterIsoCode = "CT8", FlagUrl = "https://flagurl8.com", DisplayOrder = 8 },
          //             new Country {  Name = "Country9", TwoLetterIsoCode = "C9", ThreeLetterIsoCode = "CT9", FlagUrl = "https://flagurl9.com", DisplayOrder = 9 },
          //             new Country {   Name = "Country10", TwoLetterIsoCode = "C10", ThreeLetterIsoCode = "CT10", FlagUrl = "https://flagurl10.com", DisplayOrder = 10 }
          //      );
          //  }
          //  context.SaveChanges();

          //  if (!context.Stadiums.Any())
          //  {
          //      context.Stadiums.AddRange(
          //      new Stadium {   Name = "Stadium1", Capacity = 50000, CountryId = 1 },
          //      new Stadium {  Name = "Stadium2", Capacity = 60000, CountryId = 2 },
          //      new Stadium {  Name = "Stadium3", Capacity = 55000, CountryId = 3 },
          //      new Stadium {  Name = "Stadium4", Capacity = 70000, CountryId = 4 },
          //      new Stadium {  Name = "Stadium5", Capacity = 45000, CountryId = 5 },
          //      new Stadium {  Name = "Stadium6", Capacity = 80000, CountryId = 6 },
          //      new Stadium {  Name = "Stadium7", Capacity = 52000, CountryId = 7 },
          //      new Stadium {  Name = "Stadium8", Capacity = 65000, CountryId = 8 },
          //      new Stadium {  Name = "Stadium9", Capacity = 60000, CountryId = 9 },
          //      new Stadium {   Name = "Stadium10", Capacity = 55000, CountryId = 10 }
          //  ); }
          //  context.SaveChanges();
          //  if (!context.Clubs.Any())
          //  {
          //      context.Clubs.AddRange(
          //     new Club {   Name = "Club1", StadiumId = 1 },
          //      new Club {   Name = "Club2", StadiumId = 2 },
          //      new Club {   Name = "Club3", StadiumId = 3 },
          //      new Club {   Name = "Club4", StadiumId = 4 },
          //      new Club {   Name = "Club5", StadiumId = 5 },
          //      new Club {   Name = "Club6", StadiumId = 6 },
          //      new Club {   Name = "Club7", StadiumId = 7 },
          //      new Club {   Name = "Club8", StadiumId = 8 },
          //      new Club {   Name = "Club9", StadiumId = 9 },
          //      new Club {    Name = "Club10", StadiumId = 10 });
          //          }
          //  context.SaveChanges();
          //  if (!context.Players.Any())
          //  {
          //      context.Players.AddRange(
          //          new Player {  Name = "Player1", ShirtNo = 10, ClubId = 1, PlayerPositionId = 1, CountryId = 1, BirthDate = new DateTime(1990, 1, 1), HeightInCm = 180, DisplayOrder = 1 },
          //      new Player {  Name = "Player2", ShirtNo = 11, ClubId = 2, PlayerPositionId = 2, CountryId = 2, BirthDate = new DateTime(1991, 2, 2), HeightInCm = 175, DisplayOrder = 2 },
          //      new Player {  Name = "Player3", ShirtNo = 9, ClubId = 3, PlayerPositionId = 3, CountryId = 3, BirthDate = new DateTime(1992, 3, 3), HeightInCm = 185, DisplayOrder = 3 },
          //      new Player {  Name = "Player4", ShirtNo = 7, ClubId = 4, PlayerPositionId = 4, CountryId = 4, BirthDate = new DateTime(1993, 4, 4), HeightInCm = 170, DisplayOrder = 4 },
          //      new Player {  Name = "Player5", ShirtNo = 8, ClubId = 5, PlayerPositionId = 5, CountryId = 5, BirthDate = new DateTime(1994, 5, 5), HeightInCm = 190, DisplayOrder = 5 },
          //      new Player {  Name = "Player6", ShirtNo = 6, ClubId = 6, PlayerPositionId = 1, CountryId = 6, BirthDate = new DateTime(1995, 6, 6), HeightInCm = 175, DisplayOrder = 6 },
          //      new Player {  Name = "Player7", ShirtNo = 5, ClubId = 7, PlayerPositionId = 2, CountryId = 7, BirthDate = new DateTime(1996, 7, 7), HeightInCm = 180, DisplayOrder = 7 },
          //      new Player {  Name = "Player8", ShirtNo = 4, ClubId = 8, PlayerPositionId = 3, CountryId = 8, BirthDate = new DateTime(1997, 8, 8), HeightInCm = 185, DisplayOrder = 8 },
          //      new Player {  Name = "Player9", ShirtNo = 3, ClubId = 9, PlayerPositionId = 4, CountryId = 9, BirthDate = new DateTime(1998, 9, 9), HeightInCm = 170, DisplayOrder = 9 },
          //      new Player {   Name = "Player10", ShirtNo = 2, ClubId = 10, PlayerPositionId = 5, CountryId = 10, BirthDate = new DateTime(1999, 10, 10), HeightInCm = 190, DisplayOrder = 10 }
          //);
          //  } 

          //  context.SaveChanges();
        }
    }
}
