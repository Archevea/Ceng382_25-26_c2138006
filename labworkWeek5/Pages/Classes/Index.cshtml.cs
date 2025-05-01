using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using labworkWeek5.Data;
using labworkWeek5.Models;

namespace labworkWeek5.Pages.Classes
{
    public class IndexModel : PageModel
    {
        private readonly SchoolDbContext _context;

        public IndexModel(SchoolDbContext context)
        {
            _context = context;
        }

        public IList<Class> ClassList { get; set; }

        public async Task OnGetAsync()
        {
            ClassList = await _context.Classes.ToListAsync();
        }
    }
}
