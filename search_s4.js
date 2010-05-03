//function controlling the collapsable portions of the menus
function toggleLayer(whichLayer)
{
if (document.getElementById)
{
var style2 = document.getElementById(whichLayer).style;
style2.display = style2.display? "":"block";
}
else if (document.all)
{
var style2 = document.all[whichLayer].style;
style2.display = style2.display? "":"block";
}
else if (document.layers)
{
var style2 = document.layers[whichLayer].style;
style2.display = style2.display? "":"block";
}
}

function addMainContentMenu()
{
	var linkLocation = document.getElementById('mainContentMenu');
	if (linkLocation)
		linkLocation.innerHTML = '<b class="xtop"><b class="xb1"></b><b class="xb2"></b><b class="xb3"></b><b class="xb4"></b></b><div class="roundedContentInfo">'
		+ '<div class="mainContentHead">Other Searches:</div>'
		+ '<div>&nbsp;&nbsp;<img src="/screens/greenpaw.gif" alt=""/>&nbsp;<a href="http://rl6vs2mp4m.search.serialssolutions.com/">Journal Title</a></div>'
		+ '<div>&nbsp;&nbsp;<img src="/screens/greenpaw.gif" alt=""/>&nbsp;<a href="/search~S4/p">Course Reserves</a></div>'
		+ '<div>&nbsp;&nbsp;<img src="/screens/greenpaw.gif" alt=""/>&nbsp;<a href="/search~S4/q">Author and Title</a></div>'
		+ '<div>&nbsp;&nbsp;<img src="/screens/greenpaw.gif" alt=""/>&nbsp;<a href="/search~S4/m">Children\'s Subjects</a></div>'
		+ '<hr><div class="mainContentHead">Number Searches:</div>'	
		+ '<div>&nbsp;&nbsp;<img src="/screens/greenpaw.gif" alt=""/>&nbsp;<a href="/search~S4/e">Dewey Decimal</a></div>'
		+ '<div>&nbsp;&nbsp;<img src="/screens/greenpaw.gif" alt=""/>&nbsp;<a href="/search~S4/c">Library of Congress</a></div>'
		+ '<div>&nbsp;&nbsp;<img src="/screens/greenpaw.gif" alt=""/>&nbsp;<a href="/search~S4/f">Local</a></div>'
		+ '<div>&nbsp;&nbsp;<img src="/screens/greenpaw.gif" alt=""/>&nbsp;<a href="/search~S4/g">Government Documents</a></div>'
		+ '<div>&nbsp;&nbsp;<img src="/screens/greenpaw.gif" alt=""/>&nbsp;<a href="/search~S4/i">ISBN or ISSN</a></div>'
		+ '<div>&nbsp;&nbsp;<img src="/screens/greenpaw.gif" alt=""/>&nbsp;<a href="/search~S4/o">OCLC</a></div>'
		+ '</div><b class="xbottom"><b class="xb4"></b><b class="xb3"></b><b class="xb2"></b><b class="xb1"></b></b>';
}	

function addSearchTipMain()
{
	var linkLocation = document.getElementById('searchTipMain');
	if (linkLocation)
		linkLocation.innerHTML = '<div class="roundedContent"><b class="contop"><b class="conb1"></b><b class="conb2"></b><b class="conb3"></b><b class="conb4"></b></b><div class="searchTipContentInfo"><table class="searchTipTable"><tr><td colspan="2" align="center" style="font-size:125%;border-bottom:1px solid #000"><strong>Search Tips</strong></td></tr>'
		+ '<tr valign="top"><th align="left">Adjacency</th><td>Multiple words are searched together as one phrase.<br/><span style="text-decoration:underline">Example</span> : world health organization</td></tr>'
		+ '<tr valign="top"><th align="left">Wildcards</th><td>Words may be right-hand truncated using an asterisk. \'*\' for 1-5 characters, \'**\' for open-ended truncation, \'?\' to replace a single character anywhere within a word.<br/><span style="text-decoration:underline">Examples</span> : environment* polic*, comput**, wom?n</td></tr>'
		+ '<tr valign="top"><th align="left">Boolean Operators</th><td>Use "and" or "or" to specify multiple words in any field, any order. Use "and not" to exclude words.<br/><span style="text-decoration:underline">Example</span> : stocks and bonds <br/><span style="text-decoration:underline">Example</span> : (alaska or canada) and (adventure and not vacation)</td></tr>'
		+ '<tr valign="top"><th align="left">Proximity Operators</th><td>Use "near" to specify words close to each other, in any order.<br/><span style="text-decoration:underline">Example</span> : california near university</td></tr>'
		+ '<tr valign="top"><th align="left">Field limits</th><td>A field limit causes the system to search only the specified field for the specified word(s).</td></tr>'
		+ '<tr valign="top"><th align="left">Grouping</th><td>Keyword search results are usually grouped by relevance to bring the most likely titles to the top of the list. Each group represents a similar level of relevance and results are sorted within the group by date or title. To get an ungrouped result set, use boolean operators to form a complex query.</td></tr>'
		+ '</table></div><b class="conbottom"><b class="conb4"></b><b class="conb3"></b><b class="conb2"></b><b class="conb1"></b></b></div>';
}	

function mainNavLinks(nosearchtips)
{
	var linkLocation = document.getElementById('mainNavLinks');
	if (linkLocation)
		linkLocation.innerHTML = '<div class="roundedContent"><b class="xtop"><b class="xb1"></b><b class="xb2"></b><b class="xb3"></b><b class="xb4"></b></b><div class="roundedContentInfo">'
		+ '<div align="center"><img src="/screens/nwmsuf.png" alt="Welcome to Owens Library"/></div>'
		+ '<div><img src="/screens/greenpaw.gif" alt=""/>&nbsp;<a href="http://www.nwmissouri.edu/library/question/index.htm">Ask a Librarian</a></div>'
		+ '<div><img src="/screens/greenpaw.gif" alt=""/>&nbsp;<a href="http://www.nwmissouri.edu/library/ill/index.htm">Interlibrary Loan</a></div>'
		+ '<div><img src="/screens/greenpaw.gif" alt=""/>&nbsp;<a href="http://www.nwmissouri.edu/library/teams/cmrform.htm">Suggest a Purchase</a></div>'
		// + '<div><img src="/screens/greenpaw.gif" alt=""/>&nbsp;<a href="http://www.amazon.com/gp/registry/wishlist/20TMZY56HZY02">Library Wish List</a></div>'
		+ '<div><img src="/screens/greenpaw.gif" alt=""/>&nbsp;<a href="http://www.nwmissouri.edu/library/app/newbooks">New Books List</a></div>'
		// + '<div><img src="/screens/greenpaw.gif" alt=""/>&nbsp;<a href="/search~S4">Search</a></div>'
		+ '<div><img src="/screens/greenpaw.gif" alt=""/>&nbsp;<a href="/patroninfo~S4">Your Account</a></div>'
		+ '<div><img src="/screens/greenpaw.gif" alt=""/>&nbsp;<a href="http://www.nwmissouri.edu/library/hours/hours.htm">Library Hours</a></div>'
		+ '<div><img src="/screens/greenpaw.gif" alt=""/>&nbsp;<a href="http://www.nwmissouri.edu/library/catalog/mobius.htm">Videos about MOBIUS</a></div>'
		+ '<div><img src="/screens/greenpaw.gif" alt=""/>&nbsp;<a href="http://www.nwmissouri.edu/library/CATALOG/FAQ.HTM">FAQs</a></div>'
		+ '</div><b class="xbottom"><b class="xb4"></b><b class="xb3"></b><b class="xb2"></b><b class="xb1"></b></b></div>';
		if (!nosearchtips)
			linkLocation.innerHTML += '<div id="searchTipsLink"><a href="#" onclick="javascript:toggleLayer(\'searchTipMain\');" >Need Search Tips?</a></div>';
}
