import React from "react";
import { useInboxMail } from "../../hooks/useInboxMail";

import { Content } from "./styles";
import MailRow from "../../components/MailRow";

const InBox: React.FC = () => {
    const { emails } = useInboxMail();

    return (
        <Content>
            <div className="scroll">
                {emails.map((mail) => (
                    <div key={mail.id}>
                        <MailRow {...mail} />
                    </div>
                ))}
            </div>
        </Content>
    );
};

export default InBox;
