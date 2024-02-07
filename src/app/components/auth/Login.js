import React from 'react';
import {Button, Card, Checkbox, Input, Typography} from "@/app/utils/materialComponents";

const Login = () => {
    return (
        <div>
            <Card className="mx-auto my-10" color="transparent" shadow={false} >
                <Typography className="mx-auto" variant="h4" color="blue-gray">
                    Sign In
                </Typography>
                <Typography color="gray" className="mt-1 font-normal mx-auto">
                    Nice to meet you! Enter your details to Login.
                </Typography>
                <form className="mt-8 mb-2 w-100 max-w-screen-lg sm:w-96 mx-auto">
                    <div className="mb-1 flex flex-col gap-6">
                        <Typography variant="h6" color="blue-gray" className="-mb-3">
                            Your Email
                        </Typography>
                        <Input
                            size="lg"
                            placeholder="name@mail.com"
                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}
                        />
                        <Typography variant="h6" color="blue-gray" className="-mb-3">
                            Password
                        </Typography>
                        <Input
                            type="password"
                            size="lg"
                            placeholder="********"
                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}
                        />
                    </div>
                    <Button className="mt-6" fullWidth>
                        Login
                    </Button>
                    <Typography color="gray" className="mt-4 text-center font-normal">
                        Don't have an account? {" "}
                        <a href="#" className="font-medium text-gray-900">
                            Sign Up
                        </a>
                        {" "}
                        here
                    </Typography>
                </form>
            </Card>
        </div>
    );
};

export default Login;