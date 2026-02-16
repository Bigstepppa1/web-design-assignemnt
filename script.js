const form = document.querySelector('#form');
const salary = document.querySelector('#salary');
const allowance = document.querySelector('#allowance');
const deduction = document.querySelector('#deduction');
const display_earning = document.querySelector('#display_earning');

form.addEventListener('submit' , (e)=>{
    e.preventDefault();
    calculate();
})



function calculate(){
    let get_salary = parseFloat(salary.value.trim());
    let get_allowance = parseFloat(allowance.value.trim());
    let get_deduction = parseFloat(deduction.value.trim());
    if (Number.isNaN(get_salary) || Number.isNaN(get_allowance) ||Number.isNaN(get_deduction)){
        alert("Can only contain numbers");
        salary.value = '';
        allowance.value = '';
        deduction.value = '';
        return;
    }
    let total = (get_salary + get_allowance) - get_deduction;
    display_earning.textContent = total.toFixed(2);
    salary.value = '';
    allowance.value = '';
    deduction.value = '';
}