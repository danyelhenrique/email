import React, { createContext, useState, useMemo, useEffect } from "react";
import api from "../services/api";

interface IContext {
    total: number | string;
    removeMail(id: number | string): void;
    deletAllSelected(): void;
    deletEmail(id: number | string): void;
    setMails(id: number | string): Promise<void>;
    setMailsSelected(id: number | string): void;
    selectAllEmail(): void;
    emails: IData[];
}

interface ISubmenu {
    id: number;
    name: string;
    subject: string;
    owner: string;
    isSelected: boolean;
    users: String[];
}

interface IData {
    id: number;
    subMenuItems: ISubmenu[];
}

export const InboxContext = createContext({} as IContext);

const Mail: React.FC = ({ children }) => {
    const [emails, setEmails] = useState<IData[]>([]);
    const [allEmailsSelected, setAllEmailsSelected] = useState(false);

    const totalSelected = useMemo(() => {
        if (emails.length <= 0) {
            return 0;
        }

        const subMenuEmails = emails[0].subMenuItems;

        const haveSelect = subMenuEmails.reduce((acc, current) => {
            return current.isSelected ? acc + 1 : acc + 0;
        }, 0);

        return haveSelect ? haveSelect : 0;
    }, [emails]);

    useEffect(() => {
        async function handleData() {
            const { data } = await api.get<IData>("items/11");

            const newSubmenu: ISubmenu[] = data.subMenuItems.map((d) => ({
                ...d,
                isSelected: false,
            }));

            data.subMenuItems = newSubmenu;

            setEmails([data]);
        }
        handleData();
    }, [setEmails]);

    function removeMail(id: number | string) {
        setEmails((oldValue) => oldValue.filter((mail) => mail.id !== id));
    }

    async function setMails(id: number | string) {
        const { data } = await api.get<IData>(`items/${id}`);

        const newSubmenu: ISubmenu[] = data.subMenuItems.map((d) => ({
            ...d,
            isSelected: false,
        }));

        data.subMenuItems = newSubmenu;
        console.log(data);
        setEmails([data]);
    }

    function deletAllSelected() {
        const newState = [...emails];
        const mail = newState[0];

        const allSubmenuSelected = mail.subMenuItems.filter(
            (sub) => !sub.isSelected
        );

        mail.subMenuItems = allSubmenuSelected;

        setEmails(newState);
    }

    function setMailsSelected(id: number | string) {
        const emailIndex = emails[0].subMenuItems.findIndex(
            (m) => String(m.id) === String(id)
        );

        if (emailIndex >= 0) {
            const newState = [...emails];
            const mail = newState[0].subMenuItems[emailIndex];

            mail.isSelected = !mail.isSelected;

            setEmails([...newState]);
        }
    }

    function selectAllEmail() {
        const newState = [...emails];
        const mail = newState[0];

        const allSubmenuSelected = mail.subMenuItems.map((ele) => ({
            ...ele,
            isSelected: !allEmailsSelected,
        }));

        mail.subMenuItems = allSubmenuSelected;

        setEmails(newState);
        setAllEmailsSelected(!allEmailsSelected);
    }

    function deletEmail(id: number | string) {
        console.log(id);
        const newState = [...emails];
        const mail = newState[0];

        const newSubmenu = mail.subMenuItems.filter(
            (sub) => String(sub.id) !== String(id)
        );

        mail.subMenuItems = newSubmenu;

        setEmails(newState);
    }

    return (
        <InboxContext.Provider
            value={{
                removeMail,
                total: totalSelected,
                deletAllSelected,
                deletEmail,
                emails,
                setMails,
                setMailsSelected,
                selectAllEmail,
            }}
        >
            {children}
        </InboxContext.Provider>
    );
};

export default Mail;
