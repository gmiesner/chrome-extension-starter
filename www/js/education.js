/*

let education = []

let school = ''
let major = ''
let typeOfDegree = ''
let gradDate = ''
let grade = ''


function show(current, new_div){

  if (current === 'school'){
    school = document.getElementById('school_text').value
    document.getElementById('school_text').value = ""
  } 
  else if (current === 'major'){
    major = document.getElementById('major_text').value
     document.getElementById('major_text').value = ""

  }
  else if (current === 'degree_date'){
    let hold = document.getElementById('degree_date_text').value.split('-')
    gradDate = hold[1] + " / " + hold[0]
      
     
  } else if (){
   
  } else if (current === 'GPA'){

    grade = document.getElementById('grade_text').value
    document.getElementById('action_text').value = ""

    if (new_div === 'school' && company !== ''){
    education.push({'school': school, 'major': major, 'degree_date': degree_date, 'GPA': grade})
    school = '';
    major = '';
    date = '';
    degree_date = '';
    grade = '';
    console.log(education)
  }
  } 
  document.getElementById(current).style.display = "none"
  document.getElementById(new_div).style.display = "block"
  

}

*/
