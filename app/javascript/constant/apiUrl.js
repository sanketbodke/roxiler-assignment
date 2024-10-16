export const baseUrl = "http://localhost:5000";

export const apiUrls = {
    register: `${baseUrl}/api/v1/users`,
    login: `${baseUrl}/api/v1/users/sign_in`,
    count: `${baseUrl}/api/v1/admin`,
    createUser: `${baseUrl}/api/v1/users`,
    createStore: `${baseUrl}/api/v1/stores`,
    nonAdminUsers: `${baseUrl}/api/v1/users/:id/non_admin_users`,
    listUsers: `${baseUrl}/api/v1/users`,
    listStores: `${baseUrl}/api/v1/stores`,
    verify_otp: `${baseUrl}/api/v1/users/:id/verify_otp`,
    update_password: `${baseUrl}/api/v1/users/:id/update_password`,
    delete_account: `${baseUrl}/api/v1/users/:id`,
    add_rating: `${baseUrl}/api/v1/stores/:id/ratings`
};

export default apiUrls;