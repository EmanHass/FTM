using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace FTMS.Data.Migrations
{
    /// <inheritdoc />
    public partial class addapiStudent : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "FirestName",
                table: "AspNetUsers",
                newName: "UniversityStudentNum");

            migrationBuilder.AddColumn<string>(
                name: "FirstName",
                table: "AspNetUsers",
                type: "nvarchar(max)",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "FirstName",
                table: "AspNetUsers");

            migrationBuilder.RenameColumn(
                name: "UniversityStudentNum",
                table: "AspNetUsers",
                newName: "FirestName");
        }
    }
}
