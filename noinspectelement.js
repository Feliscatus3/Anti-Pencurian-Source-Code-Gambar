// disable right click
document.oncontextmenu = function (e) {
    e.preventDefault()
    return false;
}
// or use

//<![CDATA[
// Anti Inspect Element
!function t(){try{!function t(n){1===(""+n/n).length&&0!==n||function(){}.constructor("debugger")(),t(++n)}(0)}catch(n){setTimeout(t,5e3)}}();
//]]>
