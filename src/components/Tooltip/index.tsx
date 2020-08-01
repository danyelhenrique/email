import React from "react";
import ReactTooltip, { TooltipProps } from "react-tooltip";

interface IProps extends TooltipProps {
    message: string;
}
const Tooltip: React.FC<IProps> = ({ children, message, ...rest }) => {
    return (
        <>
            <ReactTooltip {...rest} />
            <p data-tip={message}>{children}</p>
        </>
    );
};

export default Tooltip;
