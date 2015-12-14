/**
 * Created by rodrigopavezi on 11/14/14.
 */
function addDisplay() {
    console.log('addDisplay');
    // getting parameter values
    var _data = document.getElementById('addDisplay_data').value;
    var _companyId = document.getElementById('addDisplay_companyId').value;
    var _fields = document.getElementById('addDisplay_fields').value;

    // create a javascript object which will be converted to Json
    var parameters = {};
    if (_data) {
        parameters['data'] = JSON.parse(_data);
    }
    if (_companyId) {
        parameters['companyId'] = _companyId;
    }
    if (_fields) {
        parameters['fields'] = _fields;
    }

    // loading and calling the api passing the parameter object
    gapi.client.load(API_NAME, API_VER, function () {
        var request = gapi.client.core.display.add(parameters);

        request.execute(function (jsonResp, rawResp) {
            handlesResponse(jsonResp, rawResp, 'addDisplayResult');
        });
    }, ROOT);
}