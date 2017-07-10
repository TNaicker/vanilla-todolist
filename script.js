var myForm = document.querySelector('.myForm');
var curNum = 0;
var countNum = 0;

var myTodoList = document.createElement('table');
myTodoList.className = "myTList";

myForm.addEventListener('submit', function(event){
  event.preventDefault();
  curNum = 1;
  if(document.getElementById('listAddition').value === ""){
    console.log("please enter something...")
    alert("Please enter something");
  }else{
    for(let x = 0; x < curNum; x++){
      var myTR = document.createElement('tr');
      myTodoList.appendChild(myTR);
      for(var y = 0; y < 1; y++){
        var myTD = document.createElement('td');
        myTD.innerText = document.getElementById('listAddition').value;
        document.getElementById('listAddition').value = "";
        myTR.appendChild(myTD);
      }
    }
  }
})

myTodoList.addEventListener('click', function(event){
  if(event.target === myTodoList){
    console.log('Cannot remove that');
  }else{
    console.log(event.target)
    event.target.remove();
  }
})

var button = document.createElement('button');
button.className = "myButt";
button.type = 'submit';
button.innerText = "SUBMIT";

var theForm = document.getElementsByClassName('myForm');
theForm[0].appendChild(myTodoList);
theForm[0].appendChild(button);
