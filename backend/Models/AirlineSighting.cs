using System;

namespace AirlineSightingAPI.Models
{
    public class AirlineSighting
    {
        public int Id { get; set; }
        public string AirlineName { get; set; }
        public string AirlineShortName { get; set; }
        public string AirlineCode { get; set; }
        public string Location { get; set; }
        public DateTime CreatedDate { get; set; }
        public string PhotoUrl { get; set; }
    }
}
