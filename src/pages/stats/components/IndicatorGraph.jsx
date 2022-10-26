import React from 'react'
import { Radar } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { useSelector } from 'react-redux'
import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
    ChartDataLabels
);
const option = {
    layout: {
        padding: {
            left: 0,
            right: 20,
            top: 0,
            bottom: 0,
        },
    },
    maintainAspectRatio: true,
    plugins: {
        datalabels: {
            backgroundColor: function (context) {
                return context.dataset.borderColor;
            },
            color: 'white',
            font: {
                weight: 'bold',
            },
            formatter: Math.round,
            padding: 3
        },
        legend: {
            display: true,
            labels: {
                font: {
                    size: 14,
                    weight : "bold",
                    family : "Arial"
                },
                color: "#000"
            },
            position: "bottom"
        },
    },
    scales: {
        r: {
            grid: {
                circular: true,
            },
            beginAtZero: true,
            ticks: {
                display: false,
            },

            pointLabels: {
                font: {
                    size: 12,
                    weight: "500"
                },
                padding: 14
            }

        },
    },
}

function IndicatorGraph(props) {
    const language = useSelector(state => state.language.language)
    const data = {
        // labels: [language.indicators_memory, language.indicators_thinking, language.indicators_mindfulness,],
        labels: [language.indicators_memory, language.indicators_thinking, language.indicators_mindfulness,],
        datasets: [{
            label: "Данные ученика",
            data: [90, 55, 54],
            fill: true,
            backgroundColor: 'rgba(42, 128, 255, 0.23)',
            borderColor: 'rgba(42, 128, 255, 1)',
            pointBackgroundColor: 'rgb(255, 99, 132)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(255, 99, 132)',

        },
        {
            label: "Мои данные",
            backgroundColor: 'rgba(235, 177, 255, 0.23)',
            data: props.myData,
            fill: true,
            borderColor: 'rgba(235, 177, 255, 1)',
            pointBackgroundColor: 'rgba(235, 177, 255, 1)',
            pointBorderColor: 'rgba(235, 177, 255, 1)',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(255, 99, 132)',
            option
        }

        ],
    };
    return <Radar data={data} options={option} style={{ overflowX: "hidden" }} />;
}




export default IndicatorGraph