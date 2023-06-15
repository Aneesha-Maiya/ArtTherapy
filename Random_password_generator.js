let password = []
let smallAlpha = ["a","b","c","d","e","f","g","h","i","j","k","l","m",
"n","o","p","q","r","s","t","u","v","w","x","y","z"]
let capsAlpha = ["A","B","C","D","E","F","G","H","I","J","K","L","M",
"N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
let numbers = ["1","2","3","4","5","6","7","8","9","0"]
let symbols = ["!","@","#","$","%","^","&","*","(",")","_","-","+",
"=","{","}","[","]","|",":",";","<",">",",",".","/","?","~","`"]
let lenght = 10
let password1 = document.getElementById("rectangle-1text")
let password2 = document.getElementById("rectangle-2text")
let password3 = document.getElementById("rectangle-3text")
let password4 = document.getElementById("rectangle-4text")
let lenghtEl = document.getElementById("lenghtPassword")
let increaseCheck  = false
let decreaseCheck = false 
lenghtEl.textContent += lenght
let flag = false
function increase()
{ 
        lenght = lenght + 1
        lenghtEl.textContent = "Lenght of the password:" + lenght
}
function decrease()
{
    lenght = lenght - 1
    lenghtEl.textContent = "Lenght of the password:" + lenght
}
function copy(){
    let text = document.getElementById("copyPassword")
    text.select()
    navigator.clipboard.writeText(text.value)
    alert("copied the text: " + text.value)

}
function randomPasswordGenerator()
{
    let randomchoice = 0
    let randomnumber_calpha = 0
    let randomnumber_salpha = 0
    let randomnumber_number = 0
    let randomnumber_symbol = 0
    if(password.length<lenght*4 && flag === false){
        for(let i= 0 ;i<lenght*4;i++)
        {
           randomchoice = Math.floor(Math.random()*4+1)
           if(randomchoice === 1)
           {
               randomnumber_calpha = Math.floor(Math.random()*26)
               password.push(capsAlpha[randomnumber_calpha])
           }else if(randomchoice === 2){
               randomnumber_salpha = Math.floor(Math.random()*26)
               password.push(smallAlpha[randomnumber_salpha])
           }else if(randomchoice === 3){
               randomnumber_number = Math.floor(Math.random()*10)
               password.push(numbers[randomnumber_number])
           }else{
               randomnumber_symbol = Math.floor(Math.random()*29)
               password.push(symbols[randomnumber_symbol])
           }
           if(i<lenght){
               password1.textContent += password[i]
           }else if(i < lenght*2){
               password2.textContent += password[i]
           }else if(i < lenght*3){
               password3.textContent += password[i]
           }else{
               password4.textContent += password[i]
           }
           flag = true
        }
    }
    else{
        alert(" To view new set of passwords refresh and click on 'generate password' again ")
    }
    console.log(password)
    console.log(password.length)
}

//password1.textContent = password[0] + password[1]
