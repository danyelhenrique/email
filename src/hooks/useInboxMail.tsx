import { useContext, useMemo } from "react";
import { InboxContext } from "../context/inboxMail";

function useInboxMail() {
    const emailDataAndMethods = useContext(InboxContext);
    const mails = useMemo(() => emailDataAndMethods, [emailDataAndMethods]);
    return { ...mails };
}

export { useInboxMail };
