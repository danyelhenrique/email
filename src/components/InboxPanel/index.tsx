import React from "react";

import { Container } from "./styles";
import { MdCheckCircle, MdInbox, MdFilterList } from "react-icons/md";

const InboxPanel: React.FC = () => {
    return (
        <Container>
            <button>
                <MdCheckCircle />
            </button>

            <button>
                <MdInbox />
                Caixa de Entrada
            </button>
            <button>
                Filtrar
                <MdFilterList />
            </button>
        </Container>
    );
};

export default InboxPanel;
