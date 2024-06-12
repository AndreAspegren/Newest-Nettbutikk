using Dapper;
using Microsoft.Data.SqlClient;
using System.Collections.Generic;
using System.Text.Json;
using System.Threading.Tasks;

var app = WebApplication.CreateBuilder(args).Build();

app.UseHttpsRedirection();

app.MapGet("/products", async () =>
{
    var connStr = "Data Source=(localdb)\\MSSQLLocalDB;Initial Catalog=Database;Integrated Security=True;Connect Timeout=30;Encrypt=False;Trust Server Certificate=False;Application Intent=ReadWrite;Multi Subnet Failover=False";
    var conn = new SqlConnection(connStr);
    var products = await conn.QueryAsync<Product>("SELECT * FROM Products");
    return products;
});

app.UseStaticFiles();
app.Run();

