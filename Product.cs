using System;

public class Product
{
    public int ID { get; set; }
    public string Name { get; set; }
    public string Description { get; set; }
    public int Price { get; set; }
    public int Sale { get; set; }
    public string PictureURL { get; set; }
    public int NumberInInventory { get; set; }
    public string TechnicalInfo { get; set; }
    public string Category { get; set; }

    public Product(int id, string name, string description, int price, int sale, string pictureurl,
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