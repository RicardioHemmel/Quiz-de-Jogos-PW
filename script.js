var mainBox = document.getElementById('mainBox');
var startButton = document.getElementById('startButton');
var helpButton = document.getElementById('helpButton')
var pacManPause = document.getElementById('pacManPause')
var pacManPlay = document.getElementById('pacManPlay')

var question = 1;
var score = 0;

function renderQuestion(){
    // O innerHTML serve pra escrever dentro do html (Nesse caso dentro da div mainBox)
    switch (question){
        case 1:
    mainBox.innerHTML = `
        <div class="headingContainer">
        <h1>${question} - Quem é esse doido aí?</h1>
        </div>
        <div class="imageContainer">
            <img src="./public/img/jacket-hotline-miami.jpg">
        </div>
        <div class="buttonsContainer">
            <button onClick="questionAnswered(true)" class="optionButton questionButton">Alternativa A</button>
            <button onClick="questionAnswered(false)" class="optionButton questionButton">Alternativa B</button>
            <button onClick="questionAnswered(false)" class="optionButton questionButton">Alternativa C</button>
            <button onClick="questionAnswered(false)" class="optionButton questionButton">Alternativa D</button>
        </div>
        `;
        break;
        case 2:
        mainBox.innerHTML = `
        <div class="headingContainer">
            <h1>${question} - Quantos fantasmas tem no jogo Pac-Man?</h1>
        </div>
        <div class="imageContainer">
            <img src="./public/img/ghostQuestion.gif">
        </div>
        <div class="buttonsContainer">
            <button onClick="questionAnswered(false)" class="optionButton questionButton">3</button>
            <button onClick="questionAnswered(false)" class="optionButton questionButton">5</button>
            <button onClick="questionAnswered(false)" class="optionButton questionButton">2</button>
            <button onClick="questionAnswered(true)" class="optionButton questionButton">4</button>
        </div>
        `;
        break;
        case 3:
        mainBox.innerHTML = `
        <div class="headingContainer">
            <h1>${question} - Qual é a empresa responsável pela criação do Minecraft?</h1>
        </div>
        <div class="imageContainer">
            <img src="./public/img/minecraft.gif">
        </div>
        <div class="buttonsContainer">
            <button onClick="questionAnswered(false)" class="optionButton questionButton">Activision</button>
            <button onClick="questionAnswered(true)" class="optionButton questionButton">Mojang Studios</button>
            <button onClick="questionAnswered(false)" class="optionButton questionButton">Epic Games</button>
            <button onClick="questionAnswered(false)" class="optionButton questionButton">Supercell</button>
        </div>
        `;
        break;
        case 4:
            mainBox.innerHTML = `
            <p>Sua pontuação: ${score}</p>
            <br>
            <button onclick="resetAndGoToMainMenu()" class="optionButton questionButton">Menu Principal</button>
        `;
    }
    console.log(`question: ${question}`);
    console.log(`score: ${score}`);
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
            renderQuestion();
            mainBox.style.height = `fit-content`;
            mainBox.style.width = `fit-content`;
        } else {
            mainBox.style.height = `${h}vh`;
            mainBox.style.width = `${w}vw`;
            h++;
            w++;
        }
    }
}

const audio = new Audio('./public/audio/PacManMusic.mp3');
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

function questionAnswered(correct){
    question++;
    renderQuestion();
    if(correct){
        score++;
    }
}

function resetAndGoToMainMenu(){
    score = 0;
    question = 1;
}