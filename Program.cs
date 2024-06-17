using Dapper;
using Microsoft.Data.SqlClient;
using System.Collections.Generic;
using System.Text.Json;
using System.Threading.Tasks;
using Another_Nettbutikk;

var app = WebApplication.CreateBuilder(args).Build();

// app.UseHttpsRedirection();

var connStr = "Data Source=(localdb)\\MSSQLLocalDB;Initial Catalog=Database;Integrated Security=True;Connect Timeout=30;Encrypt=False;Trust Server Certificate=False;Application Intent=ReadWrite;Multi Subnet Failover=False";
var conn = new SqlConnection(connStr);

app.MapGet("/products", async () => // Legge til produkter til nettside
{
    var products = await conn.QueryAsync<Product>("SELECT * FROM Products");
    return products;
});


app.MapPost("/genUser", async (HttpContext context) => // Legge til bruker til database
{
    var body = await new StreamReader(context.Request.Body).ReadToEndAsync();
    var user = JsonSerializer.Deserialize<genUser>(body);
    var result = await conn.ExecuteAsync(@"
        INSERT INTO Users 
        (FirstName, LastName, Email, Password, PhoneNumber, DateCreated, Address, ZipCode, ZipArea) 
        VALUES 
        (@FirstName, @LastName, @Email, @Password, @PhoneNumber, @DateCreated, @Address, @ZipCode, @ZipArea)", user);
    return Results.Ok(result);
});

app.MapPost("/genReview", async () =>
{

});

app.UseStaticFiles();
app.Run();

