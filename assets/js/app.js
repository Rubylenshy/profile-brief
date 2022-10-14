
const divFrameworks = document.querySelector('.tech-stack-btn')

frameworks('../frameworkstack.json');

async function frameworks(file){
    let obj5 = await fetch(file);
    let jsonFrameworks = await obj5.text();    

    const frameworks = JSON.parse(jsonFrameworks);
    let newFrameworks = '';
    frameworks.forEach(item =>{

        let htmlFrameworks = `<button type="button" target="_blank">
                                <img src="${item.icon}" alt="Code">${item.interest}
                            </button>`;

        newFrameworks += htmlFrameworks;
    })

    divFrameworks.innerHTML = newFrameworks;
}

const divPositions = document.querySelector('.position-cards')

positions('../positions.json');

async function positions(file){
    let obj1 = await fetch(file);
    let jsonPosition = await obj1.text();

    const positions = JSON.parse(jsonPosition);
    var newPositions = '';
    positions.forEach(item => {
        
        let htmlpositions = `<div class="position-card">
                                <div class="img">
                                    <img src="assets/images/building-svgrepo-com.svg" alt="Company">
                                </div>
                                <div class="position-name">
                                    <h3>${item.role}</h3>
                                    <span>${item.duration}</span>
                                </div>
                            </div>`;
        
        newPositions += htmlpositions;
    });

    divPositions.innerHTML = newPositions;

}

const divProjects = document.querySelector('.project-div')

projects('../projects.json')

async function projects(file){
    let obj2 = await fetch(file);
    let jsonProjects = await obj2.text();

    const projects = JSON.parse(jsonProjects);
    
    var newProjects = '';
    projects.forEach(item => {

        let htmlprojects = `<div class="project-card">
                                <div class="repo-name"><img src="assets/images/book-repo.svg" alt="Repository"><a href="${item.url}">${item.repoName} ↪</a></div>
                                <p class="project-brief">${item.brief}</p>
                                <div class="code-lang"><img src="${item.codeIcon}" alt="dot">${item.code}</div>
                            </div>`;
        
                            newProjects += htmlprojects;
    });

    divProjects.innerHTML = newProjects;

}

const divCredentials = document.querySelector('.credential-div')

credentials('../credentials.json')

async function credentials(file){
    let obj3 = await fetch(file);
    let jsonCredentials = await obj3.text();

    const credentials = JSON.parse(jsonCredentials);
    
    var newCredentials = '';
    credentials.forEach(item => {

        let htmlCredentials = `<div class="credentials-container">
                                <div class="credentials-img">
                                    <img src="assets/images/backpack-svgrepo-com.svg" alt="Company">
                                </div>
                                <div class="credentials-name">
                                    <a href="#"><h3>${item.role} ↪</h3></a>
                                    <span>${item.details}</span>
                                </div>
                            </div>`;
        
                            newCredentials += htmlCredentials;
    });

    divCredentials.innerHTML = newCredentials;

}

const divInterests = document.querySelector('.interest-btns')

interests('../interests.json');

async function interests(file){
    let obj4 = await fetch(file);
    let jsonInterests = await obj4.text();    

    const interests = JSON.parse(jsonInterests);
    let newInterests = '';
    interests.forEach(item =>{

        let htmlInterests = `<button type="button" target="_blank">
                                <img src="${item.icon}" alt="Code">${item.interest}
                            </button>`;

        newInterests += htmlInterests;
    })

    divInterests.innerHTML = newInterests;
}

{/*  */}