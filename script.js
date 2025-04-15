// ===== Example 1: Weather App =====
document.getElementById('fetchWeather').addEventListener('click', async () => {
    const city = document.getElementById('cityInput').value;
    if (!city) return;
    
    // Simulate API call (in real life, use a real API key)
    try {
      // Mock response for demo (replace with actual API call)
      const mockWeatherData = {
        main: { temp: 285 + Math.floor(Math.random() * 150) }, // Random temp between 285-435K
        weather: [{ description: ['Sunny', 'Cloudy', 'Rainy'][Math.floor(Math.random() * 3)] }]
      };
      
      document.getElementById('weatherResult').innerHTML = `
        <p>Temperature: ${Math.round(mockWeatherData.main.temp - 273.15)}°C</p>
        <p>Weather: ${mockWeatherData.weather[0].description}</p>
      `;
    } catch (error) {
      document.getElementById('weatherResult').textContent = 'Failed to fetch weather.';
    }
  });
  
  // ===== Example 2: To-Do List =====
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  
  function renderTasks() {
    document.getElementById('taskList').innerHTML = tasks
      .map(task => `
        <li>
          ${task}
          <button data-task="${task}">×</button>
        </li>
      `)
      .join('');
  }
  
  document.getElementById('addTask').addEventListener('click', () => {
    const taskInput = document.getElementById('taskInput');
    if (taskInput.value.trim()) {
      tasks.push(taskInput.value.trim());
      localStorage.setItem('tasks', JSON.stringify(tasks));
      taskInput.value = '';
      renderTasks();
    }
  });
  
  document.getElementById('taskList').addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
      const taskToDelete = e.target.getAttribute('data-task');
      tasks.splice(tasks.indexOf(taskToDelete), 1);
      localStorage.setItem('tasks', JSON.stringify(tasks));
      renderTasks();
    }
  });
  
  renderTasks();
  
  // ===== Example 3: Login Simulation =====
  document.getElementById('loginForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Simulate authentication
    if (username === "admin" && password === "12345") {
      document.getElementById('loginResult').innerHTML = `
        <p style="color: green;">Login successful! Welcome, ${username}.</p>
      `;
    } else {
      document.getElementById('loginResult').innerHTML = `
        <p style="color: red;">Invalid credentials. Try admin/12345.</p>
      `;
    }
  });
  
  // ===== Example 4: Stock Ticker (Simulated) =====
  let tickerInterval;
  const stocks = {
    AAPL: 150 + Math.random() * 50,
    GOOG: 2500 + Math.random() * 100
  };
  
  function updateTicker() {
    stocks.AAPL += (Math.random() - 0.5);
    stocks.GOOG += (Math.random() - 0.5);
    document.getElementById('stockTicker').innerHTML = `
      <p>AAPL: $${stocks.AAPL.toFixed(2)}</p>
      <p>GOOG: $${stocks.GOOG.toFixed(2)}</p>
    `;
  }
  
  // Start updates
  tickerInterval = setInterval(updateTicker, 2000);
  
  document.getElementById('stopTicker').addEventListener('click', () => {
    clearInterval(tickerInterval);
  });
  
  // ===== Example 5: Product Filter =====
  const products = [
    { name: "iPhone", category: "electronics", price: 999 },
    { name: "T-Shirt", category: "clothing", price: 20 },
    { name: "Laptop", category: "electronics", price: 1200 },
    { name: "Jeans", category: "clothing", price: 50 }
  ];
  
  function renderProducts(category = 'all') {
    const filteredProducts = category === 'all' 
      ? products 
      : products.filter(p => p.category === category);
    
    document.getElementById('products').innerHTML = filteredProducts
      .map(p => `<div>${p.name} ($${p.price})</div>`)
      .join('');
  }
  
  document.getElementById('filter').addEventListener('change', (e) => {
    renderProducts(e.target.value);
  });
  
  renderProducts(); // Initial render