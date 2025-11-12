using Microsoft.AspNetCore.Mvc;
using PremiumApi.Models;
using PremiumApi.Services;

namespace PremiumApi.Controllers {
    [ApiController]
    [Route("api/[controller]")]
    public class PremiumController : ControllerBase {
        private readonly PremiumCalculatorService _svc;
        public PremiumController() {
            _svc = new PremiumCalculatorService();
        }

        [HttpPost("calculate")]
        public ActionResult<PremiumResponse> Calculate([FromBody] MemberRequest req) {
            if (req == null) return BadRequest();
           
            if (string.IsNullOrWhiteSpace(req.Name) || req.AgeNextBirthday <= 0 || req.SumInsured <= 0 || string.IsNullOrEmpty(req.Occupation))
                return BadRequest("All fields are mandatory and must be valid.");

            var resp = _svc.CalculateMonthlyPremium(req);
            return Ok(resp);
        }
    }
}