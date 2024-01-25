
function clearDisplay(){
    const main = document.querySelector('.project_container');
    const p = document.querySelector('.projectName');

    const btn = document.querySelector('.showBtn');


    if (main.childNodes.length === 0) {
        
        p.remove()
        btn.remove()
    }
}


export default clearDisplay;