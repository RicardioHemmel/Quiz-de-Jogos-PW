var mainBox = document.getElementById('mainBox');
var startButton = document.getElementById('startButton');
var helpButton = document.getElementById('helpButton')
var pacManPause = document.getElementById('pacManPause')
var pacManPlay = document.getElementById('pacManPlay')

function renderFirstQuestion(){
    // O innerHTML serve pra escrever dentro do html (Nesse caso dentro da div mainBox)
    mainBox.innerHTML = `
        <div>
        <h1>Texto</h1>
        </div>
        <div class="imageContainer">
            <img src="img/jacket-hotline-miami.jpg">
        </div>
        <div class="buttonsContainer">
            <button class="optionButton questionButton">Alternativa A</button>
            <button class="optionButton questionButton">Alternativa B</button>
            <button class="optionButton questionButton">Alternativa C</button>
            <button class="optionButton questionButton">Alternativa D</button>
        </div>
        `;
}

function startQuiz(){
    // O .style (+ algum atributo tipo display ou backgroundColor) serve pra chamar algum atributo CSS da tag HTML
    // Com isso dá pra atribuir um valor nele q vai ser uma string, q nem aqui embaixo =)
    startButton.style.display = 'none';
    helpButton.style.display = 'none';
    let id = null;
    let h = mainBox.style.height;
    let w = mainBox.style.width;
    mainBox.innerText = '';
    clearInterval(id);
    id = setInterval(frame, 15);
    function frame(){
        if (h == 55 || w == 65){
            clearInterval(id);
            renderFirstQuestion();
        } else {
            mainBox.style.height = `${h}vh`;
            mainBox.style.width = `${w}vw`;
            h++;
            w++;
        }
    }
}

const audio = new Audio('./public/audio/rickRoll.mp3');
audio.volume = 0.2;

function audioPlay(){
    audio.play();
    pacManPlay.style.display = 'none';
    pacManPause.style.display = 'block';
}

function audioPause(){
    audio.currentTime = 0;
    audio.pause();
    pacManPause.style.display = 'none';
    pacManPlay.style.display = 'block';
}