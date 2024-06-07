using System;

public class ProductTable
{
    internal int ID { get; set; }
    internal string Name { get; set; }
    internal string Description { get; set; }
    internal int Price { get; set; }
    internal int Sale { get; set; }
    internal string PictureURL { get; set; }
    internal int NumberInInventory { get; set; }
    internal string TechnicalInfo { get; set; }
    internal string Category { get; set; }

    public ProductTable() { }
    public ProductTable(int id, string name, string description, int price, int sale, string pictureurl,
        int numberininventory, string technicalinfo, string category)
    {
        ID = id;
        Name = name;
        Description = description;
        Price = price;
        Sale = sale;
        PictureURL = pictureurl;
        NumberInInventory = numberininventory;
        TechnicalInfo = technicalinfo;
        Category = category;
    }
}