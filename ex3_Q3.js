function evaluateStudent() {
    let grade1 = parseFloat(document.getElementById('grade1').value);
    let grade2 = parseFloat(document.getElementById('grade2').value);
    let absences = parseInt(document.getElementById('absences').value);
    let totalClasses = 20;
    let minAttendance = 0.7 * totalClasses;
    let minAverage = 6.5;
    let average = (grade1 + grade2) / 2;
    let result = "";

    if (absences > (totalClasses - minAttendance) && average < minAverage) {
        result = "Failed due to absences and insufficient grade";
    } else if (absences > (totalClasses - minAttendance)) {
        result = "Failed due to absences";
    } else if (average < minAverage) {
        result = "Failed due to insufficient grade";
    } else {
        result = "Approved";
    }
    document.getElementById('result').innerHTML = result;
}
