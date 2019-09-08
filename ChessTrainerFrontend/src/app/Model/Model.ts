export class ChessMoveRequest
{
    ChessPice: string;
    StartPosition: string;
    DestinationPosition: string;
}

export class ChessMoveResponse
{
    availableMoves: string[];
    isAvailable: boolean;
    message: string;
}

export class Field
{
    hasChessman: boolean;
    isBlack: boolean;

    constructor(isBlack){
        this.isBlack = isBlack;
    }
}