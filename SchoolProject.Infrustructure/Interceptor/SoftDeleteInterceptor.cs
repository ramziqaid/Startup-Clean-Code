using Microsoft.EntityFrameworkCore.Diagnostics;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml;
using SchoolProject.Data.Entities;

namespace SchoolProject.Infrustructure.Interceptor
{
    public class SoftDeleteInterceptor : SaveChangesInterceptor
    {
        public override InterceptionResult<int> SavingChanges(
            DbContextEventData eventData,
            InterceptionResult<int> result)
        {
            foreach (var entry in eventData.Context.ChangeTracker.Entries())
            {
                if (entry.State == EntityState.Deleted && entry.Entity is ISoftDelete entity)
                {
                    entity.IsDeleted = true;
                    entry.State = EntityState.Modified;
                    entity.DeletedAt = DateTime.UtcNow;
                }
            }

            return base.SavingChanges(eventData, result);
        }
        public override ValueTask<InterceptionResult<int>> SavingChangesAsync(
            DbContextEventData eventData,
            InterceptionResult<int> result,
            CancellationToken cancellationToken = default)
        {
            foreach (var entry in eventData.Context.ChangeTracker.Entries())
            {
                if (entry.State == EntityState.Deleted && entry.Entity is ISoftDelete entity)
                {
                    entity.IsDeleted = true;
                    entry.State = EntityState.Modified;
                    entity.DeletedAt = DateTime.UtcNow;
                }
            }

            return base.SavingChangesAsync(eventData, result);
        }
    }
}
