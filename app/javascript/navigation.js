/**
 * Contains functions for the navigation of the site.
 *
 * Created by rodrigopavezi on 05/09/14.
 */


function navigate(from, to) {

    var _fromElement = document.getElementById(from);
    var _toElement = document.getElementById(to);

    _fromElement.style.display = "none";
    document.getElementById(to).style.display = "block";

    var _formElement = _fromElement.querySelector(".form");
    var _resultElement = _fromElement.querySelector(".result");
    var _responsePanel = _fromElement.querySelector(".responsePanel");
    if (_formElement) {
        _formElement.reset();
    }
    if (_resultElement) {
        _resultElement.innerHTML = "";
    }
    if(_responsePanel){
        _responsePanel.style.display = "none";
    }

    loadSampleJsonIntoTextArea(_toElement);
}


function loadSampleJsonIntoTextArea(section){
    var _dataTextArea = section.querySelector(".dataTextArea");
    if (_dataTextArea) {
        _dataTextArea.innerHTML = getSampleJson(_dataTextArea.id);
    }
}

