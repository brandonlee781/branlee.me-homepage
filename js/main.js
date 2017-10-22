var projects = document.getElementById('projects');

fetch('https://www.branlee.me/api/v1/github/')
  .then(res => res.json())
  .then(data => {
    var html = '';
    var latest = data.repos.slice(0, 4);
    latest.forEach(r => {
      html += '<a href="' + r.html_url + '">' + r.name + ' - ' + (r.description ? r.description : 'No Description') + '</a>'
    })
    projects.innerHTML += html;
  })