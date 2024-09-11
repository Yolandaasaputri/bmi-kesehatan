let selectedGender = null;

function selectGender(gender) {
    selectedGender = gender;
    document.getElementById('male').classList.remove('active');
    document.getElementById('female').classList.remove('active');
    document.getElementById(gender).classList.add('active');
}

function changeValue(field, amount) {
    const input = document.getElementById(field);
    let value = parseInt(input.value);
    value += amount;
    if (value < 0) value = 0;
    input.value = value;
}

function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100; // Convert cm to m
    const bmi = weight / (height * height);
    let category = '';

    if (bmi < 18.5) {
        category = 'Berat badan kurang';
    } else if (bmi < 24.9) {
        category = 'Berat badan normal';
    } else if (bmi < 29.9) {
        category = 'Kelebihan berat badan';
    } else {
        category = 'Obesitas';
    }

    document.getElementById('result').innerText = `BMI Anda adalah ${bmi.toFixed(2)} (${category})`;
}
