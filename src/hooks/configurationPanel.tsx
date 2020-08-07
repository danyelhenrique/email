import { useContext } from "react";
import { ConfigurationPanelCtx } from "../context/configurationPanels";

function ConfigurationPanel() {
    const panelCTX = useContext(ConfigurationPanelCtx);
    return { ...panelCTX };
}

export { ConfigurationPanel };
