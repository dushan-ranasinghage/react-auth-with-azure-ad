# react-auth-with-azure-ad

This is a simple react app which has been integrated with the Azure App Services and authenticated with the Azure Active Directory.

  - OAuth2.0
  - Azure Active Directory(Azure AD)
  - React Client App

#### Prerequisites!

  - Fundamental Azure Knowledge (You have to grant the access for the app from the Azure Portal)
  - Basic React Knowledge (Just for further development 😊 )

In additionally, you can also:
  - Get the user image of the outlook from MSGraph API
  - Get the user details from MSGraph API

##### Tips
  - The Directory ID and tenant both equal.
  - clientId is equal to the Application ID.

### Installation

react-auth-with-azure-ad requires [Node.js](https://nodejs.org/) v4+ to run.

Install the dependencies and devDependencies and start the server.

```sh
$ cd react-auth-with-azure-ad
$ npm install
```

### How to setup the Azure Portal and the Project
  - Create a new active directory in Azure or use an exsisting one as you wish
  - Go to the App Registration and select new application 
  ![alt text](https://github.com/dushanrandika/react-auth-with-azure-ad/blob/master/readmeImages/app%20registaration.PNG?raw=true)
  - Select the newly created app in app registration from going back
   ![alt text](https://github.com/dushanrandika/react-auth-with-azure-ad/blob/master/readmeImages/SelectApp.PNG?raw=true)
  - Go to the settings
     ![alt text](https://github.com/dushanrandika/react-auth-with-azure-ad/blob/master/readmeImages/InkedSetting_LI.jpg?raw=true)
  - Set the Home Page URL in properties
       ![alt text](https://github.com/dushanrandika/react-auth-with-azure-ad/blob/master/readmeImages/HomePageUrl.PNG?raw=true)
  - Set the Redirect URL in Redirect URIs
  ![alt text](https://github.com/dushanrandika/react-auth-with-azure-ad/blob/master/readmeImages/RedirectUrl.PNG?raw=true)
  - Check whether the permissions are matching 
  ![alt text](https://github.com/dushanrandika/react-auth-with-azure-ad/blob/master/readmeImages/Permissions.PNG?raw=true)
  - Go to the Enterprise Application and select the app
  - Go to the properties and check whether enabled Signed in user and other settings
  ![alt text](https://github.com/dushanrandika/react-auth-with-azure-ad/blob/master/readmeImages/EnterpriseAppSettings.PNG?raw=true)
  - Grant admin consent for default directory in permissions
    ![alt text](https://github.com/dushanrandika/react-auth-with-azure-ad/blob/master/readmeImages/RequiredPermissionsEnsureInEnterpriseApp.PNG?raw=true)
  - Go to the installed app and open it on a editor which you prefer
  - Open the config file (src/actions/config.js) and change the variables of tenat and clientId
    ![alt text](https://github.com/dushanrandika/react-auth-with-azure-ad/blob/master/readmeImages/InkedChangeTheCode_LI.jpg?raw=true)

### Todos

 - Write MORE Tests
 - Show user image and details
 - Remove redirect white screen

License
----

MIT


**Free Software, Hell Yeah!**

