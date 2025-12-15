const screens = document.querySelectorAll('.screen');

function show(id) {
  screens.forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

function goToState() {
  show('state');
}

function goToCity() {
  const state = document.getElementById('stateSelect').value;
  const citySelect = document.getElementById('citySelect');

  const cities = {
    "New York": ["New York City", "Brooklyn", "Queens"],
    "California": ["Los Angeles", "San Diego", "San Jose"],
    "Texas": ["Houston", "Dallas", "Austin"],
    "Florida": ["Miami", "Orlando"],
    "Illinois": ["Chicago"]
  };

  citySelect.innerHTML = "";
  cities[state].forEach(city => {
    const option = document.createElement("option");
    option.textContent = city;
    citySelect.appendChild(option);
  });

  show('city');
}

function goToRegister() {
  show('register');
}

function finish() {
  alert("Добро пожаловать! Регистрация завершена.");
}