import { fireEvent, render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import { SearchPage } from "../../../src/heroes/pages/SearchPage"

const mockedUseNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useNavigate: () => mockedUseNavigate,
}) )

describe('Pruebas en <SearchPage />', () => {

    beforeEach("Pruenas en <SearchPage/>")

    test('Debe de mostrarse correctamente con valores por defecto', () => {

        const { container } = render(
            <MemoryRouter>
                <SearchPage />
            </MemoryRouter>
        )
        expect(container).toMatchSnapshot();
        // screen.debug()

     });

     test('Debe de mostrar a Batman y el input con el valor del queryString', () => {

        render(
            <MemoryRouter initialEntries={["/search?q=batman"]}>
                <SearchPage />
            </MemoryRouter>
        )
        
        const input = screen.getByRole("textbox")
        expect(input.value).toBe("batman")
        // screen.debug()
        const img = screen.getByRole("img");
        expect( img.src ).toContain("/assets/heroes/dc-batman.jpg")
         
        // screen.debug()
     });

     test('Debe mostrar un error si no se encuentra el heroe (batman123)', () => {

        render(
            <MemoryRouter initialEntries={["/search?q=batman123"]}>
                <SearchPage />
            </MemoryRouter>
        );
        
        const alert = screen.getByLabelText("alert-danger");
        expect(alert.style.display).toBe("none");

      });

      test('Debe de llamar al navigate a la pantalla nueva', () => {

        const inputValue = "superman"
        
        render(
            <MemoryRouter initialEntries={["/search"]}>
                <SearchPage />
            </MemoryRouter>
        );

        const input = screen.getByRole("textbox");
        fireEvent.change( input, { target: {name: "searchText", value: inputValue }})

        const form = screen.getByRole("form");
        fireEvent( form )

        expect(mockedUseNavigate).toHaveBeenCalledWith(`?q=${inputValue}`);
      
    });

 });