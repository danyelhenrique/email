import React, { useState, useMemo } from "react";
import { useIsAuthenticated } from "../../hooks/userIsAuthenticated";

import { Link } from "react-router-dom";

import { Button, LinkItem, SelectBtn, Email } from "./styles";

import Form from "../../components/Form";
import Input from "../../components/Input";

import {
    MdCheckCircle,
    MdRadioButtonUnchecked,
    MdKeyboardBackspace,
} from "react-icons/md";

const Signin: React.FC = () => {
    const [enterEmail, setEnterEmail] = useState(false);
    const [setKeepSigned, setSetKeepSigned] = useState(false);
    const [email, setEmail] = useState("");

    const { signin } = useIsAuthenticated();

    const Icon = useMemo(
        () => (setKeepSigned ? MdCheckCircle : MdRadioButtonUnchecked),
        [setKeepSigned]
    );

    function handleSubmit(data: any) {
        // console.log(data);
        if (email !== "admin@admin.com") {
            return;
        }

        if (data.password !== "password") {
            return;
        }

        signin();
    }

    return (
        <Form onSubmit={handleSubmit}>
            <h4>Sign In</h4>
            {!enterEmail ? (
                <>
                    <Input
                        name="email"
                        placeholder="You Email"
                        type="email"
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <LinkItem>
                        <p> No account? </p>{" "}
                        <Link to="/register">Create one! </Link>
                    </LinkItem>
                    <LinkItem>
                        <Link to="/signin"> Sign in with a security key </Link>
                    </LinkItem>
                    <LinkItem>
                        <Link to="/signin">Sign-in options </Link>
                    </LinkItem>
                    <Button
                        type="button"
                        onClick={(e) => {
                            e.preventDefault();
                            setEnterEmail(true);
                        }}
                    >
                        Next
                    </Button>
                </>
            ) : (
                <>
                    <Email>
                        <button
                            onClick={(e) => {
                                e.preventDefault();
                                setEnterEmail(false);
                            }}
                        >
                            <MdKeyboardBackspace />
                        </button>

                        <span>{email}</span>
                    </Email>
                    <Input
                        name="password"
                        placeholder="You Password"
                        type="password"
                        required
                    />
                    <LinkItem>
                        <SelectBtn
                            type="button"
                            onClick={() => setSetKeepSigned(!setKeepSigned)}
                        >
                            <Icon />
                            Keep me signed in
                        </SelectBtn>
                    </LinkItem>

                    <LinkItem>
                        <Link to="/signin">Forgot password? </Link>
                    </LinkItem>
                    <LinkItem>
                        <Link to="/signin"> Sign in with a security key </Link>
                    </LinkItem>

                    <Button type="submit">Sign In</Button>
                </>
            )}
        </Form>
    );
};

export default Signin;
