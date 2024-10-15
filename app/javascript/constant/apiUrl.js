export const baseUrl = "http://localhost:5000";

export const apiUrls = {
    register: `${baseUrl}/api/v1/users`,
    login: `${baseUrl}/api/v1/users/sign_in`,
    count: `${baseUrl}/api/v1/admin`
};

export default apiUrls;