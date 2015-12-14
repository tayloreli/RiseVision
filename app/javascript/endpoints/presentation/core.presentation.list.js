/**
 * Created by rodrigopavezi on 11/14/14.
 */
function listPresentation() {
    console.log('listPresentation');
    // getting parameters values
    var _companyId = document.getElementById('listPresentation_companyId').value;
    var _count = document.getElementById('listPresentation_count').value;
    var _cursor = document.getElementById('listPresentation_cursor').value;
    var _search = document.getElementById('listPresentation_search').value;
    var _sort = document.getElementById('listPresentation_sort').value;
    var _fields = document.getElementById('listPresentation_fields').value;

    // create a javascript object which will be converted to Json
    var parameters = {};
    if (_companyId) {
        parameters['companyId'] = _companyId
    }
    if (_count) {
        parameters['count'] = _count
    }
    if (_cursor) {
        parameters['cursor'] = _cursor
    }
    if (_search) {
        parameters['search'] = _search
    }
    if (_sort) {
        parameters['sort'] = _sort
    }
    if (_fields) {
        parameters['fields'] = _fields
    }

    // loading and calling the api passing the parameter object
    gapi.client.load(API_NAME, API_VER, function () {
        var request = gapi.client.core.presentation.list(parameters);

        request.execute(function (jsonResp, rawResp) {
            handlesResponse(jsonResp, rawResp, 'listPresentationResult');
        });
    }, ROOT);
}