import React from 'react';
import { Modal, Button, Input, Form } from 'antd';
import { ProfileContainer, ProfileDetails } from "./profile.styled";
import useProfile from "./useProfile";
import SectionHeading from "../../components/SectionHeading/SectionHeading.component";

function Profile() {
    const {
        userProfile,
        isModalVisible,
        loadingVerify,
        loadingUpdate,
        loadingDelete,
        otpCode,
        currentPassword,
        newPassword,
        passwordConfirmation,
        handleVerifyOtp,
        handleUpdatePassword,
        handleDeleteAccount,
        setIsModalVisible,
        setOtpCode,
        setCurrentPassword,
        setNewPassword,
        setPasswordConfirmation
    } = useProfile();

    return (
        <ProfileContainer>
            <SectionHeading heading="Profile" />
            <ProfileDetails>
                <p>ID: {userProfile.id}</p>
                <p>Email: {userProfile.email}</p>
                <p>Created At: {new Date(userProfile.created_at).toLocaleString()}</p>
            </ProfileDetails>
            <Button type="primary" onClick={handleVerifyOtp} loading={loadingVerify}>
                Update Password
            </Button>
            <Button type="primary" danger onClick={handleDeleteAccount} loading={loadingDelete} style={{ marginLeft: '10px' }}>
                Delete Account
            </Button>

            <Modal
                title="Update Password"
                visible={isModalVisible}
                onCancel={() => setIsModalVisible(false)}
                footer={null}
            >
                <Form onFinish={handleUpdatePassword}>
                    <Form.Item
                        label="OTP Code"
                        name="otpCode"
                        rules={[{ required: true, message: 'Please input your OTP code!' }]}
                    >
                        <Input
                            value={otpCode}
                            onChange={(e) => setOtpCode(e.target.value)}
                        />
                    </Form.Item>
                    <Form.Item
                        label="Current Password"
                        name="currentPassword"
                        rules={[{ required: true, message: 'Please input your current password!' }]}
                    >
                        <Input.Password
                            value={currentPassword}
                            onChange={(e) => setCurrentPassword(e.target.value)}
                        />
                    </Form.Item>
                    <Form.Item
                        label="New Password"
                        name="newPassword"
                        rules={[{ required: true, message: 'Please input your new password!' }]}
                    >
                        <Input.Password
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                        />
                    </Form.Item>
                    <Form.Item
                        label="Confirm New Password"
                        name="passwordConfirmation"
                        rules={[{ required: true, message: 'Please confirm your new password!' }]}
                    >
                        <Input.Password
                            value={passwordConfirmation}
                            onChange={(e) => setPasswordConfirmation(e.target.value)}
                        />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" loading={loadingUpdate}>
                            Update Password
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
        </ProfileContainer>
    );
}

export default Profile;