/**
 * Created by rodrigopavezi on 11/14/14.
 */
function addUser() {
    console.log('addUser');
    // getting parameter values
    var _data = document.getElementById('addUser_data').value;
    var _companyId = document.getElementById('addUser_companyId').value;
    var _username = document.getElementById('addUser_username').value;
    var _fields = document.getElementById('addUser_fields').value;

    // create a javascript object which will be converted to Json
    var parameters = {};
    if (_data) {
        parameters['data'] = JSON.parse(_data);
    }
    if (_companyId) {
        parameters['companyId'] = _companyId;
    }
    if (_username) {
        parameters['username'] = _username;
    }
    if (_fields) {
        parameters['fields'] = _fields;
    }

    // loading and calling the api passing the parameter object
    gapi.client.load(API_NAME, API_VER, function () {
        var request = gapi.client.core.user.add(parameters);

        request.execute(function (jsonResp, rawResp) {
            handlesResponse(jsonResp, rawResp, 'addUserResult');
        });
    }, ROOT);
}