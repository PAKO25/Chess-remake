function knight(tile, tiles) {

    let tileplaceholder;
    let moves = [];

    //gor desno 1
    tileplaceholder = getTileByPosXY(tiles, tile.x + 1, tile.y - 2);
    if (tileplaceholder != undefined) {
        if (tileplaceholder.occupied) {
            if (tileplaceholder.piece.color != tile.piece.color) {
                moves.push({ tile: tileplaceholder, type: "normal" });
            }
        } else {
            moves.push({ tile: tileplaceholder, type: "normal" });
        }
    }
    //gor desno 2
    tileplaceholder = getTileByPosXY(tiles, tile.x + 2, tile.y - 1);
    if (tileplaceholder != undefined) {
        if (tileplaceholder.occupied) {
            if (tileplaceholder.piece.color != tile.piece.color) {
                moves.push({ tile: tileplaceholder, type: "normal" });
            }
        } else {
            moves.push({ tile: tileplaceholder, type: "normal" });
        }
    }
    //gor levo 1
    tileplaceholder = getTileByPosXY(tiles, tile.x - 1, tile.y - 2);
    if (tileplaceholder != undefined) {
        if (tileplaceholder.occupied) {
            if (tileplaceholder.piece.color != tile.piece.color) {
                moves.push({ tile: tileplaceholder, type: "normal" });
            }
        } else {
            moves.push({ tile: tileplaceholder, type: "normal" });
        }
    }
    //gor levo 2
    tileplaceholder = getTileByPosXY(tiles, tile.x - 2, tile.y - 1);
    if (tileplaceholder != undefined) {
        if (tileplaceholder.occupied) {
            if (tileplaceholder.piece.color != tile.piece.color) {
                moves.push({ tile: tileplaceholder, type: "normal" });
            }
        } else {
            moves.push({ tile: tileplaceholder, type: "normal" });
        }
    }
    //dol desno 1
    tileplaceholder = getTileByPosXY(tiles, tile.x + 1, tile.y + 2);
    if (tileplaceholder != undefined) {
        if (tileplaceholder.occupied) {
            if (tileplaceholder.piece.color != tile.piece.color) {
                moves.push({ tile: tileplaceholder, type: "normal" });
            }
        } else {
            moves.push({ tile: tileplaceholder, type: "normal" });
        }
    }
    //dol desno 2
    tileplaceholder = getTileByPosXY(tiles, tile.x + 2, tile.y + 1);
    if (tileplaceholder != undefined) {
        if (tileplaceholder.occupied) {
            if (tileplaceholder.piece.color != tile.piece.color) {
                moves.push({ tile: tileplaceholder, type: "normal" });
            }
        } else {
            moves.push({ tile: tileplaceholder, type: "normal" });
        }
    }
    //dol levo 1
    tileplaceholder = getTileByPosXY(tiles, tile.x - 1, tile.y + 2);
    if (tileplaceholder != undefined) {
        if (tileplaceholder.occupied) {
            if (tileplaceholder.piece.color != tile.piece.color) {
                moves.push({ tile: tileplaceholder, type: "normal" });
            }
        } else {
            moves.push({ tile: tileplaceholder, type: "normal" });
        }
    }
    //dol levo 2
    tileplaceholder = getTileByPosXY(tiles, tile.x - 2, tile.y + 1);
    if (tileplaceholder != undefined) {
        if (tileplaceholder.occupied) {
            if (tileplaceholder.piece.color != tile.piece.color) {
                moves.push({ tile: tileplaceholder, type: "normal" });
            }
        } else {
            moves.push({ tile: tileplaceholder, type: "normal" });
        }
    }
    return moves;
}