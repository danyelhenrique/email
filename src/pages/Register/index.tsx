import React, { useState } from "react";
import { useIsAuthenticated } from "../../hooks/userIsAuthenticated";
import { Link } from "react-router-dom";

import { Button, LinkItem, Email } from "./styles";

import Form from "../../components/Form";
import Input from "../../components/Input";

import { MdKeyboardBackspace } from "react-icons/md";

const Signin: React.FC = () => {
    const [enterEmail, setEnterEmail] = useState(false);
    const [email, setEmail] = useState("");
    const { register } = useIsAuthenticated();

    return (
        <Form onSubmit={register}>
            <h4>Register</h4>
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
                        <p> Have account? </p> <Link to="/signin">Signin</Link>
                    </LinkItem>
                    <LinkItem>
                        <Link to="/signin">register with a security key </Link>
                    </LinkItem>
                    <LinkItem>
                        <Link to="/signin">register options </Link>
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

                    <Input
                        name="confirm-password"
                        placeholder="Confirm You password"
                        type="password"
                        required
                    />

                    <LinkItem>
                        <Link to="/register">
                            Register in with a security key
                        </Link>
                    </LinkItem>

                    <Button type="submit">Register</Button>
                </>
            )}
        </Form>
    );
};

export default Signin;
