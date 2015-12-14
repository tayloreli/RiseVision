/**
 * Created by rodrigopavezi on 11/14/14.
 */
function patchPresentation() {
    console.log('patchPresentation');
    // getting parameter values
    var _data = document.getElementById('patchPresentation_data').value;
    var _id = document.getElementById('patchPresentation_id').value;
    var _fields = document.getElementById('patchPresentation_fields').value;

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
        var request = gapi.client.core.presentation.patch(parameters);

        request.execute(function (jsonResp, rawResp) {
            handlesResponse(jsonResp, rawResp, 'patchPresentationResult');
        });
    }, ROOT);
}