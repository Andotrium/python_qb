let db = [{
    "corr": 0,
    "incorr": 0,
    "__v": 0,
    "_id": {
      "$oid": "66428a3d01758d952d1a2502"
    },
    "ques": "The first question",
    "op1": "option 1",
    "op2": "option2",
    "op3": "option 3",
    "op4": "option 4",
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
    "submittedBy": "Pratham"
  }]

  var length = db.length
  var q_visited = []

function q_select(){
    var present_q = Math.floor(Math.random()*length)
    if(!q_visited.contains(present_q)){
        q_visited.push(present_q);
        db[present_q];
    }

}
document.getElementById('questions').innerHTML = db[0]['ques']

// iterate between the elements of db, and set innerHTML of question and 
// option divs to the respect elements under the dictionaries

// localStorage.var = value
// localStorage.var