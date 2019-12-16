//moveIcon dragging
function startDrag(e) {
    // determine event object
    if (!e) {
        var e = window.event;
    }
    //if (e.preventDefault) e.preventDefault();

    // IE uses srcElement, others use target
    targ = e.target ? e.target : e.srcElement;

    if (targ.className != 'moveIcon') { return };
    // calculate event X, Y coordinates
    offsetX = e.clientX;
    offsetY = e.clientY;

    // assign default values for top and left properties
    if (!targ.style.left) { targ.style.left = '0px' };
    if (!targ.style.top) { targ.style.top = '0px' };

    // calculate integer values for top and left 
    // properties
    coordX = parseInt(targ.style.left);
    coordY = parseInt(targ.style.top);

    if (targ.parentElement != null) {
        if (targ.parentElement.style.position != "absolute") {
            targ.parentElement.style.position = "absolute";
            targ.parentElement.style.left = "50%";
            targ.parentElement.style.top = "0px";
        }
        //parent cords
        pCoordX = parseInt(targ.parentElement.style.left) * document.getElementById("editViewArea").clientWidth / 100;
        pCoordY = parseInt(targ.parentElement.style.top);

        console.log(targ.parentElement.style);

        drag = true;

        // move div element
        document.onmousemove = dragDiv;
    }
    return;
}
function dragDiv(e) {
    if (!drag) { return };
    if (!e) { var e = window.event };
    // var targ=e.target?e.target:e.srcElement;
    // move div element
    //targ.style.left = coordX + e.clientX - offsetX + 'px';
    //targ.style.top = coordY + e.clientY - offsetY + 'px';

    targ.parentElement.style.left = pCoordX + e.clientX - offsetX + 'px';
    targ.parentElement.style.top = pCoordY + e.clientY - offsetY + 'px';
    return;
}
function stopDrag() {
    if (targ.parentElement != null) {
        var posLeft = parseInt(targ.parentElement.style.left);
        var posTop = parseInt(targ.parentElement.style.top);
        var container = document.getElementById("editViewArea");
        var left = posLeft;//(container.offsetLeft + container.clientLeft);
        var percentLeft = 0;
        if (container.clientWidth != 0)
            percentLeft = (left / container.clientWidth) * 100;


        targ.parentElement.style.left = percentLeft + "%";
        drag = false;

        if (currentSelectedObject) {
            var text = currentEditor.GetText(currentSelectedObject.id);
            if (!isNaN(percentLeft) && !isNaN(posTop)) {
                if (!text.positionType) {
                    text.positionType = "absolute";
                    text.posX = 50;
                    text.posY = 10;
                }
                text.posX = percentLeft;
                text.posY = posTop;
            }
        }
    }
}
window.onload = function () {
    document.onmousedown = startDrag;
    document.onmouseup = stopDrag;
}