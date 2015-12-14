/**
 * Created by rodrigopavezi on 11/14/14.
 */
function getUser() {
    console.log('getUser');
    // getting parameter values
    var _username = document.getElementById('getUser_username').value;
    var _fields = document.getElementById('getUser_fields').value;

    // create a javascript object which will be converted to Json
    var parameters = {};
    if (_username) {
        parameters['username'] = _username;
    }
    if (_fields) {
        parameters['fields'] = _fields;
    }

    // loading and calling the api passing the parameter object
    gapi.client.load(API_NAME, API_VER, function () {
        var request = gapi.client.core.user.get(parameters);

        request.execute(function (jsonResp, rawResp) {
            handlesResponse(jsonResp, rawResp, 'getUserResult');
        });
    }, ROOT);
}