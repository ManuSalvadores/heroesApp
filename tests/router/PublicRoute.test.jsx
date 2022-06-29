import { render, screen } from "@testing-library/react"
import { MemoryRouter, Routes, Route } from "react-router-dom"
import { AuthContext } from "../../src/auth"
import { PublicRoute } from "../../src/router/Publicroute"



describe('tests en <PublicRoute />', () => {
    test('should show children if not authenticated', () => {

        const contextValue = {
            logged: false
        }
        render(
            <AuthContext.Provider value={contextValue}>
                <PublicRoute>
                    <h1>Ruta publica</h1>
                </PublicRoute>
            </AuthContext.Provider>
        );
        expect(screen.getByText('Ruta publica')).toBeTruthy();
    })

    test('should show <Navigate /> if authenticated', () => {
        const contextValue = {
            logged: true,
            user: {
                name: 'Nolero',
                id: '1234'
            }
        }
        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/login']}>

                    <Routes>
                        <Route path='login' element={
                            <PublicRoute>
                                <h1>Ruta publica</h1>
                            </PublicRoute>} />
                        <Route path='marvel' element={<h1>Marvel</h1>} />
                    </Routes>

                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect(screen.getByText('Marvel')).toBeTruthy();
    })
}) 