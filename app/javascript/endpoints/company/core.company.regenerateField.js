/**
 * Created by rodrigopavezi on 11/14/14.
 */
function regenerateFieldCompany() {
    console.log('regenerateFieldCompany');
    // getting parameter values
    var _fieldName = document.getElementById('regenerateFieldCompany_fieldName').value;
    var _id = document.getElementById('regenerateFieldCompany_id').value;
    var _fields = document.getElementById('getCompany_fields').value;

    // create a javascript object which will be converted to Json
    var parameters = {};
    if (_fieldName) {
        parameters['fieldName'] = _fieldName
    }
    if (_id) {
        parameters['id'] = _id
    }
    if (_fields) {
        parameters['fields'] = _fields
    }

    // loading and calling the api passing the parameter object
    gapi.client.load(API_NAME, API_VER, function () {
        // calling the api passing the parameter object
        var request = gapi.client.core.company.regenerateField(parameters);

        // jsonResp object has got a duplication of the data which comes under result element
        request.execute(function (jsonResp, rawResp) {
            handlesResponse(jsonResp, rawResp, 'regenerateFieldCompanyResult');
        })
    }, ROOT);
}