let jobs = []

let name = ''

let company = ''
let title = ''
let companyDate = ''
let action = ''

let education = []

let school = ''
let major = ''
let typeOfDegree = ''
let degreeDate = ''
let grade = ''

let projects = []
let skills = []

let projectName = ''
let projectTechnologies = ''
let projectDescription = ''

function present() {
  if (document.getElementById('present').checked){
  document.getElementById('end').style.display = "none";
  }else{
    document.getElementById('end').style.display = "inline";
  }
}


function show(current, new_div){

  if (current === 'company'){
    company = document.getElementById('company_text').value;
    document.getElementById('company_text').value = "";
  } 
  else if (current === 'title'){
    title = document.getElementById('title_text').value;
     document.getElementById('title_text').value = "";

  } else if (current === "name"){
    name = document.getElementById('name_text').value;
  }
  else if (current === 'date'){
      if (document.getElementById('present').checked){ 
         let hold  = document.getElementById('start').value.split('-');
         companyDate = hold[1] + "/" + hold[0] + " - Present";

      } else{
          let hold  = document.getElementById('start').value.split('-');
          let hold2 = document.getElementById('end').value.split('-');
          companyDate = hold[1] + "/" + hold[0] + " - " + hold2[1] + "/" + hold2[0];
      }
      document.getElementById('start').value = "";
      document.getElementById('end').value = "";
      if (document.getElementById('present').checked){
      document.getElementById('present').checked = false;
      document.getElementById('end').style.display = "inline";
      }
  } else if (current === 'action'){

    action = document.getElementById('action_text').value;
    document.getElementById('action_text').value = "";
  
    if (new_div === 'company' && company !== ''){
    jobs.push({'company': company, 'title': title, 'date': date, 'action': action});
    company = '';
    title = '';
    date = '';
    action = '';
    console.log(jobs);
  }
  } else if (current === 'school') {
    school = document.getElementById('school_text').value;
    document.getElementById('school_text').value = "";
  }
  else if (current === 'major') {
    major = document.getElementById('major_text').value;
    document.getElementById('major_text').value = "";

  }
  else if (current === 'degree_date') {
    let hold = document.getElementById('degree_date_text').value.split('-');
    degreeDate = hold[1] + " / " + hold[0];


  } else if (current === 'GPA') {

    grade = document.getElementById('grade_text').value;
    document.getElementById('action_text').value = "";

    if (new_div === 'school' && company !== '') {
      education.push({ 'school': school, 'major': major, 'degree_date': degree_date, 'GPA': grade });
      school = ''
      major = ''
      date = ''
      degree_date = ''
      grade = ''
      console.log(education);
    }
  }
  // else if (current === 'school') {
  //   school = document.getElementById('school_text').value;
  //   document.getElementById('school_text').value = "";
  // }
  // else if (current === 'major') {
  //   major = document.getElementById('major_text').value;
  //   document.getElementById('major_text').value = "";

  // }
  // else if (current === 'degree_date') {
  //   let hold = document.getElementById('degree_date_text').value.split('-');
  //   gradDate = hold[1] + " / " + hold[0];


  // } else if (current === 'GPA') {

  //   grade = document.getElementById('grade_text').value;
  //   document.getElementById('action_text').value = "";

  //   if (new_div === 'school' && company !== '') {
  //     education.push({ 'school': school, 'major': major, 'degree_date': degree_date, 'GPA': grade })
  //     school = ''
  //     major = ''
  //     date = ''
  //     degree_date = ''
  //     grade = ''
  //     console.log(education)
  //   }
  // }

  if (current === 'project_name') {
    projectName = document.getElementById('project_name_text').value
    document.getElementById('project_name_text').value = ""
  }
  else if (current === 'project_technologies') {
    projectTechnologies = document.getElementById('project_technologies_text').value
    document.getElementById('project_technologies_text').value = ""

  }
  else if (current === 'project_description') {
    projectDescription = document.getElementById('project_description_text').value
    document.getElementById('project_description_text').value = ""

    projects.push({ 'name': projectName, 'technologies': projectTechnologies, 'description': projectDescription })

  } else if (current === 'skills') {
    skills.push(document.getElementById('skills_text').value);
    document.getElementById('skills').style.display = "none";
    document.getElementById('resume1').style.backgroundColor = "white";
    document.getElementById('resume1').style.width = "500px";
    document.getElementById('resume1').style.verticalAlign = "center";
    document.getElementById('resume1').style.marginLeft = "auto";
    document.getElementById('resume1').style.marginRight = "auto";
    resume()
  }

  // if (current === "open" || document.getElementById(current).value !== 'undefined'){
  document.getElementById(current).style.display = "none";
  document.getElementById(new_div).style.display = "block";
  // }
}
