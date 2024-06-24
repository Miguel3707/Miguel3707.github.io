// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

var ctx = document.getElementById("piv_gra");
var myPieChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ["Criticas", "Altas", "Medias", "Bajas"],
    datasets: [{
      data: [0,0,1,251],
      backgroundColor: ['#DB0009', '#FD8B1A', '#FFBB1C', '#1184D0'],
      hoverBackgroundColor: ['#B70D12', '#DE7D1D', '#E1A721','#288DD0'],
      hoverBorderColor: "rgba(234, 236, 244, 1)",
    }],
  },
  options: {
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      caretPadding: 10,
    },
    legend: {
      display: false
    },
    cutoutPercentage: 80,
  },
});

var ctx = document.getElementById("piv_log");
var myPieChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ["Criticos", "Altos", "Medios", "Bajos"],
    datasets: [{
      data: [0,1,0,62],
      backgroundColor: ['#DB0009', '#FD8B1A', '#FFBB1C', '#1184D0'],
      hoverBackgroundColor: ['#B70D12', '#DE7D1D', '#E1A721','#288DD0'],
      hoverBorderColor: "rgba(234, 236, 244, 1)",
    }],
  },
  options: {
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      caretPadding: 10,
    },
    legend: {
      display: false
    },
    cutoutPercentage: 80,
  },
});
