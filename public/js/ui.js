const skills = document.querySelector('.skills');

document.addEventListener('DOMContentLoaded', () => {
    //nav menu
    const menus = document.querySelectorAll('.side-menu');
    M.Sidenav.init(menus, {edge: 'right'});

    //add skill form
    const forms = document.querySelectorAll('.side-form');
    M.Sidenav.init(forms, {edge: 'left'});
    console.log("#### CONTENT LOADED!");
})

const _turnProjectIntoDashboardNode = (project) => {
    console.log(project);
    let htmlContent = ''
    htmlContent += `<div class="skill-details">${project.skillTitle}</div>`;
    return htmlContent;
}

// render skill information
const renderSkill = (data, id) => {
    console.log("#### RENDER SKILL");
    const resources = data.resources.map(resource => `<li>${resource}</li>`).join('');
    const totalTime = convertTotalMinToString(data.sessions);
    const sessions = data.sessions.map(session => {
        let date = new Date(session.date);
        return (`<li>
            <div>${date.toLocaleDateString()}</div>
            <div>${session.content}</div>
            <div>${session.length}</div>
        </li>`)}).join(''); 

    const html = `
        <div class="card-panel skill white row data-id='${id}'">
            <div>
                <img src="/img/clock.png" alt="skill thumb">
            </div>
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
            

            <!--Add Session Button-->
            <div class="center">
                <a class="sidenav-trigger" data-target="side-session-form">
                    <i class="skill-session-add btn-floating btn-small add-btn material-icons" data-id='${id}'>alarm_add</i>
                </a>
                <a class="">
                    <i class="skill-delete btn-floating btn-small delete-btn material-icons" data-id='${id}'>delete_outline</i>
                </a>
            </div>
        </div>
    `

    skills.innerHTML += html;
}

// Remove skill from DOM
const removeSkill = (id) => {
    const skill = document.querySelector(`.skill[data-id=${id}]`);
    skill.remove();
}

// Convert minutes to total time
const convertTotalMinToString = sessions => {
    console.log("### SESSIONS", sessions);
    if(sessions.length){
        let sumMin = sessions.reduce((sum, session) => {
            let sessionLength = parseInt(session.length) ? parseInt(session.length) : 0;
            return sum + sessionLength;
        }, 0);
        return `${Math.floor(sumMin / 60)} hours and ${sumMin % 60} minutes`;
    } else {
        return "Get started!";
    }
}

const updateProgressCircle = id => {
    let circle = new ProgressBar.Circle(`#${id}-progress-circle`, {
        color: '#FCB03C',
        duration: 8000,
        easing: 'easeInOut'
    });

    circle.animate(1);

    console.log(`#${id}-progress-circle`, circle);
}