import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
@font-face {
font-family: OpenSans, sans-serif!important;
src: url('../asset/OpenSans/OpenSans-Light.ttf') !important;
src: url('../asset/OpenSans/OpenSans-Medium.ttf') !important;
font-weight: 400 !important;
font-style: normal !important;
}

html,
body {
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
}

a {
  color: inherit;
  text-decoration: none;
  &:hover{
    color: #fff;
  }
}

* {
  box-sizing: border-box;
}

h1, h2, h3, h4, h5, h6 {
    margin: 0;
    padding: 0;
}
ul{
  list-style: none;
  padding: 0;
  margin: 0;
}
@media (min-width: 1200px){
    .container, .container-lg, .container-md, .container-sm, .container-xl {
        max-width: 1140px !important;
    }
}
html,body{

  // XX-Large devices (larger desktops, 1400px and up)
  @media only screen and (max-width: 1400px) {
    font-size: 100%;
  }      
  // X-Large devices (large desktops, 1200px and up)
    @media only screen and (max-width: 1200px) {
    font-size: 95%;
  }
  // Large devices (desktops, 992px and up)
    @media only screen and (max-width: 992px) {
    font-size: 85%;
  }
  // Medium devices (tablets, 768px and up)
  @media only screen and (max-width: 768px) {
    font-size: 80%;
  }
  // Small devices (landscape phones, 576px and up)s
    @media only screen and (max-width: 567px) {
    font-size: 75%;
  }
  // XSmall devices (landscape phones, 320px and up)
  @media only screen and (max-width: 320px) {
      font-size: 70%;
  }

}


`;

export default GlobalStyles;
