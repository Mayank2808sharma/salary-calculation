export const calculateBreakdown = (totalSalary:string,medicalTax:number) => {
    const salary = parseInt(totalSalary.replace(/,/g, ''), 10); // Remove commas and parse as number
    const basic = salary * 0.5;
    const hra = basic * 0.5;
    const remaining = salary - (basic + hra);

    // Adjusting the split between travel allowance and special allowance
    const travelAllowance = remaining * 0.4; // 40% of remaining salary
    const specialAllowance = remaining * 0.6; // 60% of remaining salary

    const professionalTax = 2400; // Annual
    const annualMedicalTax = medicalTax * 12; // ₹600 per month or user input annually
    const totalDeductions = professionalTax + annualMedicalTax;
    const taxableIncome = salary - totalDeductions;

    return ({
      yearly: {
        basic,
        hra,
        travelAllowance,
        specialAllowance,
        professionalTax,
        medicalTax: annualMedicalTax,
        totalDeductions,
        taxableIncome,
        grossSalary: salary, // Gross Salary added for yearly
      },
      monthly: {
        basic: basic / 12,
        hra: hra / 12,
        travelAllowance: travelAllowance / 12,
        specialAllowance: specialAllowance / 12,
        professionalTax: professionalTax / 12,
        medicalTax: annualMedicalTax / 12,
        totalDeductions: totalDeductions / 12,
        taxableIncome: taxableIncome / 12,
        grossSalary: salary / 12, // Gross Salary added for monthly
      },
    });
  };