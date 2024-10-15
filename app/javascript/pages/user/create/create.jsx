import React from 'react';
import {Button, CreateUserContainer, FormContainer, FormFiled, FormGroup, Input, Label, Select} from "../../../style/form.styled";
import useCreate from "./useCreate";
import FormHeading from "../../../components/FormHeading/FormHeading.component";
function Create() {
    const {
        newUser,
        handleInputChange,
        handleRoleChange,
        handleFormSubmit
    } = useCreate()

    return (
        <CreateUserContainer>
            <FormContainer onSubmit={handleFormSubmit}>
                <FormHeading
                    heading="Create User"
                />
                <FormGroup>
                    <FormFiled>
                        <Label htmlFor="name">Name</Label>
                        <Input
                            type="text"
                            name="name"
                            value={newUser.name}
                            onChange={handleInputChange}
                        />
                    </FormFiled>

                    <FormFiled>
                        <Label htmlFor="email">Email</Label>
                        <Input
                            type="email"
                            name="email"
                            value={newUser.email}
                            onChange={handleInputChange}
                        />
                    </FormFiled>
                </FormGroup>

                <FormGroup>
                    <FormFiled>
                        <Label htmlFor="password">Password</Label>
                        <Input
                            type="password"
                            name="password"
                            value={newUser.password}
                            onChange={handleInputChange}
                        />
                    </FormFiled>

                    <FormFiled>
                        <Label htmlFor="password_confirmation">Password Confirmation</Label>
                        <Input
                            type="password"
                            name="password_confirmation"
                            value={newUser.password_confirmation}
                            onChange={handleInputChange}
                        />
                    </FormFiled>
                </FormGroup>

                <FormFiled>
                    <Label htmlFor="role">Role</Label>
                    <Select name="role" onChange={handleRoleChange}>
                        <option value="" disabled selected>Select Role</option>
                        <option value="user">User</option>
                        <option value="admin">Admin</option>
                    </Select>
                </FormFiled>

                <Button type="submit">Create User</Button>
            </FormContainer>
        </CreateUserContainer>
    );
}

export default Create;