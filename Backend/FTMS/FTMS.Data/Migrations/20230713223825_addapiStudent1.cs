using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace FTMS.Data.Migrations
{
    /// <inheritdoc />
    public partial class addapiStudent1 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "ApiStudentInfoUniversities",
                columns: table => new
                {
                    id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    FirstName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    LastName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    UniversityStudentNum = table.Column<string>(type: "nvarchar(8)", maxLength: 8, nullable: false),
                    NumHoursCompleted = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ApiStudentInfoUniversities", x => x.id);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ApiStudentInfoUniversities");
        }
    }
}
