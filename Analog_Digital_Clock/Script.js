document.addEventListener('DOMContentLoaded', function () {
  ////////////// DOM Elements

  const hourHandElement = document.querySelector('.hour');
  const minuteHandElement = document.querySelector('.minute');
  const secondHandElement = document.querySelector('.second');
  const digitalClockElement = document.querySelector('.digital-clock');
  const amPmElement = document.querySelector('.am-pm');

  /////////////// Functions:

  // Retrieves the current time.
  function getCurrentTime() {
    let currentDate = new Date();
    return {
      hours: currentDate.getHours(),
      minutes: currentDate.getMinutes(),
      seconds: currentDate.getSeconds(),
    };
  }

  // Updates the analogue clock by rotating the clock hands based on the current time.
  function updateAnalogueClock() {
    let { hours, minutes, seconds } = getCurrentTime();

    // Calculate rotation angles for each hand
    let hourHandRotation = 30 * hours + minutes / 2 + seconds / 120;
    let minuteHandRotation = 6 * minutes + seconds / 10;
    let secondHandRotation = 6 * seconds;

    // Apply transformations only if elements exist
    if (hourHandElement)
      hourHandElement.style.transform = `rotate(${hourHandRotation}deg)`;
    if (minuteHandElement)
      minuteHandElement.style.transform = `rotate(${minuteHandRotation}deg)`;
    if (secondHandElement)
      secondHandElement.style.transform = `rotate(${secondHandRotation}deg)`;
  }

  // Updates the digital clock display with the current time in HH:MM:SS format.
  function updateDigitalClock() {
    let { hours, minutes, seconds } = getCurrentTime();

    const formattedHours = hours === 0 ? 12 : hours % 12 || 12;
    const periodIndicator = hours < 12 ? 'AM' : 'PM';

    if (digitalClockElement) {
      digitalClockElement.textContent = `${String(formattedHours).padStart(
        2,
        '0'
      )}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(
        2,
        '0'
      )}`;
    }

    if (amPmElement) {
      amPmElement.textContent = periodIndicator;
    }
  }

  // Updates both the analogue and digital clocks.
  function updateClock() {
    updateAnalogueClock();
    updateDigitalClock();
  }

  /////////////// Initial update to set the clock immediately when the page loads
  updateClock();

  /////////////// Update the clock every second
  setInterval(updateClock, 1000);
});
