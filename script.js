var mainBox = document.getElementById('mainBox');
var menuPrincipal = document.getElementById('menuPrincipal');
var divQuestoes = document.getElementById('divQuestoes');
var divQuizFinalizado = document.getElementById('divQuizFinalizado');
var startButton = document.getElementById('startButton');
var helpButton = document.getElementById('helpButton')
var pacManPause = document.getElementById('pacManPause')
var pacManPlay = document.getElementById('pacManPlay')
var divInstrucoes = document.getElementById('divInstrucoes')
var divOptions = document.getElementById(buttonsContainer).querySelectorAll('.questionButton');
// var alterarBulba = document.getElementById('blackBulba')
// alterarBulba.setAttribute('src', 'bulbasaur-pokemon.gif')

var question = 1;
var score = 0;

// Html das questões
function renderQuestion(){
    // O innerHTML serve pra escrever dentro do html (Nesse caso dentro da div mainBox)

    menuPrincipal.style.display = 'none';
    divInstrucoes.style.display = 'none';
    divQuestoes.style.display = 'block';

        divQuestoes.innerHTML = `
        <div class="headingContainer">
        <h1>1 - Quem é esse pokemón?</h1>
        </div>
        <div class="imageContainer">
            <img class="blackBulba" src="./public/img/bulbassauroCensured.gif">
        </div>
        <div id="divOptions" class="buttonsContainer">
            <button onClick="questionAnswered(true)" class="optionButton questionButton">Pikachu</button>
            <button onClick="questionAnswered(false)" class="optionButton questionButton">Snorlax</button>
            <button onClick="questionAnswered(false)" class="optionButton questionButton">Bulbasauro</button>
            <button onClick="questionAnswered(false)" class="optionButton questionButton">Magikarp</button>
        </div>
        `;

    switch (question){
        case 1:
    divQuestoes.innerHTML = `
        <div class="headingContainer">
        <h1>${question} - Quem é esse Pokemón?</h1>
        </div>
        <div class="imageContainer">
            <img class="blackBulba" src="./public/img/bulbassauroCensured.gif">
        </div>
        <div class="buttonsContainer">
            <button onClick="questionAnswered(true)" class="optionButton questionButton">Pikachu</button>
            <button onClick="questionAnswered(false)" class="optionButton questionButton">Snorlax</button>
            <button onClick="questionAnswered(false)" class="optionButton questionButton">Bulbasauro</button>
            <button onClick="questionAnswered(false)" class="optionButton questionButton">Magikarp</button>
        </div>
        `;
        break;
        case 2:
        divQuestoes.innerHTML = `
        <div class="headingContainer">
            <h1>${question} - Quantos fantasmas tem no jogo Pac-Man?</h1>
        </div>
        <div class="imageContainer">
            <img src="./public/img/ghostQuestion.gif">
        </div>
        <div id="divOptions" class="buttonsContainer">
            <button onClick="questionAnswered(false)" class="optionButton questionButton">3 Fantasmas</button>
            <button onClick="questionAnswered(false)" class="optionButton questionButton">5 Fantasmas</button>
            <button onClick="questionAnswered(false)" class="optionButton questionButton">2 Fantasmas</button>
            <button onClick="questionAnswered(true)" class="optionButton questionButton">4 Fantasmas</button>
        </div>
        `;
        break;
        case 3:
        divQuestoes.innerHTML = `
        <div class="headingContainer">
            <h1>${question} - Qual é a empresa responsável pela criação do Minecraft?</h1>
        </div>
        <div class="imageContainer">
            <img src="./public/img/minecraft.gif">
        </div>
        <div id="divOptions" class="buttonsContainer">
            <button onClick="questionAnswered(false)" class="optionButton questionButton">Activision</button>
            <button onClick="questionAnswered(true)" class="optionButton questionButton">Mojang Studios</button>
            <button onClick="questionAnswered(false)" class="optionButton questionButton">Epic Games</button>
            <button onClick="questionAnswered(false)" class="optionButton questionButton">Supercell</button>
        </div>
        `;
        break;
        case 4:
        divQuestoes.innerHTML = `
        <div class="headingContainer">
            <h1>${question} - Dentre estes jogos qual é o mais caro, incluído com as DLCs?</h1>
        </div>
        <div class="imageContainer">
            <img src="./public/img/minecraft.gif">
        </div>
        <div id="divOptions" class="buttonsContainer">
            <button onClick="questionAnswered(false)" class="optionButton questionButton">Half-Life: Alyx</button>
            <button onClick="questionAnswered(false)" class="optionButton questionButton">The Sims 4</button>
            <button onClick="questionAnswered(false)" class="optionButton questionButton">The Last of Us Part II</button>
            <button onClick="questionAnswered(true)" class="optionButton questionButton">Train Simulator</button>
        </div>
        `;
        break;
        case 5:
            divQuestoes.innerHTML = `
        <div class="headingContainer">
            <h1>${question} - Quem é este personagem?</h1>
        </div>
        <div class="imageContainer">
            <img src="./public/img/minecraft.gif">
        </div>
        <div id="divOptions" class="buttonsContainer">
            <button onClick="questionAnswered(false)" class="optionButton questionButton">Raiden</button>
            <button onClick="questionAnswered(false)" class="optionButton questionButton">Jacket</button>
            <button onClick="questionAnswered(false)" class="optionButton questionButton">Dallas</button>
            <button onClick="questionAnswered(true)" class="optionButton questionButton">Gordon Freeman</button>
        </div>
        `;
        break;
        case 6:
            divQuestoes.innerHTML = `
        <div class="headingContainer">
            <h1>${question} - Em qual desses jogos o protagonista morre em sua continuação?</h1>
        </div>
        <div class="imageContainer">
            <img src="./public/img/minecraft.gif">
        </div>
        <div id="divOptions" class="buttonsContainer">
            <button onClick="questionAnswered(false)" class="optionButton questionButton">Portal 2</button>
            <button onClick="questionAnswered(false)" class="optionButton questionButton">PayDay 2</button>
            <button onClick="questionAnswered(true)" class="optionButton questionButton">The Last of Us Part II</button>
            <button onClick="questionAnswered(false)" class="optionButton questionButton">Half-Life 2</button>
        </div>
        `;
        break;
        case 7:
            divQuestoes.innerHTML = `
        <div class="headingContainer">
            <h1>${question} - Qual desses jogos possui a menor nota de review?</h1>
        </div>
        <div class="imageContainer">
            <img src="./public/img/minecraft.gif">
        </div>
        <div id="divOptions" class="buttonsContainer">
            <button onClick="questionAnswered(false)" class="optionButton questionButton">Fall Guys</button>
            <button onClick="questionAnswered(false)" class="optionButton questionButton">Fallout 75</button>
            <button onClick="questionAnswered(false)" class="optionButton questionButton">Metal Gear Survive</button>
            <button onClick="questionAnswered(true)" class="optionButton questionButton">Grand Theft Auto: The Trilogy - The Definitive Edition</button>
        </div>
        `;
        break;
        case 8:
        divQuestoes.innerHTML = `
        <div class="headingContainer">
            <h1>${question} - Em qual desses jogos Hack 'n Slash você consegue fazer combos com seus golpes pontuando do E ao S?</h1>
        </div>
        <div class="imageContainer">
            <img src="./public/img/minecraft.gif">
        </div>
        <div id="divOptions" class="buttonsContainer">
            <button onClick="questionAnswered(false)" class="optionButton questionButton">Metal Gear Rising: Revengeance</button>
            <button onClick="questionAnswered(true)" class="optionButton questionButton">Devil May Cry</button>
            <button onClick="questionAnswered(false)" class="optionButton questionButton">Sekiro: Shadows Die Twice</button>
            <button onClick="questionAnswered(false)" class="optionButton questionButton">Katana Zero</button>
        </div>
        `;
        break;
        case 9:
            divQuestoes.innerHTML = `
        <div class="headingContainer">
            <h1>${question} - Depth é um jogo em que o jogador:</h1>
        </div>
        <div class="imageContainer">
            <img src="./public/img/minecraft.gif">
        </div>
        <div id="divOptions" class="buttonsContainer">
            <button onClick="questionAnswered(false)" class="optionButton questionButton">Precisa descer em crateras para explorar.</button>
            <button onClick="questionAnswered(true)" class="optionButton questionButton">Joga contra tubarões e com outros jogadores enquanto resgata ouro.</button>
            <button onClick="questionAnswered(false)" class="optionButton questionButton">Cria uma base, explora o mundo e enfrenta uma diversidade de inimigos.</button>
            <button onClick="questionAnswered(false)" class="optionButton questionButton">Tem que chegar o mais longe possível em uma masmorra.</button>
        </div>
        `;
        break;
        case 10:
            divQuestoes.innerHTML = `
        <div class="headingContainer">
            <h1>${question} - Quem é o antagonista principal de Metal Gear Solid V: The Phantom Pain?</h1>
        </div>
        <div class="imageContainer">
            <img src="./public/img/minecraft.gif">
        </div>
        <div id="divOptions" class="buttonsContainer">
            <button onClick="questionAnswered(false)" class="optionButton questionButton">Greyfox</button>
            <button onClick="questionAnswered(true)" class="optionButton questionButton">Snake</button>
            <button onClick="questionAnswered(false)" class="optionButton questionButton">Kazuhira Müller</button>
            <button onClick="questionAnswered(false)" class="optionButton questionButton">Skull Face</button>
        </div>
        `;
        break;
        case 11:
            divQuestoes.style.display = 'none';
            divQuizFinalizado.style.display = "block";
            divQuizFinalizado.innerHTML = `
            <p>Sua pontuação: ${score}</p>
            <br>
            <button onclick="resetAndGoToMainMenu()" class="optionButton questionButton">Menu Principal</button>
            `
            ;
        break;
    }
    console.log(`question: ${question}`);
    console.log(`score: ${score}`);
}

// Html das instruções
function renderInstructions(){
    menuPrincipal.style.display = 'none';
    divQuestoes.style.display = 'none';
    divInstrucoes.style.display = 'block';
}

function increaseMainBox(fun){
    // O .style (+ algum atributo tipo display ou backgroundColor) serve pra chamar algum atributo CSS da tag HTML
    // Com isso dá pra atribuir um valor nele q vai ser uma string, q nem aqui embaixo =)
    menuPrincipal.style.display = 'none';
    

    startButton.style.display = 'none';
    helpButton.style.display = 'none';
    let id = null;
    let h = mainBox.style.minHeight;
    let w = mainBox.style.minWidth;
    clearInterval(id);
    id = setInterval(frame, 7);
    function frame(){
        if (h == 45 || w == 70){
            clearInterval(id);
            fun();
        } else {
            mainBox.style.minHeight = `${h}vh`;
            mainBox.style.minWidth = `${w}vw`;
            h++;
            w++;
        }
    }
    fun();
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
        score ++;
    }

    divOptions[1].style.backgroundColor = 'red';

    setTimeout(renderQuestion, 2.0*1000);
}

// função pra resetar os pontos e ir pro menu
function resetAndGoToMainMenu(){
    question = 1;
    score = 0;
    mainBox.style.minHeight = 0;
    mainBox.style.minWidth = 0;

    divQuestoes.style.display = 'none';
    divQuizFinalizado.style.display = 'none';
    divInstrucoes.style.display = 'none';

    startButton.style.display = 'block';
    helpButton.style.display = 'block';
    menuPrincipal.style.display = 'block'

    console.log(`question: ${question}`);
    console.log(`score: ${score}`);
}