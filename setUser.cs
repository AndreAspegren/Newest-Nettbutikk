namespace Another_Nettbutikk
{
    public class setUser
    {
        public int ID { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string PhoneNumber { get; set; }
        public string DateCreated { get; set; }
        public string Address { get; set; }
        public string ZipCode { get; set; }
        public string ZipArea { get; set; }

        public setUser(int id, string firstName, string lastName, string email, string password, string phoneNumber, string dateCreated, string address, string zipCode, string zipArea)
        {
            ID = id;
            FirstName = firstName;
            LastName = lastName;
            Email = email;
            Password = password;
            PhoneNumber = phoneNumber;
            DateCreated = dateCreated;
            Address = address;
            ZipCode = zipCode;
            ZipArea = zipArea;
        }
    }
}
