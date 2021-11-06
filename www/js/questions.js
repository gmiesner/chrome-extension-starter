let jobs = []
let company = ''
let title = ''
let date = ''
let action = ''

function show(current, new_div){
  if (current === 'company'){
    company = document.getElementById('company_text').value
    document.getElementById('company_text').value = ""
  } else if (current === 'title'){
    title = document.getElementById('title_text').value
     document.getElementById('title_text').value = ""
  } else if (current === 'date'){
      if (document.getElementById('present').checked){ 
         let hold  = document.getElementById('start').value.split('-')

         date = hold[1] + "/" + hold[0] + " - Present"
      } else{
          let hold  = document.getElementById('start').value.split('-')
          let hold2 = document.getElementById('end').value.split('-')
         date = hold[1] + "/" + hold[0] + " - " + hold2[1] + '/' + hold2[0]
      }
      document.getElementById('start').value = ""
      document.getElementById('end').value = ""
      if (document.getElementById('present').checked){
      document.getElementById('present').checked = false;
      document.getElementById('end').style.display = "inline"

      }
  } else if (current === 'action'){
    action = document.getElementById('action_text').value
     document.getElementById('action_text').value = ""
  }
  
  if (new_div === 'company' && company !== ''){
    jobs.push({'company': company, 'title': title, 'date': date, 'action': action})
    company = '';
    title = '';
    date = '';
    action = '';
    console.log(jobs)
  }
  document.getElementById(current).style.display = "none"
  document.getElementById(new_div).style.display = "block"
}

function present(){
  if (document.getElementById('present').checked){
  document.getElementById('end').style.display = "none"
  }else{
    document.getElementById('end').style.display = "inline"
  }
}
