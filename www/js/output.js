

function clearBody() {
  document.body.innerHTML = '';
}


function show(current, new_div) {
    clearBody();
    if(new_div === 'resume1')
    resume();
    document.getElementById(current).style.display = "none"
    document.getElementById(new_div).style.display = "block"
}



function resume(){

  var name_span = document.getElementById("span_name");

  var school_span = document.getElementById("span_school");
  var major_span = document.getElementById("span_major");
  var degreeDate_span = document.getElementById("span_degree_date");
  var grade_span = document.getElementById("span_GPA");
  
  var company_span = document.getElementById("span_company");
  var title_span = document.getElementById("span_title");
  var companyDate_span = document.getElementById("span_company_date");
  var action_span = document.getElementById("span_action");

  var projectName_span = document.getElementById("span_project_name");
  var projectTechnologies_span = document.getElementById("span_project_technologies");
  var projectDescription_span = document.getElementById("span_project_description");

  var skills_span = document.getElementById("span_skills");


  var name_string = document.createTextNode(name);

  var school_string = document.createTextNode(education['school']);
  var major_string = document.createTextNode(education['major']);
  var degreeDate_string = document.createTextNode(education['degree_date']);
  var grade_string = document.createTextNode(education['GPA']);
  
  var company_string = document.createTextNode(jobs['company']);
  var title_string = document.createTextNode(jobs['title']);
  var companyDate_string = document.createTextNode(jobs['date']);
  var action_string = document.createTextNode(jobs['action']);

  var projectName_string = document.createTextNode(projects['name']);
  var projectTechnologies_string = document.createTextNode(projects['technologies']);
  var projectDescription_string = document.createTextNode(projects['description']);

  var skills_string = document.createTextNode(skills[0]);


  name_span.appendChild(name_string);

  school_span.appendChild(school_string);
  major_span.appendChild(major_string)
  degreeDate_span.appendChild(degreeDate_string)
  grade_span.appendChild(grade_string);
  
  company_span.appendChild(company_string);
  title_span.appendChild(title_string);
  companyDate_span.appendChild(companyDate_string);
  action_span.appendChild(action_string);

  projectName_span.appendChild(projectDescription_string);
  projectTechnologies_span.appendChild(projectTechnologies_string);
  projectDescription_span.appendChild(projectDescription_string);

  skills_span.appendChild(skills_string);

}

