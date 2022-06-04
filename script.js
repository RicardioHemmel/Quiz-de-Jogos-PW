var mainBox = document.getElementById('mainBox');
var startButton = document.getElementById('startButton');
var helpButton = document.getElementById('helpButton')
var pacManPause = document.getElementById('pacManPause')
var pacManPlay = document.getElementById('pacManPlay')

var question = 0;
var score = 0;

// Html das questões
function renderQuestion(){
    // O innerHTML serve pra escrever dentro do html (Nesse caso dentro da div mainBox)
    switch (question){
        case 0:
    mainBox.innerHTML = `
        <div class="headingContainer">
        <h1>${question} - Quem é esse doido aí?</h1>
        </div>
        <div class="imageContainer">
            <img src="./public/img/jacket-hotline-miami.jpg">
        </div>
        <div class="buttonsContainer">
            <button onClick="questionAnswered(true)" class="optionButton questionButton">Jacket</button>
            <button onClick="questionAnswered(false)" class="optionButton questionButton">Dallas</button>
            <button onClick="questionAnswered(false)" class="optionButton questionButton">Solid Snake</button>
            <button onClick="questionAnswered(false)" class="optionButton questionButton">Joel</button>
        </div>
        `;
        break;
        case 1:
        mainBox.innerHTML = `
        <div class="headingContainer">
            <h1>${question} - Quantos fantasmas tem no jogo Pac-Man?</h1>
        </div>
        <div class="imageContainer">
            <img src="./public/img/ghostQuestion.gif">
        </div>
        <div class="buttonsContainer">
            <button onClick="questionAnswered(false)" class="optionButton questionButton">3 Fantasmas</button>
            <button onClick="questionAnswered(false)" class="optionButton questionButton">5 Fantasmas</button>
            <button onClick="questionAnswered(false)" class="optionButton questionButton">2 Fantasmas</button>
            <button onClick="questionAnswered(true)" class="optionButton questionButton">4 Fantasmas</button>
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
        break;
    }
    console.log(`question: ${question}`);
    console.log(`score: ${score}`);
}

// Html das instruções
function renderInstructions(){
    mainBox.innerHTML = 
    `
    <h1>Instruções</h1>
    `
}

function increaseMainBox(fun){
    // O .style (+ algum atributo tipo display ou backgroundColor) serve pra chamar algum atributo CSS da tag HTML
    // Com isso dá pra atribuir um valor nele q vai ser uma string, q nem aqui embaixo =)
    startButton.style.display = 'none';
    helpButton.style.display = 'none';
    let id = null;
    let h = mainBox.style.minHeight;
    let w = mainBox.style.minWidth;
    mainBox.innerHTML = '';
    clearInterval(id);
    id = setInterval(frame, 15);
    function frame(){
        if (h == 55 || w == 65){
            clearInterval(id);
            fun();
        } else {
            mainBox.style.minHeight = `${h}vh`;
            mainBox.style.minWidth = `${w}vw`;
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
    if(correct){
        score += 1;
    }
    renderQuestion();
}

// função pra resetar os pontos e ir pro menu
function resetAndGoToMainMenu(){
    question = 0;
    score = 0;
    startButton.style.display = 'block';
    helpButton.style.display = 'block';
    mainBox.style.minWidth = 0;
    mainBox.style.minHeight = 0;
    mainBox.innerHTML = 
    `
    <div>
        <h1>GAMING QUIZ</h1>
        <h2>Teste seu conhecimento sobre jogos</h2>
    </div>
    `
}