import React from 'react';
import {Button, CreateUserContainer, FormContainer, FormFiled, FormGroup, Input, Label, Select} from "../../../style/form.styled";
import useCreate from "./useCreate";
import SectionHeading from "../../../components/SectionHeading/SectionHeading.component";
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
                <SectionHeading
                    heading="Create User"
                />
                <FormGroup>
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

                <FormFiled>
                    <Label htmlFor="role">Role</Label>
                    <Select name="role" onChange={handleRoleChange}>
                        <option value="" disabled selected>Select Role</option>
                        <option value="user">User</option>
                        <option value="admin">Admin</option>
                        <option value="owner">Owner</option>
                    </Select>
                </FormFiled>

                <Button type="submit">Create User</Button>
            </FormContainer>
        </CreateUserContainer>
    );
}

export default Create;