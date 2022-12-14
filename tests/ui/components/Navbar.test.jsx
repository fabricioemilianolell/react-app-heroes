const { render, screen, fireEvent } = require("@testing-library/react");
const { MemoryRouter, useNavigate } = require("react-router-dom");
const { AuthContext } = require("../../../src/auth/context/AuthContext");
const { Navbar } = require("../../../src/ui/components/Navbar");

const mockedUseNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useNavigate: () => mockedUseNavigate,
}) )
 
describe('Pruebas en el componente de < Navbar />', () => {

    const contextValue = {
        logged: true,
        user: {
            name: "juan carlos"
        },
        logout: jest.fn()
    }

    beforeEach( () => jest.clearAllMocks() )

    test('Debe de mostrar el nombre de usuario logeado', () => {

        render(
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter>
                    <Navbar/>
                </MemoryRouter>
            </AuthContext.Provider>
        )

        expect(screen.getByText("juan carlos")).toBeTruthy()
        // screen.debug()

     });

     test('Debe llamar el logout y navigate cuando se hace click en el boton', () => {


        render(
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter>
                    <Navbar/>
                </MemoryRouter>
            </AuthContext.Provider>
        )

        const logoutBtn = screen.getByRole("button");
        fireEvent.click( logoutBtn )

        expect(contextValue.logout).toHaveBeenCalled();
        expect(mockedUseNavigate).toHaveBeenCalledWith("/login", {"replace": true})
        
     });

 });