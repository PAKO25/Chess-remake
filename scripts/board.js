var ctx;

class Board {
    tiles = [];
    holdingtile = undefined;
    lastmovedpiece = undefined;
    navrsti = Pieces.white;
    constructor(canvas1) {
        this.canvas = canvas1;
        ctx = canvas.getContext("2d");

        this.canvas.width = 900;
        this.canvas.height = this.canvas.width;
        this.canvas.style.width = canvas.width + "px";
        this.canvas.style.height = canvas.height + "px";

        this.genTiles();
        this.placePieces(Pieces.organisation);
    }
    genTiles() {
        for (let i = 0; i < 64; i++) {
            this.tiles.push(new Tile(i + 1, this.canvas.width / 8));
        }
    }

    draw() {
        this.tiles.forEach(tile => tile.draw());
        if (this.lastmovedpiece != undefined) {
            this.lastmovedpiece.drawlastmoved();
        }
    }

    click(e, down) {
        let rect = this.canvas.getBoundingClientRect();
        let x = e.clientX - rect.left;
        let y = e.clientY - rect.top;

        let tile = getTileByXY(this.tiles, x, y);
        if (tile == undefined) {
            x += 2;
            y += 2;
            tile = getTileByXY(this.tiles, x, y);
        }
        tile.click(down);
    }

    move() {

        //spremeni barvo
        if (this.navrsti == Pieces.white) {
            this.navrsti = Pieces.black;
        } else {
            this.navrsti = Pieces.white;
        }
        countdown(this.navrsti);

        //preveri mat in pat
        let sah = false;
        let moves = [];
        this.tiles.forEach(tile => {
            if (tile.occupied) {
                if (tile.piece.color == this.navrsti) {
                    //je šah?
                    if (tile.piece.type == Pieces.king) {
                        if (isCheck(tile, this.tiles, tile.piece.color)) {
                            sah = true;
                        }
                    }
                    //zračuna vse poteze in jih da v skupen sklad
                    let poteze = calcMoves(tile, this.tiles);
                    poteze.forEach(move => { moves.push(move) });
                }
            }
        })
        if (moves[0] == undefined) {
            if (sah) {
                //mat
                sahmat(this.navrsti);
            } else {
                //pat
                pat();
            }
        }
    }

    placePieces(code) {
        let main = code.split(" ", 1)[0];
        let lines = main.split("/");
        let bigline = "";
        lines.forEach(line => {
            bigline = bigline + line;
        })
        bigline = bigline.split("");
        let num = 1;
        bigline.forEach(char => {
            if (isNum(char)) {
                // številka
                num += parseInt(char);
            } else {
                // črka
                let color = Pieces.white;
                if (char.toLowerCase() == char) color = Pieces.black;
                char = char.toLowerCase();
                let piece;

                switch (char) {
                    case "p":
                        piece = Pieces.pond;
                        break;
                    case "n":
                        piece = Pieces.knight;
                        break;
                    case "b":
                        piece = Pieces.bishop;
                        break;
                    case "r":
                        piece = Pieces.rook;
                        break;
                    case "q":
                        piece = Pieces.queen;
                        break;
                    case "k":
                        piece = Pieces.king;
                        break;
                }

                getTileByNumber(this.tiles, num).placePiece(piece, color, false);
                num++;
            }
        })
        this.draw();
    }
}

function getTileByNumber(tiles, num) {
    return tiles[num - 1];
}
function getTileByXY(tiles, x, y) {
    let returntile;
    tiles.forEach((tile) => {
        if (
            tile.dx < x &&
            tile.dx + tile.width > x &&
            tile.dy < y &&
            tile.dy + tile.height > y
        ) {
            returntile = tile;
        }
    })
    return returntile;
}
function getTileByPosXY(tiles, x, y) {
    let returntile;
    tiles.forEach(tile => {
        if (tile.x == x && tile.y == y) {
            returntile = tile;
        }
    })
    return returntile;
}