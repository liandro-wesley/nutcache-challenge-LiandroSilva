import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
    }
    body, html, #root {
        width: 100%;
        height: 100%;
    }
    html {
        font-size: 62.5%;
    }
    body {
        background-color: #FFF;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 500;
    }

    button { 
        cursor: pointer;
    }

    .modal {
        &__overlay {
            background-color: #858C91;
        }
    }

    .tooltip {
        &__bottom {
            &--dark {
                font-family: 'Roboto', sans-serif;
                background-color: #333F48 !important;
                color: #FFFFFF !important;
                &.place-bottom {
                    &:after {
                        border-bottom-color: #333F48 !important;
                        border-bottom-style: solid !important;
                        border-bottom-width: 6px !important;
                    }
                }
            }
        }
        &__right {
            &--dark {
                font-family: 'Roboto', sans-serif;
                background-color: #333F48 !important;
                color: #FFFFFF !important;
                &.place-bottom {
                    &:after {
                        border-right-color: #333F48 !important;
                        border-right-style: solid !important;
                        border-right-width: 6px !important;
                    }
                }
            }
        }
    }
`;