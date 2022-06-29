import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter, useNavigate } from "react-router-dom"
import { AuthContext } from "../../../src/auth";
import { Navbar } from "../../../src/ui";

const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUseNavigate
}))

describe('test in <Navbar />', () => {

    const contextValue = {
        logged: true,
        user: {
            name: 'Nolero',

        },
        onLogout: jest.fn()
    }

    beforeEach(() => jest.clearAllMocks());

    test('should show logged user', () => {
        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter>
                    <Navbar />
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect(screen.getByText('Nolero')).toBeTruthy();
    })

    test('should call logout and navigate when click at button', () => {
        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter>
                    <Navbar />
                </MemoryRouter>
            </AuthContext.Provider>
        );

        const logoutBtn = screen.getByRole('button');
        fireEvent.click(logoutBtn);
        expect(contextValue.onLogout).toHaveBeenCalled();
        expect(mockedUseNavigate).toHaveBeenCalledWith("/login", { "replace": true });
    })
})