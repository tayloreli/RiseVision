/**
 * Created by rodrigopavezi on 11/14/14.
 */
function deletePresentation() {
    console.log('deletePresentation');
    // getting parameter values
    var _id = document.getElementById('deletePresentation_id').value;
    var _fields = document.getElementById('deletePresentation_fields').value;

    // create a javascript object which will be converted to Json
    var parameters = {};
    if (_id) {
        parameters['id'] = _id;
    }
    if (_fields) {
        parameters['fields'] = _fields;
    }

    // loading and calling the api passing the parameter object
    gapi.client.load(API_NAME, API_VER, function () {
        var request = gapi.client.core.presentation.delete(parameters);

        request.execute(function (jsonResp, rawResp) {
            handlesResponse(jsonResp, rawResp, 'deletePresentationResult');
        });
    }, ROOT);
}