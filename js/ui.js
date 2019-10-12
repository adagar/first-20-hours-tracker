const projects = [
    {
        skillTitle: "Draw",
        resource: [
            "LinkedInLearning - Urban Sketching",
            "ModernDayJames - Speed Sketching"
        ],
        sessions: [
            {
                title: "Session 1",
                description: "Practicing Drawing Noses",
                date: "1/1/2001",
                length: "30"
            },
            {
                title: "Session 2",
                description: "Practicing Drawing Ears",
                date: "1/1/2001",
                length: "30"
            },
            {
                title: "Session 3",
                description: "Practicing Drawing Eyes",
                date: "1/1/2001",
                length: "30"
            }
        ]
    },
    {
        skillTitle: "Harmonica",
        resource: [
            "Heart the Harp",
            "Blast them notes"
        ],
        sessions: [
            {
                title: "Session 1",
                description: "Playing A Key",
                date: "1/1/2001",
                length: "30"
            },
            {
                title: "Session 2",
                description: "Playing B Key",
                date: "1/1/2001",
                length: "30"
            },
            {
                title: "Session 3",
                description: "Playing C Key",
                date: "1/1/2001",
                length: "30"
            }
        ]
    }
]

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