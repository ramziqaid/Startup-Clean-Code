using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SchoolProject.Infrustructure.Abstracts
{
    public interface IAuditable
    {
        DateTime CreatedOnUtc { get; }

        DateTime? ModifiedOnUtc { get; }
    }
}
