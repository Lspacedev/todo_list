function projectDOM(){
    function deleteProjectTask(){
        const button = document.querySelector('.delete');
        button.addEventListener("click", ()=> {
            let todelete = button.parentNode;
            
            let arrJ = JSON.parse(localStorage.toDo);
            let c = JSON.parse(localStorage.id);
    
            
            for(let i=0; i<arrJ.length; i++){
                if(c == arrJ[i][0]){
                    arrJ[i][1] = [];
                    console.log(arrJ[i][1])
                    
                    
                }
            }
            let arr = JSON.parse(localStorage.prjA);
            for(let i=0; i<arr.length; i++){
    
                if(todelete.id == arr[i]){
                    arr.splice(i, 1);
                   
                }
                console.log('INSIDE FOR: '+arr);
    
            }
            todelete.remove();
    
            localStorage.setItem("toDo", JSON.stringify(arrJ));
            localStorage.setItem("id", JSON.stringify(c));
            localStorage.setItem("prjA", JSON.stringify(arr));
    
            
        })
              
    }

    function projectDOM_One() {
        let retArr = localStorage.getItem("prjA");
        let arrPrj = JSON.parse(retArr);

        const prjCon = document.querySelector('.project_container');
        if (prjCon.childNodes.length !== 0) {
            while (prjCon.firstChild) {
                prjCon.firstChild.remove()
            }

        }

        for (let i = 0; i < arrPrj.length; i++) {
            const projDiv = document.createElement('div');
            projDiv.classList.add('projects');
            projDiv.setAttribute("id", arrPrj[i]);
            const projName = document.createElement('div');
            projName.innerText = arrPrj[i];
            const button = document.createElement('button');
            button.classList.add('delete');
            button.innerText = 'Delete';

            projDiv.appendChild(projName);
            projDiv.appendChild(button);
            prjCon.appendChild(projDiv);
            deleteProjectTask();
        
    
        }
        

    }

    function projectDOM_Two() {

        let retArr = localStorage.getItem("prjA");
        let arrPrj = JSON.parse(retArr);
    
        const prjCon = document.querySelector('.project_container');

        for (let i = 0; i < arrPrj.length; i++) {
            const projDiv = document.createElement('div');
            projDiv.classList.add('projects');
            projDiv.setAttribute("id", arrPrj[i]);
            const projName = document.createElement('div');
            projName.innerText = arrPrj[i];
            const button = document.createElement('button');
            button.classList.add('delete');
            button.innerText = 'Delete';

            projDiv.appendChild(projName);
            projDiv.appendChild(button);

            prjCon.appendChild(projDiv);

            deleteProjectTask();
            

        }
    
    }
    return { projectDOM_One, projectDOM_Two}
}

export default projectDOM;