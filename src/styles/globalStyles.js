import { createGlobalStyle } from 'styled-components'
const GlobalStyles = createGlobalStyle`

 :root {
  --primary: #b0b2b3;
  --secondary: rgba(0, 0, 0, 0.6);
  --white: #fff;
  --header-bg: rgba(0, 0, 0, 0.6);
  --card-bg: #282a2d;
  --main-bg: #1b1d20;
  --bg-color: #090b28;
  --bg-linear: linear-gradient(#683ea340, rgba(0, 0, 0, 0));
}

ul,
li {
  list-style: none;
}

img {
  display: block;
  max-width: 100%;
}

body {
  background: var(--bg-color);
  font-size: 1rem;
  font-family: 'Noto Sans', sans-serif;
}

.container {
  max-width: 75vw;
  margin: 0 auto;
}

@media (max-width: 770px) {
  .container {
    max-width: 85vw;
  }
}

@media (max-width: 415px) {
  .container {
    max-width: 90vw;
  }
}
`
export default GlobalStyles