/**
 * Created by rodrigopavezi on 11/14/14.
 */
function getCompany() {
    console.log('getCompany');
    // getting parameter values
    var _id = document.getElementById('getCompany_id').value;
    var _fields = document.getElementById('getCompany_fields').value;

    // create a javascript object which will be converted to Json
    var parameters = {};
    if (_id) {
        parameters['id'] = _id
    }
    if (_fields) {
        parameters['fields'] = _fields
    }

    // loading and calling the api passing the parameter object
    gapi.client.load(API_NAME, API_VER, function () {
        // calling the api passing the parameter object
        var request = gapi.client.core.company.get(parameters);

        // jsonResp object has got a duplication of the data which comes under result element
        request.execute(function (jsonResp, rawResp) {
            handlesResponse(jsonResp, rawResp, 'getCompanyResult');
        })
    }, ROOT);
}