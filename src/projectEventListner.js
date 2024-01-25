import displayProject from './displayProject';



function projectEvents(){

    let myList = JSON.parse(localStorage.toDo || '[]');
    function initialise(projectObj) {
        if (myList.length !== 0) {
            for (let i = 0; i < myList.length; i++) {
                if (projectObj == myList[i][0]) {
                    return
                }
            }
            myList.push([projectObj, []]);
        } else {
            myList.push([projectObj, []]);
        }
    }
    
    function addToList(prj, obj) {
        if (myList.length != 0) {
            for (let i = 0; i < myList.length; i++) {
                if (prj == myList[i][0]) {
                    myList[i][1].push(obj);
                }
            }
        } else {
            myList[myList.length - 1][1].push(obj)
        }
        let localArr = JSON.stringify(myList);
        localStorage.setItem("toDo", localArr);
    
    
    }
    
    function displayTask(prj, array) {
        let arr = array;
        //let retString = localStorage.getItem("toDo");
       // let arr = JSON.parse(retString);
    
        for (let i = 0; i < arr.length; i++) {
        
            if (prj == arr[i][0]) {
                const list = document.querySelector('.list');
                if (list.childNodes.length !== 0) {
                    while (list.firstChild) {
                        list.firstChild.remove()
                    }
    
                }
    
                for (let k = 0; k < arr[i][1].length; k++) {
    
                    const itemDiv = document.createElement('div');
    
                    itemDiv.classList.add('itemDiv');
                   // itemDiv.setAttribute("id", arr[i][1][k].title);
    
    
                    const itemTitle = document.createElement('div');
    
                    const itemDescr = document.createElement('div');
    
                    const itemDue = document.createElement('div');
    
                    itemTitle.innerText = arr[i][1][k].title;
    
                    itemDescr.innerText = arr[i][1][k].descr;
    
                    itemDue.innerText = arr[i][1][k].due;
    
                    const button = document.createElement('button');
                    button.classList.add('delete_two');
                    button.innerText = 'Delete';
    
    
                    itemDiv.appendChild(itemTitle);
    
                    itemDiv.appendChild(itemDescr);
    
                    itemDiv.appendChild(itemDue);
                    itemDiv.appendChild(button);
    
                    list.appendChild(itemDiv);
    
                    button.addEventListener("click", ()=> {
                        let todelete = button.parentNode;
                        todelete.remove();
                     
                        arr[i][1].splice(k, 1);
                        let updatedArr = arr;
                        localStorage.setItem("toDo", JSON.stringify(updatedArr));
                    
                      });
    
                }
            }
    
        }
    }
    


    function displayList() {

        let retStringX = localStorage.getItem("id");
        let X = JSON.parse(retStringX);
    
        let retString = localStorage.getItem("toDo");
        let arrL = JSON.parse(retString);

        
        for (let i = 0; i < arrL.length; i++) {
            if (X == arrL[i][0]) {
                const list = document.querySelector('.list');
                if (list.childNodes.length !== 0) {
                    while (list.firstChild) {
                        list.firstChild.remove()
                    }

                }

                for (let k = 0; k < arrL[i][1].length; k++) {
                    const itemDiv = document.createElement('div');
                    itemDiv.classList.add('itemDiv');
                // itemDiv.setAttribute("id", arr[i][1][k].title);


                    const itemTitle = document.createElement('div');

                    const itemDescr = document.createElement('div');

                    const itemDue = document.createElement('div');

                    itemTitle.innerText = arrL[i][1][k].title;

                    itemDescr.innerText = arrL[i][1][k].descr;

                    itemDue.innerText = arrL[i][1][k].due;

                    const button = document.createElement('button');
                    button.classList.add('delete_two');
                    button.innerText = 'Delete';
                    itemDiv.appendChild(button);

                    itemDiv.appendChild(itemTitle);

                    itemDiv.appendChild(itemDescr);

                    itemDiv.appendChild(itemDue);
                    list.appendChild(itemDiv);

                    button.addEventListener("click", ()=> {
                        let todelete = button.parentNode;
                        todelete.remove();
                        let idx = todelete.id;
                        console.log(todelete)
                        arrL[i][1].splice(k, 1);
                        let updatedArr = arrL;
                        localStorage.setItem("toDo", JSON.stringify(updatedArr));
    
                    });

                }
            }

        }

        
    }







    //<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

    function projectEventListner() {

        const projects = document.querySelectorAll('.projects');
        projects.forEach(function (project) {
            project.addEventListener('click', function () {

                const main = document.querySelector('.project_container');
                const p = document.querySelector('.projectName');
                const btn = document.querySelector('.showBtn');

                
                if (main.childNodes.length == 0) {
                    console.log('done')
                    p.remove();
                    //btn.remove();

                }else{
                
                    let click = JSON.stringify(project.id);
                    localStorage.setItem("id", click);
                    displayProject();

                    const dialog = document.querySelector(".dialogD")

                    const showButton = document.querySelector('.showBtn');

                    showButton.addEventListener("click", () => {
                        dialog.showModal();
                    });

                    const btn = document.querySelector('#submitBtn');
                    const form = document.querySelector(".form");
                    const name = document.querySelector('.projectName');
                    let project_name = name.innerText;


                    btn.addEventListener("click", (e) => {
                        e.preventDefault();
                        let title = document.querySelector("#title").value;
                        let descr = document.querySelector("#descr").value;
                        let due = document.querySelector("#due").value;

                        initialise(project_name);
                        addToList(project_name, { title, descr, due });
                        displayTask(project_name, myList);
                        displayList()
                        form.reset();
                        dialog.close();
                    });
                    displayList()
                // displayTasks(project.innerText, myList);


                }

            
            });
        });

    }
    return {displayList, projectEventListner}
}

export default projectEvents;