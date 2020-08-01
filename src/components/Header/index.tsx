import React from "react";
import Tooltip from "../Tooltip";

import cover from "../../assets/images/friends-monica.jpg";
import hederCover from "../../assets/images/pink-header3.jpg";

import { MdSearch, MdApps, MdToday, MdSettings } from "react-icons/md";

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
                        <input placeholder="Pesquisar" />
                    </Tooltip>
                </Form>
            </ItemsContainer>

            <UserConfiguration>
                <Button>
                    <Tooltip message="today">
                        <MdToday />
                    </Tooltip>
                </Button>
                <Button>
                    <Tooltip message="settings">
                        <MdSettings />
                    </Tooltip>
                </Button>

                <UserCover>
                    <img src={cover} alt="user cover" />
                </UserCover>
            </UserConfiguration>
        </HeaderContainer>
    );
};

export default Header;
