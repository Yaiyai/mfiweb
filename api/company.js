const apiURL = process.env.NEXT_PUBLIC_BASEURL;

export const getCompany = async () => {
    try {
        let resp = await fetch(`${apiURL}/companies`);
        let body = await resp.json();
        return body.company[0];
    } catch (error) {
        console.error('Error getting company:', error);
    }
};