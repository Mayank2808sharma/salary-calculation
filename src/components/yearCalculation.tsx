import { ToastContainer } from "react-toastify"
import { handleCopy } from "../utils/clipboard"
import { formatCurrency } from "../utils/formatters"


const YearlyCalcuation = (b:any)=>{
    return (
        <div>
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
                  <td onClick={() => handleCopy(formatCurrency(b.breakdown.yearly.basic))}>{formatCurrency(b.breakdown.yearly.basic)} <ToastContainer />
                  </td>
                </tr>
                <tr style={{backgroundColor:"#d6d0d0"}}>
                  <td>HRA</td>
                  <td onClick={() => handleCopy(formatCurrency(b.breakdown.yearly.hra))}>{formatCurrency(b.breakdown.yearly.hra)}<ToastContainer /></td>
                </tr>
                <tr>
                  <td>Special Allowance</td>
                  <td onClick={() => handleCopy(formatCurrency(b.breakdown.yearly.specialAllowance))}>{formatCurrency(b.breakdown.yearly.specialAllowance)}<ToastContainer /></td>
                </tr>
                <tr style={{backgroundColor:"#d6d0d0"}}>
                  <td>Travel Allowance</td>
                  <td onClick={() => handleCopy(formatCurrency(b.breakdown.yearly.travelAllowance))}>{formatCurrency(b.breakdown.yearly.travelAllowance)}<ToastContainer /></td>
                </tr>
                <tr>
                  <td>Professional Tax</td>
                  <td onClick={() => handleCopy(formatCurrency(b.breakdown.yearly.professionalTax))}>{formatCurrency(b.breakdown.yearly.professionalTax)}<ToastContainer /></td>
                </tr>
                <tr style={{backgroundColor:"#d6d0d0"}}>
                  <td>Medical Tax</td>
                  <td onClick={() => handleCopy(formatCurrency(b.breakdown.yearly.medicalTax))}>{formatCurrency(b.breakdown.yearly.medicalTax)}<ToastContainer /></td>
                </tr>
                <tr style={{ fontWeight: "bold" }}>
                  <td>Gross Salary</td>
                  <td onClick={() => handleCopy(formatCurrency(b.breakdown.yearly.grossSalary))}>{formatCurrency(b.breakdown.yearly.grossSalary)}<ToastContainer /></td>
                </tr>
                <tr style={{ fontWeight: "bold",backgroundColor:"#d6d0d0" }}>
                  <td>Total Deductions</td>
                  <td onClick={() => handleCopy(formatCurrency(b.breakdown.yearly.totalDeductions))}>{formatCurrency(b.breakdown.yearly.totalDeductions)}<ToastContainer /></td>
                </tr>
                <tr style={{ fontWeight: "bold" }}>
                  <td>Net Take Home Income</td>
                  <td onClick={() => handleCopy(formatCurrency(b.breakdown.yearly.taxableIncome))}>{formatCurrency(b.breakdown.yearly.taxableIncome)}<ToastContainer /></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
    )
}
export default YearlyCalcuation;