import React from "react";
import mockIMG from "../../assets/images/friends-monica.jpg";
import MainRowItem from "./MainRowItem";

interface ISubMenu {
    id: number | string;
    name: string;
    subject: string;
    owner: string;
    isSelected: boolean;
    users: String[];
}

interface IProps {
    id: number | string;
    subMenuItems: ISubMenu[];
    key?: string | number;
}

const MainRow: React.FC<IProps> = ({ subMenuItems }) => {
    if (subMenuItems.length < 0) {
        return <div></div>;
    }

    return (
        <>
            {subMenuItems.map((mail) => (
                <MainRowItem mail={{ ...mail, cover: mockIMG }} />
            ))}
        </>
    );
};

export default MainRow;
