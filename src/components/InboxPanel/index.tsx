import React from "react";
import Tooltip from "../Tooltip";

import { Container, BtnCheck, BtnInbox, BtnFilter } from "./styles";
import { MdCheckCircle, MdInbox, MdFilterList } from "react-icons/md";

const InboxPanel: React.FC = () => {
    return (
        <Container>
            <div>
                <BtnCheck>
                    <Tooltip message="selecionar todos" textColor="white">
                        <MdCheckCircle />
                    </Tooltip>
                </BtnCheck>

                <BtnInbox>
                    <MdInbox />
                    <Tooltip message="caixa de entrada" textColor="white">
                        <span>Caixa de Entrada</span>
                    </Tooltip>
                </BtnInbox>
            </div>
            <BtnFilter>
                <Tooltip message="filtrar" textColor="white">
                    <span>Filtrar</span>
                </Tooltip>
                <MdFilterList />
            </BtnFilter>
        </Container>
    );
};

export default InboxPanel;
