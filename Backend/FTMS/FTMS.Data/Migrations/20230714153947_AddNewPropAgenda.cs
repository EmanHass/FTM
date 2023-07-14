using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace FTMS.Data.Migrations
{
    /// <inheritdoc />
    public partial class AddNewPropAgenda : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "EndCompaniesRegistration",
                table: "TrainingAgendas",
                newName: "StartTrainingReport");

            migrationBuilder.AddColumn<DateTime>(
                name: "EndTrainingReport",
                table: "TrainingAgendas",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "EndTrainingReport",
                table: "TrainingAgendas");

            migrationBuilder.RenameColumn(
                name: "StartTrainingReport",
                table: "TrainingAgendas",
                newName: "EndCompaniesRegistration");
        }
    }
}
