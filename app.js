// instantiating Github
const github = new Github
// instantiating ui
const ui = new UI

// search input
const searchUser = document.getElementById('searchUser')

// search input event listener
searchUser.addEventListener('keyup', (event) => {
    // get text input
    const userText = event.target.value
    // making sure userText is not blank 
    if(userText !== ''){
        // making http call
        github.getUser(userText)
        .then(data => {
            if(data.profile.message === 'Not Found'){
                // show alert if the user is not found. 'Not Found' comes from the console log message
            } else {
                // show profile
                // showProfile takes in a user, this is got from data.profile
                ui.showProfile(data.profile)
                console.log(data)
            }
        })
    } else {
        // clear profile
        ui.clearProfile()
    }
})