import projectDOM from './projectDOM';
import projectEvents from './projectEventListner';
import displayProject from './displayProject';




function createProject(name) {
    let projArr = JSON.parse(localStorage.prjA || '[]');
    projArr.push(name);

    let localPrj = JSON.stringify(projArr);
    localStorage.setItem("prjA", localPrj);
    console.log(JSON.parse(localStorage.prjA))

}

function deleteProject(){


    const deletes = document.querySelectorAll('.delete');
    deletes.forEach(function (s) {
        s.addEventListener('click', function () {
            let todelete = s.parentNode;
            


            let arr = JSON.parse(localStorage.prjA);
            let c = JSON.parse(localStorage.id);
        

            for(let i=0; i<arr.length; i++){

                if(todelete.id == arr[i]){
                    arr.splice(i, 1);
                    console.log('INSIDE IF: '+arr);

                }
                console.log('INSIDE FOR: '+arr);

            }
            console.log('OUTSIDE FOR: '+arr);
            const btn = document.querySelector('.showBtn');
            if(todelete.id == c){
                c = '';
                btn.remove();
            }

            const main = document.querySelector('.list');
            main.remove();
            let arrJ = JSON.parse(localStorage.toDo);
        
            for(let i=0; i<arrJ.length; i++){
                if(c == arrJ[i][0]){
                    arrJ[i][1] = [];
                    console.log(arrJ[i][1])                    
                    
                }
            }
            todelete.remove();
            localStorage.setItem("toDo", JSON.stringify(arrJ));
    
    
            localStorage.setItem("prjA", JSON.stringify(arr));
            localStorage.setItem("id", JSON.stringify(c));
            

            
        
        });
    });

}


function deleteTask(){


    const delete_two = document.querySelectorAll('.delete_two');
    delete_two.forEach(function (d) {

        d.addEventListener('click', function () {

            let todelete = d.parentNode;
            console.log(todelete)

            todelete.remove();
            let arr = JSON.parse(localStorage.toDo);
            let id = d.id;
    

            for(let i=0; i<arr.length; i++){
                for(let k=0; k<arr[i][1].length; k++){
                    if(id == arr[i][1][k]){
                        arr[i][1].splice(k, 1);
                        console.log('arr_down:' + arr)
                    }
                }

            }
          
            localStorage.setItem("toDo", JSON.stringify(arr));

        });
    });
}




function projectController(){
    const showBtnP = document.querySelector('.projBtn');

    const dialogP = document.querySelector(".dialogP");

    showBtnP.addEventListener("click", () => {
        dialogP.showModal();
    });

    const btnP = document.querySelector('#submitBtnP');
    const formP = document.querySelector(".formP");


    btnP.addEventListener("click", (e) => {
        e.preventDefault();
        let projectName = document.querySelector("#proj").value;

        createProject(projectName);
    
        projectDOM().projectDOM_One();

        
        projectEvents().projectEventListner();
        deleteProject();
        formP.reset();
        dialogP.close();
    });
    projectDOM().projectDOM_Two();

    projectEvents().projectEventListner();
    displayProject();
    projectEvents().displayList();
    deleteProject();
    deleteTask();

   
    
}

export default projectController;

