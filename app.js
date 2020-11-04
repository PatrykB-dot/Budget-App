
class BudgetApp {
    active = true;
    arr = [];
    constructor(){
        this.addRemoveBtn = document.getElementById('plus-minus-btn').addEventListener('click', this.addRemove.bind(this));
        this.pushBtn = document.getElementById('add-button-id').addEventListener('click', this.pushItem.bind(this));
        this.descrInput = document.getElementById('description-input-id');
        this.valueInput = document.getElementById('value-input-id');
        this.ulItem = document.getElementById('incomes-list');
        this.ulItem2 = document.getElementById('outcomes-list');
        this.spanBudget = document.getElementById('budget-value');
    }
    clearInput(){
        this.valueInput.value = '';
        this.descrInput.value='';
    }
    showBudget(){
        const value = parseInt(this.valueInput.value);
        if(value !== "") {
            if(this.active===true){this.arr.push(value)};
            if(this.active===false){(this.arr.push(parseInt(`-${value}`)))}
        const newArr = this.arr.reduce((a,b)=>a+b);
        this.spanBudget.innerHTML = newArr;
        console.log(this.arr)}
        return
    }
    addRemove(){ 
        const btn = document.getElementById('plus-minus-btn');
        if(this.active){
            console.log("-")
            this.active=false;
            btn.classList.remove('button_plus')
         return
        }
        if(!this.active) {
            console.log("+")
            btn.classList.add('button_plus')
            this.active=true
            return 
        }
    }
    deleteElement(element){
        const data = element.target.parentNode.firstElementChild.innerHTML;
        element.target.parentNode.remove();
        app.spanBudget.innerHTML = app.spanBudget.innerHTML-data;
        app.arr.pop();
    }
    appendLiChilds(liItem){
        const spanItem = document.createElement('p');
        spanItem.setAttribute('class', 'valueSpan');
        if(this.active===false){
            spanItem.innerHTML = `-${this.valueInput.value}`;
        }
        if(this.active===true){
            spanItem.innerHTML = this.valueInput.value;
        }
        liItem.appendChild(spanItem);
        
    }
    createElement(){
        if (this.active&&this.valueInput.value !== ''&& this.descrInput.value!== ''){
            const liItem = document.createElement('li');
            this.ulItem.appendChild(liItem);
            liItem.innerHTML = this.descrInput.value;
            this.appendLiChilds(liItem)
            const deleteLI = document.createElement('button');
            deleteLI.setAttribute('class', 'delete');
            liItem.appendChild(deleteLI);
            deleteLI.addEventListener('click', this.deleteElement)
            this.showBudget()
        } if (!this.active&&this.valueInput.value !== ''&& this.descrInput.value!== ''){
            const liItem2 = document.createElement('li');
            this.ulItem2.appendChild(liItem2);
            liItem2.innerHTML = this.descrInput.value;
            this.appendLiChilds(liItem2)
            const deleteLI = document.createElement('button');
            deleteLI.setAttribute('class', 'delete');
            liItem2.appendChild(deleteLI);
            deleteLI.addEventListener('click', this.deleteElement)
            this.showBudget()
        } 
    }
    pushItem() {
       this.createElement();
    this.clearInput();
    }

}

const app = new BudgetApp();