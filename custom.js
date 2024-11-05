let studentName = "";
let num1, num2, sumResult;

function resetPage() {
    document.getElementById("result").innerHTML = "";
    document.getElementById("compute").innerHTML = "";
    document.getElementById("btnInputTwoNumbers").disabled = false;  
    document.getElementById("btnCalculateGrade").disabled = true;   
    document.getElementById("btnConfirmSubmission").disabled = true; 
}

function inputTwoNumbers() {
    studentName = prompt("Enter Your Name");
    if (studentName === null) return resetPage();
    num1 = parseInt(prompt("Enter First Number"));
    if (isNaN(num1)) return resetPage();
    num2 = parseInt(prompt("Enter Second Number"));
    if (isNaN(num2)) return resetPage();
    sumResult = computeTwoNumbers(num1, num2);
    alert("Your Name is: " + studentName +
        "\nFirst Number: " + num1 +
        "\nSecond Number: " + num2 +
        "\nThe Sum of Two Numbers is: " + sumResult);
    document.getElementById("result").innerHTML = "<span class = 'text-danger'>RESULT</span> <br>Name: " + studentName + "<br>Sum: " + sumResult;
    document.getElementById("btnInputTwoNumbers").disabled = true;  
    document.getElementById("btnCalculateGrade").disabled = false;  
}
function computeTwoNumbers(num1, num2) {
    return num1 + num2;
}

function calculateGrade() {
    let totalScore = parseFloat(prompt("Enter Total Score"));
    if (isNaN(totalScore)) return resetPage();

    let totalItems = parseInt(prompt("Enter Total Items"));
    if (isNaN(totalItems)) return resetPage();

    let grade = -4 * (totalScore / totalItems) + 5;
    let remarks = (grade >= 3.1) ? "Failed" : "Passed";

    alert("Your Name is: " + studentName +
        "\nYour Total Grade is: " + grade.toFixed(2) +
        "\nRemarks: " + remarks);

    document.getElementById("result").innerHTML += "<br>Total Grade: " + grade.toFixed(2) + "<br>Remarks: " + remarks;
    document.getElementById("btnCalculateGrade").disabled = true; 
    document.getElementById("btnConfirmSubmission").disabled = false;  
}

function confirmSubmission() {
    if (confirm("Do You Want to Submit?")) {
        alert("Submission Confirmed!");
        studentName = "";  
        num1 = num2 = sumResult = null;  
        document.getElementById("result").innerHTML = "";  
        document.getElementById("btnInputTwoNumbers").disabled = false;  
        document.getElementById("btnCalculateGrade").disabled = true;  
        document.getElementById("btnConfirmSubmission").disabled = true;  
    } else {
        resetPage();  
    }
}