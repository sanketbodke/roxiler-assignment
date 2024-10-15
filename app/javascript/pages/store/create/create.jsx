import React from 'react';
import { Button, CreateUserContainer, FormContainer, FormFiled, FormGroup, Input, Label, Select } from "../../../style/form.styled";
import useCreate from "./useCreate";
import SectionHeading from "../../../components/SectionHeading/SectionHeading.component";
function Create() {
    const {
        newStore,
        nonAdminUsers,
        handleInputChange,
        handleOwner,
        handleFormSubmit
    } = useCreate();

    return (
        <CreateUserContainer>
            <FormContainer onSubmit={handleFormSubmit}>
                <SectionHeading
                    heading="Create Store"
                />
                <FormGroup>
                    <FormFiled>
                        <Label htmlFor="name">Name</Label>
                        <Input
                            type="text"
                            name="name"
                            value={newStore.name}
                            onChange={handleInputChange}
                            required
                        />
                    </FormFiled>

                    <FormFiled>
                        <Label htmlFor="email">Email</Label>
                        <Input
                            type="email"
                            name="email"
                            value={newStore.email}
                            onChange={handleInputChange}
                            required
                        />
                    </FormFiled>
                </FormGroup>

                <FormGroup>
                    <FormFiled>
                        <Label htmlFor="address">Address</Label>
                        <Input
                            type="text"
                            name="address"
                            value={newStore.address}
                            onChange={handleInputChange}
                            required
                        />
                    </FormFiled>

                    <FormFiled>
                        <Label htmlFor="owner">Owner</Label>
                        <Select name="user_id" value={newStore.user_id} onChange={handleOwner} required>
                            <option value="" disabled>Select Owner</option>
                            {nonAdminUsers.map(user => (
                                <option key={user.id} value={user.id}>
                                    {user.email}
                                </option>
                            ))}
                        </Select>
                    </FormFiled>
                </FormGroup>

                <Button type="submit">Create Store</Button>
            </FormContainer>
        </CreateUserContainer>
    );
}

export default Create;