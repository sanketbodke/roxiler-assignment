export const baseUrl = "http://localhost:5000";

export const apiUrls = {
    register: `${baseUrl}/api/v1/users`,
    login: `${baseUrl}/api/v1/users/sign_in`,
    count: `${baseUrl}/api/v1/admin`,
    createUser: `${baseUrl}/api/v1/users`,
    createStore: `${baseUrl}/api/v1/stores`,
    nonAdminUsers: `${baseUrl}/api/v1/users/:id/non_admin_users`,
    listUsers: `${baseUrl}/api/v1/users`,
    listStores: `${baseUrl}/api/v1/stores`
};

export default apiUrls;