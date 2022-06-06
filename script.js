var mainBox = document.getElementById('mainBox');
var menuPrincipal = document.getElementById('menuPrincipal');
var divQuestoes = document.getElementById('divQuestoes');
var divQuizFinalizado = document.getElementById('divQuizFinalizado');
var startButton = document.getElementById('startButton');
var helpButton = document.getElementById('helpButton');
var creditsButton = document.getElementById('creditsButton');
var pacManPause = document.getElementById('pacManPause');
var pacManPlay = document.getElementById('pacManPlay');
var divInstrucoes = document.getElementById('divInstrucoes');
var bulbasaurBlack = document.getElementById('bulbasaurBlack');
var scorpionMk = document.getElementById('scorpionMk');

var question1Options = document.getElementById('question1Options').querySelectorAll('.questionButton');
var question2Options = document.getElementById('question2Options').querySelectorAll('.questionButton');
var question3Options = document.getElementById('question3Options').querySelectorAll('.questionButton');
var question4Options = document.getElementById('question4Options').querySelectorAll('.questionButton');
var question5Options = document.getElementById('question5Options').querySelectorAll('.questionButton');
var question6Options = document.getElementById('question6Options').querySelectorAll('.questionButton');
var question7Options = document.getElementById('question7Options').querySelectorAll('.questionButton');
var question8Options = document.getElementById('question8Options').querySelectorAll('.questionButton');
var question9Options = document.getElementById('question9Options').querySelectorAll('.questionButton');
var question10Options = document.getElementById('question10Options').querySelectorAll('.questionButton');

// var alterarBulba = document.getElementById('blackBulba')
// alterarBulba.setAttribute('src', 'bulbasaur-pokemon.gif')

var question1 = document.getElementById('question1');
var question2 = document.getElementById('question2');
var question3 = document.getElementById('question3');
var question4 = document.getElementById('question4');
var question5 = document.getElementById('question5');
var question6 = document.getElementById('question6');
var question7 = document.getElementById('question7');
var question8 = document.getElementById('question8');
var question9 = document.getElementById('question9');
var question10 = document.getElementById('question10');

var question = 1;
var score = 0;

// Html das questões
function renderQuestion(){
    // O innerHTML serve pra escrever dentro do html (Nesse caso dentro da div mainBox)

    menuPrincipal.style.display = 'none';
    divInstrucoes.style.display = 'none';
    divCreditos.style.display = 'none';
    divQuestoes.style.display = 'block';

    switch (question){
        case 1:
            // Q1
            question1.style.display = 'block';
        break;
        case 2:
            // Q2
            question1.style.display = 'none';
            question2.style.display = 'block';
        break;
        case 3:
            // Q3
            question2.style.display = 'none';
            question3.style.display = 'block';
        break;
        case 4:
            // Q4
            question3.style.display = 'none';
            question4.style.display = 'block';
        break;
        case 5:
            // Q5
            question4.style.display = 'none';
            question5.style.display = 'block';
        break;
        case 6:
            // Q6
            question5.style.display = 'none';
            question6.style.display = 'block';
        break;
        case 7:
            // Q7
            question6.style.display = 'none';
            question7.style.display = 'block';
        break;
        case 8:
            // Q8
            question7.style.display = 'none';
            question8.style.display = 'block';
        break;
        case 9:
            // Q9
            question8.style.display = 'none';
            question9.style.display = 'block';
        break;
        case 10:
            // Q10
            question9.style.display = 'none';
            question10.style.display = 'block';
        break;
        case 11:
            question10.style.display = 'none';
            divQuestoes.style.display = 'none';
            divQuizFinalizado.style.display = "block";
            divQuizFinalizado.innerHTML = 
            `
                <p>Sua pontuação: ${score}</p>
                <br>
                <button onclick="reloadPage()" class="optionButton questionButton">Menu Principal</button>
            `
        break;
    }
    console.log(`question: ${question}`);
    console.log(`score: ${score}`);
}

// Html das instruções
function renderInstructions(){
    menuPrincipal.style.display = 'none';
    divQuestoes.style.display = 'none';
    divCreditos.style.display = 'none';
    divInstrucoes.style.display = 'block';
}

function renderCredits(){
    menuPrincipal.style.display = 'none';
    divQuestoes.style.display = 'none';
    divInstrucoes.style.display = 'none';
    divCreditos.style.display = 'block';
}

function increaseMainBox(fun){
    // O .style (+ algum atributo tipo display ou backgroundColor) serve pra chamar algum atributo CSS da tag HTML
    // Com isso dá pra atribuir um valor nele q vai ser uma string, q nem aqui embaixo =)
    menuPrincipal.style.display = 'none';
    
    startButton.style.display = 'none';
    helpButton.style.display = 'none';
    creditsButton.style.display = 'none';

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

    const toastyMk = new Audio('./public/audio/toastySound.mp3');
    toastyMk.volume = 0.2;

    const correctfx = new Audio('./public/audio/correctfx.mp4');
    correctfx.volume = 0.2;

    const wrongfx = new Audio('./public/audio/wrongfx.mp4');
    wrongfx.volume = 0.2;
    
    switch (question){
        case 1:

            bulbasaurBlack.src = './public/img/bulbasaurPokemon.gif';

            question1Options[0].classList.add('optionButtonWrong');
            question1Options[0].disabled = true
            question1Options[1].classList.add('optionButtonWrong');
            question1Options[1].disabled = true
            question1Options[2].classList.add('optionButtonCorrect');
            question1Options[2].disabled = true
            question1Options[3].classList.add('optionButtonWrong');
            question1Options[3].disabled = true
        break;
        case 2:

            scorpionMk.src = './public/img/toastyMk.gif';
            toastyMk.play();

            question2Options[0].classList.add('optionButtonWrong');
            question2Options[0].disabled = true
            question2Options[1].classList.add('optionButtonWrong');
            question2Options[1].disabled = true
            question2Options[2].classList.add('optionButtonWrong');
            question2Options[2].disabled = true
            question2Options[3].classList.add('optionButtonCorrect');
            question2Options[3].disabled = true
        break;
        case 3:
            question3Options[0].classList.add('optionButtonWrong');
            question3Options[0].disabled = true
            question3Options[1].classList.add('optionButtonCorrect');
            question3Options[1].disabled = true
            question3Options[2].classList.add('optionButtonWrong');
            question3Options[2].disabled = true
            question3Options[3].classList.add('optionButtonWrong');
            question3Options[3].disabled = true
        break;
        case 4:
            question4Options[0].classList.add('optionButtonWrong');
            question4Options[0].disabled = true
            question4Options[1].classList.add('optionButtonWrong');
            question4Options[1].disabled = true
            question4Options[2].classList.add('optionButtonCorrect');
            question4Options[2].disabled = true
            question4Options[3].classList.add('optionButtonWrong');
            question4Options[3].disabled = true
        break;
        case 5:
            question5Options[0].classList.add('optionButtonWrong');
            question5Options[0].disabled = true
            question5Options[1].classList.add('optionButtonWrong');
            question5Options[1].disabled = true
            question5Options[2].classList.add('optionButtonWrong');
            question5Options[2].disabled = true
            question5Options[3].classList.add('optionButtonCorrect');
            question5Options[3].disabled = true
        break;
        case 6:
            question6Options[0].classList.add('optionButtonCorrect');
            question6Options[0].disabled = true
            question6Options[1].classList.add('optionButtonWrong');
            question6Options[1].disabled = true
            question6Options[2].classList.add('optionButtonWrong');
            question6Options[2].disabled = true
            question6Options[3].classList.add('optionButtonWrong');
            question6Options[3].disabled = true
        break;
        case 7:
            question7Options[0].classList.add('optionButtonWrong');
            question7Options[0].disabled = true
            question7Options[1].classList.add('optionButtonWrong');
            question7Options[1].disabled = true
            question7Options[2].classList.add('optionButtonCorrect');
            question7Options[2].disabled = true
            question7Options[3].classList.add('optionButtonWrong');
            question7Options[3].disabled = true
        break;
        case 8:
            question8Options[0].classList.add('optionButtonWrong');
            question8Options[0].disabled = true
            question8Options[1].classList.add('optionButtonWrong');
            question8Options[1].disabled = true
            question8Options[2].classList.add('optionButtonWrong');
            question8Options[2].disabled = true
            question8Options[3].classList.add('optionButtonCorrect');
            question8Options[3].disabled = true
        break;
        case 9:
            question9Options[0].classList.add('optionButtonWrong');
            question9Options[0].disabled = true
            question9Options[1].classList.add('optionButtonWrong');
            question9Options[1].disabled = true
            question9Options[2].classList.add('optionButtonCorrect');
            question9Options[2].disabled = true
            question9Options[3].classList.add('optionButtonWrong');
            question9Options[3].disabled = true
        break;
        case 10:
            question10Options[0].classList.add('optionButtonWrong');
            question10Options[0].disabled = true
            question10Options[1].classList.add('optionButtonWrong');
            question10Options[1].disabled = true
            question10Options[2].classList.add('optionButtonWrong');
            question10Options[2].disabled = true
            question10Options[3].classList.add('optionButtonCorrect');
            question10Options[3].disabled = true
        break;
    }
    
    question++;

    if(correct){
        score++;
        correctfx.play();
    }else{
        wrongfx.play()
    }
    setTimeout(renderQuestion, 1.75*1000);
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
    divCreditos.style.display = 'none'

    startButton.style.display = 'block';
    helpButton.style.display = 'block';
    menuPrincipal.style.display = 'block';
    creditsButton.style.display = 'block';

    console.log(`question: ${question}`);
    console.log(`score: ${score}`);
}

function reloadPage(){
    document.location.reload();
}