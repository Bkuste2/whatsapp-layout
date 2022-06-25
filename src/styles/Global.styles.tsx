import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        font-family:"Roboto",sans-serif;
    }

    html, body, #root {
        height: 100%;
    }

    *, button, input {
        border: 0;
        outline: 0;
    }

    :root{
        // UI CI CMI
        --primary: #202c33;
        
        --secondary: #111B21;
        --avatar:#D9D9D9;
        --notification-bg: #182229;
        --channel-data-bg: #0B141A;
        --white: #fff;
        --light-gray: #8696A0;
        --border-channel-list:#222D34;
        --CMI:#202c33;
    }
`;