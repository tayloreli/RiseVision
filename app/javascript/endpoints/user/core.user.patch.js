/**
 * Created by rodrigopavezi on 11/14/14.
 */
function patchUser() {
    console.log('patchUser');
    // getting parameter values
    var _data = document.getElementById('patchUser_data').value;
    var _username = document.getElementById('patchUser_username').value;
    var _fields = document.getElementById('patchUser_fields').value;

    // create a javascript object which will be converted to Json
    var parameters = {};
    if (_data) {
        parameters['data'] = JSON.parse(_data);
    }
    if (_username) {
        parameters['username'] = _username;
    }
    if (_fields) {
        parameters['fields'] = _fields;
    }

    // loading and calling the api passing the parameter object
    gapi.client.load(API_NAME, API_VER, function () {
        var request = gapi.client.core.user.patch(parameters);

        request.execute(function (jsonResp, rawResp) {
            handlesResponse(jsonResp, rawResp, 'patchUserResult');
        });
    }, ROOT);
}