import { ToastContainer } from "react-toastify"
import { handleCopy } from "../utils/clipboard"
import { formatCurrency } from "../utils/formatters"

const MontlyCalculations = (b:any)=>{
    return (
        <div>
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
                  <td onClick={() => handleCopy(formatCurrency(b.breakdown.monthly.basic))}>{formatCurrency(b.breakdown.monthly.basic)}<ToastContainer /></td>
                </tr>
                <tr style={{backgroundColor:"#d6d0d0"}}>
                  <td>HRA</td>
                  <td onClick={() => handleCopy(formatCurrency(b.breakdown.monthly.hra))}>{formatCurrency(b.breakdown.monthly.hra)}<ToastContainer /></td>
                </tr>
                <tr>
                  <td>Special Allowance</td>
                  <td onClick={() => handleCopy(formatCurrency(b.breakdown.monthly.specialAllowance))}>{formatCurrency(b.breakdown.monthly.specialAllowance)}<ToastContainer /></td>
                </tr>
                <tr style={{backgroundColor:"#d6d0d0"}}>
                  <td>Travel Allowance</td>
                  <td onClick={() => handleCopy(formatCurrency(b.breakdown.monthly.travelAllowance))}>{formatCurrency(b.breakdown.monthly.travelAllowance)}<ToastContainer /></td>
                </tr>
                <tr>
                  <td>Professional Tax</td>
                  <td onClick={() => handleCopy(formatCurrency(b.breakdown.monthly.professionalTax))}>{formatCurrency(b.breakdown.monthly.professionalTax)}<ToastContainer /></td>
                </tr>
                <tr style={{backgroundColor:"#d6d0d0"}}>
                  <td>Medical Tax</td>
                  <td onClick={() => handleCopy(formatCurrency(b.breakdown.monthly.medicalTax))}>{formatCurrency(b.breakdown.monthly.medicalTax)}<ToastContainer /></td>
                </tr>
                <tr style={{ fontWeight: "bold" }}>
                  <td>Gross Salary</td>
                  <td onClick={() => handleCopy(formatCurrency(b.breakdown.monthly.grossSalary))}>{formatCurrency(b.breakdown.monthly.grossSalary)}<ToastContainer /></td>
                </tr>
                <tr style={{ fontWeight: "bold", backgroundColor:"#d6d0d0" }}>
                  <td>Total Deductions</td>
                  <td onClick={() => handleCopy(formatCurrency(b.breakdown.monthly.totalDeductions))}>{formatCurrency(b.breakdown.monthly.totalDeductions)}<ToastContainer /></td>
                </tr>
                <tr style={{ fontWeight: "bold" }}>
                  <td>Net Take Home Income</td>
                  <td onClick={() => handleCopy(formatCurrency(b.breakdown.monthly.taxableIncome))}>{formatCurrency(b.breakdown.monthly.taxableIncome)}<ToastContainer /></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
    )
}

export default MontlyCalculations;