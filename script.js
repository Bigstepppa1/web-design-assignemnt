const form = document.querySelector('#form');
const salary = document.querySelector('#salary');
const allowance = document.querySelector('#allowance');
const deduction = document.querySelector('#deduction');
const display_earning = document.querySelector('#display_earning');

form.addEventListener('submit' , (e)=>{
    e.preventDefault();
    if(!/\d/.test(salary.value) || !/\d/.test(allowance.value) || !/\d/.test(deduction.value)){
        alert('Can only contain numeric values');
        salary.value = '';
        allowance.value = '';
        deduction.value = '';
        return;
    }
    calculate();
})

function calculate(){
    let get_salary = parseFloat(salary.value.trim());
    let get_allowance = parseFloat(allowance.value.trim());
    let get_deduction = parseFloat(deduction.value.trim());
    let total = get_salary + get_allowance + get_deduction;
    display_earning.textContent = total;
    salary.value = '';
    allowance.value = '';
    deduction.value = '';
}