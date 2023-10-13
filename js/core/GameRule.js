class GameRule {

    static ROCK = 0;
    static PAPER = 1;
    static SCISSOR = 2;
    static LIZARD = 3;
    static SPOCK = 4;

    static getWinner(p1, p2) {
        if (p1 == p2) {
            // "It is a draw"
            return p1;
        } 
        
        switch (p1) {
            case GameRule.ROCK:
                return (p2 == GameRule.SCISSOR || p2 == GameRule.LIZARD) ? p1 : p2;
            case GameRule.PAPER:
                return (p2 == GameRule.ROCK || p2 == GameRule.SPOCK) ? p1 : p2;
            case GameRule.SCISSOR:
                return (p2 == GameRule.PAPER || p2 == GameRule.LIZARD) ? p1 : p2;
            case GameRule.LIZARD:
                return (p2 == GameRule.SPOCK || p2 == GameRule.PAPER) ? p1 : p2;
            case GameRule.SPOCK:
                return (p2 == GameRule.SCISSOR || p2 == GameRule.ROCK) ? p1 : p2;
            default:
                throw new Error("Invalid choice");
        }
    }
}
