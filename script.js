var mainBox = document.getElementById('mainBox');
var startButton = document.getElementById('startButton');
var helpButton = document.getElementById('helpButton')

function renderFirstQuestion(){
    mainBox.innerHTML = `<h1>Texto</h1>`
}

function startQuiz(){
    startButton.style.display = 'none';
    helpButton.style.display = 'none';
    let id = null;
    let h = mainBox.style.height;
    let w = mainBox.style.width;
    mainBox.innerText = ''
    clearInterval(id);
    id = setInterval(frame, 15);
    function frame(){
        if (h == 55 || w == 65){
            clearInterval(id)
            renderFirstQuestion()
        } else {
            mainBox.style.height = `${h}vh`;
            mainBox.style.width = `${w}vw`
            h++;
            w++;
        }
    }
}

