import React from "react";

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

            <NewMessage type="button">Nova mensagem</NewMessage>

            <MarkAllAsRead type="button">
                <MdDrafts />
                Marcar todos como lidos
            </MarkAllAsRead>

            <Undo type="button">
                <MdUndo />
                Desfazer
            </Undo>
        </MessagesPanelContainer>
    );
};

export default MessagesPanel;
