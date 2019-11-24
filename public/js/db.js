// offline data
db.enablePersistence()
    .catch(err => {
        if(err.code === 'failed-precondition'){
            // probably have multi tabs open
            console.log("Persistence failed");
        } else if(err.code === 'unimplemented'){
            // lack of browser support
            console.log("Persistence not available");
        }
    });

// real-time listener
db.collection('skill').onSnapshot((snapshot) => {
    // console.log(snapshot.docChanges());
    snapshot.docChanges().forEach(change => {
        console.log(change.doc.data(), change.doc.id);
        if(change.type === 'added'){
            // add doc data to web page
            renderSkill(change.doc.data(), change.doc.id);
        } else if(change.type === 'removed') {
            // remove doc data from webpage
            removeSkill(change.doc.id);
        }
    });
})


// add new skill
const addSkillForm = document.querySelector('.add-skill');
console.log("#### SKILL FORM", addSkillForm);

addSkillForm.addEventListener('submit', evt => {
    evt.preventDefault();

    const skill = {
        skill: addSkillForm['skill-content'].value,
        resources: addSkillForm['skill-resource'].value.split(", "),
        sessions: []
    }

    db.collection('skill').add(skill)
        .catch(err => {
            console.log(err);
        });

        addSkillForm['skill-content'].value = '';
        addSkillForm['skill-resource'].value = '';
        // TODO add a sub-form for resources, to make an adjustable list
})

// add new session
const addSessionForm = document.querySelector('form.add-session');


// delete a skill
const skillContainer = document.querySelector('.skills');
skillContainer.addEventListener('click', evt => {
    // only delete if target is a trash icon
    if(evt.target.tagName === "I") {
        // Delete!
        const id = evt.target.getAttribute('data-id');
        console.log(id);
        db.collection('skill').doc(id).delete();
    }
    console.log(evt);
});