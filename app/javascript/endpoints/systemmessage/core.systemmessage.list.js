/**
 * Created by rodrigopavezi on 11/14/14.
 */
function listSystemmessage() {
    console.log('listSystemmessage');
    // getting parameters values
    var _companyId = document.getElementById('listSystemmessage_companyId').value;
    var _fields = document.getElementById('listSystemmessage_fields').value;

    // create a javascript object which will be converted to Json
    var parameters = {};
    if (_companyId) {
        parameters['companyId'] = _companyId
    }
    if (_fields) {
        parameters['fields'] = _fields
    }

    // loading and calling the api passing the parameter object
    gapi.client.load(API_NAME, API_VER, function () {
        var request = gapi.client.core.systemmessage.list(parameters);

        request.execute(function (jsonResp, rawResp) {
            handlesResponse(jsonResp, rawResp, 'listSystemmessageResult');
        });
    }, ROOT);
}