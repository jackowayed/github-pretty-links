// ==UserScript==
// @name          Github Master Links
// @namespace     http://jackowayed/github.com/
// @description   Changes the ugly links with the commit id to links with branch name, selectively leaving times when the old site kept commitids (in history, for example)
// @include       http://github.com/*
// @include       https://github.com/*
// @exclude       http://github.com/*/*/commits*
// @exclude       https://github.com/*/*/commits*
// @exclude       http://github.com/*/*/commit*
// @exclude       https://github.com/*/*/commit*
// @exclude       http://github.com/*/*/blame*
// @exclude       https://github.com/*/*/blame*
// ==/UserScript==

// thanks to Dive Into Greasemonkey http://diveintogreasemonkey.org/ 
// which is copyright 2005 by Mark Pilgrim.
// and licensed under the GNU General Public License
// The code is adapted from the book and is realeased under the MIT License


var allLinks, thisLink;
allLinks = xpath('//a[@href]');
for (var i = 0; i < allLinks.snapshotLength; i++) {
    var link = allLinks.snapshotItem(i);
// do something with thisLink
    if (shouldChange(link)){
	branch_name = branchName(location.href);
	if (branch_name!=null)
	    link.href=link.href.replace(/[\w^_]{40,40}/, branch_name);
    }
}

function shouldChange(link){
    // Test all of the reasons not to change it ...


    // check if it's in right side of that blue box 
    // w/ the commit tree parent links
    // TODO make this work. 
    var p3 = nthParent(link);
    if (p3!=null && p3.id=="commit")
	return false;
    

    // ... then change it if there's no reason not to
    return true;
}
function nthParent(link, n){
    if (n<=0)
	return link;
    var p = link.parentNode;
    if (p!=null)
	return nthParent(p, n-1);
}

function branchName(url){
    return url.split("/")[6];
}

function xpath(query) {
    return document.evaluate(query, document, null,
			     XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);
}
