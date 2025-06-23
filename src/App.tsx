import { Heading } from "./components/Heading";
import { Timer } from "lucide-react";

import "./styles/theme.css";
import "./styles/global.css";

function App() {
    return (
        <div>
            <Heading>
                Olá, mundo!
                <button>
                    <Timer size={20} />
                </button>
            </Heading>
        </div>
    );
}

export default App;
