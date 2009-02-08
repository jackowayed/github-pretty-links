// ==UserScript==
// @name          Github Master Links
// @namespace     http://jackowayed/github.com/
// @description   Changes the ugly links with the commit id
// @include       http://github.com/*/master*
// @include       https://github.com/*/master*
// @exclude       http://github.com/*/commits/master
// @exclude       https://github.com/*/commits/master
// ==/UserScript==



function xpath(query) {
return document.evaluate(query, document, null,
XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);
}
