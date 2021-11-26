function bishop(tile, tiles, throughpieces) {

    let tileplaceholder;
    let moves = [];

    //gor levo
    for (let num = tile.num - 9; num > 0; num -= 9) {
        tileplaceholder = getTileByNumber(tiles, num);
        if (tileplaceholder != undefined) {
            if (tileplaceholder.x < tile.x) {
                if (tileplaceholder.occupied) {
                    if (tileplaceholder.piece.color != tile.piece.color) {
                        moves.push({ tile: tileplaceholder, type: "normal" });
                    }
                    if (!throughpieces) {
                        //normalno
                        break;
                    } else {
                        //xray
                        if (tileplaceholder.piece.color == tile.piece.color && tileplaceholder.piece.type == Pieces.king) {
                            //skozikralja
                        } else {
                            break;
                        }
                    }
                } else {
                    moves.push({ tile: tileplaceholder, type: "normal" });
                }
            }
        }
    }
    //gor desno
    for (let num = tile.num - 7; num > 0; num -= 7) {
        tileplaceholder = getTileByNumber(tiles, num);
        if (tileplaceholder != undefined) {
            if (tileplaceholder.x > tile.x) {
                if (tileplaceholder.occupied) {
                    if (tileplaceholder.piece.color != tile.piece.color) {
                        moves.push({ tile: tileplaceholder, type: "normal" });
                    }
                    if (!throughpieces) {
                        //normalno
                        break;
                    } else {
                        //xray
                        if (tileplaceholder.piece.color == tile.piece.color && tileplaceholder.piece.type == Pieces.king) {
                            //skozikralja
                        } else {
                            break;
                        }
                    }
                } else {
                    moves.push({ tile: tileplaceholder, type: "normal" });
                }
            }
        }
    }
    //dol desno
    for (let num = tile.num + 9; num < 65; num += 9) {
        tileplaceholder = getTileByNumber(tiles, num);
        if (tileplaceholder != undefined) {
            if (tileplaceholder.x > tile.x) {
                if (tileplaceholder.occupied) {
                    if (tileplaceholder.piece.color != tile.piece.color) {
                        moves.push({ tile: tileplaceholder, type: "normal" });
                    }
                    if (!throughpieces) {
                        //normalno
                        break;
                    } else {
                        //xray
                        if (tileplaceholder.piece.color == tile.piece.color && tileplaceholder.piece.type == Pieces.king) {
                            //skozikralja
                        } else {
                            break;
                        }
                    }
                } else {
                    moves.push({ tile: tileplaceholder, type: "normal" });
                }
            }
        }
    }
    //dol levo
    for (let num = tile.num + 7; num < 65; num += 7) {
        tileplaceholder = getTileByNumber(tiles, num);
        if (tileplaceholder != undefined) {
            if (tileplaceholder.x < tile.x) {
                if (tileplaceholder.occupied) {
                    if (tileplaceholder.piece.color != tile.piece.color) {
                        moves.push({ tile: tileplaceholder, type: "normal" });
                    }
                    if (!throughpieces) {
                        //normalno
                        break;
                    } else {
                        //xray
                        if (tileplaceholder.piece.color == tile.piece.color && tileplaceholder.piece.type == Pieces.king) {
                            //skozikralja
                        } else {
                            break;
                        }
                    }
                } else {
                    moves.push({ tile: tileplaceholder, type: "normal" });
                }
            }
        }
    }
    return moves;
}

////////////////////////////////////////////////////////////////////////////////////////////////

function rook(tile, tiles, throughpieces) {

    let tileplaceholder;
    let moves = [];

    //gor
    for (let y = tile.y - 1; y > 0; y--) {
        tileplaceholder = getTileByPosXY(tiles, tile.x, y);
        if (tileplaceholder != undefined) {
            if (tileplaceholder.occupied) {
                if (tileplaceholder.piece.color != tile.piece.color) {
                    moves.push({ tile: tileplaceholder, type: "normal" });
                }
                if (!throughpieces) {
                    //normalno
                    break;
                } else {
                    //xray
                    if (tileplaceholder.piece.color == tile.piece.color && tileplaceholder.piece.type == Pieces.king) {
                            //skozikralja
                        } else {
                            break;
                        }
                }
            } else {
                moves.push({ tile: tileplaceholder, type: "normal" });
            }
        }
    }
    //dol
    for (let y = tile.y + 1; y < 9; y++) {
        tileplaceholder = getTileByPosXY(tiles, tile.x, y);
        if (tileplaceholder != undefined) {
            if (tileplaceholder.occupied) {
                if (tileplaceholder.piece.color != tile.piece.color) {
                    moves.push({ tile: tileplaceholder, type: "normal" });
                }
                if (!throughpieces) {
                    //normalno
                    break;
                } else {
                    //xray
                    if (tileplaceholder.piece.color == tile.piece.color && tileplaceholder.piece.type == Pieces.king) {
                            //skozikralja
                        } else {
                            break;
                        }
                }
            } else {
                moves.push({ tile: tileplaceholder, type: "normal" });
            }
        }
    }
    //desno
    for (let x = tile.x + 1; x < 9; x++) {
        tileplaceholder = getTileByPosXY(tiles, x, tile.y);
        if (tileplaceholder != undefined) {
            if (tileplaceholder.occupied) {
                if (tileplaceholder.piece.color != tile.piece.color) {
                    moves.push({ tile: tileplaceholder, type: "normal" });
                }
                if (!throughpieces) {
                    //normalno
                    break;
                } else {
                    //xray
                    if (tileplaceholder.piece.color == tile.piece.color && tileplaceholder.piece.type == Pieces.king) {
                            //skozikralja
                        } else {
                            break;
                        }
                }
            } else {
                moves.push({ tile: tileplaceholder, type: "normal" });
            }
        }
    }
    //levo
    for (let x = tile.x - 1; x > 0; x--) {
        tileplaceholder = getTileByPosXY(tiles, x, tile.y);
        if (tileplaceholder != undefined) {
            if (tileplaceholder.occupied) {
                if (tileplaceholder.piece.color != tile.piece.color) {
                    moves.push({ tile: tileplaceholder, type: "normal" });
                }
                if (!throughpieces) {
                    //normalno
                    break;
                } else {
                    //xray
                    if (tileplaceholder.piece.color == tile.piece.color && tileplaceholder.piece.type == Pieces.king) {
                            //skozikralja
                        } else {
                            break;
                        }
                }
            } else {
                moves.push({ tile: tileplaceholder, type: "normal" });
            }
        }
    }
    return moves;
}

////////////////////////////////////////////////////////////////////////////////////////////////

function queen(tile, tiles, throughpieces) {
    let moves = [];
    movestoadd = (bishop(tile, tiles, throughpieces));
    movestoadd.forEach(move => { moves.push(move) });
    movestoadd = (rook(tile, tiles, throughpieces));
    movestoadd.forEach(move => { moves.push(move) });
    return moves;
}