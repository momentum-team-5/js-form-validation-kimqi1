console.log('Add validation!');
let form = document.querySelector('#parking-form')
let formIsVaild

form.addEventListener('submit', validateForm)

function validateForm (event) {
    event.preventDefault()
    validateYear()

    if (formIsVaild) {
        fetch('https://momentum-server.glitch.me/parking', {
            method: 'POST',
            headers: { 'Conten-Type': 'application/json'},
            body: JSON.stringify({ formData: {name:'car-year'}})
        })
        .then(res => res.json())
        .then(data => console.log (data))
    }
}

// * Car year must be after 1900.
function validateYear (){
const yearInput = document.querySelector('#car-year')
    if(yearInput.value > 1900) {
        console.log ('year is valid')
    } else {
        console.log('year is invaild')
    }
}

// * Number of days must be between 1 and 30.
function numberOfDays (){
    const daysInput = document.querySelector('#days')
    if(daysInput.value >= 1 ){
        console.log ('Number of days is valid')
    } else {
        console.log ('Number of days must be greater than 0 and less than 30')
    }
}
