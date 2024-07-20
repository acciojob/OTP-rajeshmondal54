//your JS code here. If required.
function moveToNext(current, nextFieldID) {
    if (current.value.length === 1) {
        document.getElementById(nextFieldID).focus();
    }
}

function moveToPrev(current, prevFieldID, event) {
    if (event.key === 'Backspace' && current.value.length === 0) {
        document.getElementById(prevFieldID).focus();
    }
}
