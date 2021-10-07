let screen = document.getElementById("screen");
buttons = document.querySelectorAll('#number');
let screenValue = "";

for(item of buttons){
    item.addEventListener('click', (e) =>{
        buttonText = e.target.innerHTML;
        console.log(buttonText);
        if(buttonText == '='){
            screen.innerHTML = eval(screenValue);
        }else{
            screenValue += buttonText;
            screen.innerHTML = screenValue;
        }
    })
}
