database0 = database0.replace(/&#34;/g, '"');
console.log(database0)
let db = JSON.parse(database0)
console.log(db)
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