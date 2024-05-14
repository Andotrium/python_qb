let db = [{
    "corr": 0,
    "incorr": 0,
    "__v": 0,
    "_id": {
      "$oid": "66428a3d01758d952d1a2502"
    },
    "ques": "The first question Pratham Andotra",
    "op1": "option 1",
    "op2": "option2",
    "op3": "option 3",
    "op4": "option 4",
    "correct": 2,
    "submittedBy": "Pratham"
  },
  {
    "corr": 0,
    "incorr": 0,
    "__v": 0,
    "_id": {
      "$oid": "66428a3d01758d952d1a2502"
    },
    "ques": "The second question",
    "op1": "option 1",
    "op2": "option2",
    "op3": "option 3",
    "op4": "option 4",
    "correct": 4,
    "submittedBy": "Pratham"
  },
  {
    "corr": 0,
    "incorr": 0,
    "__v": 0,
    "_id": {
      "$oid": "66428a3d01758d952d1a2502"
    },
    "ques": "The third question",
    "op1": "option 1",
    "op2": "option2",
    "op3": "option 3",
    "op4": "option 4",
    "correct": 1,
    "submittedBy": "Pratham"
  }]
  // console.log(db[0])
var len = db.length
var visited_q = []


function display(){
  for(let x=0;x<4;x++){
    document.getElementsByClassName('option')[x].classList.remove('red')
    document.getElementsByClassName('option')[x].classList.remove('green')
  }
  var present_q = Math.floor(Math.random()*len)
  if(!visited_q.includes(present_q)){
    console.log(present_q)
    console.log(db[present_q]['ques'])
    document.getElementById('questions').getElementsByTagName('p')[0].innerHTML = db[present_q]['ques'];
    document.getElementsByClassName('option')[0].innerHTML = db[present_q]['op1'];
    document.getElementsByClassName('option')[1].innerHTML = db[present_q]['op2'];
    document.getElementsByClassName('option')[2].innerHTML = db[present_q]['op3'];
    document.getElementsByClassName('option')[3].innerHTML = db[present_q]['op4'];

    document.getElementsByClassName('option')[0].addEventListener('click',(e)=>{
      if(1 == db[present_q]['correct']){
        document.getElementsByClassName('option')[0].classList.add('green')
        setTimeout(display,500)
      }
      else {
        document.getElementsByClassName('option')[0].classList.add('red')
      }
    })
    document.getElementsByClassName('option')[1].addEventListener('click',(e)=>{
      if(2 == db[present_q]['correct']){
        document.getElementsByClassName('option')[1].classList.add('green')
        setTimeout(display,500)
      }
      else {
        document.getElementsByClassName('option')[1].classList.add('red')
      }
    })
    document.getElementsByClassName('option')[2].addEventListener('click',(e)=>{
      if(3 == db[present_q]['correct']){
        document.getElementsByClassName('option')[2].classList.add('green')
        setTimeout(display,500)
        
      }
      else {
        document.getElementsByClassName('option')[2].classList.add('red')
      }
    })
    document.getElementsByClassName('option')[3].addEventListener('click',(e)=>{
      if(4 == db[present_q]['correct']){
        document.getElementsByClassName('option')[3].classList.add('green')
        
        setTimeout(display,1000)
      }
      else {
        document.getElementsByClassName('option')[3].classList.add('red')
      }
    })
    // document.getElementsByClassName('option')[1].addEventListener = db[present_q]['op4'];
    // document.getElementsByClassName('option')[2].addEventListener = db[present_q]['op4'];
    // document.getElementsByClassName('option')[3].addEventListener = db[present_q]['op4'];
    
  }
    else{
      display()
    }
}

display();



// iterate between the elements of db, and set innerHTML of question and 
// option divs to the respect elements under the dictionaries

// localStorage.var = value
// localStorage.var