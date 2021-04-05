const date = new Date();
const selectedDate = new Date();

const renderCalendar = () => {
    
const monthDays = document.querySelector('.days');

const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

const prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate();

const convertDays = (day) => {
    if(day === 0){
        return 6;
    }
    else{
        return day - 1;
    }
}

const firstDayIndex = convertDays(new Date(date.getFullYear(), date.getMonth(), 1).getDay());

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
]

document.querySelector('.date h1').innerHTML = months[date.getMonth()];

document.querySelector('.date p').innerHTML = selectedDate.toDateString();


let days = "";
let totalDays = 0;

for(let x = firstDayIndex; x > 0; x--){
    days += `<div class="prev-date">${prevLastDay - x + 1}</div>`
    totalDays += 1;
}

for(let i = 1; i <= lastDay; i++){
    if(i === new Date().getDate() && date.getMonth() === new Date().getMonth() && date.getFullYear() === new Date().getFullYear()){

        if(date.toString() === selectedDate.toString()){
            days += `<div class="selectedToday">${i}</div>`
        }
        else{
            days += `<div today class="today">${i}</div>`
        }
        totalDays += 1;
    }
    else if(i === selectedDate.getDate() && date.getMonth() === selectedDate.getMonth() && date.getFullYear() === selectedDate.getFullYear()){
        days += `<div selectedDay class="selectedDay">${i}</div>`
        totalDays += 1;
    }
    else{
        days += `<div day>${i}</div>`  
        totalDays += 1;
    }
}

for(let i = 1; totalDays < 42; i++){
    days += `<div class="next-date">${i}</div>`
    totalDays += 1;
}
monthDays.innerHTML = days;

document.querySelectorAll('[day],[today]').forEach(day => {
    day.addEventListener('click', () => {
        selectedDate.setMonth(date.getMonth());
        selectedDate.setFullYear(date.getFullYear());
        selectedDate.setDate(day.innerHTML);
        renderCalendar();
        console.log(selectedDate);
    })
})

}

document.querySelector('.prev').addEventListener('click', () => {
    date.setMonth(date.getMonth()-1);
    renderCalendar();
});

document.querySelector('.next').addEventListener('click', () =>{
    date.setMonth(date.getMonth()+1);
    renderCalendar();
});

renderCalendar();