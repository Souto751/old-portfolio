// OPENS WELCOME SECTION & CLOSES PROJECTS SECTION
function toWelcome()
{
    let projects = document.getElementById('projects-section');
    projects.style.display = 'none';

    let welcome = document.getElementById('welcome-section');
    welcome.style.display = 'initial';

    let under = document.getElementById('btn-welcome');
    let noUnder = document.getElementById('btn-projects');

    under.style.textDecoration = 'underline';
    under.style.textDecorationColor = '#a00';
    noUnder.style.textDecoration = 'none';
}

// OPENS PROJECTS SECTION & CLOSES WELCOME SECTION
function toProjects()
{
    let welcome = document.getElementById('welcome-section');
    welcome.style.display = 'none';

    let projects = document.getElementById('projects-section');
    projects.style.display = 'flex';

    let under = document.getElementById('btn-projects');
    let noUnder = document.getElementById('btn-welcome');

    under.style.textDecoration = 'underline';
    under.style.textDecorationColor = '#a00';
    noUnder.style.textDecoration = 'none';
}

// OPENS SKILLS WINDOW & CLOSES MAIL WINDOW
function skillsWindow(state)
{
    let skills = document.getElementById('skills-section');
    skills.style.display = state;

    let under = document.getElementById('btn-skills');

    if(state == 'none')
    {
        under.style.textShadow = 'none';
    }
    else
    {
        mail('none');
        under.style.textShadow = '5px 5px 10px #000';
    }
}

// AUTO SLIDES
let skillCounter = 2;
let toolCounter = 2;

function autoSlideSkills(){
    document.getElementById('radio' + skillCounter).checked = true;
    skillCounter++;
    if(skillCounter > 6){
        skillCounter = 1;
    }
}

function autoSlideTools(){
    document.getElementById('tool' + toolCounter).checked = true;
    toolCounter++;
    if(toolCounter > 2){
        toolCounter = 1;
    }
}

// SET INTERVALS FOR AUTO SLIDES
setInterval(autoSlideSkills, 5000);
setInterval(autoSlideTools, 5000);

// OPENS MAIL WINDOW & CLOSES SKILLS WINDOW
function mail(state)
{
    let mail = document.getElementById('mail-window');
    mail.style.display = state;
    
    if(state != 'none')
    {
        alert("Not working yet :c")
        skillsWindow('none');
    }
}

// SKILLS WINDOW ON MOBILE
function mobileScreen(opt)
{
    switch(opt)
    {
        case 'welcome':
            skillsWindow('none');
            toWelcome();
            break;
        case 'skills':
            let closeWelc = document.getElementById('welcome-section');
            let closeProj = document.getElementById('projects-section');

            closeWelc.style.display = 'none';
            closeProj.style.display = 'none';
        
            skillsWindow('flex');
            
            break;
        case 'projects':
            skillsWindow('none');
            toProjects();
            break;
    }

}