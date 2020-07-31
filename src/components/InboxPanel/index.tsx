import React from "react";

import { Container, BtnCheck, BtnInbox, BtnFilter } from "./styles";
import { MdCheckCircle, MdInbox, MdFilterList } from "react-icons/md";

const InboxPanel: React.FC = () => {
    return (
        <Container>
            <div>
                <BtnCheck>
                    <MdCheckCircle />
                </BtnCheck>

                <BtnInbox>
                    <MdInbox />
                    <span>Caixa de Entrada</span>
                </BtnInbox>
            </div>
            <BtnFilter>
                <span>Filtrar</span>
                <MdFilterList />
            </BtnFilter>
        </Container>
    );
};

export default InboxPanel;
