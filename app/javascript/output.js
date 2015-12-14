/**
 * Contains function for dealing with the output.
 *
 * Created by rodrigopavezi on 05/09/14.
 */


var spinner;

// ------------------------- Format Output ----------------------------
/**
 * Create the pre element for the output.
 *
 * @param inp
 * @param div
 */

function output(inp, div) {

    var responsePanel = document.getElementById(div);
    responsePanel.querySelector(".result").appendChild(document.createElement('pre')).innerHTML = inp;

    responsePanel.querySelector(".responsePanel").style.display = "block";
    spinner.stop();
}

/**
 * Format the json response.
 * @param json
 * @returns {XML|string}
 */
function syntaxHighlight(json) {
    json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
        var cls = 'number';
        if (/^"/.test(match)) {
            if (/:$/.test(match)) {
                cls = 'key';
            } else {
                cls = 'string';
            }
        } else if (/true|false/.test(match)) {
            cls = 'boolean';
        } else if (/null/.test(match)) {
            cls = 'null';
        }
        return '<span class="' + cls + '">' + match + '</span>';
    });
}

/**
 * Reset the result output div.
 *
 * @param section
 */
function reset(section){
    var _resultElement = section.querySelector(".result");
    if(_resultElement){
        _resultElement.innerHTML = "";
    }
}

/**
 * This function will create a spinner
 * to be show when an api call is made.
 *
 * @param responsePanel
 */
function showSpinner(section){

    spinner = new Spinner(getDefaultSpinnerOptions()).spin(section);

}

/**
 * This function handles the execute action, thus,
 * cleaning the result section, hiding the response panel
 * and showing the spinner.
 *
 * @param div
 */
function handleExecuteAction(div){
    var _section = document.getElementById(div);
    reset(_section);
    _section.querySelector(".responsePanel").style.display = "none";
    showSpinner(_section);
}

function getDefaultSpinnerOptions(){
    var _defaultSpinnerOptions = {
        lines: 12, // The number of lines to draw
        length: 20, // The length of each line
        width: 10, // The line thickness
        radius: 30, // The radius of the inner circle
        corners: 1, // Corner roundness (0..1)
        rotate: 0, // The rotation offset
        direction: 1, // 1: clockwise, -1: counterclockwise
        color: "#555", // #rgb or #rrggbb or array of colors
        speed: 1, // Rounds per second
        trail: 60, // Afterglow percentage
        shadow: false, // Whether to render a shadow
        hwaccel: false, // Whether to use hardware acceleration
        className: "spinner", // The CSS class to assign to the spinner
        zIndex: 2e9, // The z-index (defaults to 2000000000)
        top: "100%", // Top position relative to parent in px
        left: "50%" // Left position relative to parent in px
    };

    return _defaultSpinnerOptions;
}
