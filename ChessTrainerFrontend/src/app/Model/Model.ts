export class ChessMoveRequest
{
    ChessPice: ChessPiceType;
    StartPosition: string;
    DestinationPosition: string;
}

export class ChessMoveResponse
{
    availableMoves: string[];
    isAvailable: boolean;
    message: string;
}

export enum ChessPiceType {
    Knight,
    Rook
}