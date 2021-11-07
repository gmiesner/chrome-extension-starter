


// function showResume(current, new_div) {
//     if(current === skills) {
//         clearBody();
//         resume();
//         document.getElementById(current).style.display = "none"
//         document.getElementById(new_div).style.display = "block"
//     } 
// }

function resume(){
  console.log("Projects = ")
  console.log(projects);
  console.log("Jobs = ")
  console.log(jobs);
  console.log("Education = ")
  console.log(education);
  console.log("Skills = ")
  console.log(skills);
  
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

  var school_string = document.createTextNode(school);
  var major_string = document.createTextNode(major);
  var degreeDate_string = document.createTextNode(degreeDate);
  
  var grade_string = document.createTextNode(grade);

  
  var company_string = document.createTextNode(company);
  var title_string = document.createTextNode(title);
  var companyDate_string = document.createTextNode(companyDate);
  var action_string = document.createTextNode(action);

  var projectName_string = document.createTextNode(projectName);
  var projectTechnologies_string = document.createTextNode(projectTechnologies);
  var projectDescription_string = document.createTextNode(projectDescription);

  var skills_string = document.createTextNode(skills[0]);
  

  name_span.innerHTML = "";

  school_span.innerHTML = "";
  major_span.innerHTML = "";
  degreeDate_span.innerHTML = "";
  grade_span.innerHTML = "";
  
  company_span.innerHTML = "";
  title_span.innerHTML = "";
  companyDate_span.innerHTML = "";
  action_span.innerHTML = "";

  projectName_span.innerHTML = "";
  projectTechnologies_span.innerHTML = "";
  projectDescription_span.innerHTML = "";

  skills_span.innerHTML = "";


  name_span.appendChild(name_string);

  school_span.appendChild(school_string);
  major_span.appendChild(major_string)
  degreeDate_span.appendChild(degreeDate_string)
  grade_span.appendChild(grade_string);
  
  company_span.appendChild(company_string);
  title_span.appendChild(title_string);
  companyDate_span.appendChild(companyDate_string);
  action_span.appendChild(action_string);

  projectName_span.appendChild(projectName_string);
  projectTechnologies_span.appendChild(projectTechnologies_string);
  projectDescription_span.appendChild(projectDescription_string);

  skills_span.appendChild(skills_string);

}


