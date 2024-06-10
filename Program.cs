using Dapper;
using Microsoft.Data.SqlClient;
using System.Collections.Generic;
using System.Text.Json;
using System.Threading.Tasks;

var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

app.UseHttpsRedirection();

app.MapGet("/textobject", async () =>
{
    var connStr = "Data Source=(localdb)\\MSSQLLocalDB;Initial Catalog=Database;Integrated Security=True;Connect Timeout=30;Encrypt=False;Trust Server Certificate=False;Application Intent=ReadWrite;Multi Subnet Failover=False";
    using (var conn = new SqlConnection(connStr))
    {
        var products = await conn.QueryAsync<Product>("SELECT * FROM Products");
        foreach(var p in products) Console.WriteLine($"{p.Name} {p.Description}");
        return products;
    }
});

app.UseStaticFiles();
app.Run();

