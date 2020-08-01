import React from "react";

import { Content } from "./styles";
import MailRow from "../../components/MailRow";

const m = Array(40).fill("ola");
const InBox: React.FC = () => {
    return (
        <Content>
            <div className="scroll">
                {m.map((e) => (
                    <MailRow />
                ))}
            </div>
        </Content>
    );
};

export default InBox;
