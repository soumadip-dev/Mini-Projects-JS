document.addEventListener('DOMContentLoaded', function () {
  // Data for user accounts, including movements, interest rate, and pin
  const account1 = {
    owner: 'Rahul Sharma',
    movements: [18704, 42084, -37408, 280560, -60788, -12157, 6546, 121576],
    interestRate: 1.2, // in percentage
    pin: 1111,
    movementsDates: [
      '2023-11-18T21:31:17.178Z',
      '2023-12-23T07:42:02.383Z',
      '2024-01-28T09:15:04.904Z',
      '2024-04-01T10:17:24.185Z',
      '2024-05-08T14:11:59.604Z',
      '2024-05-27T17:01:17.194Z',
      '2024-07-11T23:36:17.929Z',
      '2024-07-12T10:51:36.790Z',
    ],
    currency: 'INR',
    locale: 'en-IN', // English (India)
  };

  const account2 = {
    owner: 'John Smith',
    movements: [6250, 4255, -188, -988, -4022, -1251, 10633, -38],
    interestRate: 1.5,
    pin: 2222,
    movementsDates: [
      '2023-11-01T13:15:33.035Z',
      '2023-11-30T09:48:16.867Z',
      '2023-12-25T06:04:23.907Z',
      '2024-01-25T14:18:46.235Z',
      '2024-02-05T16:33:06.386Z',
      '2024-04-10T14:43:26.374Z',
      '2024-06-25T18:49:59.371Z',
      '2024-07-26T12:01:20.894Z',
    ],
    currency: 'USD',
    locale: 'en-US', // English (United States)
  };

  const account3 = {
    owner: 'Rohan Jain',
    movements: [18704, -18704, 31856, -28056, -1870, 4676, 37408, -43019],
    interestRate: 0.7,
    pin: 3333,
    movementsDates: [
      '2023-11-01T13:15:33.035Z',
      '2023-11-30T09:48:16.867Z',
      '2023-12-25T06:04:23.907Z',
      '2024-01-25T14:18:46.235Z',
      '2024-02-05T16:33:06.386Z',
      '2024-04-10T14:43:26.374Z',
      '2024-06-25T18:49:59.371Z',
      '2024-07-26T12:01:20.894Z',
    ],
    currency: 'INR',
    locale: 'en-IN', // English (India)
  };

  const account4 = {
    owner: 'Emily Johnson',
    movements: [478, 1108, 775, 55, 100],
    interestRate: 1,
    pin: 4444,
    movementsDates: [
      '2023-11-01T13:15:33.035Z',
      '2023-11-30T09:48:16.867Z',
      '2023-12-25T06:04:23.907Z',
      '2024-01-25T14:18:46.235Z',
      '2024-02-05T16:33:06.386Z',
      '2024-04-10T14:43:26.374Z',
      '2024-06-25T18:49:59.371Z',
      '2024-07-26T12:01:20.894Z',
    ],
    currency: 'EUR',
    locale: 'fr-FR', // French (France)
  };

  // Array of all accounts
  const accounts = [account1, account2, account3, account4];

  ////////////// DOM Elements
  const labelWelcome = document.querySelector('.welcome');
  const labelDate = document.querySelector('.date');
  const labelBalance = document.querySelector('.balance__value');
  const labelSumIn = document.querySelector('.summary__value--in');
  const labelSumOut = document.querySelector('.summary__value--out');
  const labelSumInterest = document.querySelector('.summary__value--interest');
  const labelTimer = document.querySelector('.timer');

  const containerApp = document.querySelector('.app');
  const containerMovements = document.querySelector('.movements');

  const btnLogin = document.querySelector('.login__btn');
  const btnTransfer = document.querySelector('.form__btn--transfer');
  const btnLoan = document.querySelector('.form__btn--loan');
  const btnClose = document.querySelector('.form__btn--close');
  const btnSort = document.querySelector('.btn--sort');

  const inputLoginUsername = document.querySelector('.login__input--user');
  const inputLoginPin = document.querySelector('.login__input--pin');
  const inputTransferTo = document.querySelector('.form__input--to');
  const inputTransferAmount = document.querySelector('.form__input--amount');
  const inputLoanAmount = document.querySelector('.form__input--loan-amount');
  const inputCloseUsername = document.querySelector('.form__input--user');
  const inputClosePin = document.querySelector('.form__input--pin');

  /////////////// Functions:

  // Function to format date
  const formatMovementDate = function (date) {
    const day = `${String(date.getDate()).padStart(2, '0')}`;
    const month = `${String(date.getMonth() + 1).padStart(2, '0')}`;
    const year = `${date.getFullYear()}`;
    const calcDaysPassed = (date1, date2) => {
      return Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));
    };

    const daysPassed = calcDaysPassed(new Date(), date);
    if (daysPassed === 0) return 'Today';
    if (daysPassed === 1) return 'Yesterday';
    if (daysPassed <= 7) return `${daysPassed} days ago`;
    else {
      return `${day}/${month}/${year}`;
    }
  };

  // Format currency
  const formatCur = function (value, locale, currency) {
    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: currency,
    }).format(value);
  };

  // Function to display movements in the UI
  const displayMovement = function (acc, sort = false) {
    containerMovements.innerHTML = ''; // Clear previous movements

    // Sort movements if required
    const movs = sort
      ? acc.movements.slice().sort((a, b) => a - b)
      : acc.movements;

    // Generate HTML for each movement and insert into DOM
    movs.forEach(function (mov, i) {
      const type = mov > 0 ? 'deposit' : 'withdrawal';
      const date = new Date(acc.movementsDates[i]);
      const displayDate = formatMovementDate(date);

      const html = `
    <div class="movements__row">
          <div class="movements__type movements__type--${type}">
            ${i + 1} ${type}
          </div>
          <div class="movements__date">${displayDate}</div>
          <div class="movements__value">${formatCur(
            mov,
            acc.locale,
            acc.currency
          )}</div>
    </div>
    `;
      containerMovements.insertAdjacentHTML('afterbegin', html);
    });
  };

  // Function to calculate and display account balance
  const calcDisplayBalance = function (acc) {
    // Calculate balance by summing up movements
    acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
    labelBalance.textContent = `${formatCur(
      acc.balance.toFixed(2),
      acc.locale,
      acc.currency
    )}`; // Display balance in UI
  };

  // Function to calculate and display account summary (incomes, expenses, interest)
  const calcDisplaySummary = function (account) {
    const incomes = account.movements
      .filter(mov => mov > 0)
      .reduce((acc, mov) => acc + mov, 0);
    labelSumIn.textContent = `${formatCur(
      incomes.toFixed(2),
      account.locale,
      account.currency
    )}`; // Display total income

    const out = account.movements
      .filter(mov => mov < 0)
      .reduce((acc, mov) => acc + mov, 0);
    labelSumOut.textContent = `${formatCur(
      Math.abs(out).toFixed(2),
      account.locale,
      account.currency
    )}`; // Display total outgoing

    const interest = account.movements
      .filter(mov => mov > 0)
      .map(deposit => deposit * (account.interestRate / 100))
      .filter(int => int >= 1) // Interest only if >= 1₹
      .reduce((acc, int) => acc + int, 0);
    labelSumInterest.textContent = `${formatCur(
      interest.toFixed(2),
      account.locale,
      account.currency
    )}`; // Display total interest
  };

  // Function to create usernames based on account owner names
  const createUserName = function (accs) {
    accs.forEach(function (acc) {
      // Create username as first letter of each word in owner's name
      acc.userName = acc.owner
        .toLowerCase()
        .split(' ')
        .map(name => name[0])
        .join('');
    });
  };
  createUserName(accounts);

  // Function to update the UI (movements, balance, summary) for the current account
  function updateUI(acc) {
    displayMovement(acc); // Display movements
    calcDisplayBalance(acc); // Display balance
    calcDisplaySummary(acc); // Display account summary
  }

  const startLogoutTimer = function () {
    const tick = function () {
      let min = String(Math.trunc(time / 60)).padStart(2, '0');
      let sec = String(time % 60).padStart(2, '0');
      // I each call remaing time to interface
      labelTimer.textContent = `${min}:${sec}`;
      // when 0 second, logout user
      if (time === 0) {
        clearInterval(timer);
        labelWelcome.textContent = `Log in to get started`;
        containerApp.style.opacity = 0;
      }
      // Decrease 1 sec
      time--;
    };
    //seting time to 5 minute
    let time = 300;
    tick();
    // call timer every second
    const timer = setInterval(tick, 1000);
    return timer;
  };

  ///////////// Event Handlers

  let currentAccount, timer; // Store the currently logged-in account and

  // Event listener for login button
  btnLogin.addEventListener('click', function (e) {
    e.preventDefault(); // Prevent form submission

    // Find account based on username
    currentAccount = accounts.find(
      acc => acc.userName === inputLoginUsername.value
    );

    // Check if entered pin matches the account's pin
    if (currentAccount?.pin === Number(inputLoginPin.value)) {
      // Display welcome message
      labelWelcome.textContent = `Welcome back, ${
        currentAccount.owner.split(' ')[0]
      }`;
      containerApp.style.opacity = 100; // Show UI

      // Create current date and time
      const now = new Date();
      const day = `${String(now.getDate()).padStart(2, '0')}`;
      const month = `${String(now.getMonth() + 1).padStart(2, '0')}`;
      const year = `${now.getFullYear()}`;
      const hour = `${String(now.getHours()).padStart(2, '0')}`;
      const min = `${String(now.getMinutes()).padStart(2, '0')}`;
      labelDate.textContent = `${day}/${month}/${year}, ${hour}:${min}`;

      // Clear input fields
      inputLoginUsername.value = inputLoginPin.value = '';
      inputLoginPin.blur(); // Remove focus from pin input field

      // Logout timer function called
      if (timer) clearInterval(timer);
      timer = startLogoutTimer();

      // Update UI with account data
      updateUI(currentAccount);
    }
  });

  // Event listener for money transfer
  btnTransfer.addEventListener('click', function (e) {
    e.preventDefault(); // Prevent form submission

    const amount = Number(inputTransferAmount.value);
    const receiverAcc = accounts.find(
      acc => acc.userName === inputTransferTo.value
    );

    // Clear input fields after transfer
    inputTransferAmount.value = inputTransferTo.value = '';
    inputTransferAmount.blur();

    // Validate transfer details and process the transfer
    if (
      amount > 0 &&
      receiverAcc &&
      currentAccount.balance >= amount &&
      receiverAcc?.userName !== currentAccount.userName
    ) {
      currentAccount.movements.push(-amount); // Deduct amount from sender
      receiverAcc.movements.push(amount); // Add amount to receiver
      currentAccount.movementsDates.push(new Date().toISOString()); //Add transfer date to sender
      receiverAcc.movementsDates.push(new Date().toISOString()); //Add transfer date to receiver

      // Update UI with new movements
      updateUI(currentAccount);

      // Reset timer
      clearInterval(timer);
      timer = startLogoutTimer();
    }
  });

  // Event listener for loan request
  btnLoan.addEventListener('click', function (e) {
    e.preventDefault();

    const amount = Math.floor(inputLoanAmount.value);

    // Loan approval: check if any deposit is at least 10% of requested loan amount
    if (
      amount > 0 &&
      currentAccount.movements.some(mov => mov >= amount * 0.1)
    ) {
      setTimeout(function () {
        currentAccount.movements.push(amount); // Add loan to movements
        currentAccount.movementsDates.push(new Date().toISOString()); // Add loan date

        // Update UI after loan approval
        updateUI(currentAccount);
      }, 2500);
      inputLoanAmount.value = ''; // Clear loan input field

      // Reset timer
      clearInterval(timer);
      timer = startLogoutTimer();
    }
  });

  // Event listener to close account
  btnClose.addEventListener('click', function (e) {
    e.preventDefault();

    // Check if username and pin match current account
    if (
      inputCloseUsername.value === currentAccount.userName &&
      Number(inputClosePin.value) === currentAccount.pin
    ) {
      if (confirm('Are you sure you want to close this account?')) {
        const index = accounts.findIndex(
          acc => acc.userName === currentAccount.userName
        );
        accounts.splice(index, 1); // Remove account from accounts array
        containerApp.style.opacity = '0'; // Hide UI
      }
    } else {
      alert('Invalid username or pin'); // Show error message
    }

    // Clear input fields after closing account
    inputCloseUsername.value = inputClosePin.value = '';
    inputClosePin.blur();
  });

  let sorted = false; // State variable for sorting movements

  // Event listener for sorting movements
  btnSort.addEventListener('click', function (e) {
    e.preventDefault();
    displayMovement(currentAccount, !sorted); // Sort movements if not already sorted
    sorted = !sorted; // Toggle sort state

    // Reset timer
    clearInterval(timer);
    timer = startLogoutTimer();
  });
});
