/**
 * Created by rodrigopavezi on 11/14/14.
 */
function moveCompany() {
    console.log('moveCompany');
    // getting parameter values
    var _authKey = document.getElementById('moveCompany_authKey').value;
    var _fields = document.getElementById('moveCompany_fields').value;

    // create a javascript object which will be converted to Json
    var parameters = {};
    if (_authKey) {
        parameters['authKey'] = _authKey;
    }
    if (_fields) {
        parameters['fields'] = _fields;
    }

    // loading and calling the api passing the parameter object
    gapi.client.load(API_NAME, API_VER, function () {
        var request = gapi.client.core.company.move(parameters);

        request.execute(function (jsonResp, rawResp) {
            handlesResponse(jsonResp, rawResp, 'moveCompanyResult');
        });
    }, ROOT);
}