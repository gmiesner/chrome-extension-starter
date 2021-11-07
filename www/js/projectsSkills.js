let projects = []
let skills = []

let projectName = ''
let projectTechnologies = ''
let projectDescription = ''

function show(current, new_div){

  if (current === 'project_name'){
    projectName = document.getElementById('project_name_text').value
    document.getElementById('project_name_text').value = ""
  } 
  else if (current === 'project_technologies'){
    projectTechnologies = document.getElementById('project_technologies_text').value
     document.getElementById('project_technologies_text').value = ""

  }
  else if (current === 'project_description'){
     projectDescription = document.getElementById('project_description_text').value
     document.getElementById('project_description_text').value = ""

     
  } else if (current === 'skills'){
    skills.push(document.getElementById('skills_text').value)

    // need to push values to json still 
    projects.push({'name': projectName, 'technologies': projectTechnologies, 'description': projectDescription})
    // if (new_div === 'school' && company !== ''){
    // education.push({'school': school, 'major': major, 'degree_date': degree_date, 'GPA': grade})
    // school = '';
    // major = '';
    // date = '';
    // degree_date = '';
    // grade = '';
    // console.log(education)
  }
  } 
  document.getElementById(current).style.display = "none"
  document.getElementById(new_div).style.display = "block"
  

}
