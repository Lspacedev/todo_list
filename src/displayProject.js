function displayProject() {

    let retString = localStorage.getItem("id");
    let c = JSON.parse(retString);


    
    const main = document.querySelector('.main');
        const projectDiv = document.createElement('div');

        projectDiv.classList.add('project');

        const projectName = document.createElement('div');
        projectName.classList.add('projectName')

        projectName.innerText = c;

        const projectHead = document.createElement('div');
        projectHead.classList.add('projectHead');


        //add button
        const add = document.createElement('div');
        add.classList.add('add');

        const showDialog = document.createElement('div');
        showDialog.classList.add('show');

        const showBtn = document.createElement('button');
        showBtn.classList.add('showBtn');
        showBtn.innerText = '+';

        showDialog.appendChild(showBtn);

        const dialog = document.createElement('dialog');
        dialog.classList.add('dialogD');

        const form = document.createElement('form');
        form.classList.add('form');
        form.setAttribute("method", 'dialog');


        //title
        const divTitle = document.createElement('div');
        divTitle.classList.add('divTitle');

        const titleLabel = document.createElement('label');
        titleLabel.setAttribute("for", 'title');
        titleLabel.innerHTML = "Title";

        const titleInput = document.createElement('input');
        titleInput.setAttribute("type", 'text');
        titleInput.setAttribute("id", 'title');
        titleInput.setAttribute("name", 'title');

        divTitle.appendChild(titleLabel);
        divTitle.appendChild(titleInput);


        //description
        const divDescr = document.createElement('div');
        divDescr.classList.add('divDescr');

        const descrLabel = document.createElement('label');
        descrLabel.setAttribute("for", 'descr');
        descrLabel.innerHTML = "Description";

        const descrInput = document.createElement('input');
        descrInput.setAttribute("type", 'text');
        descrInput.setAttribute("id", 'descr');
        descrInput.setAttribute("name", 'descr');

        divDescr.appendChild(descrLabel);
        divDescr.appendChild(descrInput);

        //due date
        const divDue = document.createElement('div');
        divDue.classList.add('divDue');

        const dueLabel = document.createElement('label');
        dueLabel.setAttribute("for", 'due');
        dueLabel.innerHTML = "Due Date";

        const dueInput = document.createElement('input');
        dueInput.setAttribute("type", 'text');
        dueInput.setAttribute("id", 'due');
        dueInput.setAttribute("name", 'due');

        divDue.appendChild(dueLabel);
        divDue.appendChild(dueInput);

        //priority
        const divPrior = document.createElement('div');
        divPrior.classList.add('divPrior');

        //submit button
        const submit = document.createElement('input');
        submit.classList.add('submit');
        submit.setAttribute("id", 'submitBtn');
        submit.setAttribute("type", 'submit');
        submit.setAttribute("value", 'Submit');

        //cancel button
        const cancel = document.createElement('button');
        cancel.setAttribute("id", 'cancelBtn');
        cancel.innerText = 'Cancel';
        cancel.setAttribute("formmethod", 'dialog');

        const list = document.createElement('div');
        list.classList.add('list');

        form.appendChild(divTitle);
        form.appendChild(divDescr);
        form.appendChild(divDue);
        form.appendChild(cancel);
        form.appendChild(submit);
        dialog.appendChild(form);
        add.appendChild(dialog);
        add.appendChild(showDialog);
        projectHead.appendChild(projectName);
        projectHead.appendChild(add);
        projectDiv.appendChild(projectHead);
        projectDiv.appendChild(list);



        if (main.childNodes.length === 0) {
            main.appendChild(projectDiv);
        } else {
            main.lastChild.remove();
            main.appendChild(projectDiv);
        }

    

}
export default displayProject;