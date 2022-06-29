import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { AuthContext } from '../../src/auth';
import { AppRouter } from '../../src/router/AppRouter';

describe('tests on <AppRouter />', () => {
    test('should show login if not authenticated', () => {

        const contextValue = {
            logged: false,
        }

        render(
            <MemoryRouter initialEntries={['/marvel']}>
                <AuthContext.Provider value={contextValue}>
                    <AppRouter />
                </AuthContext.Provider>
            </MemoryRouter>
        )
        expect(screen.getAllByText('Login')).toBeTruthy()
    })

    test('should show Marvel page if authenticated', () => {

        const contextValue = {
            logged: true,
            user: {
                name: 'Nolero',
                id: '1234'
            }
        }

        render(
            <MemoryRouter initialEntries={['/marvel']}>
                <AuthContext.Provider value={contextValue}>
                    <AppRouter />
                </AuthContext.Provider>
            </MemoryRouter>
        )
        expect(screen.getByText('Nolero')).toBeTruthy();
    })
})