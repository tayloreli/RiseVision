/**
 * Created by rodrigopavezi on 11/14/14.
 */
function patchCompany() {
    console.log('patchCompany');
    // getting parameter values
    var _data = document.getElementById('patchCompany_data').value;
    var _id = document.getElementById('patchCompany_id').value;
    var _fields = document.getElementById('patchCompany_fields').value;

    // create a javascript object which will be converted to Json
    var parameters = {};
    if (_data) {
        parameters['data'] = JSON.parse(_data);
    }
    if (_id) {
        parameters['id'] = _id;
    }
    if (_fields) {
        parameters['fields'] = _fields;
    }

    // loading and calling the api passing the parameter object
    gapi.client.load(API_NAME, API_VER, function () {
        var request = gapi.client.core.company.patch(parameters);

        request.execute(function (jsonResp, rawResp) {
            handlesResponse(jsonResp, rawResp, 'patchCompanyResult');
        });
    }, ROOT);
}