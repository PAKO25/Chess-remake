function calcMoves(tile, tiles) {
    let moves = [];
    let movestoadd;

    //kalkuliranje vseh potez
    switch (tile.piece.type) {
        case Pieces.pond:
            movestoadd = pond(tile, tiles);
            movestoadd.forEach(move => { moves.push(move) });
            break;

        case Pieces.knight:
            movestoadd = (knight(tile, tiles));
            movestoadd.forEach(move => { moves.push(move) });
            break;

        case Pieces.bishop:
            movestoadd = (bishop(tile, tiles));
            movestoadd.forEach(move => { moves.push(move) });
            break;

        case Pieces.rook:
            movestoadd = (rook(tile, tiles));
            movestoadd.forEach(move => { moves.push(move) });
            break;

        case Pieces.queen:
            movestoadd = (queen(tile, tiles));
            movestoadd.forEach(move => { moves.push(move) });
            break;

        case Pieces.king:
            movestoadd = (king(tile, tiles));
            movestoadd.forEach(move => { moves.push(move) });
            break;
    }
    

    //preveri če je figura pinnana in če lahko prepreči šah
    let length = moves.length;
    for (let i = 0; i < length; i++) {
        let move = moves[i];
        let allowed = true;


        //virtualni premik
        let virtualtiles = JSON.parse(JSON.stringify(tiles));
        let moveto = getTileByNumber(virtualtiles, move.tile.num);
        let movefrom = getTileByNumber(virtualtiles, tile.num);
        moveto.piece = movefrom.piece;
        movefrom.piece = undefined;
        moveto.occupied = true;
        movefrom.occupied = false;

        //preveri če je šah
        virtualtiles.forEach(virtualtile => {
            if (virtualtile.occupied) {
                if (virtualtile.piece.color == tile.piece.color) {
                    if (virtualtile.piece.type == Pieces.king) {
                        if (isCheck(virtualtile, virtualtiles, virtualtile.piece.color)) {
                            allowed = false;
                        }
                    }
                }
            }
        })


        //remova potezo če je šah
        if (!allowed) {
            moves.splice(i, 1);
            i--;
            length--;
        }
    }

    return moves;
}

function distanceBetween(x1, y1, x2, y2) {
    let x = x2 - x1;
    let y = y2 - y1;
    x = x * x;
    y = y * y;
    let both = x + y;
    both = Math.floor(Math.sqrt(both));

    return both;
}