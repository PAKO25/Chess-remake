function isCheck(tile, tiles, color) {

    let check = false;
    let moves = [];
    let virtualtile = {
        num: tile.num,
        x: tile.x,
        y: tile.y,
        dx: tile.dx,
        dy: tile.dy,
        occupied: true
    }

    virtualtile.piece = { type: Pieces.knight, color: color, moved: true };
    moves = (knight(virtualtile, tiles));
    moves.forEach(move => {
        move = move.tile;
        if (move.occupied) {
            if (move.piece.color != color) {
                if (move.piece.type == Pieces.knight) {
                    check = true;
                }
            }
        }
    })

    if (!check) {
        virtualtile.piece = { type: Pieces.bishop, color: color, moved: true };
        moves = (bishop(virtualtile, tiles, true));
        moves.forEach(move => {
            move = move.tile;
            if (move.occupied) {
                if (move.piece.color != color) {
                    if (move.piece.type == Pieces.queen || move.piece.type == Pieces.bishop) {
                        check = true;
                    }
                }
            }
        })
    }

    if (!check) {
        virtualtile.piece = { type: Pieces.rook, color: color, moved: true };
        moves = (rook(virtualtile, tiles, true));
        moves.forEach(move => {
            move = move.tile;
            if (move.occupied) {
                if (move.piece.color != color) {
                    if (move.piece.type == Pieces.queen || move.piece.type == Pieces.rook) {
                        check = true;
                    }
                }
            }
        })
    }

    
    if (!check) {
        virtualtile.piece = { type: Pieces.pond, color: color, moved: true };
        moves = pond(virtualtile, tiles, true);
        moves.forEach(move => {
            move = move.tile;
            if (move.occupied) {
                if (move.piece.color != color) {
                    if (move.piece.type == Pieces.pond) {
                        check = true;
                    }
                }
            }
        })
    } 



    return check;
}