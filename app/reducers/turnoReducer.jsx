
import {JUGADORX, JUGADOR0} from '../constants/constants';

function turnoReducer(state = JUGADORX, action) {
    switch (action.type) {
    case 'JUGAR_POSICION':
        console.log("turnoreducer jugar posicion!!");
        return action.turno === JUGADORX ? JUGADOR0 : JUGADORX;
    case 'RESET':
        return JUGADORX;
    default:
        return state;
    }
}

export default turnoReducer;
