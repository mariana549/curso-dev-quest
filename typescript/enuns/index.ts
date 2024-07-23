// enum Colors { Red, Blue, Green }

// function showColor(color) {
//    console.log(color)
// }

// showColor(Colors.Blue)

// /*
//    0
//    1
//    2
//    Red
//    Blue
//    Green
// */
// for (const key in Colors) {
//    console.log(key)
// }


// enum UserResponse {
//    no, yes
// }

// function respondedEmail(recipient: string, userResponse: UserResponse): void {
//    // salvar no banco se o usuario respindeu ou não
// }

// respondedEmail("caroline", UserResponse.yes)

// enum TradeType {
//    ACAO = 9878,
//    TESOURO-DIRETO = 9988
// }


// COMO PEGAR DADOS DO ENUM

enum statusCodes {
   OK = 200,
   BadRequest = 400,
}

const ok = statusCodes.OK; // 200
const indexOk = statusCodes['OK']; //200
const stringBadResquest = statusCodes[400]; // BadRequest