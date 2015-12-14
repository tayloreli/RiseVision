/**
 * Here we will keep function which returns
 * sample json for the data field of add and
 * update calls.
 *
 * Created by rodrigopavezi on 12/09/14.
 */

/**
 * Returns the sample json depending on the entity
 *
 * @param dataTextAreaId
 * @returns {string}
 */
function getSampleJson(dataTextAreaId){

    var _sampleJson = "";

    switch (dataTextAreaId){
        case "addCompany_data":
        case "patchCompany_data":
            _sampleJson = getCompanySampleJson();
            break;
        case "addDisplay_data":
        case "patchDisplay_data":
            _sampleJson = getDisplaySampleJson();
            break;
        case "addSchedule_data":
        case "patchSchedule_data":
            _sampleJson = getScheduleSampleJson();
            break;
        case "addUser_data":
        case "patchUser_data":
            _sampleJson = getUserSampleJson();
            break;
        case "addPresentation_data":
        case "patchPresentation_data":
            _sampleJson = getPresentationSampleJson();
            break;
    }

    return _sampleJson;
}

/**
 * Returns sample json for Company entity
 *
 * @returns {string}
 */

function getCompanySampleJson(){

    var _company = new Object();

    _company.name = 'Sample Companys Name';

    return JSON.stringify(_company,"","\t");
}

/**
 * Returns sample json for Display entity
 *
 * @returns {string}
 */

function getDisplaySampleJson(){

    var _display = new Object();

    _display.name = 'Sample Display Name';
    _display.width = 0;
    _display.height = 0;

    return JSON.stringify(_display,"","\t");
}

/**
 * Returns sample json for Schedule entity
 *
 * @returns {string}
 */
function getScheduleSampleJson(){

    var _schedule = new Object();

    _schedule.name = "Sample schedule";

    return JSON.stringify(_schedule,"","\t");

}

/**
 * Returns sample json for User entity
 *
 * @returns {string}
 */
function getUserSampleJson(){

    var _user = new Object();

    _user.email = "sample@sample.com";

    return JSON.stringify(_user,"","\t");
}

/**
 * Returns sample json for Schedule entity
 *
 * @returns {string}
 */
function getPresentationSampleJson(){

    var _presentation = new Object();

    _presentation.name = "Sample presentation";

    return JSON.stringify(_presentation,"","\t");

}