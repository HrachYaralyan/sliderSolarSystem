console.log(data_Eng[0]);
console.log(data_Arm[0]);
let data ;


var now = new Date();

// Get the timezone offset in minutes
var timezoneOffset = now.getTimezoneOffset();

// Convert the timezone offset to hours and minutes
var timezoneOffsetHours = Math.abs(Math.floor(timezoneOffset / 60));
var timezoneOffsetMinutes = Math.abs(timezoneOffset % 60);

// Determine if the timezone offset is ahead or behind UTC
var timezoneSign = timezoneOffset > 0 ? "-" : "+";

// Format the timezone string
var timezoneString = timezoneSign + 
                     (timezoneOffsetHours < 10 ? '0' : '') + timezoneOffsetHours + ":" +
                     (timezoneOffsetMinutes < 10 ? '0' : '') + timezoneOffsetMinutes;

// Output the timezone
// console.log( JSON.stringify(timezoneString));
// console.log(JSON.stringify("+04:00"))

if(JSON.stringify("+04:00") == JSON.stringify(timezoneString) ){
  console.log("Space Minds Arm");
  data = data_Arm;
}else{
  console.log("Space Minds Eng");
  data = data_Eng;
    

}












let slider = document.getElementById('slide');


for (let i = 0; i < data[0].length; i++) {
  let itemCard = document.createElement("div");
  itemCard.innerHTML = (getSlideCard(data[0][i]))
  itemCard.setAttribute("class" , "item")
  itemCard.style = `background-image: url(${data[0][i].image});`
  // console.log(itemCard , "<----itemCard");
  slider.appendChild(itemCard)
}
// console.log(slider);


function getSlideCard(item){
  // console.log(item,"<-----item");
  return `
  <div class="content ">
      <div class="name">${item.name}</div>
      <div>
          <ul class="des">
                  <li> ${item.name}</li>
                  <li> ${item.meanRadius}</li>
                  <li> ${item.mass}</li>
                  <li> ${item.gravity}</li>
                  <li> ${item.escapeVelocity}</li>
                  <li> ${item.distanceFromSun}</li>
                  <li> ${item.averageOrbitalSpeed}</li>
                  <li> ${item.atmosphere}</li>
               
          </ul>
      </div>
  </div>
 
  `

}





{/* <div class="item helooo_1" style="background-image: url(https://upload.wikimedia.org/wikipedia/commons/0/0c/Mars_-_August_30_2021_-_Flickr_-_Kevin_M._Gill.png);">
<div class="content ">
    <div class="name">Մարս</div>
    <div>
        <ul class="des">
                <li> ${item.name}</li>
                <li> ${item.meanRadius}</li>
                <li> ${item.mass}</li>
                <li> ${item.gravity}</li>
                <li> ${item.escapeVelocity}</li>
                <li> ${item.distanceFromSun}</li>
                <li> ${item.averageOrbitalSpeed}</li>
                <li> ${item.atmosphere}</li>
             
        </ul>
    </div>
</div>

</div> */}
























document.getElementById('next').onclick = function () {
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').appendChild(lists[0]);
}
document.getElementById('prev').onclick = function () {
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').prepend(lists[lists.length - 1]);
}

document.body.addEventListener("keyup", (e) => {
    if (e.code == "ArrowRight") {
        let lists = document.querySelectorAll('.item');
        document.getElementById('slide').appendChild(lists[0]);
    } else if (e.code == "ArrowLeft") {
        let lists = document.querySelectorAll('.item');
        document.getElementById('slide').prepend(lists[lists.length - 1]);
    }
})

var scrollableElement = document.body; //document.getElementById('scrollableElement');

scrollableElement.addEventListener('wheel', checkScrollDirection);

function checkScrollDirection(event) {
  if (checkScrollDirectionIsUp(event)) {
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').appendChild(lists[0]);
    console.log('UP');
  } else {
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').prepend(lists[lists.length - 1]);
    console.log('Down');
  }
}

function checkScrollDirectionIsUp(event) {
  if (event.wheelDelta) {
    return event.wheelDelta > 0;
  }
  return event.deltaY < 0;
}


let itemsArr = document.querySelectorAll('.item')

itemsArr.forEach((item)=>{
    console.log(item.style["width"], "<----- style");
    item.addEventListener("click",function(){
        if(this.offsetWidth == 200){
            let lists = document.querySelectorAll('.item');
            document.getElementById('slide').appendChild(lists[0]);
        }
    })
})
// console.log(itemsArr);


































// let num2 = 2;
// let currentItem = document.querySelectorAll('.item')[num2]

// function addEdvenForItem(currentItem){
//     currentItem.addEventListener("click",()=>{
//         currentItem = document.querySelectorAll('.item')[num2 + 1];
    
//         let lists = document.querySelectorAll('.item');
//         document.getElementById('slide').appendChild(lists[0]);
//     })
    

// }

// currentItem.addEventListener("click",()=>{
//     console.log(currentItem , "<----- 1");
//     currentItem = document.querySelectorAll('.item')[num2 + 1];

//     addEdvenForItem(currentItem)
//     console.log(currentItem  , "<----- 2");

//     let lists = document.querySelectorAll('.item');
//     document.getElementById('slide').appendChild(lists[0]);
// })





// console.log(itemArr[2]);


