function calculatePercentage() {
    const marksObtained = parseFloat(document.getElementById('marks-obtained').value);
    const totalMarks = parseFloat(document.getElementById('total-marks').value);

    if (isNaN(marksObtained) || isNaN(totalMarks)) {
        alert('Please enter valid numbers');
        return;
    }

    const percentage = (marksObtained / totalMarks) * 100;
    let grade = '';

    if (percentage >= 90) {
        grade = 'A';
    } else if (percentage >= 80) {
        grade = 'B';
    } else if (percentage >= 70) {
        grade = 'C';
    } else if (percentage >= 60) {
        grade = 'D';
    } else {
        grade = 'F';
    }

    document.getElementById('percentage').textContent = `Percentage: ${percentage.toFixed(2)}%`;
    document.getElementById('grade').textContent = `Grade: ${grade}`;
}