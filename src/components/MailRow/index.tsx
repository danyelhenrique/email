import React from "react";
import image from "../../assets/images/friends-monica.jpg";

import {
    Container,
    CoverAndName,
    Details,
    Description,
    Subject,
    MailDate,
} from "./styles";

const MainRow: React.FC = () => {
    return (
        <Container>
            <CoverAndName>
                <img src={image} alt="" />
                <span>Microsoft Teams</span>
            </CoverAndName>
            <Details>
                <Description>
                    Bem-vindo ao Microsoft Teams para sua vida pessoal
                </Description>
                <Subject>Microsoft Teams</Subject>
            </Details>
            <MailDate>Dom,12/07</MailDate>
        </Container>
    );
};

export default MainRow;
