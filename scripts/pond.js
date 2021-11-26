function pond(tile, tiles, onlyaggressive) {
    let tileplaceholder;
    let moves = [];

    if (tile.piece.color == Pieces.white) {
        //beli kmet

        if (!onlyaggressive) {
            //1 naprej
            tileplaceholder = getTileByPosXY(tiles, tile.x, tile.y - 1);
            if (tileplaceholder != undefined) {
                if (!tileplaceholder.occupied) {
                    moves.push({ tile: tileplaceholder, type: "normal" });
                }
            }
            //2 naprej
            if (tile.y == 7) {
                tileplaceholder = getTileByPosXY(tiles, tile.x, tile.y - 2);
                if (tileplaceholder != undefined && !getTileByPosXY(tiles, tile.x, tile.y - 1).occupied) {
                    if (!tileplaceholder.occupied) {
                        moves.push({ tile: tileplaceholder, type: "normal" });
                    }
                }
            }
        }
        //pojej desno
        tileplaceholder = getTileByPosXY(tiles, tile.x + 1, tile.y - 1);
        if (tileplaceholder != undefined) {
            if (tileplaceholder.occupied) {
                if (tileplaceholder.piece.color != Pieces.white) {
                    moves.push({ tile: tileplaceholder, type: "normal" });
                }
            }
        }
        //pojej levo
        tileplaceholder = getTileByPosXY(tiles, tile.x - 1, tile.y - 1);
        if (tileplaceholder != undefined) {
            if (tileplaceholder.occupied) {
                if (tileplaceholder.piece.color != Pieces.white) {
                    moves.push({ tile: tileplaceholder, type: "normal" });
                }
            }
        }
        if (!onlyaggressive) {
            //enpassant desno
            if (tile.y == 4) {
                tileplaceholder = getTileByPosXY(tiles, tile.x + 1, tile.y - 1);
                if (tileplaceholder != undefined) {
                    if (!tileplaceholder.occupied) {
                        let piecebyme = getTileByPosXY(tiles, tile.x + 1, tile.y);
                        if (piecebyme != undefined) {
                            if (piecebyme.occupied) {
                                if (piecebyme.piece.color != Pieces.white && board.lastmovedpiece.num == piecebyme.num) {
                                    moves.push({ tile: tileplaceholder, type: "enpassant", takentile: piecebyme });
                                }
                            }
                        }
                    }
                }
            }
            //enpassant levo
            if (tile.y == 4) {
                tileplaceholder = getTileByPosXY(tiles, tile.x - 1, tile.y - 1);
                if (tileplaceholder != undefined) {
                    if (!tileplaceholder.occupied) {
                        let piecebyme = getTileByPosXY(tiles, tile.x - 1, tile.y);
                        if (piecebyme != undefined) {
                            if (piecebyme.occupied) {
                                if (piecebyme.piece.color != Pieces.white && board.lastmovedpiece.num == piecebyme.num) {
                                    moves.push({ tile: tileplaceholder, type: "enpassant", takentile: piecebyme });
                                }
                            }
                        }
                    }
                }
            }
        }

    } else {

        //črni kmet
        if (!onlyaggressive) {
            //1 naprej
            tileplaceholder = getTileByPosXY(tiles, tile.x, tile.y + 1);
            if (tileplaceholder != undefined) {
                if (!tileplaceholder.occupied) {
                    moves.push({ tile: tileplaceholder, type: "normal" });
                }
            }
            //2 naprej
            if (tile.y == 2) {
                tileplaceholder = getTileByPosXY(tiles, tile.x, tile.y + 2);
                if (tileplaceholder != undefined && !getTileByPosXY(tiles, tile.x, tile.y + 1).occupied) {
                    if (!tileplaceholder.occupied) {
                        moves.push({ tile: tileplaceholder, type: "normal" });
                    }
                }
            }
        }
        //pojej desno
        tileplaceholder = getTileByPosXY(tiles, tile.x + 1, tile.y + 1);
        if (tileplaceholder != undefined) {
            if (tileplaceholder.occupied) {
                if (tileplaceholder.piece.color != Pieces.black) {
                    moves.push({ tile: tileplaceholder, type: "normal" });
                }
            }
        }
        //pojej levo
        tileplaceholder = getTileByPosXY(tiles, tile.x - 1, tile.y + 1);
        if (tileplaceholder != undefined) {
            if (tileplaceholder.occupied) {
                if (tileplaceholder.piece.color != Pieces.black) {
                    moves.push({ tile: tileplaceholder, type: "normal" });
                }
            }
        }
        if (!onlyaggressive) {
            //enpassant desno
            if (tile.y == 5) {
                tileplaceholder = getTileByPosXY(tiles, tile.x + 1, tile.y + 1);
                if (tileplaceholder != undefined) {
                    if (!tileplaceholder.occupied) {
                        let piecebyme = getTileByPosXY(tiles, tile.x + 1, tile.y);
                        if (piecebyme != undefined) {
                            if (piecebyme.occupied) {
                                if (piecebyme.piece.color != Pieces.black && board.lastmovedpiece.num == piecebyme.num) {
                                    moves.push({ tile: tileplaceholder, type: "enpassant", takentile: piecebyme });
                                }
                            }
                        }
                    }
                }
            }
            //enpassant levo
            if (tile.y == 5) {
                tileplaceholder = getTileByPosXY(tiles, tile.x - 1, tile.y + 1);
                if (tileplaceholder != undefined) {
                    if (!tileplaceholder.occupied) {
                        let piecebyme = getTileByPosXY(tiles, tile.x - 1, tile.y);
                        if (piecebyme != undefined) {
                            if (piecebyme.occupied) {
                                if (piecebyme.piece.color != Pieces.black && board.lastmovedpiece.num == piecebyme.num) {
                                    moves.push({ tile: tileplaceholder, type: "enpassant", takentile: piecebyme });
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    //promocija
    moves.forEach(move => {
        if(tile.piece.color == Pieces.white){
            if (move.tile.y == 1) {
                move.type = "promotion";
            }
        } else {
            if (move.tile.y == 8) {
                move.type = "promotion";
            }
        }
    })

    return moves;
}