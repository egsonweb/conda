import { injectGlobal } from 'styled-components'

injectGlobal`
	html {
	    font-family: sans-serif;
	    line-height: 1.2;
	}

	body {
	    margin: 0
	}

	header,nav {
	    display: block
	}

	h1 {
	    font-size: 2em;
	    margin: .67em 0
	}

	a {
    background-color: transparent;
	}

	a:active,a:hover {
	    outline-width: 0
	}
`;
