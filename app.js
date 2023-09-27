document.addEventListener("DOMContentLoaded", function () {
    const calculateButton = document.getElementById("calculate");
    calculateButton.addEventListener("click", calculateLoan);

    function calculateLoan() {
        const loanAmount = parseFloat(document.getElementById("loan-amount").value);
        const interestRate = parseFloat(document.getElementById("interest-rate").value) / 100;
        const loanTerm = parseFloat(document.getElementById("loan-term").value);

        if (isNaN(loanAmount) || isNaN(interestRate) || isNaN(loanTerm)) {
            alert("Please enter valid numbers.");
            return;
        }

        const monthlyInterestRate = interestRate / 12;
        const numberOfPayments = loanTerm * 12;

        const monthlyPayment = (loanAmount * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));
        
        const resultElement = document.getElementById("result");
        resultElement.textContent = `Monthly Payment: $${monthlyPayment.toFixed(2)}`;
    }
});
