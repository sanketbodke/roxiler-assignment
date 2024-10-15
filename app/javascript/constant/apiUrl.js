export const baseUrl = "http://localhost:5000";

export const apiUrls = {
    register: `${baseUrl}/api/v1/users`,
    login: `${baseUrl}/api/v1/users/sign_in`,
    count: `${baseUrl}/api/v1/admin`,
    createUser: `${baseUrl}/api/v1/admin/:id/create_user`,
    createStore: `${baseUrl}/api/v1/admin/:id/create_store`,
    nonAdminUsers: `${baseUrl}/api/v1/admin/:id/non_admin_users`
};

export default apiUrls;