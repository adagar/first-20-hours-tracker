const skills = document.querySelector('.skills');

document.addEventListener('DOMContentLoaded', () => {
    //nav menu
    const menus = document.querySelectorAll('.side-menu');
    M.Sidenav.init(menus, {edge: 'right'});

    //add skill form
    const forms = document.querySelectorAll('.side-form');
    M.Sidenav.init(forms, {edge: 'left'});

    // const body = document.querySelector('.skills.container');
    // body.innerHTML = (projects.map(project => _turnProjectIntoDashboardNode(project)).join(''));
    console.log(forms);

    console.log("DOM CONTENT LOAD COMPLETE");
})

const _turnProjectIntoDashboardNode = (project) => {
    console.log(project);
    let htmlContent = ''
    htmlContent += `<div class="skill-details">${project.skillTitle}</div>`;
    return htmlContent;
}

// render skill information
const renderSkill = (data, id) => {
    let totalTime = 0;

    console.log(data.resources);
    const resources = data.resources.map(resource => `<li>${resource}</li>`).join('');
    console.log(resources);

    console.log(data.sessions);
    const sessions = data.sessions.map(session =>
        `<li>
            <div>${session.date}</div>
            <div>${session.description}</div>
            <div>${session.length}</div>
        </li>`).join(''); 

    const html = `
        <div class="card-panel skill white row" data-id="${id}">
            <img src="/img/clock.png" alt="skill thumb">
            <div class="skill-details">
                <div class="skill-title">${data.skill}</div>
                    <div class="skill-resources">
                        <ul>
                            ${resources}
                        </ul>
                    </div>
            <div class="skill-sessions">
                <ul>
                    ${sessions}
                </ul>
            </div>
            <div class="skill-total">${totalTime}</div>
            </div>
            <div class="skill-delete">
            <i class="material-icons" data-id="${id}">delete_outline</i>
            </div>
        </div>
    `

    skills.innerHTML += html;
}

