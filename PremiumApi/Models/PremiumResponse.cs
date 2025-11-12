namespace PremiumApi.Models {
    public class PremiumResponse {
        public decimal MonthlyPremium { get; set; }
        public decimal AnnualPremium { get; set; }
        public decimal RatingFactor { get; set; }
        public int Age { get; set; }
    }
}