using Microsoft.EntityFrameworkCore;
using labworkWeek5.Models;

namespace labworkWeek5.Data
{
    public class SchoolDbContext : DbContext
    {
        public SchoolDbContext(DbContextOptions<SchoolDbContext> options)
            : base(options)
        {
        }

        public DbSet<Class> Classes { get; set; }
    }
}
