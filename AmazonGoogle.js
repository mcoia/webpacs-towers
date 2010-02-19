/**
 * AddLinks - Add an Amazon review link and a Google preview link to your book page which include an ISBN number
 * Copyright (c) 2009 Hong Gyu Han - hanwiz@nwmissouri.edu
 * Licensed under BSD (http://www.opensource.org/licenses/bsd-license.php)
 * Date: 12/3/2009
 * @version 1.0.0
 * @author Hong Gyu Han
 * http://www.nwmissouri.edu/library/app/AddLinks/AddLinks.js
 */

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

// Function to process GBS info and update the dom.
function ProcessGBSBookInfo(booksInfo) {
	// alert("Google");
	for (isbn in booksInfo) {
		var element = document.getElementById('google_link');
		var bookInfo = booksInfo[isbn];
		if (bookInfo) {
			element.innerHTML = '<a href = "' + bookInfo.preview_url + '"><img src="http://code.google.com/apis/books/images/gbs_preview_button1.gif" border="0" style="margin: 4"/></a>';				
		}
	}
}

// return isbn10 if convertible or it's already isbn10 
// else return original isbn
function ISBN13to10(isbn) {
	if (isbn.length == 13) {	
		if (isbn.substr(0,3) == "978") { 
			// ISBN 13 to ISBN 10			
			isbn = isbn.substr(3,9);
			// alert("isbn 9 digit :" + isbn);
			var xsum = 0;
			var add = 0;
			var i = 0;
			for (i = 0; i < 9; i++) {
					add = isbn.substr(i,1);
					xsum += (10 - i) * add;
			}
			xsum %= 11;
			xsum = 11 - xsum;
			if (xsum == 10) { xsum = "X"; }
			if (xsum == 11) { xsum = "0"; }
			isbn += xsum;			
			// alert(isbn);
		}
	}
	
	return isbn;
}			

// add Amazon, Google and Persistent Link to library catalog book item page
function addLinks() {
	// add Persistent Link
	// <a id="recordnum" href="/record=b1864633~S4"></a
	var recordlink = document.getElementById('recordnum');
	recordlink.innerHTML = "Persistent link: " + recordlink.href;

	// Find ISBN
	var moresection = document.getElementById("moreSection");
	var rowsLabel = getElementsByClassName(moresection , "td" , "bibInfoLabel" );
	var isbns = [];
	for (var i=0; i<rowsLabel.length; i++) {
		if (rowsLabel[i].innerHTML.match("ISBN"))
		{
			var data = rowsLabel[i].parentNode.getElementsByTagName("td")[1];
			if (data) 
				isbns = data.innerHTML.match(/([0-9]{13}|[0-9]{10}|[0-9]{9}[xX])/g) || [];;
			// alert(issn);
			break;
		}
	}
	// take the first isbn...
	var isbn = isbns[0];		
	if (isbn) 
  {	
		// try to convert it to isbn 10
		isbn = ISBN13to10(isbn);
		
		if (isbn.length != 13)
		{
			linkLocation = document.getElementById('amazon_link');
			// alert(linkLocation);	
			if (linkLocation)	{
				// front page
				linkLocation.innerHTML = '<a href="http://amazon.com/dp/' + isbn + '"><img src="https://www.nwmissouri.edu/library/app/AddLinks/amreview_btn.png" border="0" style="margin: 4"/></a>';
				// customer review page
				//linkLocation.innerHTML = '<a href="http://amazon.com/product-reviews/' + isbn + '"><img src="https://www.nwmissouri.edu/library/app/AddLinks/amreview_btn.png" border="0" style="margin: 4"/></a>';
			}

			linkLocation = document.getElementById('google_link');
			// alert(linkLocation);	
			if (linkLocation)
			{
				// Retrieve the Google info for these bibkeys 	
				var scriptElement = document.createElement("script");
				scriptElement.setAttribute("id", "jsonScript");
				scriptElement.setAttribute("src",
						"http://books.google.com/books?jscmd=viewapi&bibkeys=ISBN:" + isbn + "&callback=ProcessGBSBookInfo");
				scriptElement.setAttribute("type", "text/javascript");
				// make the request to Google booksearch
				document.documentElement.firstChild.appendChild(scriptElement);					
			}
		}
	}
}

