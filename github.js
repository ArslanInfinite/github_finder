class Github{
    constructor(){
        this.client_id = 'cdf181c5b92d1ad19d28'
        this.client_secret = 'c5bcc721c473774ce185656c621feee8d0f42b61'
        this.repos_count = 5
        this.repos_sort = 'created: asc'
    }
    // one get request for the user, another for the repos of the user
    async getUser(user){
        // query strings added together for client id and secret together
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`)
        
        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`)

        const profile = await profileResponse.json()
        const repos = await repoResponse.json()

        console.log(repoResponse)

        return {
            // async and await allows for numerous aysnc operations 
            // profile: profile can be reduced to...
            profile, 
            repos
        }
    }
}