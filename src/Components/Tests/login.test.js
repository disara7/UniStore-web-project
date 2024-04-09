import {render, screen, cleanup} from '@testing-library/react'
import { Login } from '../../Pages/home/login';

test ( 'should render login component' , () => {
    render(<Login/>);
    const loginElement = screen.getAllByTestId('login-1');
    expect(loginElement).toBeInTheDocument();
})