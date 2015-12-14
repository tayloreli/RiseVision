/**
 * Created by rodrigopavezi on 11/14/14.
 */
function listSchedule() {
    console.log('listSchedule');
    // getting parameters values
    var _companyId = document.getElementById('listSchedule_companyId').value;
    var _count = document.getElementById('listSchedule_count').value;
    var _cursor = document.getElementById('listSchedule_cursor').value;
    var _search = document.getElementById('listSchedule_search').value;
    var _sort = document.getElementById('listSchedule_sort').value;
    var _fields = document.getElementById('listSchedule_fields').value;

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
        var request = gapi.client.core.schedule.list(parameters);

        request.execute(function (jsonResp, rawResp) {
            handlesResponse(jsonResp, rawResp, 'listScheduleResult');
        });
    }, ROOT);
}