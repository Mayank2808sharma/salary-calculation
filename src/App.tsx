import React, { useState } from "react";
import YearlyCalcuation from "./components/yearCalculation";
import MontlyCalculations from "./components/monthlyCalculation";
import BreakdownType from "./interface/breakdownTypes";
import Form from "./components/form";
const SalaryBreakdown: React.FC = () => {
  const [totalSalary, setTotalSalary] = useState<string>("");
  const [medicalTax, setMedicalTax] = useState<number>(600); 
  const [breakdown, setBreakdown] = useState<BreakdownType | null>(null);

  return (
    <div style={{ padding: "20px", maxWidth: "100%", margin: "0 auto", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
      <Form totalSalary={totalSalary} setTotalSalary={setTotalSalary} medicalTax={medicalTax} setMedicalTax={setMedicalTax} setBreakdown={setBreakdown}/>

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