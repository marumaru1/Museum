const buyForm = document.getElementById('form-buy');
const buyFormButton = document.getElementById('buy-button')
export function createBuyForm(){
document.getElementById('close-form').onclick = function () {
    showHideForm();
};
document.getElementById('buy-button').onclick = function () {
    showHideForm();
};

let price1 = document.createElement('span');
price1.classList.add('price');
let priceAdd = document.querySelector('.price');
priceAdd.after(price1);
price1.innerHTML ='222';
}
function showHideForm(){
    if(!buyForm.classList.contains('animation-form-show')) {
        buyForm.classList.remove('animation-form-hide');
        buyForm.classList.add('animation-form-show');
        setTimeout(()=>{
            buyForm.style.display='block';
        }, 500);
    } else {
        buyForm.classList.add('animation-form-hide');
        setTimeout(()=>{
            buyForm.classList.remove('animation-form-show');
            buyForm.style.display='none';
        }, 500);
    }
}