import React from 'react';
import { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import Theme from '../styles/Theme';
import { EmployeeConsumer } from './Employee';

type GlobalContextsProps = {
    children: ReactNode;
}

const GlobalContexts = ({ children }: GlobalContextsProps) => {
    return(
        <ThemeProvider theme={Theme}>
                <EmployeeConsumer>
                    {children}
                </EmployeeConsumer>
        </ThemeProvider>
    )
}

export default GlobalContexts;