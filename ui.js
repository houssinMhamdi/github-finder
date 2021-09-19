class UI{
    constructor(){
        this.profile = document.getElementById('profile');
    }
    showProfile(user){
     this.profile.innerHTML = `
        <div class="card cadr-body mb-3">
            <div class="row">
                <div class="col-md-3">
                    <img class="img-fluid md-2 mb-2" src="${user.avatar_url}">
                    <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
                    </div>

                <div class="col-md-9">
                <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
                <span class="badge badge-secondary">Public Gists: ${user.public_gists}</span>
                <span class="badge badge-success">Public Follwers: ${user.followers}</span>
                <span class="badge badge-info">Public Following: ${user.following}</span>
                <br><br>
                <ul class="list-group">
                    <li class="list-group-item">Campany: ${user.company}</li>
                    <li class="list-group-item">WebSite/Blog: ${user.blog}</li>
                    <li class="list-group-item">Location: ${user.location}</li>
                    <li class="list-group-item">Member since: ${user.created_at}</li>
                </ul>
                </div>
            </div>
        </div>
        <h3 class="page-heading mb-3">Latest Repos</h3>
        <div id="repos"></div>
        `;
    }
    showRepos(repos){
        let output = '';
        repos.forEach(function(repo){
            output += `
            <div class="card card-body mb-2">
                <div class="row">
                    <div class="col-md-6">
                        <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                    </div>
                    <div class="col-md-6">
                    <span class="badge badge-primary">Stars: ${repo.stargazers_count}</span>
                    <span class="badge badge-secondary">Watchers: ${repo.watchers}</span>
                    <span class="badge badge-success">forks: ${repo.forms_count}</span>
                    </div>
                </div>
            </div>
            `;
        });

        document.getElementById('repos').innerHTML = output;
    }



    showAlert(message,className){
        this.clearAlert();
        const div = document.createElement('div');
        div.className = className;
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector('.serchContainer');
        const search = document.querySelector('.search');
        container.insertBefore(div,search);

        setTimeout(()=>{
            this.clearAlert();
        },2000);
    }
    clearAlert(){
        const curentAlert = document.querySelector('.alert');
        if (curentAlert) {
            curentAlert.remove();
        }
    }

    clearProfile(){
        this.profile.innerHTML = ''
    }

}