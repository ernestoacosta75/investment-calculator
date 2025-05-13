import { calculateInvestmentResults, formatter } from "../../util/investment";

const Results = ({ userInput }) => {
    const resultsData = calculateInvestmentResults(userInput);
    console.log("ResultsData", resultsData);
    
    return (<>
    <table id="result">
        <thead>
            <tr>
                <th>Annual Investment</th>
                <th>Interest</th>
                <th>Value End of Year</th>
                <th>Year</th>
            </tr>
        </thead>
        <tbody>
            {resultsData.map((result) => (
                <tr key={result.year}>
                    <td>{formatter.format(result.annualInvestment)}</td>
                    <td>{formatter.format(result.interest)}</td>
                    <td>{formatter.format(result.valueEndOfYear)}</td>
                    <td>{result.year}</td>                    
                </tr>
            ))}
        </tbody>
        </table>
        </>
    );
};

export default Results;