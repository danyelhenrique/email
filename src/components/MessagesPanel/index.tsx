import React from "react";
import Tooltip from "../Tooltip";

import { MdDehaze, MdDrafts, MdUndo } from "react-icons/md";

import {
    MessagesPanelContainer,
    NewMessage,
    MarkAllAsRead,
    Undo,
} from "./styles";

const MessagesPanel: React.FC = () => {
    return (
        <MessagesPanelContainer>
            <button type="button">
                <MdDehaze />
            </button>

            <NewMessage type="button">
                <Tooltip textColor="white" message="nova mensagem">
                    <span> Nova mensagem </span>
                </Tooltip>
            </NewMessage>

            <MarkAllAsRead type="button">
                <MdDrafts />
                <Tooltip textColor="white" message="marcar todos como lidos">
                    <span> Marcar todos como lidos </span>
                </Tooltip>
            </MarkAllAsRead>

            <Undo type="button">
                <MdUndo />
                <Tooltip textColor="white" message="desfazer">
                    <span> Desfazer </span>
                </Tooltip>
            </Undo>
        </MessagesPanelContainer>
    );
};

export default MessagesPanel;
