
const sliderContainer = document.querySelector('.slider-container');
const slideRight = document.querySelector('.right-slide');
const slideLeft = document.querySelector('.left-slide');
const upButton = document.querySelector('.up-button');
const downButton = document.querySelector('.down-button');
const slidesLength = Array.from(slideRight.getElementsByClassName('img')).length;

// Card Variables
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const email = document.getElementById('email');
const submitBtn = document.getElementById('sub');




console.log(slidesLength);

let activeSlideIndex = 0;


//slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`;

upButton.addEventListener('click', () => changeSlide('up'));
downButton.addEventListener('click', () => changeSlide('down'));

const changeSlide = (direction) =>{
const sliderHeight = sliderContainer.clientHeight;
switch(direction){
  case 'up':
   activeSlideIndex++
   console.log(activeSlideIndex)
  if(activeSlideIndex > slidesLength - 1){
    activeSlideIndex = 0;
  };
  break;
  case 'down':
  console.log(activeSlideIndex);
  activeSlideIndex--
  if(activeSlideIndex < 0){
    activeSlideIndex = slidesLength - 1;
  }
  break;
}
slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`;
//slideLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`;
}
// Initiate Interval
let interval;
let interval2;

// Emaul Msg
const msg = `Below Lies A Reward For Your Interest and Support\n
https://www.billinbenjis.com/discount/NEWYEARNEWGEAR`

console.log(msg);

// Initiate Array
let newArr = [];

submitBtn.addEventListener('click', (e) =>{
 e.preventDefault();
 //For Input Invalid
if(fname.value === '' || lname.value === '' || email.value.indexOf('@') < 0){
    interval = setInterval(()=>{
      document.getElementById('head').classList.add('head2');
    return document.getElementById('head').innerHTML = '<header>Fields Invalid</header>'
  });
  setTimeout(()=>{
    document.getElementById('head').classList.remove('head2');
    document.getElementById('head'). innerHTML = '<header>Claim Gift</header>';
     clearInterval(interval);
  },3000)
  // If Input Is Valid
} else {
  interval2 = setInterval(()=>{
  document.getElementById('head').innerHTML = '<header>Gift Sent</header>';
  document.getElementById('head').classList.add('head3');
});
setTimeout(()=>{
  document.getElementById('head').classList.remove('head3');
  document.getElementById('head').innerHTML = '<header>Claim Gift</header>';
  clearInterval(interval2);
},5000);
 sendEmail();
}
// After Form Is Sent Or Rejected
scraper(fname.value,lname.value,email.value);
console.log(newArr); 

});


function sendEmail(){
  const data = {
    name:fname.value,
    email:email.value,
    message:msg
  };
  const serviceId = "service_8bheajh";
  const templateId = 'template_3vzxbex';

  emailjs
     .send(serviceId,templateId,data)
     .then((res) =>{
       document.getElementById('fname').value = "";
       document.getElementById('email').value = "";
       document.getElementById('lname').value = "";
       console.log(res);
       alert("Message Sent");
     })
     .catch((err) => console.log(err));
}

// Scraper Function

function scraper(v1,v2,email){
  const obj = {firstName:v1,lastName:v2,email:email};
  return newArr.push(obj);
}
