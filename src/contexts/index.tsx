import React, { ReactNode } from 'react';

// Import Styles
import { ThemeProvider } from 'styled-components';
import Theme from '../styles/Theme';

// Import Contexts
import { EmployeeConsumer } from './Employee';

type GlobalContextsProps = {
    children: ReactNode;
}

const GlobalContexts = ({ children }: GlobalContextsProps) => {
    return(
        <ThemeProvider theme={Theme}>
                <EmployeeConsumer>
                    { children }
                </EmployeeConsumer>
        </ThemeProvider>
    )
}

export default GlobalContexts;