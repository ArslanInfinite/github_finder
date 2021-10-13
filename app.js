// instantiating Github
const github = new Github;
// instantiating ui
const ui = new UI;

// search input
const searchUser = document.getElementById('searchUser');

// search input event listener
searchUser.addEventListener('keyup', (event) => {
    // get text input
    const userText = event.target.value;
  if(userText !== ''){
        // making http call
        github.getUser(userText)
    .then(data => {
      if(data.profile.message === 'Not Found') {
        // show alert if the user is not found. 'Not Found' comes from the console log message
        ui.showAlert('User not found', 'alert alert-danger');
      } else {
        // show profile
        // showProfile takes in a user, this is got from data.profile
        ui.showProfile(data.profile);
      }
    })
  } else {
    // Clear profile
    ui.clearProfile();
  }
}); 