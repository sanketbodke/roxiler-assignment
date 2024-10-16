import { useEffect, useState } from "react";
import currentUser from "../../utils/currentUser";
import axios from "axios";
import apiUrl from "../../constant/apiUrl";
import { message } from "antd";

const useProfile = () => {
    const [userProfile, setUserProfile] = useState({});
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [otpCode, setOtpCode] = useState('');
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const [loadingVerify, setLoadingVerify] = useState(false); // Loading state for Verify OTP button
    const [loadingUpdate, setLoadingUpdate] = useState(false); // Loading state for Update Password button
    const [loadingDelete, setLoadingDelete] = useState(false); // Loading state for Delete Account button
    const { user } = currentUser();
    const token = user.data.token;

    useEffect(() => {
        setUserProfile(user.data.user);
    }, [user]);

    const handleVerifyOtp = async () => {
        setLoadingVerify(true); // Start loading
        try {
            const response = await axios.put(
                apiUrl.verify_otp.replace(':id', userProfile.id),
                { otp_code: otpCode },
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            if (response.status === 200) {
                message.success('OTP has been sent to your registered email address.');
                setIsModalVisible(true);
            }
        } catch (error) {
            const errorMessage = error.response?.data?.error || 'OTP verification failed. Please try again.';
            message.error(errorMessage);
        } finally {
            setLoadingVerify(false);
        }
    };

    const handleUpdatePassword = async () => {
        setLoadingUpdate(true);
        try {
            const response = await axios.put(
                apiUrl.update_password.replace(':id', userProfile.id),
                {
                    otp_code: otpCode,
                    current_password: currentPassword,
                    new_password: newPassword,
                    password_confirmation: passwordConfirmation
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            if (response.status === 200) {
                message.success('Password updated successfully!');
                setCurrentPassword('');
                setNewPassword('');
                setPasswordConfirmation('');
                setOtpCode('');
                setIsModalVisible(false);
            }
        } catch (error) {
            const errorMessage = error.response?.data?.error || 'Password update failed. Please try again.';
            message.error(errorMessage);
        } finally {
            setLoadingUpdate(false);
        }
    };

    const handleDeleteAccount = async () => {
        setLoadingDelete(true);
        try {
            const response = await axios.delete(
                apiUrl.delete_account.replace(':id', userProfile.id),
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            if (response.status === 200) {
                message.success('Account deleted successfully!');
            }
        } catch (error) {
            const errorMessage = error.response?.data?.error || 'Account deletion failed. Please try again.';
            message.error(errorMessage);
        } finally {
            setLoadingDelete(false);
        }
    };

    return {
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
    };
};

export default useProfile;