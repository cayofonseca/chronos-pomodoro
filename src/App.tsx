import { Heading } from "./components/Heading";
import { Timer } from "lucide-react";
import { Container } from "./components/Container";

import "./styles/theme.css";
import "./styles/global.css";

function App() {
    return (
        <>
            <Container>
                <Heading> LOGO</Heading>
            </Container>

            <Container>
                <Heading> MENU</Heading>
            </Container>
        </>
    );
}

export default App;
