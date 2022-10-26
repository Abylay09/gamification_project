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

    // maintainAspectRatio: true,
    // plugins: {
    //     datalabels: {
    //         backgroundColor: function (context) {
    //             return context.dataset.borderColor;
    //         },
    //         color: ['white', "white", "white", 'black', "black", "black"],
    //         font: {
    //             weight: '400',
    //         },
    //         formatter: Math.round,
    //         padding: 2
    //     },
    //     legend: {
    //         display: false,
    //         labels: {
    //             fontColor: "blue",
    //             size: 18,
    //         },
    //     },
    // },
    // scales: {
    //     r: {
    //         grid: {
    //             circular: true,
    //         },
    //         beginAtZero: true,
    //         ticks: {
    //             display: false,
    //         },

    //         pointLabels: {
    //             font: {
    //                 size: 11,
    //             },
    //             padding: 14
    //         }

    //     },
    // },
}

function IndicatorGraph() {
    const language = useSelector(state => state.language.language)
    const data = {
        labels: [language.indicators_memory, language.indicators_thinking, language.indicators_mindfulness,],
        datasets: [{
            label: "",
            data: [90, 55, 54],
            fill: true,
            backgroundColor: 'rgba(42, 128, 255, 0.23)',
            borderColor: 'rgba(42, 128, 255, 1)',
            pointBackgroundColor: 'rgb(255, 99, 132)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(255, 99, 132)'
        },
        {
            label: "",
            data: [10, 15, 20],
            fill: true,
            backgroundColor: 'rgba(235, 177, 255, 1)',
            // borderColor: 'rgba(42, 128, 255, 1)',
            pointBackgroundColor: 'red',
            pointBorderColor: 'rgba(235, 177, 255, 1)',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(255, 99, 132)',

        }

        ],
    };
    return <Radar data={data} options={option} style={{ overflowX: "hidden" }} />;
}




export default IndicatorGraph