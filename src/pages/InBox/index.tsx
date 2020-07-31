import React from "react";

import { Content } from "./styles";

const m = Array(40).fill("ola");
const InBox: React.FC = () => {
    return (
        <Content>
            <div>
                {m.map((e) => (
                    <>
                        <h1 style={{ color: "#fff" }}> ola</h1>
                    </>
                ))}
            </div>
        </Content>
    );
};

export default InBox;
