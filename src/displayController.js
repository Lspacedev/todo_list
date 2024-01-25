function displayController() {
    const content = document.querySelector('#content');

    //nav div
    const nav = document.createElement('div');
    nav.classList.add('nav');


    //header
    const header = document.createElement('div');
    header.classList.add('header');
    header.innerText = 'justDoList';

    nav.appendChild(header);


    //project name
    const divProject = document.createElement('div');
    divProject.classList.add('divProject');


    const projectLabel = document.createElement('label');
    projectLabel.setAttribute("for", 'project');
    projectLabel.innerHTML = "Project";


    const projectInput = document.createElement('select');
    projectInput.setAttribute("id", 'project');
    projectInput.setAttribute("name", 'project');


    const projOpt = document.createElement('option');
    projOpt.setAttribute("value", 'Default');

    projectInput.appendChild(projOpt);

    
    divProject.appendChild(projectLabel);
    divProject.appendChild(projectInput);


    //sidebar
    const sidebar = document.createElement('div');
    sidebar.classList.add('sidebar');

    const heading = document.createElement('div');
    heading.classList.add('heading');
    heading.innerText = 'Projects';

    const addP = document.createElement('div');
    addP.classList.add('addP');

    const showDialogP = document.createElement('div');
    showDialogP.classList.add('showP');

    const projectBtn = document.createElement('button');
    projectBtn.classList.add('projBtn');
    projectBtn.innerText = '+';

    const dialogP = document.createElement('dialog');
    dialogP.classList.add('dialogP');

    const formP = document.createElement('form');
    formP.classList.add('formP');
    formP.setAttribute("method", 'dialog');

    showDialogP.appendChild(projectBtn);

    //project names
    const divProj = document.createElement('div');
    divProj.classList.add('divProj');

    const projLabel = document.createElement('label');
    projLabel.setAttribute("for", 'proj');
    projLabel.innerHTML = "Project Name";

    const projInput = document.createElement('input');
    projInput.setAttribute("type", 'text');
    projInput.setAttribute("id", 'proj');
    projInput.setAttribute("name", 'project');

    //submit button
    const submitP = document.createElement('input');
    submitP.classList.add('submitP');
    submitP.setAttribute("id", 'submitBtnP');
    submitP.setAttribute("type", 'submit');
    submitP.setAttribute("value", 'Submit');

    //cancel button
    const cancelP = document.createElement('button');
    cancelP.setAttribute("id", 'cancelBtnP');
    cancelP.innerText = 'Cancel';
    cancelP.setAttribute("formmethod", 'dialog');

    divProj.appendChild(projLabel);
    divProj.appendChild(projInput);



    //main content
    const mainDiv = document.createElement('div');
    mainDiv.classList.add('main');

    //append to nav div
    formP.appendChild(divProj);
    formP.appendChild(cancelP);
    formP.appendChild(submitP);



    dialogP.appendChild(formP);


    addP.appendChild(dialogP);
    addP.appendChild(showDialogP);

    const prjContainer = document.createElement('div');
    prjContainer.classList.add('project_container')

    sidebar.appendChild(heading);

    sidebar.appendChild(addP);
    sidebar.appendChild(prjContainer);
    //nav.appendChild(add);


    //append to content
    content.appendChild(nav);
    content.appendChild(sidebar);
    content.appendChild(mainDiv);
}

export default displayController;