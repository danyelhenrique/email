import React from "react";
import { useInboxMail } from "../../hooks/useInboxMail";

import Tooltip from "../Tooltip";

import {
    Container,
    BtnCheck,
    BtnInbox,
    BtnFilter,
    SelectMessages,
} from "./styles";
import { MdCheckCircle, MdInbox, MdFilterList } from "react-icons/md";

const InboxPanel: React.FC = () => {
    const { total, selectAllEmail } = useInboxMail();

    if (total) {
        return (
            <Container>
                <div>
                    <BtnCheck onClick={selectAllEmail}>
                        <Tooltip message="selecionar todos" textColor="white">
                            <MdCheckCircle />
                        </Tooltip>
                    </BtnCheck>

                    <SelectMessages>
                        <Tooltip message="limpar seleção" textColor="white">
                            <span>{total} emails selecionados</span>
                        </Tooltip>
                    </SelectMessages>
                    <BtnInbox onClick={selectAllEmail}>
                        <Tooltip message="limpar seleção" textColor="white">
                            <span>Limpar Seleção</span>
                        </Tooltip>
                    </BtnInbox>
                </div>
            </Container>
        );
    }

    return (
        <Container>
            <div>
                <BtnCheck onClick={selectAllEmail}>
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
