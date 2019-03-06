export const config ={
    instance: 'https://login.microsoftonline.com/',
    tenant: '7d9c1b7d-1e12-41d0-961d-6fd65a595bf2',
    clientId: 'a3077586-f2b3-48ff-ae98-edbc2ffb834c',
    redirectUri: "http://localhost:3000/", 
    cacheLocation: 'localStorage',
} 

export const webApiConfig = {
    resourceId: 'APPURI_of_the_Active_directory_if_there_is_a_RBAC'
}


