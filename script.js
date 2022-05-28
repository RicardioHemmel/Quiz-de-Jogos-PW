var mainBox = document.getElementById('mainBox');
var startButton = document.getElementById('startButton');
var helpButton = document.getElementById('helpButton')

function startQuiz(){
    let id = null;
    let h = mainBox.style.height;
    clearInterval(id);
    id = setInterval(frame, 5);
    mainBox.style.height = '65vh';
    startButton.style.display = 'none';
    helpButton.style.display = 'none';
    function frame(){
        if (h == 65){
            clearInterval(id)
        } else {
            h++
            mainBox.style.height = `${h}vh`
        }
    }
}
