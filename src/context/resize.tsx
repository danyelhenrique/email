import React, { createContext, useState } from "react";

type InitialStateType = {
    width: number;
};

const intialState = {
    width: 214,
};

const ResizeContext = createContext<{
    state: InitialStateType;
    dispatch: React.Dispatch<any>;
}>({
    state: intialState,
    dispatch: () => null,
});

const ResizeProvider: React.FC = ({ children }) => {
    const [state, dispatch] = useState(intialState);

    return (
        <ResizeContext.Provider value={{ state, dispatch }}>
            {children}
        </ResizeContext.Provider>
    );
};

export { ResizeContext, ResizeProvider };
