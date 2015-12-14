/**
 * Created by rodrigopavezi on 11/14/14.
 */
function deleteUser() {
    console.log('deleteUser');
    // getting parameter values
    var _username = document.getElementById('deleteUser_username').value;
    var _fields = document.getElementById('deleteUser_fields').value;

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
        var request = gapi.client.core.user.delete(parameters);

        request.execute(function (jsonResp, rawResp) {
            handlesResponse(jsonResp, rawResp, 'deleteUserResult');
        });
    }, ROOT);
}