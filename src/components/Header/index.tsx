import React from "react";
import Tooltip from "../Tooltip";
import { useTranslation } from "react-i18next";
import { useIsAuthenticated } from "../../hooks/userIsAuthenticated";

import { ConfigurationPanel } from "../../hooks/configurationPanel";

import hederCover from "../../assets/images/pink-header3.jpg";

import {
    MdSearch,
    MdApps,
    MdToday,
    MdSettings,
    MdPowerSettingsNew,
} from "react-icons/md";

import {
    HeaderContainer,
    ItemsContainer,
    Form,
    Inbox,
    UserConfiguration,
    Button,
    UserCover,
} from "./styles";

const Header: React.FC = () => {
    const { t } = useTranslation();
    const { toogleMenu } = ConfigurationPanel();
    const { signout } = useIsAuthenticated();

    return (
        <HeaderContainer src={hederCover}>
            <ItemsContainer>
                <Inbox>
                    <MdApps />
                    <Tooltip message="email">
                        <span>E-MAIL</span>
                    </Tooltip>
                </Inbox>

                <Form>
                    <MdSearch />
                    <Tooltip message="search">
                        <input placeholder={t("pesquisar")} />
                    </Tooltip>
                </Form>
            </ItemsContainer>

            <UserConfiguration>
                <Button onClick={signout}>
                    <Tooltip message="logout">
                        <MdPowerSettingsNew />
                    </Tooltip>
                </Button>
                <Button>
                    <Tooltip message="today">
                        <MdToday />
                    </Tooltip>
                </Button>
                <Button onClick={() => toogleMenu()}>
                    <Tooltip message={t("configurações")}>
                        <MdSettings />
                    </Tooltip>
                </Button>

                <UserCover>
                    <img
                        src="https://i.pinimg.com/originals/ba/c4/35/bac435688f1410bb2b93770d2e5642e1.jpg"
                        alt="user cover"
                    />
                </UserCover>
            </UserConfiguration>
        </HeaderContainer>
    );
};

export default Header;
