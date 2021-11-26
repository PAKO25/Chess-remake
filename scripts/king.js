function king(tile, tiles) {

    let tileplaceholder;
    let moves = [];
    let enemyking;

    tiles.forEach((othertile) => {
        if (othertile.occupied) {
            if (othertile.piece.type == Pieces.king && othertile.piece.color != tile.piece.color) {
                enemyking = othertile;
            }
        }
    })

    //gor
    tileplaceholder = getTileByPosXY(tiles, tile.x, tile.y - 1);
    if (tileplaceholder != undefined) {
        if (distanceBetween(enemyking.x, enemyking.y, tileplaceholder.x, tileplaceholder.y) > 1) {
            if (tileplaceholder.occupied) {
                if (tileplaceholder.piece.color != tile.piece.color) {
                    if (!isCheck(tileplaceholder, tiles, tile.piece.color)) {
                        moves.push({ tile: tileplaceholder, type: "normal" });
                    }
                }
            } else {
                if (!isCheck(tileplaceholder, tiles, tile.piece.color)) {
                    moves.push({ tile: tileplaceholder, type: "normal" });
                }
            }
        }
    }
    //diagonalno desno gor
    tileplaceholder = getTileByPosXY(tiles, tile.x + 1, tile.y - 1);
    if (tileplaceholder != undefined) {
        if (distanceBetween(enemyking.x, enemyking.y, tileplaceholder.x, tileplaceholder.y) > 1) {
            if (tileplaceholder.occupied) {
                if (tileplaceholder.piece.color != tile.piece.color) {
                    if (!isCheck(tileplaceholder, tiles, tile.piece.color)) {
                        moves.push({ tile: tileplaceholder, type: "normal" });
                    }
                }
            } else {
                if (!isCheck(tileplaceholder, tiles, tile.piece.color)) {
                    moves.push({ tile: tileplaceholder, type: "normal" });
                }
            }
        }
    }
    //desno
    tileplaceholder = getTileByPosXY(tiles, tile.x + 1, tile.y);
    if (tileplaceholder != undefined) {
        if (distanceBetween(enemyking.x, enemyking.y, tileplaceholder.x, tileplaceholder.y) > 1) {
            if (tileplaceholder.occupied) {
                if (tileplaceholder.piece.color != tile.piece.color) {
                    if (!isCheck(tileplaceholder, tiles, tile.piece.color)) {
                        moves.push({ tile: tileplaceholder, type: "normal" });
                    }
                }
            } else {
                if (!isCheck(tileplaceholder, tiles, tile.piece.color)) {
                    moves.push({ tile: tileplaceholder, type: "normal" });
                }
            }
        }
    }
    //diagonalno desno dol
    tileplaceholder = getTileByPosXY(tiles, tile.x + 1, tile.y + 1);
    if (tileplaceholder != undefined) {
        if (distanceBetween(enemyking.x, enemyking.y, tileplaceholder.x, tileplaceholder.y) > 1) {
            if (tileplaceholder.occupied) {
                if (tileplaceholder.piece.color != tile.piece.color) {
                    if (!isCheck(tileplaceholder, tiles, tile.piece.color)) {
                        moves.push({ tile: tileplaceholder, type: "normal" });
                    }
                }
            } else {
                if (!isCheck(tileplaceholder, tiles, tile.piece.color)) {
                    moves.push({ tile: tileplaceholder, type: "normal" });
                }
            }
        }
    }
    //dol 
    tileplaceholder = getTileByPosXY(tiles, tile.x, tile.y + 1);
    if (tileplaceholder != undefined) {
        if (distanceBetween(enemyking.x, enemyking.y, tileplaceholder.x, tileplaceholder.y) > 1) {
            if (tileplaceholder.occupied) {
                if (tileplaceholder.piece.color != tile.piece.color) {
                    if (!isCheck(tileplaceholder, tiles, tile.piece.color)) {
                        moves.push({ tile: tileplaceholder, type: "normal" });
                    }
                }
            } else {
                if (!isCheck(tileplaceholder, tiles, tile.piece.color)) {
                    moves.push({ tile: tileplaceholder, type: "normal" });
                }
            }
        }
    }
    //diagonalno levo dol 
    tileplaceholder = getTileByPosXY(tiles, tile.x - 1, tile.y + 1);
    if (tileplaceholder != undefined) {
        if (distanceBetween(enemyking.x, enemyking.y, tileplaceholder.x, tileplaceholder.y) > 1) {
            if (tileplaceholder.occupied) {
                if (tileplaceholder.piece.color != tile.piece.color) {
                    if (!isCheck(tileplaceholder, tiles, tile.piece.color)) {
                        moves.push({ tile: tileplaceholder, type: "normal" });
                    }
                }
            } else {
                if (!isCheck(tileplaceholder, tiles, tile.piece.color)) {
                    moves.push({ tile: tileplaceholder, type: "normal" });
                }
            }
        }
    }
    //levo
    tileplaceholder = getTileByPosXY(tiles, tile.x - 1, tile.y);
    if (tileplaceholder != undefined) {
        if (distanceBetween(enemyking.x, enemyking.y, tileplaceholder.x, tileplaceholder.y) > 1) {
            if (tileplaceholder.occupied) {
                if (tileplaceholder.piece.color != tile.piece.color) {
                    if (!isCheck(tileplaceholder, tiles, tile.piece.color)) {
                        moves.push({ tile: tileplaceholder, type: "normal" });
                    }
                }
            } else {
                if (!isCheck(tileplaceholder, tiles, tile.piece.color)) {
                    moves.push({ tile: tileplaceholder, type: "normal" });
                }
            }
        }
    }
    //diagonalno levo gor 
    tileplaceholder = getTileByPosXY(tiles, tile.x - 1, tile.y - 1);
    if (tileplaceholder != undefined) {
        if (distanceBetween(enemyking.x, enemyking.y, tileplaceholder.x, tileplaceholder.y) > 1) {
            if (tileplaceholder.occupied) {
                if (tileplaceholder.piece.color != tile.piece.color) {
                    if (!isCheck(tileplaceholder, tiles, tile.piece.color)) {
                        moves.push({ tile: tileplaceholder, type: "normal" });
                    }
                }
            } else {
                if (!isCheck(tileplaceholder, tiles, tile.piece.color)) {
                    moves.push({ tile: tileplaceholder, type: "normal" });
                }
            }
        }
    }

    //rokada
    if (tile.piece.color == Pieces.white) {
        //beli kralj

        //kratka rokada

        if (!tile.piece.moved) {
            tileplaceholder = getTileByPosXY(tiles, 8, 8);
            if (tileplaceholder != undefined) {
                if (tileplaceholder.occupied) {
                    if (!tileplaceholder.piece.moved) {
                        if (!isCheck(tileplaceholder, tiles, tile.piece.color)) {
                            let figura1 = getTileByPosXY(tiles, 7, 8);
                            let figura2 = getTileByPosXY(tiles, 6, 8);
                            if (figura1 != undefined && figura2 != undefined) {
                                if (!figura1.occupied && !figura2.occupied) {
                                    if (!isCheck(figura1, tiles, tile.piece.color) && !isCheck(figura2, tiles, tile.piece.color)) {
                                        moves.push({ tile: figura1, type: "rokada", trdnjava: tileplaceholder, poljezatrdnjavo: figura2 });
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }

        //dolga rokada

        if (!tile.piece.moved) {
            tileplaceholder = getTileByPosXY(tiles, 1, 8);
            if (tileplaceholder != undefined) {
                if (tileplaceholder.occupied) {
                    if (!tileplaceholder.piece.moved) {
                        if (!isCheck(tileplaceholder, tiles, tile.piece.color)) {
                            let figura1 = getTileByPosXY(tiles, 2, 8);
                            let figura2 = getTileByPosXY(tiles, 3, 8);
                            let figura3 = getTileByPosXY(tiles, 4, 8);
                            if (figura1 != undefined && figura2 != undefined && figura3 != undefined) {
                                if (!figura1.occupied && !figura2.occupied && !figura3.occupied) {
                                    if (!isCheck(figura1, tiles, tile.piece.color) && !isCheck(figura2, tiles, tile.piece.color) && !isCheck(figura3, tiles, tile.piece.color)) {
                                        moves.push({ tile: figura2, type: "rokada", trdnjava: tileplaceholder, poljezatrdnjavo: figura3 });
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }

    } else {
        //črni kralj

        //kratka rokada

        if (!tile.piece.moved) {
            tileplaceholder = getTileByPosXY(tiles, 8, 1);
            if (tileplaceholder != undefined) {
                if (tileplaceholder.occupied) {
                    if (!tileplaceholder.piece.moved) {
                        if (!isCheck(tileplaceholder, tiles, tile.piece.color)) {
                            let figura1 = getTileByPosXY(tiles, 7, 1);
                            let figura2 = getTileByPosXY(tiles, 6, 1);
                            if (figura1 != undefined && figura2 != undefined) {
                                if (!figura1.occupied && !figura2.occupied) {
                                    if (!isCheck(figura1, tiles, tile.piece.color) && !isCheck(figura2, tiles, tile.piece.color)) {
                                        moves.push({ tile: figura1, type: "rokada", trdnjava: tileplaceholder, poljezatrdnjavo: figura2 });
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }

        //dolga rokada

        if (!tile.piece.moved) {
            tileplaceholder = getTileByPosXY(tiles, 1, 1);
            if (tileplaceholder != undefined) {
                if (tileplaceholder.occupied) {
                    if (!tileplaceholder.piece.moved) {
                        if (!isCheck(tileplaceholder, tiles, tile.piece.color)) {
                            let figura1 = getTileByPosXY(tiles, 2, 1);
                            let figura2 = getTileByPosXY(tiles, 3, 1);
                            let figura3 = getTileByPosXY(tiles, 4, 1);
                            if (figura1 != undefined && figura2 != undefined && figura3 != undefined) {
                                if (!figura1.occupied && !figura2.occupied && !figura3.occupied) {
                                    if (!isCheck(figura1, tiles, tile.piece.color) && !isCheck(figura2, tiles, tile.piece.color) && !isCheck(figura3, tiles, tile.piece.color)) {
                                        moves.push({ tile: figura2, type: "rokada", trdnjava: tileplaceholder, poljezatrdnjavo: figura3 });
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    return moves;
}