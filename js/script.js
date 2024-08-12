// Mengambil elemen dari HTML
const bmiForm = document.getElementById('bmiForm');
const resultSection = document.getElementById('result');
const resultGender = document.getElementById('resultGender');
const bmiValue = document.getElementById('bmiValue');
const bmiStatus = document.getElementById('bmiStatus');
const bmiExplanation = document.getElementById('bmiExplanation');


// Menambahkan event listener pada form submit
bmiForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah reload halaman

    // Mengambil nilai input dari form
    const gender = document.getElementById('gender').value;
    const berat = parseFloat(document.getElementById('berat').value);
    const tinggi = parseFloat(document.getElementById('tinggi').value) / 100; // Mengubah cm menjadi meter

    // Validasi input
    if (isNaN(berat) || isNaN(tinggi) || berat <= 0 || tinggi <= 0) {
        alert('Harap masukkan nilai yang valid!');
        return;
    }

    // Logika perhitungan BMI
    const bmi = berat / (tinggi * tinggi);

    // Menampilkan hasil ke user
    resultGender.textContent = gender === 'male' ? 'Male' : 'Female';
    bmiValue.textContent = bmi.toFixed(2);

    // Mengkategorikan BMI sesuai hasil
    let status = '';
    let explanation = '';
    if (bmi < 18.5) {
        status = 'Underweight';
        explanation = " If your BMI is less than 18.5, it indicates that you are underweight. This means that your body weight is considered too low to be healthy. Being underweight can lead to several health issues, such as a weakened immune system, malnutrition, and increased risk of osteoporosis. Its important to consult a healthcare professional to understand the underlying reasons for being underweight and to receive advice on how to reach a healthier weight."
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        status = 'Ideal';
        explanation = "A BMI between 18.5 and 24.9 is considered to be within the normal or ideal weight range. This suggests that your body weight is appropriate for your height and is generally associated with a lower risk of chronic diseases such as heart disease, diabetes, and certain cancers. Maintaining a BMI within this range is considered beneficial for overall health, and it can be achieved by following a balanced diet and regular physical activity."
    } else if (bmi >= 25 && bmi <= 29.9) {
        status = 'Overweight';
        explanation = "If your BMI is between 25.0 and 29.9, you are considered overweight. Being overweight can increase the risk of several health problems, including heart disease, stroke, type 2 diabetes, and certain types of cancer. It is advisable to take steps to lose weight through a combination of a healthy diet and regular exercise to lower your BMI into the normal range and reduce the associated health risks."
    } else {
        status = 'Obesity';
        explanation = "A BMI of 30.0 or above falls into the obesity category. Obesity significantly increases the risk of numerous health issues, including heart disease, type 2 diabetes, high blood pressure, sleep apnea, and certain cancers. It is a serious health condition that often requires a comprehensive approach to treatment, which may include dietary changes, increased physical activity, and sometimes medical or surgical interventions. Consulting a healthcare professional for personalized guidance is crucial to managing obesity and improving overall health."
    }
    bmiStatus.textContent = status;
    bmiExplanation.textContent = explanation;

    // Menampilkan section hasil
    resultSection.classList.remove('d-none');
});
