// ==UserScript==
// @name          Github Master Links
// @namespace     http://jackowayed/github.com/
// @description   Changes the ugly links with the commit id
// @include       http://github.com/*/master*
// @include       https://github.com/*/master*
// @exclude       http://github.com/*/commits/master
// @exclude       https://github.com/*/commits/master
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
    link.href=link.href.replace(/[\w^_]{40,40}/, "master");
}


function xpath(query) {
    return document.evaluate(query, document, null,
			     XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);
}
