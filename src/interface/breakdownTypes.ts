export default interface BreakdownType {
  yearly: {
    basic: number;
    hra: number;
    travelAllowance: number;
    specialAllowance: number;
    professionalTax: number;
    medicalTax: number;
    totalDeductions: number;
    taxableIncome: number;
    grossSalary: number;
  };
  monthly: {
    basic: number;
    hra: number;
    travelAllowance: number;
    specialAllowance: number;
    professionalTax: number;
    medicalTax: number;
    totalDeductions: number;
    taxableIncome: number;
    grossSalary: number;
  };
}