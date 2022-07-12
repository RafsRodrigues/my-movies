import { HeaderContainer } from "../styles/HeaderContainer";
import { Link } from "react-router-dom";

export const Header = () => (
    <HeaderContainer>
        <h1><Link className="titleHeader" to="/">Meus Filmes</Link></h1>
    </HeaderContainer>
);