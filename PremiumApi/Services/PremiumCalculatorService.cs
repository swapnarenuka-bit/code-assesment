using PremiumApi.Models;
using System.Collections.Generic;

namespace PremiumApi.Services {
    public class PremiumCalculatorService {
        private static readonly Dictionary<string, decimal> factorMap = new() {
            {"Cleaner", 11.5m},
            {"Doctor", 1.5m},
            {"Author", 2.25m},
            {"Farmer", 31.75m},
            {"Mechanic", 31.75m},
            {"Florist", 11.5m},
            {"Other", 31.75m}
        };

        public PremiumResponse CalculateMonthlyPremium(MemberRequest req) {
            if (!factorMap.TryGetValue(req.Occupation, out var factor)) factor = 1m;
            var age = req.AgeNextBirthday;
            var cover = req.SumInsured;

            var monthly = (cover * factor * age) / 1000m * 12m;
            var annual = monthly * 12m;
            return new PremiumResponse {
                MonthlyPremium = decimal.Round(monthly, 2),
                AnnualPremium = decimal.Round(annual, 2),
                RatingFactor = factor,
                Age = age
            };
        }
    }
}