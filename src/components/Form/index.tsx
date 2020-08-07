import React, { useRef } from "react";
import { Form } from "@unform/web";
import { FormProps } from "@unform/core";

interface IProps extends FormProps {}

const FormComponent: React.FC<IProps> = ({ children, ...props }) => {
    const formRef = useRef(null);

    return (
        <Form {...props} ref={formRef}>
            {children}
        </Form>
    );
};
export default FormComponent;
