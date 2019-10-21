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
        }
    });
})

