const plusMinusBtn = document.getElementById('plus-minus-btn');
const incomesSection = document.getElementById('incomes-section');
const outcomesSection = document.getElementById('outcomes-section');
const sumArray = [];
let number= 0;
let active = true;
let changeValue = '+';
function checkEmptyUl() {
    const ulItem = document.getElementById('incomes-list');
    const ulItem2 = document.getElementById('outcomes-list');
    if (ulItem.innerHTML===""){
        incomesSection.classList.add('hide');
    }
    if (ulItem2.innerHTML=""){
        outcomesSection.classList.add('hide');
    }
}

function checkElement(){
    const removeLiBtn = document.querySelector(".item-button.remove-button");
    const btnId = removeLiBtn.getAttribute('id');
    removeLiBtn.setAttribute('id', `${number}`);
if (typeof (removeLiBtn)!='undefined' && removeLiBtn != null) {
    document.getElementById(`li${number}`).remove();
    checkEmptyUl();
}
else console.log('niema')
}
function addLiItem(type,value1,value2){
    //adding li item do our list
    let liItem = document.createElement('li');
    liItem.setAttribute('id', `li${number}`);
    type.appendChild(liItem);
    const descriptionText = document.createElement('p');
    descriptionText.innerHTML = value1;
    const valueText = document.createElement('p');
    valueText.innerHTML = value2;
    const iconsDiv = document.createElement('div');
    iconsDiv.classList.add('icons')
    const editButton = document.createElement('button');
    editButton.classList.add('item-button', 'edit-button');
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('item-button','remove-button');
    liItem.appendChild(descriptionText);
    liItem.appendChild(valueText);
    liItem.appendChild(iconsDiv);
    iconsDiv.appendChild(editButton);
    iconsDiv.appendChild(deleteButton);
    const sumAll = document.getElementById('budget-value');
    sumArray.push(parseInt(value2));
    const sumValues = sumArray.reduce((a,b)=>a+b);
    sumAll.textContent = sumValues;
    deleteButton.addEventListener('click', checkElement);
}
const changePlusMinusBtn = function () {
    if (active) {
        plusMinusBtn.classList.remove('button_plus');
        changeValue = '-';
       console.log(changeValue)
       active=false;
       return
    }
    if (!active) {
        plusMinusBtn.classList.add('button_plus')
        changeValue = '+';
        console.log(changeValue)
        active=true;
        return
    }
}
plusMinusBtn.addEventListener('click', changePlusMinusBtn);
const addBtn = document.getElementById('add-button-id');
const addValues = function() {
    const descriptionValue = document.getElementById('description-input-id').value;
    let valueInput = document.getElementById('value-input-id').value;
    if (descriptionValue===""||valueInput===""){
        alert("Please type your text")
        return
    }
    if (changeValue==='-'){
        valueInput = `-${valueInput}`
        outcomesSection.classList.remove('hide');
        const outComesList = document.getElementById('outcomes-list');
        addLiItem(outComesList,descriptionValue,valueInput);
        document.getElementById('description-input-id').value = '';
        document.getElementById('value-input-id').value = '';
    }
    if (changeValue==='+'){
        incomesSection.classList.remove('hide');
        const incomesList = document.getElementById('incomes-list');
        addLiItem(incomesList,descriptionValue,valueInput);
        document.getElementById('description-input-id').value = '';
        document.getElementById('value-input-id').value = '';
    } 
}
addBtn.addEventListener('click',addValues);

