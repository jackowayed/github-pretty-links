// ==UserScript==
// @name          Github Master Links
// @namespace     http://jackowayed/github.com/
// @description   Changes the ugly links with the commit id
// @include       http://github.com/*
// @include       https://github.com/*
// @exclude       http://github.com/*/*/commits*
// @exclude       https://github.com/*/*/commits*
// @exclude       http://github.com/*/*/blame*
// @exclude       https://github.com/*/*/blame*
// ==/UserScript==

// thanks to Dive Into Greasemonkey http://diveintogreasemonkey.org/ 
// which is copyright 2005 by Mark Pilgrim.
// and licensed under the GNU General Public License
// The code is adapted from the book, and thus is also licensed under the GNU GPL


var allLinks, thisLink;
allLinks = xpath('//a[@href]');
for (var i = 0; i < allLinks.snapshotLength; i++) {
    link = allLinks.snapshotItem(i);
// do something with thisLink
    branch_name = branchName(location.href);
    if (branch_name!=null)
	link.href=link.href.replace(/[\w^_]{40,40}/, branch_name);
}

function branchName(url){
    return url.split("/")[6];
}

function xpath(query) {
    return document.evaluate(query, document, null,
			     XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);
}
