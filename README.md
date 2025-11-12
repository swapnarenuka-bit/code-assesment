# Premium Calculator (React + .NET)

## Overview
A small sample app that calculates monthly death premium based on member details and occupation rating.

## How it works
MonthlyPremium = (SumInsured * RatingFactor * AgeNextBirthday) / (1000 * 12)

> Assumption: monthly is computed by dividing by (1000 * 12). If you intended a different formula, update in both frontend and backend where noted.

## Frontend
- Framework: React
- Main component: `PremiumForm.js`
- CSS classnames: `premium-form-container`, `premium-form-container select`

## Backend
- Framework: .NET 8 Web API
- Controller: `PremiumController` (`api/premium/calculate`)
- Service: `PremiumCalculatorService`
- Models: `MemberRequest`, `PremiumResponse`

## DB (conceptual)
- `OccupationRatings` (Id, OccupationName, RatingCategory, RatingFactor)
- `Members` (Id, Name, AgeNextBirthday, DateOfBirth, OccupationId, SumInsured, CreatedAt)

## DB Design (diagram / representation)

Tables:

OccupationRatings

Id (int, PK)

OccupationName (nvarchar)

RatingCategory (nvarchar) — e.g. "Light Manual", "Professional"

RatingFactor (decimal(6,2))

Members

Id (int, PK)

Name (nvarchar)

AgeNextBirthday (int)

DateOfBirth (nvarchar) — or Date if you parse day

OccupationId (int, FK -> OccupationRatings.Id)

SumInsured (decimal(18,2))

CreatedAt (datetime)

Foreign key: Members.OccupationId -> OccupationRatings.Id

## How to run
1. Frontend: `npm install` then `npm start`.
2. Backend: `dotnet run` from API project folder. POST JSON to `/api/premium/calculate`.

## Assumptions & Notes
- All fields mandatory.
- Occupation change triggers the premium calculation (per requirement).
- DOB accepted as mm/YYYY (stored as string).
- The rating factors are stored in code as a dictionary.

