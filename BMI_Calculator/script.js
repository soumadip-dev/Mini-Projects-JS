// DOM elements
const usBtn = document.getElementById('usBtn');
const metricBtn = document.getElementById('metricBtn');
const metricInputs = document.getElementById('metric-inputs');
const usInputs = document.getElementById('us-inputs');
const resultTxt = document.getElementById('result');
const calculateBtn = document.getElementById('calBtn');

let unit = 'us'; // Default unit

function switchUnit(selectedUnit) {
  unit = selectedUnit;
  usBtn.classList.toggle('active', unit === 'us');
  metricBtn.classList.toggle('active', unit === 'metric');

  metricInputs.classList.toggle('hidden', unit !== 'metric');
  usInputs.classList.toggle('hidden', unit !== 'us');

  resultTxt.textContent = 'Your BMI will be shown here.';
}

function calculateHeightWeight() {
  let heightMeters, weightKG;

  if (unit === 'us') {
    const heightFeet =
      parseFloat(document.getElementById('heightFeet').value) || 0;
    const heightInches =
      parseFloat(document.getElementById('heightInches').value) || 0;
    const weightPounds =
      parseFloat(document.getElementById('weightUs').value) || 0;

    if ((heightFeet === 0 && heightInches === 0) || weightPounds === 0) {
      resultTxt.textContent = 'Please enter valid values.';
      return null;
    }

    heightMeters = (heightFeet * 12 + heightInches) * 0.0254;
    weightKG = weightPounds * 0.453592;
  } else {
    const heightCm =
      parseFloat(document.getElementById('heightMetric').value) || 0;
    weightKG = parseFloat(document.getElementById('weightMetric').value) || 0;

    if (heightCm === 0 || weightKG === 0) {
      resultTxt.textContent = 'Please enter valid values.';
      return null;
    }

    heightMeters = heightCm * 0.01;
  }

  return { heightMeters, weightKG };
}

function calculateBMI() {
  const data = calculateHeightWeight();
  if (!data) return;

  const { heightMeters, weightKG } = data;
  const bmi = weightKG / heightMeters ** 2;
  if (bmi < 16) {
    category = 'Severe Thinness';
  } else if (bmi < 17) {
    category = 'Moderate Thinness';
  } else if (bmi < 18.5) {
    category = 'Mild Thinness';
  } else if (bmi < 25) {
    category = 'Normal';
  } else if (bmi < 30) {
    category = 'Overweight';
  } else if (bmi < 35) {
    category = 'Obese Class I';
  } else if (bmi < 40) {
    category = 'Obese Class II';
  } else {
    category = 'Obese Class III';
  }

  resultTxt.textContent = `BMI = ${bmi.toFixed(1)} kg/m² (${category})`;
}

// Event Listeners
usBtn.addEventListener('click', () => switchUnit('us'));
metricBtn.addEventListener('click', () => switchUnit('metric'));
calculateBtn.addEventListener('click', calculateBMI);
