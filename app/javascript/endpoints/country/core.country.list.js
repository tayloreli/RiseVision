/**
 * Created by rodrigopavezi on 11/14/14.
 */
function listCountry() {
    console.log('listCountry');
    // getting parameter values
    var _fields = document.getElementById('listCountry_fields').value;

    // create a javascript object which will be converted to Json
    var parameters = {};
    if (_fields) {
        parameters['fields'] = _fields
    }

    // loading and calling the api passing the parameter object
    gapi.client.load(API_NAME, API_VER, function () {
        // calling the api passing the parameter object
        var request = gapi.client.core.country.list(parameters);

        // jsonResp object has got a duplication of the data which comes under result element
        request.execute(function (jsonResp, rawResp) {
            handlesResponse(jsonResp, rawResp, 'listCountryResult');
        })
    }, ROOT);
}