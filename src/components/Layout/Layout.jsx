import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { StyledLink, Container, Header, List } from "./Layout.styled";
import Loader from "../Loader/Loader";

const Layout = () => {
  return (
    <Container>
      <Header>
        <nav>
          <List>
            <li>
              <StyledLink to="/" end>
                Home
              </StyledLink>
            </li>
            <li>
              <StyledLink to="/tweets"> Tweets </StyledLink>
            </li>
          </List>
        </nav>
      </Header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default Layout;
