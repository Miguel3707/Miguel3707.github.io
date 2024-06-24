// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

function number_format(number, decimals, dec_point, thousands_sep) {
  // *     example: number_format(1234.56, 2, ',', ' ');
  // *     return: '1 234,56'
  number = (number + '').replace(',', '').replace(' ', '');
  var n = !isFinite(+number) ? 0 : +number,
    prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
    sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
    dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
    s = '',
    toFixedFix = function(n, prec) {
      var k = Math.pow(10, prec);
      return '' + Math.round(n * k) / k;
    };
  // Fix for IE parseFloat(0.55).toFixed(0) = 0;
  s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
  if (s[0].length > 3) {
    s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
  }
  if ((s[1] || '').length < prec) {
    s[1] = s[1] || '';
    s[1] += new Array(prec - s[1].length + 1).join('0');
  }
  return s.join(dec);
}

// Area Chart Example VULNERABILIDADES
var ctx = document.getElementById("myAreaChart");
var myLineChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["P.1 ANAM_O", "P.1 ANAM_D", "P.2 ANAM_O", "P.2 ANAM_D", "P.3 ANAM_O", "P.3 ANAM_D", "P.4 ANAM_D",],
    datasets: [{
      label: "Total de Vulnerabilidades",
      lineTension: 0.3,
      backgroundColor: "rgba(78, 115, 223, 0.05)",
      borderColor: "rgba(78, 115, 223, 1)",
      pointRadius: 3,
      pointBackgroundColor: "rgba(78, 115, 223, 1)",
      pointBorderColor: "rgba(78, 115, 223, 1)",
      pointHoverRadius: 3,
      pointHoverBackgroundColor: "rgba(78, 115, 223, 1)",
      pointHoverBorderColor: "rgba(78, 115, 223, 1)",
      pointHitRadius: 10,
      pointBorderWidth: 1,
      data: [31,16,84,81,106,252,49],
    }],
  },
  options: {
    maintainAspectRatio: false,
    layout: {
      padding: {
        left: 10,
        right: 25,
        top: 25,
        bottom: 0
      }
    },
    scales: {
      xAxes: [{
        time: {
          unit: 'date'
        },
        gridLines: {
          display: false,
          drawBorder: false
        },
        ticks: {
          maxTicksLimit: 7,
          padding: 20 
        }
      }],
      yAxes: [{
        ticks: {
          maxTicksLimit: 5,
          padding: 20,
          // Include a dollar sign in the ticks
          callback: function(value, index, values) {
            return 'N.' + number_format(value);
          }
        },
        gridLines: {
          color: "rgb(234, 236, 244)",
          zeroLineColor: "rgb(234, 236, 244)",
          drawBorder: false,
          borderDash: [2],
          zeroLineBorderDash: [2]
        }
      }],
    },
    legend: {
      display: false
    },
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      titleMarginBottom: 10,
      titleFontColor: '#6e707e',
      titleFontSize: 14,
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      intersect: false,
      mode: 'index',
      caretPadding: 10,
      callbacks: {
        label: function(tooltipItem, data) {
          var dataset = data.datasets[tooltipItem.datasetIndex];
          var label = dataset.label || '';
          var value = tooltipItem.yLabel;
          // Personalizar el contenido del tooltip aquí
          var customLabel = [];
          switch (tooltipItem.index) {
              case 0:
                  customLabel.push('14/JUN/2023');
                  customLabel.push(label + ': ' + value);
                  customLabel.push('Criticas: 1');
                  customLabel.push('Altas: 10');
                  customLabel.push('Medias: 14');
                  customLabel.push('Bajas: 6');
                  break;
              case 1:
                  customLabel.push('14/JUN/2023');
                  customLabel.push(label + ': ' + value);
                  customLabel.push('Criticas: 1');
                  customLabel.push('Altas: 0');
                  customLabel.push('Medias: 12');
                  customLabel.push('Bajas: 3');
                  break;
              case 2:
                  customLabel.push('23/OCT/2023');
                  customLabel.push(label + ': ' + value);
                  customLabel.push('Criticas: 3');
                  customLabel.push('Altas: 2');
                  customLabel.push('Medias: 3');
                  customLabel.push('Bajas: 76');
                  break;
              case 3:
                  customLabel.push('23/OCT/2023');
                  customLabel.push(label + ': ' + value);
                  customLabel.push('Criticas: 0');
                  customLabel.push('Altas: 0');
                  customLabel.push('Medias: 1');
                  customLabel.push('Bajas: 80');
                  break;
              
              case 4:
                  customLabel.push('27/MAR/2024');
                  customLabel.push(label + ': ' + value);
                  customLabel.push('Criticas: 0');
                  customLabel.push('Altas: 0');
                  customLabel.push('Medias: 4');
                  customLabel.push('Bajas: 102');
                  break;  
                  
              case 5:
                  customLabel.push('27/MAR/2024');
                  customLabel.push(label + ': ' + value);
                  customLabel.push('Criticas: 0');
                  customLabel.push('Altas: 0');
                  customLabel.push('Medias: 1');
                  customLabel.push('Bajas: 251');
                  break;    

            case 6:
                  customLabel.push('7/JUN/2024');
                  customLabel.push(label + ': ' + value);
                  customLabel.push('Criticas: 0');
                  customLabel.push('Altas: 0');
                  customLabel.push('Medias: 0');
                  customLabel.push('Bajas: 49');
                  break;            
            default:
                  customLabel.push(label + ': ' + value);
                  customLabel.push('Custom Label');
                  break;
          }
          
          return customLabel;
       }
      }
    }
  },
  scales: {
      xAxes: [{
          ticks: {
              padding: 10  // Ajusta este valor para aumentar el espacio
          }
      }],
      yAxes: [{
          ticks: {
              padding: 10  // Ajusta este valor para aumentar el espacio
          }
      }]
  }
});


// Area Chart Example LOGROS
var ctx = document.getElementById("myAreaChart2");
var myLineChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["P.1 ANAM_O", "P.1 ANAM_D", "P.2 ANAM_O", "P.2 ANAM_D", "P.3 ANAM_O", "P.3 ANAM_D", "P.4 ANAM_D",],
    datasets: [{
      label: "Total de Logros",
      lineTension: 0.3,
      backgroundColor: "rgba(208, 214, 81, 0.05)",
      borderColor: "rgba(208, 214, 81, 1)",
      pointRadius: 3,
      pointBackgroundColor: "rgba(208, 214, 81, 1)",
      pointBorderColor: "rgba(208, 214, 81, 1)",
      pointHoverRadius: 3,
      pointHoverBackgroundColor: "rgba(208, 214, 81, 1)",
      pointHoverBorderColor: "rgba(208, 214, 81, 1)",
      pointHitRadius: 10,
      pointBorderWidth: 1,
      data: [30,13,33,9,25,63,4],
    }],
  },
  options: {
    maintainAspectRatio: false,
    layout: {
      padding: {
        left: 10,
        right: 25,
        top: 25,
        bottom: 0
      }
    },
    scales: {
      xAxes: [{
        time: {
          unit: 'date'
        },
        gridLines: {
          display: false,
          drawBorder: false
        },
        ticks: {
          maxTicksLimit: 7,
          padding: 20 
        }
      }],
      yAxes: [{
        ticks: {
          maxTicksLimit: 5,
          padding: 20,
          // Include a dollar sign in the ticks
          callback: function(value, index, values) {
            return 'N.' + number_format(value);
          }
        },
        gridLines: {
          color: "rgb(234, 236, 244)",
          zeroLineColor: "rgb(234, 236, 244)",
          drawBorder: false,
          borderDash: [2],
          zeroLineBorderDash: [2]
        }
      }],
    },
    legend: {
      display: false
    },
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      titleMarginBottom: 10,
      titleFontColor: '#6e707e',
      titleFontSize: 14,
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      intersect: false,
      mode: 'index',
      caretPadding: 10,
      callbacks: {
        label: function(tooltipItem, data) {
          var dataset = data.datasets[tooltipItem.datasetIndex];
          var label = dataset.label || '';
          var value = tooltipItem.yLabel;
          // Personalizar el contenido del tooltip aquí
          var customLabel = [];
          switch (tooltipItem.index) {
              case 0:
                  customLabel.push('14/JUN/2023');
                  customLabel.push(label + ': ' + value);
                  customLabel.push('Criticas: 1');
                  customLabel.push('Altas: 28');
                  customLabel.push('Medias: 0');
                  customLabel.push('Bajas: 1');
                  break;
              case 1:
                  customLabel.push('14/JUN/2023');
                  customLabel.push(label + ': ' + value);
                  customLabel.push('Criticas: 1');
                  customLabel.push('Altas: 12');
                  customLabel.push('Medias: 0');
                  customLabel.push('Bajas: 0');
                  break;
              case 2:
                  customLabel.push('23/OCT/2023');
                  customLabel.push(label + ': ' + value);
                  customLabel.push('Criticas: 0');
                  customLabel.push('Altas: 1');
                  customLabel.push('Medias: 0');
                  customLabel.push('Bajas: 8');
                  break;
              case 3:
                  customLabel.push('23/OCT/2023');
                  customLabel.push(label + ': ' + value);
                  customLabel.push('Criticas: 2');
                  customLabel.push('Altas: 6');
                  customLabel.push('Medias: 0');
                  customLabel.push('Bajas: 25');
                  break;
              
              case 4:
                  customLabel.push('27/MAR/2024');
                  customLabel.push(label + ': ' + value);
                  customLabel.push('Criticas: 0');
                  customLabel.push('Altas: 4');
                  customLabel.push('Medias: 0');
                  customLabel.push('Bajas: 21');
                  break;  
                  
              case 5:
                  customLabel.push('27/MAR/2024');
                  customLabel.push(label + ': ' + value);
                  customLabel.push('Criticas: 0');
                  customLabel.push('Altas: 1');
                  customLabel.push('Medias: 0');
                  customLabel.push('Bajas: 62');
                  break;    

            case 6:
                  customLabel.push('7/JUN/2024');
                  customLabel.push(label + ': ' + value);
                  customLabel.push('Criticas: 0');
                  customLabel.push('Altas: 0');
                  customLabel.push('Medias: 0');
                  customLabel.push('Bajas: 4');
                  break;            
            default:
                  customLabel.push(label + ': ' + value);
                  customLabel.push('Custom Label');
                  break;
          }
          
          return customLabel;
       }
      }
    }
  },
  scales: {
      xAxes: [{
          ticks: {
              padding: 10  // Ajusta este valor para aumentar el espacio
          }
      }],
      yAxes: [{
          ticks: {
              padding: 10  // Ajusta este valor para aumentar el espacio
          }
      }]
  }
});

