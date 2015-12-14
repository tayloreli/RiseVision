/**
 * Created by rodrigopavezi on 11/14/14.
 */
function addCompany() {
    console.log('addCompany');
    // getting parameter values
    var _data = document.getElementById('addCompany_data').value;
    var _parentId = document.getElementById('addCompany_parentId').value;
    var _fields = document.getElementById('addCompany_fields').value;

    // create a javascript object which will be converted to Json
    var parameters = {};
    if (_data) {
        parameters['data'] = JSON.parse(_data);
    }
    if (_parentId) {
        parameters['parentId'] = _parentId;
    }
    if (_fields) {
        parameters['fields'] = _fields;
    }

    // loading and calling the api passing the parameter object
    gapi.client.load(API_NAME, API_VER, function () {
        var request = gapi.client.core.company.add(parameters);
        console.log(parameters);
        request.execute(function (jsonResp, rawResp) {
            handlesResponse(jsonResp, rawResp, 'addCompanyResult');
        });
    }, ROOT);
}