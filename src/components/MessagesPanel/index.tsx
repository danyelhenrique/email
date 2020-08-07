import React from "react";
import { useInboxMail } from "../../hooks/useInboxMail";
import { useTranslation } from "react-i18next";

import Tooltip from "../Tooltip";

import {
    MdDehaze,
    MdDrafts,
    MdArchive,
    MdUndo,
    MdDelete,
    MdLocalOffer,
    MdKeyboardArrowDown,
} from "react-icons/md";

import {
    MessagesPanelContainer,
    NewMessage,
    MarkAllAsRead,
    Undo,
    Button,
} from "./styles";

const MessagesPanel: React.FC = () => {
    const { deletAllSelected, total } = useInboxMail();
    const { t } = useTranslation();

    if (total) {
        return (
            <MessagesPanelContainer>
                <button type="button">
                    <MdDehaze />
                </button>

                <NewMessage type="button">
                    <Tooltip textColor="white" message={t("nova messagem")}>
                        <span>{t("nova messagem")} </span>
                    </Tooltip>
                </NewMessage>

                <MarkAllAsRead type="button" onClick={deletAllSelected}>
                    <MdDelete />
                    <Tooltip
                        textColor="white"
                        message={t("exluir todos os emails")}
                    >
                        <span>{t("exluir todos os emails")}</span>
                    </Tooltip>
                </MarkAllAsRead>

                <Button type="button" onClick={deletAllSelected}>
                    <MdArchive />
                    <Tooltip
                        textColor="white"
                        message={t("arquivar todos os emails Selecionados")}
                    >
                        <span>
                            {t("arquivar todos os emails Selecionados")}
                        </span>
                    </Tooltip>
                </Button>

                <Button type="button">
                    <MdLocalOffer />
                    <Tooltip textColor="white" message={t("categorizar")}>
                        <span>{t("categorizar")} </span>
                    </Tooltip>
                    <MdKeyboardArrowDown />
                </Button>
            </MessagesPanelContainer>
        );
    }

    return (
        <MessagesPanelContainer>
            <button type="button">
                <MdDehaze />
            </button>

            <NewMessage type="button">
                <Tooltip textColor="white" message={t("nova messagem")}>
                    <span>{t("nova messagem")} </span>
                </Tooltip>
            </NewMessage>

            <MarkAllAsRead type="button">
                <MdDrafts />
                <Tooltip
                    textColor="white"
                    message={t("marcar todos como lidos")}
                >
                    <span> {t("marcar todos como lidos")} </span>
                </Tooltip>
            </MarkAllAsRead>

            <Undo type="button">
                <MdUndo />
                <Tooltip textColor="white" message={t("desfazer")}>
                    <span> {t("desfazer")} </span>
                </Tooltip>
            </Undo>
        </MessagesPanelContainer>
    );
};

export default MessagesPanel;
