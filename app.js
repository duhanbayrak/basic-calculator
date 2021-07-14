let result = document.getElementById("resultInner");

let number = document.getElementsByClassName("number");

let operator = document.getElementsByClassName("operator");

let equation = document.getElementById("equation");

let remove = document.getElementById("remove");

equation.addEventListener("click",() => {

    result.value = eval(result.value);
    console.log(equation.value);

});

remove.addEventListener("click",() => {
    
    result.value = "";
    console.log(remove.value);
    
});

for (let i = 0; i < number.length; i++) {

    number[i].addEventListener("click",print)
    
}

function print(){

    result.value = result.value + this.value;
    
    console.log(this.value);

}

for (let i = 0; i < operator.length; i++) {

    operator[i].addEventListener("click",islem)
    
}

function islem(e){
    
    result.value = result.value + this.value;
    //result.innerText = this.value; 
    console.log(this.value);

}






    
   



