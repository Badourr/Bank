// Toggle Light/Dark Mode
document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('toggleMode');
  let isDarkMode = true;

  toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('light-mode', !isDarkMode);
    isDarkMode = !isDarkMode;
  });

  // Initialize Graphs using Chart.js
  const charts = {
    goalGraph: {
      ctx: document.getElementById('goalGraph').getContext('2d'),
      config: {
        type: 'bar',
        data: {
          labels: ['Goal', 'Current Balance'],
          datasets: [{
            label: 'Financial Goal ($)',
            data: [10000, 5000],
            backgroundColor: '#00c4cc',
          }]
        }
      }
    },
    growthGraph: {
      ctx: document.getElementById('growthGraph').getContext('2d'),
      config: {
        type: 'line',
        data: {
          labels: ['Year 1', 'Year 2', 'Year 3', 'Year 4', 'Year 5'],
          datasets: [{
            label: 'Growth ($)',
            data: [1000, 1300, 1700, 2200, 3000],
            borderColor: '#ff7e5f',
            borderWidth: 2,
          }]
        }
      }
    },
    debtGraph: {
      ctx: document.getElementById('debtGraph').getContext('2d'),
      config: {
        type: 'bar',
        data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
          datasets: [{
            label: 'Debt ($)',
            data: [500, 600, 700, 400, 300],
            backgroundColor: '#fdbb2d',
            borderWidth: 1,
          }]
        }
      }
    },
    incomeGraph: {
      ctx: document.getElementById('incomeGraph').getContext('2d'),
      config: {
        type: 'line',
        data: {
          labels: ['Q1', 'Q2', 'Q3', 'Q4'],
          datasets: [{
            label: 'Income ($)',
            data: [1500, 1800, 2000, 2500],
            borderColor: '#b21f1f',
            borderWidth: 2,
          }]
        }
      }
    },
    realEstateGraph: {
      ctx: document.getElementById('realEstateGraph').getContext('2d'),
      config: {
        type: 'pie',
        data: {
          labels: ['Rental', 'Flipping', 'Commercial'],
          datasets: [{
            label: 'Real Estate ($)',
            data: [5000, 7000, 3000],
            backgroundColor: ['#00c4cc', '#ff7e5f', '#fdbb2d'],
          }]
        }
      }
    },
    assetGraph: {
      ctx: document.getElementById('assetGraph').getContext('2d'),
      config: {
        type: 'doughnut',
        data: {
          labels: ['Stocks', 'Bonds', 'Real Estate', 'Cash'],
          datasets: [{
            label: 'Asset Allocation ($)',
            data: [4000, 2000, 6000, 3000],
            backgroundColor: ['#1a2a6c', '#00c4cc', '#fdbb2d', '#b21f1f'],
          }]
        }
      }
    }
  };

  // Create all charts
  Object.values(charts).forEach(chart => {
    new Chart(chart.ctx, chart.config);
  });
});
