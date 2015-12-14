/**
 * Created by rodrigopavezi on 11/14/14.
 */
function listDisplay() {
    console.log('listDisplay');
    // getting parameters values
    var _companyId = document.getElementById('listDisplay_companyId').value;
    var _count = document.getElementById('listDisplay_count').value;
    var _cursor = document.getElementById('listDisplay_cursor').value;
    var _search = document.getElementById('listDisplay_search').value;
    var _sort = document.getElementById('listDisplay_sort').value;
    var _fields = document.getElementById('listDisplay_fields').value;

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
        var request = gapi.client.core.display.list(parameters);

        request.execute(function (jsonResp, rawResp) {
            handlesResponse(jsonResp, rawResp, 'listDisplayResult');
        });
    }, ROOT);
}