import React, { useState, useMemo } from "react";

import { Container } from "./styles";
import {
    MdKeyboardArrowDown,
    MdKeyboardArrowRight,
    MdInbox,
} from "react-icons/md";

interface IContent {
    name: string;
    id: number;
}

interface IProps {
    content: IContent;
    hasMore?: boolean;
    handleClick?: ({ data }: { data: IContent }) => void;
}

const ListItem: React.FC<IProps> = ({
    content,
    handleClick,
    hasMore = true,
    children,
}) => {
    const [active, setActive] = useState(false);

    const { name } = content;

    function onClick() {
        setActive(!active);
        if (handleClick) handleClick({ data: content });
    }

    const Icon = useMemo(
        () => (active ? MdKeyboardArrowDown : MdKeyboardArrowRight),
        [active]
    );

    return (
        <Container isActive={active} onClick={onClick}>
            <button>
                {hasMore ? <Icon /> : <MdInbox />}
                <span>{name}</span>
            </button>
            {children}
        </Container>
    );
};

export default ListItem;
