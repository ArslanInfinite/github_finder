class Github{
    constructor(){
        this.client_id = 'cdf181c5b92d1ad19d28'
        this.client_secret = 'c5bcc721c473774ce185656c621feee8d0f42b61'
    }
    // one get request for the user, another for the repos of the user
    async getUser(user){
        // query strings added together for client id and secret together
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`)

        const profileData = await profileResponse.json()
        
        return{
            // async and await allows for numerous aysnc operations 
            // profile: profile can be reduced to...
            profile
        }
    }
}