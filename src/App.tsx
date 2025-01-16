import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';

interface Breakdown {
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

const SalaryBreakdown: React.FC = () => {
  const [totalSalary, setTotalSalary] = useState<string>(""); // Use string to handle formatted input
  const [medicalTax, setMedicalTax] = useState<number>(600); // Default value of ₹600
  const [breakdown, setBreakdown] = useState<Breakdown | null>(null);

  const formatCurrency = (amount: number) => {
    return amount.toLocaleString('en-IN', { style: 'currency', currency: 'INR' });
  };

  const calculateBreakdown = () => {
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

    setBreakdown({
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

  const handleSalaryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Remove non-numeric characters except commas
    const formattedValue = value.replace(/[^0-9]/g, "");
    // Format the value to Indian currency style
    const formattedWithCommas = formattedValue.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    setTotalSalary(formattedWithCommas);
  };
  const handleCopy = (text:string)=>{
    navigator.clipboard.writeText(text).then(() => {
      toast.success("Text Copied");
    });
  };

  return (
    <div style={{ padding: "20px", maxWidth: "100%", margin: "0 auto", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
      <h2 style={{ fontSize: "36px", fontWeight: "bold", marginBottom: "20px" }}>
        Salary Breakdown Calculator
      </h2>

      <div style={{ marginBottom: "20px", textAlign: "left", width: "100%", maxWidth: "400px" }}>
        <label style={{ fontSize: "18px", display: "block", marginBottom: "5px" }}>
          Enter Total Salary:
        </label>
        <input
          type="text"
          placeholder="Enter total salary"
          value={totalSalary}
          onChange={handleSalaryChange}
          style={{
            padding: "10px",
            width: "100%",
            marginBottom: "20px",
            borderRadius: "4px",
            border: "1px solid #ddd",
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        />
      </div>

      <div style={{ marginBottom: "20px", textAlign: "left", width: "100%", maxWidth: "400px" }}>
        <label style={{ fontSize: "18px", display: "block", marginBottom: "5px" }}>
          Enter Medical Tax (monthly):
        </label>
        <input
          type="number"
          placeholder="Enter medical tax (monthly)"
          value={medicalTax || ""}
          onChange={(e) => setMedicalTax(Number(e.target.value))}
          style={{
            padding: "10px",
            width: "100%",
            marginBottom: "20px",
            borderRadius: "4px",
            border: "1px solid #ddd",
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        />
      </div>

      <button
        onClick={calculateBreakdown}
        style={{
          padding: "10px",
          width: "100%",
          backgroundColor: "#007BFF",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        Calculate
      </button>

      {breakdown && (
        <div style={{ marginTop: "30px", width: "100%", maxWidth: "900px" }}>
          <h3 style={{ fontSize: "28px", fontWeight: "bold" }}>Yearly Breakdown</h3>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: "30px" }}>
              <thead>
                <tr style={{ backgroundColor: "#f4f4f4", textAlign: "left" }}>
                  <th>Category</th>
                  <th>Amount (₹)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Basic</td>
                  <td onClick={() => handleCopy(formatCurrency(breakdown.yearly.basic))}>{formatCurrency(breakdown.yearly.basic)} <ToastContainer />
                  </td>
                </tr>
                <tr style={{backgroundColor:"#d6d0d0"}}>
                  <td>HRA</td>
                  <td onClick={() => handleCopy(formatCurrency(breakdown.yearly.hra))}>{formatCurrency(breakdown.yearly.hra)}<ToastContainer /></td>
                </tr>
                <tr>
                  <td>Special Allowance</td>
                  <td onClick={() => handleCopy(formatCurrency(breakdown.yearly.specialAllowance))}>{formatCurrency(breakdown.yearly.specialAllowance)}<ToastContainer /></td>
                </tr>
                <tr style={{backgroundColor:"#d6d0d0"}}>
                  <td>Travel Allowance</td>
                  <td onClick={() => handleCopy(formatCurrency(breakdown.yearly.travelAllowance))}>{formatCurrency(breakdown.yearly.travelAllowance)}<ToastContainer /></td>
                </tr>
                <tr>
                  <td>Professional Tax</td>
                  <td onClick={() => handleCopy(formatCurrency(breakdown.yearly.professionalTax))}>{formatCurrency(breakdown.yearly.professionalTax)}<ToastContainer /></td>
                </tr>
                <tr style={{backgroundColor:"#d6d0d0"}}>
                  <td>Medical Tax</td>
                  <td onClick={() => handleCopy(formatCurrency(breakdown.yearly.medicalTax))}>{formatCurrency(breakdown.yearly.medicalTax)}<ToastContainer /></td>
                </tr>
                <tr style={{ fontWeight: "bold" }}>
                  <td>Gross Salary</td>
                  <td onClick={() => handleCopy(formatCurrency(breakdown.yearly.grossSalary))}>{formatCurrency(breakdown.yearly.grossSalary)}<ToastContainer /></td>
                </tr>
                <tr style={{ fontWeight: "bold",backgroundColor:"#d6d0d0" }}>
                  <td>Total Deductions</td>
                  <td onClick={() => handleCopy(formatCurrency(breakdown.yearly.totalDeductions))}>{formatCurrency(breakdown.yearly.totalDeductions)}<ToastContainer /></td>
                </tr>
                <tr style={{ fontWeight: "bold" }}>
                  <td>Net Take Home Income</td>
                  <td onClick={() => handleCopy(formatCurrency(breakdown.yearly.taxableIncome))}>{formatCurrency(breakdown.yearly.taxableIncome)}<ToastContainer /></td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 style={{ fontSize: "28px", fontWeight: "bold" }}>Monthly Breakdown</h3>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ backgroundColor: "#f4f4f4", textAlign: "left" }}>
                  <th>Category</th>
                  <th>Amount (₹)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Basic</td>
                  <td onClick={() => handleCopy(formatCurrency(breakdown.monthly.basic))}>{formatCurrency(breakdown.monthly.basic)}<ToastContainer /></td>
                </tr>
                <tr style={{backgroundColor:"#d6d0d0"}}>
                  <td>HRA</td>
                  <td onClick={() => handleCopy(formatCurrency(breakdown.monthly.hra))}>{formatCurrency(breakdown.monthly.hra)}<ToastContainer /></td>
                </tr>
                <tr>
                  <td>Special Allowance</td>
                  <td onClick={() => handleCopy(formatCurrency(breakdown.monthly.specialAllowance))}>{formatCurrency(breakdown.monthly.specialAllowance)}<ToastContainer /></td>
                </tr>
                <tr style={{backgroundColor:"#d6d0d0"}}>
                  <td>Travel Allowance</td>
                  <td onClick={() => handleCopy(formatCurrency(breakdown.monthly.travelAllowance))}>{formatCurrency(breakdown.monthly.travelAllowance)}<ToastContainer /></td>
                </tr>
                <tr>
                  <td>Professional Tax</td>
                  <td onClick={() => handleCopy(formatCurrency(breakdown.monthly.professionalTax))}>{formatCurrency(breakdown.monthly.professionalTax)}<ToastContainer /></td>
                </tr>
                <tr style={{backgroundColor:"#d6d0d0"}}>
                  <td>Medical Tax</td>
                  <td onClick={() => handleCopy(formatCurrency(breakdown.monthly.medicalTax))}>{formatCurrency(breakdown.monthly.medicalTax)}<ToastContainer /></td>
                </tr>
                <tr style={{ fontWeight: "bold" }}>
                  <td>Gross Salary</td>
                  <td onClick={() => handleCopy(formatCurrency(breakdown.monthly.grossSalary))}>{formatCurrency(breakdown.monthly.grossSalary)}<ToastContainer /></td>
                </tr>
                <tr style={{ fontWeight: "bold", backgroundColor:"#d6d0d0" }}>
                  <td>Total Deductions</td>
                  <td onClick={() => handleCopy(formatCurrency(breakdown.monthly.totalDeductions))}>{formatCurrency(breakdown.monthly.totalDeductions)}<ToastContainer /></td>
                </tr>
                <tr style={{ fontWeight: "bold" }}>
                  <td>Net Take Home Income</td>
                  <td onClick={() => handleCopy(formatCurrency(breakdown.monthly.taxableIncome))}>{formatCurrency(breakdown.monthly.taxableIncome)}<ToastContainer /></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default SalaryBreakdown;
