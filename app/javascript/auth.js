/**
 * Parameters and values needed for
 * authentication and loading of
 * the google client javascript api.
 *
 * Created by rodrigopavezi on 05/09/14.
 */

/**
 * Parameters used by the api for authentication of the client app.
 *
 * To make calls to Google Cloud Endpoits the Google Javascript Client API
 * needs to be setup with a valid client id
 * which comes from an app created on Google App Engine.
 * Then, the client id is configured with a javascript origin attribute.This tights
 * a client id with the domain url of the server which the Google JavaScript Client API runs.
 *
 * @type {string}
 */

var DEV_DOMAIN = "localhost";
var STAGE_DOMAIN = "yescorise.herokuapp.com";
var PROD_DOMAIN = "yescorise.herokuapp.com";

// This checks which ROOT to use based on the domain.
var ROOT = "";
if (location.hostname === DEV_DOMAIN) {
    ROOT = 'https://rvacore-test.appspot.com/_ah/api'; //Api for local development
} else if (location.hostname === STAGE_DOMAIN) {
    ROOT = 'https://rvaserver2.appspot.com/_ah/api'; //Api for stage environment
} else if (location.hostname === PROD_DOMAIN) {
    ROOT = 'https://rvaserver2.appspot.com/_ah/api'; //Api for github pages
}

CLIENT_ID = '1040382116862-f6rh7l7vgm173ndh8d1lneui1g57k8mm.apps.googleusercontent.com';

var SCOPES = 'https://www.googleapis.com/auth/userinfo.email';
var API_NAME = 'core';
var API_VER = 'v1';
var API_KEY = 'AIzaSyCzTGPt0xj3f9xi1GgPyB9B51hvBF6Khyc';

/**
 * Load the oauth2 api.
 *
 */
function handleAuth(authResult) {
    console.log('handle auth');
    if (authResult && !authResult.error) {
        gapi.client.load('oauth2', 'v2', makeOAuth2Request);
    }
}

/**
 * Make a request to OAuth2 for getting the user name.
 */
function makeOAuth2Request() {
    console.log('make request to oauth2');
    var request = gapi.client.oauth2.userinfo.get();

    request.execute(function (resp) {
        if (!resp.code) {
            console.log(resp);
            // User is signed in, so hide the button
            //hideSigninButton();
            //showSignoutButton();

            document.getElementById('signinText').innerText = 'Welcome ' + resp.name + ' [' + resp.email + ']';
            token = gapi.auth.getToken();
            console.log('Access Token is now ' + token.access_token + ' exp ' + token.expires_in);
        }
        else {
            hideSignoutButton();
            showSigninButton();
        }
    });
}

function handleClientLoad() {
    // Step 2: Reference the API key
    console.log('setting api key');
    gapi.client.setApiKey(API_KEY);
    window.setTimeout(checkAuth, 1);
}

/**
 * Check if users is already signed in
 */
function checkAuth() {
    console.log('check auth');
    var authResult = gapi.auth.authorize({ client_id: CLIENT_ID, scope: SCOPES, immediate: true }, handleAuth);

    console.log(authResult);
}

/**
 *  Call api to signin a user.
 *
 */
function signin() {
    console.log('attempting login');
    var authResult = gapi.auth.authorize({ client_id: CLIENT_ID, scope: SCOPES, immediate: false }, handleAuth);

    console.log(authResult);
    return false;
}

/**
 *  Call the signout from google api
 */
function signout() {
    console.log("Signing Out");
    gapi.auth.signOut();

    //hideSignoutButton();
    //showSigninButton();

    document.getElementById('signinText').innerText = 'Authorize requests using OAuth 2.0:';

}

/**
 *  Toggle the DOM to show the Signin button
 */
function showSigninButton() {
    document.getElementById('signinButton').style.visibility = 'visible';
    document.getElementById('signinButton').style.display = 'inline';
}

/**
 *  Toggle the DOM to show the Signout button
 */
function showSignoutButton() {
    document.getElementById('signoutButton').style.visibility = 'visible';
    document.getElementById('signoutButton').style.display = 'inline';
}

/**
 *  Toggle the DOM to hide the Signin button
 */
function hideSigninButton() {
    document.getElementById('signinButton').style.visibility = 'hidden';
    document.getElementById('signinButton').style.display = 'none';
}

/**
 * Toggle the DOM to hide the Signout button
 */
function hideSignoutButton() {
    document.getElementById('signoutButton').style.visibility = 'hidden';
    document.getElementById('signoutButton').style.display = 'none';
}
