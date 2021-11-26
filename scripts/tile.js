var animationinterval;
class Tile {
    moves = [];
    occupied = false;
    pickedup = false;
    piece = {};

    constructor(num, tilesize) {
        this.num = num;
        this.x = num % 8;
        if (this.x == 0) this.x = 8;
        this.y = Math.ceil(num / 8);

        this.width = tilesize;
        this.height = this.width;
        this.dx = this.width * (this.x - 1);
        this.dy = this.height * (this.y - 1);

        if (this.y % 2 != 0) {
            if (this.x % 2 != 0) {
                this.color = Pieces.blacktile;
            } else {
                this.color = Pieces.whitetile;
            }
        } else {
            if (this.x % 2 != 0) {
                this.color = Pieces.whitetile;
            } else {
                this.color = Pieces.blacktile;
            }
        }

        this.draw();
    }

    draw() {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.dx, this.dy, this.width, this.height);

        if (this.occupied) {
            if (this.pickedup) {
                let x = mousex - this.width / 2;
                let y = mousey - this.height / 2;
                ctx.drawImage(getImage(this.piece.type, this.piece.color), x, y, this.width, this.height);
            } else {
                ctx.drawImage(getImage(this.piece.type, this.piece.color), this.dx, this.dy, this.width, this.height);
            }
        }
    }

    drawoutline() {
        ctx.fillStyle = Pieces.outlinecolor;
        ctx.fillRect(this.dx, this.dy, this.width, this.height / 10);
        ctx.fillRect(this.dx, this.dy, this.width / 10, this.height);
        ctx.fillRect(this.dx, (this.dy + this.height) - (this.height / 10), this.width, this.height / 10);
        ctx.fillRect((this.dx + this.width) - (this.width / 10), this.dy, this.width / 10, this.height);
    }

    drawlastmoved() {
        ctx.globalAlpha = 0.1;
        ctx.fillStyle = Pieces.lastmovedcolor;
        ctx.fillRect(this.dx, this.dy, this.width, this.height);
        ctx.globalAlpha = 1;
    }

    drawavailableformove() {
        ctx.globalAlpha = 0.5;
        ctx.beginPath();
        let x = this.dx + (this.width / 2);
        let y = this.dy + (this.height / 2);
        let radius = ((this.width + this.height) / 2) / 6;
        ctx.arc(x, y, radius, 0, 2 * Math.PI);
        ctx.fillStyle = "#47476b";
        ctx.fill();
        ctx.globalAlpha = 1;
    }

    placePiece(type, color, moved) {
        this.piece = {
            type: type,
            color: color,
            moved: moved
        }
        this.occupied = true;
    }

    click(down) {
        if (down) {
            if (this.occupied) {
                if (this.piece.color == board.navrsti) {
                    this.pickedup = true;
                    board.holdingtile = this;
                    this.moves = calcMoves(this, board.tiles);
                    if (animationinterval != undefined) {
                        clearInterval(animationinterval);
                        animationinterval = undefined;
                    }
                    animationinterval = setInterval(() => {
                        board.draw();
                        let tileplaceholder = getTileByXY(board.tiles, mousex, mousey);
                        if (tileplaceholder != undefined) tileplaceholder.drawoutline();
                        this.moves.forEach(move => {
                            move.tile.drawavailableformove();
                        })
                        this.draw();
                    }, 1000 / 60);
                }
            }
        } else {
            if (board.holdingtile != undefined) {
                board.holdingtile.pickedup = false;
                clearInterval(animationinterval);
                animationinterval = undefined;
                board.draw();
                //if in board.holdingtile.moves => move
                if (this.num != board.holdingtile.num) board.holdingtile.moveto(this);
                board.holdingtile = undefined;
            }
        }
    }

    moveto(tile) {
        let allowed = false;
        let takewithenpassant = undefined;
        let poljezatrdnjavo = undefined;
        let poljetrdnjave = undefined;
        this.moves.forEach(move => {
            if (move.tile.num == tile.num) {

                if (move.type == "normal") {
                    allowed = true;
                } else if (move.type == "enpassant") {
                    allowed = true;
                    takewithenpassant = move.takentile;
                } else if (move.type == "rokada") {
                    allowed = true;
                    poljetrdnjave = move.trdnjava;
                    poljezatrdnjavo = move.poljezatrdnjavo;
                } else if (move.type == "promotion") {
                    let topiece = {color: this.piece.color, moved: true};
                    let dalje = false;
                    while (!dalje) {
                        let besedilo = prompt("What do you want to promote to? \n (knight/bishop/rook/queen)");
                        switch (besedilo) {
                            case "knight":
                                dalje = true
                                topiece.type = Pieces.knight;
                                break;
                            case "bishop":
                                dalje = true
                                topiece.type = Pieces.bishop;
                                break;
                            case "rook":
                                dalje = true
                                topiece.type = Pieces.rook;
                                break;
                            case "queen":
                                dalje = true
                                topiece.type = Pieces.queen;
                                break;
                        }
                    }
                    this.piece = topiece;
                    allowed = true;
                }

            }
        })
        if (allowed) {
            if (takewithenpassant != undefined) {
                takewithenpassant.occupied = false;
                takewithenpassant.piece = undefined;
            }
            if (poljetrdnjave != undefined) {
                poljetrdnjave.occupied = false;
                poljezatrdnjavo.piece = poljetrdnjave.piece;
                poljezatrdnjavo.occupied = true;
                poljetrdnjave.piece = undefined;
            }
            this.piece.moved = true;
            tile.piece = this.piece;
            this.piece = undefined;
            this.occupied = false;
            this.moves = [];
            tile.occupied = true;
            board.lastmovedpiece = tile;
            board.move();
        }
        board.draw();
    }
}