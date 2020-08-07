import React, { useMemo } from "react";
import { useInboxMail } from "../../../hooks/useInboxMail";

import {
    MdCheckCircle,
    MdRadioButtonUnchecked,
    MdDelete,
} from "react-icons/md";

import {
    Container,
    CoverAndName,
    HoverButtons,
    SelectBtn,
    Details,
    Description,
    Subject,
    MailDate,
    Hover,
    Button,
} from "./styles";

interface IProps {
    mail: {
        id: number | string;
        subject: string;
        cover: string;
        name: string;
        isSelected: boolean;
    };
}

const MainRow: React.FC<IProps> = ({ mail }) => {
    const { setMailsSelected, deletEmail } = useInboxMail();

    const Icon = useMemo(
        () => (mail.isSelected ? MdCheckCircle : MdRadioButtonUnchecked),
        [mail.isSelected]
    );

    return (
        <Container isSelected={mail.isSelected}>
            <CoverAndName key={mail.id}>
                <img src={mail.cover} alt="user cover" />
                <SelectBtn onClick={() => setMailsSelected(mail.id)}>
                    <Icon />
                </SelectBtn>
                <span>{mail.name}</span>
            </CoverAndName>
            <HoverButtons>
                <div>
                    <Button onClick={() => deletEmail(mail.id)}>
                        <MdDelete />
                    </Button>
                </div>
            </HoverButtons>

            <Details>
                <Description>{mail.subject}</Description>
                <Subject>Microsoft Teams</Subject>
            </Details>
            <MailDate>Dom,12/07</MailDate>
            <Hover />
        </Container>
    );
};

export default MainRow;
