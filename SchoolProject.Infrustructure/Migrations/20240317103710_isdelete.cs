using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SchoolProject.Infrustructure.Migrations
{
    /// <inheritdoc />
    public partial class isdelete : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
             

            migrationBuilder.AddColumn<Guid>(
                name: "Id",
                table: "subjects",
                type: "uniqueidentifier",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"));

            migrationBuilder.AddColumn<bool>(
                name: "IsDeleted",
                table: "subjects",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<Guid>(
                name: "Id",
                table: "students",
                type: "uniqueidentifier",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"));

            migrationBuilder.AddColumn<bool>(
                name: "IsDeleted",
                table: "students",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<Guid>(
                name: "Id",
                table: "Instructor",
                type: "uniqueidentifier",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"));

            migrationBuilder.AddColumn<bool>(
                name: "IsDeleted",
                table: "Instructor",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<Guid>(
                name: "Id",
                table: "departments",
                type: "uniqueidentifier",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"));

            migrationBuilder.AddColumn<bool>(
                name: "IsDeleted",
                table: "departments",
                type: "bit",
                nullable: false,
                defaultValue: false);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Id",
                table: "ViewDepartment");

            migrationBuilder.DropColumn(
                name: "IsDeleted",
                table: "ViewDepartment");

            migrationBuilder.DropColumn(
                name: "Id",
                table: "subjects");

            migrationBuilder.DropColumn(
                name: "IsDeleted",
                table: "subjects");

            migrationBuilder.DropColumn(
                name: "Id",
                table: "students");

            migrationBuilder.DropColumn(
                name: "IsDeleted",
                table: "students");

            migrationBuilder.DropColumn(
                name: "Id",
                table: "Instructor");

            migrationBuilder.DropColumn(
                name: "IsDeleted",
                table: "Instructor");

            migrationBuilder.DropColumn(
                name: "Id",
                table: "departments");

            migrationBuilder.DropColumn(
                name: "IsDeleted",
                table: "departments");
        }
    }
}
