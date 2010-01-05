/*2006 WebPAC Pro Version, set from 21 November, 2006*/
/* JavaScript Functions that facilitate table striping and hover highlighting */

function addLoadEvent(func) {
  var oldonload = window.onload;
  if (typeof window.onload != 'function') {
    window.onload = func;
  } else {
    window.onload = function() {
      oldonload();
      func();
    }
  }
}

function addClass(element,value) {
  if (!element.className) {
    element.className = value;
  } else {
    newClassName = element.className;
    newClassName+= " ";
    newClassName+= value;
    element.className = newClassName;
  }
}

function stripeTables() {
  // alert("stripTables");
	if (!document.getElementsByTagName) return false;	
    var rows = getElementsByClassName(document , "td" , "briefCitRow" );
    var odd = false;
    for (var j=0; j<rows.length; j++) {
      if (odd == true) {
        addClass(rows[j],"odd");
        odd = false;
      } else {
        odd = true;
      }
    }

}

function highlightRows() {
  // alert("HightLightRows");
  if (!document.getElementsByTagName) return false;
  var rows = getElementsByClassName(document , "td" , "briefCitRow" );
  for (var i=0; i<rows.length; i++) {
    rows[i].oldClassName = rows[i].className
    rows[i].onmouseover = function() {
      addClass(this,"highlight");
    }
    rows[i].onmouseout = function() {
      this.className = this.oldClassName
    }
  }
}

function stripeBrowse() {
	if (!document.getElementsByTagName) return false;	
    var rows = getElementsByClassName(document , "tr" , "browseEntry" );
    var odd = false;
    for (var j=0; j<rows.length; j++) {
      if (odd == true) {
        addClass(rows[j],"odd");
        odd = false;
      } else {
        odd = true;
      }
    }	

		// to fix the IE issue...
		var rows = getElementsByClassName(document , "td" , "browseEntryData" );
    var odd = false;
    for (var j=0; j<rows.length; j++) {
      if (odd == true) {
        addClass(rows[j],"odd");
        odd = false;
      } else {
        odd = true;
      }
    }
		
		// to fix the cellspacing in IE
		var rows = getElementsByClassName(document , "table" , "browseList" ); 
    for (var j=0; j<rows.length; j++) {			
			rows[j].setAttribute("cellSpacing", "0");
			rows[j].setAttribute("border", "0");			
    }		
}

function highlightBrowse() {
  if (!document.getElementsByTagName) return false;
  var rows = getElementsByClassName(document , "tr" , "browseEntry" );
  for (var i=0; i<rows.length; i++) {
    rows[i].oldClassName = rows[i].className
    rows[i].onmouseover = function() {
      addClass(this,"highlight");
    }
    rows[i].onmouseout = function() {
      this.className = this.oldClassName
    }
  }
	
	// to fix the IE issue...
  var rows = getElementsByClassName(document , "td" , "browseEntryData" );
  for (var i=0; i<rows.length; i++) {
    rows[i].oldClassName = rows[i].className
    rows[i].onmouseover = function() {
      addClass(this,"highlight");
    }
    rows[i].onmouseout = function() {
      this.className = this.oldClassName
    }
  }
}



function getElementsByClassName(oElm, strTagName, strClassName){
    var arrElements = (strTagName == "*" && oElm.all)? oElm.all : oElm.getElementsByTagName(strTagName);
    var arrReturnElements = new Array();
    strClassName = strClassName.replace(/\-/g, "\\-");
    var oRegExp = new RegExp("(^|\\s)" + strClassName + "(\\s|$)");
    var oElement;
    for(var i=0; i<arrElements.length; i++){
        oElement = arrElements[i];      
        if(oRegExp.test(oElement.className)){
            arrReturnElements.push(oElement);
        }   
    }
    return (arrReturnElements)
}

addLoadEvent(stripeTables);
addLoadEvent(highlightRows);
addLoadEvent(stripeBrowse);
addLoadEvent(highlightBrowse);


