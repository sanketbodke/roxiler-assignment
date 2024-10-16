import React  from 'react';
import { CreateRatingContainer } from './create.styled';
import SectionHeading from '../../../components/SectionHeading/SectionHeading.component';
import { FormContainer, Label, Select, Button, FormGroup } from '../../../style/form.styled';
import useCreate from "./useCreate";
function CreateRating() {

    const {
        stores,
        selectedStoreId,
        setSelectedStoreId,
        setScore,
        handleSubmit,
        score
    } = useCreate()

    return (
        <CreateRatingContainer>
            <SectionHeading heading="Add Rating" />
            <FormContainer onSubmit={handleSubmit}>
                <FormGroup>
                    <Label htmlFor="store">Select Store</Label>
                    <Select
                        id="store"
                        value={selectedStoreId}
                        onChange={(e) => setSelectedStoreId(e.target.value)}
                        required
                    >
                        <option value="">Select a store</option>
                        {stores.map((store) => (
                            <option key={store.id} value={store.id}>
                                {store.name}
                            </option>
                        ))}
                    </Select>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="rating">Rating Score</Label>
                    <Select
                        id="rating"
                        value={score}
                        onChange={(e) => setScore(parseInt(e.target.value))}
                        required
                    >
                        {[1, 2, 3, 4, 5].map((num) => (
                            <option key={num} value={num}>
                                {num}
                            </option>
                        ))}
                    </Select>
                </FormGroup>
                <Button type="submit">Submit Rating</Button>
            </FormContainer>
        </CreateRatingContainer>
    );
}

export default CreateRating;