let ctx = document.querySelector( '#myChart').getContext('2d');
let myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels:[9.09,11.09,14.09,17.09,21.09,22.09,24.09,26.09,27.09,30.09,2.10] ,
        datasets: [{
            label:'Органические охваты' ,
            data: [2029,8000,8020,10490,16000,34002,28849,30303,49490,48483,74242],
            backgroundColor:['white'] ,
            borderColor: [
                'green'
            ],
            borderWidht: 4
        }]
    },
    options: {
        responsive: true,
        scales: {
          x: {
            display: true,
            title: {
            display: true,
            text: 'Даты',
            color: '#911', }
            },
            y: {
                display: true,
                title: {
                  display: true,
                  text: 'Количество просмотров',
                  color: '#191', }
            }
        }
     } 
})

