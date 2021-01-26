var user = null;
let url = window.location.href.split('/').pop();
function programs() {
    let programDropdown = document.getElementById('Program');
    programDropdown.length = 0;
    let defaultOption = document.createElement('option');
    defaultOption.text = 'Choose...';
    programDropdown.add(defaultOption);
    programDropdown.selectedIndex = 0;
    fetch('/api/programs')
        .then(response => response.json())
        .then(data => {
            let option;
            for (let i = 0; i < data.length; i++) {
                option = document.createElement('option');
                option.text = data[i];
                option.value = data[i];
                programDropdown.add(option);
            }
        });
};

function graduationYears() {
    let graduationYearsDropdown = document.getElementById('GraduationYear');
    graduationYearsDropdown.length = 0;
    let defaultOption = document.createElement('option');
    defaultOption.text = 'Choose...';
    graduationYearsDropdown.add(defaultOption);
    graduationYearsDropdown.selectedIndex = 0;
    fetch('/api/graduationYears')
        .then(response => response.json())
        .then(data => {
            let option2;
            for (let i = 0; i < data.length; i++) {
                option2 = document.createElement('option');
                option2.text = data[i];
                option2.value = data[i];
                graduationYearsDropdown.add(option2);
            };
        });
};

function registerPost() {
    const data = {};
    let regBtn = document.getElementById('registrationButton');
    regBtn.addEventListener("click", function (event) {
        data['firstname'] = document.getElementById('firstName').value;
        data['lastname'] = document.getElementById('LastName').value;
        data['email'] = document.getElementById('Email').value;
        data['password'] = document.getElementById('passWord').value;
        data['matricNumber'] = document.getElementById('MatricNumber').value;
        data['program'] = document.getElementById('Program').value;
        data['graduationYear'] = document.getElementById('GraduationYear').value;
        event.preventDefault();
        fetch('/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
            .then(async function (response) {
                const resp = await response.json()
                if (response.status == 200) {
                    document.cookie = `uid=${resp.data.id}; max-age=${60 * 60 * 24 * 7}; path=/`;
                    window.location = "index.html";
                } else {
                    errorAlert = document.createElement('div');
                    errorAlert.setAttribute('id', 'erroralert');
                    errorAlert.className = 'alert alert-danger';
                    document.getElementById('signupForm').prepend(errorAlert);
                    let err = document.getElementById('erroralert');
                    for (let i = 0; i < resp.errors.length; i++) {
                        errorText = document.createElement('h6');
                        errorText.innerText = resp.errors[i];
                        err.append(errorText);
                    }
                }
            });
    });
};

function logInPost() {
    const data2 = {};
    let loginBtn = document.getElementById('loginButton');
    loginBtn.addEventListener('click', function (event) {
        data2['email'] = document.getElementById('logInEmail').value;
        data2['password'] = document.getElementById('logInpassWord').value;
        event.preventDefault();
        fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data2)
        })
            .then(async function (response) {
                const resp = await response.json()
                if (response.status == 200) {
                    document.cookie = `uid=${resp.data.id}; max-age=${60 * 60 * 24 * 7}; path=/`;
                    window.location = "index.html";
                } else {
                    errorAlert2 = document.createElement('div');
                    errorAlert2.setAttribute('id', 'erroralert2');
                    errorAlert2.className = 'alert alert-danger';
                    document.getElementById('loginForm').prepend(errorAlert2);
                    let err = document.getElementById('erroralert2');
                    errorText = document.createElement('h6');
                    errorText.innerText = "Invalid Username/Password";
                    err.append(errorText);

                }
            });
    });
};

function projectPost() {
    const data3 = {};
    let projectBtn = document.getElementById('projectButton');
    projectBtn.addEventListener("click", function (event) {
        data3['name'] = document.getElementById('projectName').value;
        data3['abstract'] = document.getElementById('projectAbstract').value;
        data3['authors'] = document.getElementById('author').value.split(',');
        data3['tags'] = document.getElementById('tag').value.split(',');
        event.preventDefault();
        fetch('/api/projects', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data3)
        })
            .then(async function (response) {
                const resp = await response.json()
                if (response.status == 200) {
                    window.location = "index.html";
                } else {
                    errorAlert = document.createElement('div');
                    errorAlert.setAttribute('id', 'erroralert');
                    errorAlert.className = 'alert alert-danger';
                    document.getElementById('createProjectForm').prepend(errorAlert);
                    let err = document.getElementById('erroralert');
                    for (let i = 0; i < resp.errors.length; i++) {
                        errorText = document.createElement('h6');
                        errorText.innerText = resp.errors[i];
                        err.append(errorText);
                    }
                }
            });
    });
};

function projectList() {
    fetch('/api/projects')
        .then(response => response.json())
        .then(data => {
            projectData = data.slice(0, 4);
            projectData.forEach(value => {
                showCase = document.getElementsByClassName('showcase');
                projectDisplay = document.createElement('div');
                projectDisplay.className = 'col-md-3';
                showCase[0].append(projectDisplay);
                projectCard = document.createElement('div');
                projectCard.className = 'card';
                projectDisplay.append(projectCard);
                projectCardBody = document.createElement('div');
                projectCardBody.className = 'card-body';
                projectCard.append(projectCardBody);
                cardTitle = document.createElement('a');
                cardTitle.className = 'card-title text-primary';
                cardTitle.href = 'viewProject.html?id=' + value.id;
                cardTitle.innerText = value.name
                projectCardBody.append(cardTitle);
                authorTitle = document.createElement('p');
                authorTitle.className = 'card-subtitle text-muted';
                authorTitle.innerText = value.authors;
                projectCardBody.append(authorTitle);
                abstractTitle = document.createElement('p');
                abstractTitle.innerText = value.abstract;
                projectCardBody.append(abstractTitle);
                tagLink = document.createElement('a');
                tagLink.className = 'card-link';
                tagLink.href = '#';
                tagLink.innerText = value.tags
                projectCardBody.append(tagLink);
            })

        })
}

function projectView() {
    const queryString = window.location.search;
    const urlP = new URLSearchParams(queryString);
    urlId = urlP.get('id');
    fetch('/api/projects/' + urlId)
        .then(response => response.json())
        .then(data => {
            if (data != null) {
                Title = document.getElementById('project_name');
                Title.innerText = data.name;
                abstract = document.getElementById('project_abstract');
                abstract.innerText = data.abstract;
                author = document.getElementById('project_authors');
                author.innerText = data.authors
                tags = document.getElementById('project_tags');
                tags.innerText = data.tags;
                fetch('/api/users/' + data.createdBy)
                    .then(response => response.json())
                    .then(data2 => {
                        projectAuthor = document.getElementById('project_author');
                        projectAuthor.innerHTML = 'Created By' + '<br>' + data2.firstname + ' ' + data2.lastname;
                    })
            }
        })
}

function logOut() {
    let logOutBtn = document.getElementById('logout')
    logOutBtn.addEventListener('click', function (event) {
        document.cookie = `uid= ; expires = Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
        window.location = "index.html";
    });
};

function getCookieId() {
    if (document.cookie.includes('uid')) {
        let uidRow = document.cookie.split(';').find(row => row.startsWith('uid'));
        if (uidRow != -1) {
            return uidRow.split('=')[1];
        }
    }
    return false;
};

function showLoggedInUser() {
    let authElements = document.querySelectorAll('.auth-buttons');
    if (user) {
        authElements[1].classList.toggle('hidden')
        document.getElementById("username").textContent = 'Hi ' + user.firstname;
    } else {
        authElements[0].classList.toggle('hidden')
    }
};

async function initUser() {
    let userId = getCookieId()
    if (userId) {
        let response = await fetch('/api/users/' + userId)
        user = await response.json();
    } else if (!user && url.startsWith('createProject.html')) {
        window.location = 'login.html';
    }
    showLoggedInUser();
};

window.addEventListener('DOMContentLoaded', (event) => {
    initUser();
    if (url.startsWith('register.html')) {
        graduationYears();
        programs();
        registerPost();
    } else if (url.startsWith('login.html')) {
        logInPost();
    } else if (url.startsWith('createProject.html')) {
        projectPost();
        logOut();
    } else if (url.startsWith('index.html')) {
        projectList()
        logOut();
    } else if (url.startsWith('viewProject.html')) {
        projectView();
        logOut();
    }
    else if ((url.startsWith('search.html') || url.startsWith('profile.html') || url.startsWith('editProject.html'))) {
        logOut();
    }

});

