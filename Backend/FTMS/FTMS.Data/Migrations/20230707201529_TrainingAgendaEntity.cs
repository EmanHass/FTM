using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace FTMS.Data.Migrations
{
    /// <inheritdoc />
    public partial class TrainingAgendaEntity : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "TrainingAgendas",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    NameSemester = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    AcademicYear = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    StatusSemester = table.Column<bool>(type: "bit", nullable: false),
                    StartTraining = table.Column<DateTime>(type: "datetime2", nullable: false),
                    EndTraining = table.Column<DateTime>(type: "datetime2", nullable: false),
                    StartStudentRegistration = table.Column<DateTime>(type: "datetime2", nullable: false),
                    EndStudentRegistration = table.Column<DateTime>(type: "datetime2", nullable: false),
                    EndCompaniesRegistration = table.Column<DateTime>(type: "datetime2", nullable: false),
                    IsDelete = table.Column<bool>(type: "bit", nullable: false),
                    CreateAt = table.Column<DateTime>(type: "datetime2", nullable: false),
                    UpdateAt = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TrainingAgendas", x => x.Id);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "TrainingAgendas");
        }
    }
}
