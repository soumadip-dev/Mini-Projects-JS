const resultText = document.getElementById('result-text');

async function validateEmail() {
  const key = 'ema_live_mYCGDq0GSkiAVDXfoVVc43WD8GX6ubfaRZDfQyIZ'; // Avoid exposing this publicly
  const email = document.getElementById('email').value.trim();

  // Clear previous result
  resultText.innerHTML = '';

  if (!email) {
    resultText.innerHTML =
      '<li style="color: red;">Please enter an email address.</li>';
    return;
  }

  // Show loading indicator
  resultText.innerHTML = `<img width="23" src="./loading.svg" alt="loading....">`;

  const url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`;

  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error('Failed to validate the email.');
    }

    const result = await res.json();
    resultText.innerHTML = ''; // Clear loading indicator before showing results

    if (result && Object.keys(result).length > 0) {
      for (const key in result) {
        if (result[key]) {
          let listItem = document.createElement('li');
          listItem.textContent = `${key}: ${result[key]}`;
          resultText.appendChild(listItem);
        }
      }
    } else {
      resultText.innerHTML =
        '<li style="color: red;">Invalid response from API.</li>';
    }
  } catch (error) {
    resultText.innerHTML = `<li style="color: red;">Error: ${error.message}</li>`;
  }
}
