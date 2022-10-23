import Footer from "./components/footer/footer";
import Navbar from "./components/navbar/navbar";
import styled from "styled-components";

const NavStyled = styled.nav`
  position: sticky;
  top: 0;
  z-index: 100;
  border-bottom: 1px solid #ebeef2;
  box-shadow: 0 5px 10px rgb(0 0 0 / 5%);
  background-color: #fff;
  color: #26374c;
  font-size: 0.9rem;
  width: 100%;
`;
const MainLayout = ({ children }) => {
  return (
    <div>
      <NavStyled>
        <Navbar />
      </NavStyled>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default MainLayout;
