import React, { useState } from "react";
import { calculateBreakdown } from "./utils/calculations";
import YearlyCalcuation from "./components/yearCalculation";
import MontlyCalculations from "./components/monthlyCalculation";
import BreakdownType from "./interface/breakdownTypes";

const SalaryBreakdown: React.FC = () => {
  const [totalSalary, setTotalSalary] = useState<string>("");
  const [medicalTax, setMedicalTax] = useState<number>(600); 
  const [breakdown, setBreakdown] = useState<BreakdownType | null>(null);

  const handleCalculate = ()=>{
    setBreakdown(calculateBreakdown(totalSalary,medicalTax));
  }
  const handleSalaryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Remove non-numeric characters except commas
    const formattedValue = value.replace(/[^0-9]/g, "");
    // Format the value to Indian currency style
    const formattedWithCommas = formattedValue.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    setTotalSalary(formattedWithCommas);
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
        onClick={handleCalculate}
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
          {<YearlyCalcuation breakdown={breakdown}/>}
          <MontlyCalculations breakdown={breakdown}/>
        </div>
      )}
    </div>
  );
};

export default SalaryBreakdown;