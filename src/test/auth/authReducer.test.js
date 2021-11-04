import { authReducer } from "../../auth/authReducer";
import { types } from "../../types/types"

describe('Pruebas en el authReducer', () =>{

    test('Estado inicial: Debe devolver el estado por defecto', ()=>{
        const state = authReducer({logged:false}, {});
        expect(state).toEqual({logged: false});
    })

    test('Login:Debe de autenticar y devolver el nombre del usuario', ()=>{

        const action = {
            type: types.login, 
            payload: {
                name: 'David'
            }
        }
        const state = authReducer({logged:false}, action);
        expect(state).toEqual({logged: true, name:'David'});
    })

    test('Logout: Debe borrar el nombre de usuario y colocar el logged en false', ()=>{
        const action = {
            type: types.logout
        }

        const state = authReducer({logged: true, name: 'David'}, action);
        expect(state).toEqual({logged:false});
    })

})