import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import { AuthContext } from "../../src/auth/context/AuthContext"
import { AppRouter } from "../../src/router/AppRouter"

describe('first', () => {

    test('Debe mostrar el login si no está autenticado', () => {
       
        const contextValue = {
            logged: false,
        }

        render(
                <MemoryRouter initialEntries={["/marvel"]}>
                    <AuthContext.Provider value={ contextValue }>
                        <AppRouter />
                    </AuthContext.Provider>
                </MemoryRouter>
        )

        expect(screen.getAllByText("login").length).toBe(2);
        // screen.debug()

     })

     test('Debe de mostrar el componente de Marvel si está autenticado', () => {

        const contextValue = {
            logged: true,
            user: {
                id: "ABC",
                name: "Juan Carlos"
            }
        }

        render(
                <MemoryRouter initialEntries={["/login"]}>
                    <AuthContext.Provider value={ contextValue }>
                        <AppRouter />
                    </AuthContext.Provider>
                </MemoryRouter>
        )

        expect(screen.getAllByText("Marvel").length).toBeGreaterThanOrEqual(1);
        // screen.debug()




      });

 });