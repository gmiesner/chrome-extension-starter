
let jobs = []

let name = ''

let company = ''
let title = ''
let date = ''
let action = ''

let education = []

let school = ''
let major = ''
let typeOfDegree = ''
let gradDate = ''
let grade = ''

let projects = []
let skills = []

let projectName = ''
let projectTechnologies = ''
let projectDescription = ''


function show(current, new_div) {

  if (current === 'school') {
    school = document.getElementById('school_text').value
    document.getElementById('school_text').value = ""
  }
  else if (current === 'major') {
    major = document.getElementById('major_text').value
    document.getElementById('major_text').value = ""

  }
  else if (current === 'degree_date') {
    let hold = document.getElementById('degree_date_text').value.split('-')
    gradDate = hold[1] + " / " + hold[0]


  } else if (current === 'GPA') {

    grade = document.getElementById('grade_text').value
    document.getElementById('action_text').value = ""

    if (new_div === 'school' && company !== '') {
      education.push({ 'school': school, 'major': major, 'degree_date': degree_date, 'GPA': grade })
      school = '';
      major = '';
      date = '';
      degree_date = '';
      grade = '';
      console.log(education)
    }
  } else if (current === skills) {
    clearBody();
    resume();
  } else if (current === 'school') {
    school = document.getElementById('school_text').value
    document.getElementById('school_text').value = ""
  }
  else if (current === 'major') {
    major = document.getElementById('major_text').value
    document.getElementById('major_text').value = ""

  }
  else if (current === 'degree_date') {
    let hold = document.getElementById('degree_date_text').value.split('-')
    gradDate = hold[1] + " / " + hold[0]


  } else if (current === 'GPA') {

    grade = document.getElementById('grade_text').value
    document.getElementById('action_text').value = ""

    if (new_div === 'school' && company !== '') {
      education.push({ 'school': school, 'major': major, 'degree_date': degree_date, 'GPA': grade })
      school = '';
      major = '';
      date = '';
      degree_date = '';
      grade = '';
      console.log(education)
    }
  }

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


  } else if (current === 'skills') {
    skills.push(document.getElementById('skills_text').value)

    projects.push({ 'name': projectName, 'technologies': projectTechnologies, 'description': projectDescription })

  }

document.getElementById(current).style.display = "none"
document.getElementById(new_div).style.display = "block"

}
