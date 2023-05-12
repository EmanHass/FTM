using FTMS.Data.Model;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FTMS.Data.DataLayer
{
    public class FTMSDbContext:IdentityDbContext
    {
        public FTMSDbContext(DbContextOptions<FTMSDbContext> options) : base(options) { }
       


        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
            builder.Entity<Training>()
                        .HasDiscriminator<string>("TrainingType")
                        .HasValue< FieldTraining > ("FieldTraining")
                        .HasValue<TrainingImportance>("TrainingImportance")
                        .HasValue<TrainingRequirement>("TrainingRequirement");
        }

        public DbSet<Training> Informations { get; set; }
        public DbSet<FieldTraining> FieldTrainings { get; set; }    
        public DbSet<TrainingImportance> TrainingImportances { get; set; }
        public DbSet<TrainingRequirement> TrainingRequirements { get; set; }
        public DbSet<TrainingCompany> TrainingCompanys { get; set; }
    }
}
