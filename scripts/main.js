var board;
var mousex;
var mousey;
var emptypiece = { type: undefined, color: undefined, moved: undefined };
var whitetimer;
var blacktimer;
var blacktime = 60 * 10 * 10; //60 sekund * 10 minut * 10 desetink
var whitetime = blacktime;
var timerinterval = undefined;

function createBoard() {
    board = new Board(document.getElementById("canvas"));
    document.onmousemove = getCursorXY;
    whitetimer = document.getElementById("whitetimer");
    blacktimer = document.getElementById("blacktimer");
}

function getCursorXY(e) {
    let rect = board.canvas.getBoundingClientRect();
    mousex = e.clientX - rect.left;
    mousey = e.clientY - rect.top;
}

function isNum(s) {
    return !isNaN(s - parseFloat(s));
}


function getImage(type, color) {
    return Images[color][type];
}

function sahmat(matiran) {
    clearInterval(timerinterval);
    let zmagovalec;
    if (matiran == Pieces.white) {
        zmagovalec = "black";
    } else {
        zmagovalec = "white";
    }

    document.getElementById("konec").style.display = "block";
    document.getElementById("igra").style.display = "none";
    document.getElementById("zmagovalec").innerHTML = zmagovalec;
}

function pat() {
    document.getElementById("konec").style.display = "block";
    document.getElementById("igra").style.display = "none";
}

function countdown(who) {

    if (timerinterval != undefined) {
        clearInterval(timerinterval);
    }
    if (who == Pieces.white) {
        timerinterval = setInterval(() => {
            whitetime--;
            if(whitetime < 0) {
                sahmat(who);
            }
            whitetimer.innerText = Math.floor((whitetime / 10) / 60) + ":" + Math.floor((whitetime / 10) % 60);
        }, 100)
    } else {
        timerinterval = setInterval(() => {
            blacktime--;
            if(blacktime < 0) {
                sahmat(who);
            }
            blacktimer.innerText = Math.floor((blacktime / 10) / 60) + ":" + Math.floor((blacktime / 10) % 60);
        }, 100)
    }
}

const Pieces = {
    pond: 0,
    knight: 1,
    bishop: 2,
    rook: 3,
    queen: 4,
    king: 5,

    black: 1,
    white: 0,

    blacktile: "#3d3d5c",
    whitetile: "#a3a3c2",
    outlinecolor: "#99ccff",
    lastmovedcolor: "#ffc266",
    organisation: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1"
}

var Images = [[], []];
Images[0].push(new Image());
Images[0][0].src = "./Images/wpond.png";
Images[0].push(new Image());
Images[0][1].src = "./Images/wknight.png";
Images[0].push(new Image());
Images[0][2].src = "./Images/wbishop.png";
Images[0].push(new Image());
Images[0][3].src = "./Images/wrook.png";
Images[0].push(new Image());
Images[0][4].src = "./Images/wqueen.png";
Images[0].push(new Image());
Images[0][5].src = "./Images/wking.png";

Images[1].push(new Image());
Images[1][0].src = "./Images/bpond.png";
Images[1].push(new Image());
Images[1][1].src = "./Images/bknight.png";
Images[1].push(new Image());
Images[1][2].src = "./Images/bbishop.png";
Images[1].push(new Image());
Images[1][3].src = "./Images/brook.png";
Images[1].push(new Image());
Images[1][4].src = "./Images/bqueen.png";
Images[1].push(new Image());
Images[1][5].src = "./Images/bking.png";