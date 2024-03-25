using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SchoolProject.Infrustructure.Migrations
{
    /// <inheritdoc />
    public partial class isdelete1ISoftDelete : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
          

            migrationBuilder.AddColumn<DateTimeOffset>(
                name: "DeletedAt",
                table: "subjects",
                type: "datetimeoffset",
                nullable: true);

            migrationBuilder.AddColumn<DateTimeOffset>(
                name: "DeletedAt",
                table: "students",
                type: "datetimeoffset",
                nullable: true);

            migrationBuilder.AddColumn<DateTimeOffset>(
                name: "DeletedAt",
                table: "Instructor",
                type: "datetimeoffset",
                nullable: true);

            migrationBuilder.AddColumn<DateTimeOffset>(
                name: "DeletedAt",
                table: "departments",
                type: "datetimeoffset",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "DeletedAt",
                table: "ViewDepartment");

            migrationBuilder.DropColumn(
                name: "DeletedAt",
                table: "subjects");

            migrationBuilder.DropColumn(
                name: "DeletedAt",
                table: "students");

            migrationBuilder.DropColumn(
                name: "DeletedAt",
                table: "Instructor");

            migrationBuilder.DropColumn(
                name: "DeletedAt",
                table: "departments");
        }
    }
}
