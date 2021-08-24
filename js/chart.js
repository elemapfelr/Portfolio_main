'use strict';

const data = {
    labels: [
        '3D',
        'PHOTOSHOP',
        'JS,JQUERY',
        '2D LAYOUT',
        'ILLUSTRATOR',
        'HTML,CSS'
    ],
    datasets: [{
        label: 'STAT',
        data: [0, 0, 0, 0, 0, 0],
        fill: false,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgb(31, 179, 229)',
        pointBackgroundColor: 'rgb(31, 179, 229)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(31, 179, 229)',
        pointHoverRadius: 7
    }]
};
const config = {
    type: 'radar',
    data: data,
    options: {
        animation: {
            duration: 2000
        },
        plugins: {
            legend: {
                display: false
            }
        },
        font: {
            family: 'sans-serif',
        },
        scales: {
            r: {
                angleLines: {
                    display: false
                },
                suggestedMin: 0,
                suggestedMax: 100,
                ticks: {
                    stepSize: 20,
                    color: '#ccc',
                    backdropColor:'#0000',
                    font: {
                        family: 'sans-serif',
                        size:12
                    }
                },
                grid:{
                    color:'#ccc'
                },
                pointLabels: {
                    padding: 10,
                    font: {
                        size: 14
                    }
                }
            }
        },
        elements: {
            line: {
                borderWidth: 3
            },
            point: {
                radius: 5
            }
        }
    },
};
let myChart = new Chart(
    document.getElementById('myChart'),
    config
);

window.addEventListener('scroll', () => {
    let scrollLocation = document.documentElement.scrollTop;
    if (window.innerWidth >= 767) {
        if (scrollLocation >= 1724) {
            myChart.data.datasets[0].data = [75, 95, 70, 80, 90, 85]
            myChart.config.options.elements.line.borderWidth=3
            myChart.config.options.elements.point.radius=5
            myChart.config.options.scales.r.pointLabels.font.size=14
            myChart.config.options.scales.r.ticks.font.size=12
            myChart.update();
        }else{
            myChart.data.datasets[0].data = [0, 0, 0, 0, 0, 0]
            myChart.update();
        }
    }else{
        if (scrollLocation >= 2040) {
            myChart.data.datasets[0].data = [75, 95, 70, 80, 90, 85]
            myChart.config.options.elements.line.borderWidth=1
            myChart.config.options.elements.point.radius=3
            myChart.config.options.scales.r.pointLabels.font.size=12
            myChart.config.options.scales.r.ticks.font.size=9
            myChart.update();
        }else{
            myChart.data.datasets[0].data = [0, 0, 0, 0, 0, 0]
            myChart.update();
        }
    }
})