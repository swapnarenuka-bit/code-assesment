namespace PremiumApi.Models {
    public class MemberRequest {
        public string Name { get; set; }
        public int AgeNextBirthday { get; set; }
        public string DateOfBirth { get; set; }
        public string Occupation { get; set; }
        public decimal SumInsured { get; set; }
    }
}