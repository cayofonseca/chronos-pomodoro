import { Heading } from "./components/Heading";
import { Container } from "./components/Container";
import { Logo } from "./components/Logo";

import "./styles/theme.css";
import "./styles/global.css";

function App() {
    return (
        <>
            <Container>
                <Logo />
            </Container>
        </>
    );
}

export default App;
