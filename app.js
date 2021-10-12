// search input
const searchUser = document.getElementById('searchUser')

// search input event listener
searchUser.addEventListener('keyup', (event) => {
    // get text input
    const userText = event.target.value
    // making sure userText is not blank 
    if(userText !== ''){
        console.log(userText)
    }
})