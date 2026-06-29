// const red= document.querySelector(".r")
// const b= document.querySelector(".b")
// const g= document.querySelector(".g")
// const y= document.querySelector(".y")

// red.addEventListener("click", function () {
//     document.body.style.backgroundColor = "red";
// });
// b.addEventListener("click", function () {
//     document.body.style.backgroundColor = "blue";
// });
// y.addEventListener("click", function () {
//     document.body.style.backgroundColor = "yellow";
// });
// g.addEventListener("click", function () {
//     document.body.style.backgroundColor = "green";
// });
// const sub= document.querySelector(".sub")
// const res= document.querySelector(".res")
// const inp= document.querySelector(".inp")
// sub.addEventListener("click", function () {
//     res.textContent="You Typed: "+ inp.value
// });

// document.querySelector("h1").textContent="JavaScript"
// // const rad= document.querySelector(".rand")
// // rad.addEventListener("click", function(){
// //     document.body.style.backgroundColor= "rgb(" + Math.random()*256  +" , " + Math.random()*256 + " , " + Math.random()*256 + ")";
// // })

// setInterval(() => {
//      document.body.style.backgroundColor= "rgb(" + Math.random()*256  +" , " + Math.random()*256 + " , " + Math.random()*256 + ")";
// }, 500);

const  submit= document.querySelector('.sub')
const  login= document.querySelector('.login')
const  email= document.querySelector('.new')
const  meet= document.querySelector('.meet')
const  msg= document.querySelector('.msg')


// submit.addEventListener("click", function () {
//        login.style.display = "block";
//     setTimeout(() => {
//         email.style.display = "block";
//     }, 1000);
//     setTimeout(() => {
//         meet.style.display = "block";
//     }, 2000);
//     setTimeout(() => {
//         msg.style.display = "block";
//     }, 3000);

     
// });

const messages = [login, email, meet, msg];
submit.addEventListener("click", () => {
    messages.forEach(message => {
        message.style.display = "none";
    });
    let i = 0
    const interval = setInterval(() => {
        messages[i].style.display = "block";
        i++
      
    }, 1000)

});