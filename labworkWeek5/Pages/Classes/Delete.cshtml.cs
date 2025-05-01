using labworkWeek5.Data;  // SchoolDbContext burada yer almalı
using labworkWeek5.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;

namespace labworkWeek5.Pages.Classes
{
    public class DeleteModel : PageModel
    {
        private readonly SchoolDbContext _context;

        public DeleteModel(SchoolDbContext context)
        {
            _context = context;
        }

        [BindProperty]
        public Class Class { get; set; }

        public async Task<IActionResult> OnGetAsync(int id)
        {
            Class = await _context.Classes.FindAsync(id);

            if (Class == null)
            {
                return NotFound();
            }

            return Page();
        }

        public async Task<IActionResult> OnPostAsync()
        {
            if (Class == null)
            {
                return NotFound();
            }

            _context.Classes.Remove(Class);
            await _context.SaveChangesAsync();

            return RedirectToPage("./Index");
        }
    }
}
