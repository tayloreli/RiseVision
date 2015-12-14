/**
 * Created by rodrigopavezi on 11/14/14.
 */
function addPresentation() {
    console.log('addPresentation');
    // getting parameter values
    var _data = document.getElementById('addPresentation_data').value;
    var _companyId = document.getElementById('addPresentation_companyId').value;
    var _fields = document.getElementById('addPresentation_fields').value;

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
        var request = gapi.client.core.presentation.add(parameters);

        request.execute(function (jsonResp, rawResp) {
            handlesResponse(jsonResp, rawResp, 'addPresentationResult');
        });
    }, ROOT);
}