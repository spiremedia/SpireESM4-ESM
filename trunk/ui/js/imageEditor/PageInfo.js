/*
PageInfo.js
Copyright (C) 2004-2006 Peter Frueh (http://www.ajaxprogrammer.com/)

This library is free software; you can redistribute it and/or
modify it under the terms of the GNU Lesser General Public
License as published by the Free Software Foundation; either
version 2.1 of the License, or (at your option) any later version.

This library is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
Lesser General Public License for more details.

You should have received a copy of the GNU Lesser General Public
License along with this library; if not, write to the Free Software
Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301  USA
*/

PageInfo = {
	getResolutionWidth  : function() { return self.screen.width; },
	getResolutionHeight : function() { return self.screen.height; },
	getColorDepth       : function() { return self.screen.colorDepth; },

	getScrollLeft       : function() { var scrollLeft = 0; if (document.documentElement && document.documentElement.scrollLeft && document.documentElement.scrollLeft != 0) { scrollLeft = document.documentElement.scrollLeft; } if (document.body && document.body.scrollLeft && document.body.scrollLeft != 0) { scrollLeft = document.body.scrollLeft; } if (window.pageXOffset && window.pageXOffset != 0) { scrollLeft = window.pageXOffset; } return scrollLeft; },
	getScrollTop        : function() { var scrollTop = 0; if (document.documentElement && document.documentElement.scrollTop && document.documentElement.scrollTop != 0) { scrollTop = document.documentElement.scrollTop; } if (document.body && document.body.scrollTop && document.body.scrollTop != 0) { scrollTop = document.body.scrollTop; } if (window.pageYOffset && window.pageYOffset != 0) { scrollTop = window.pageYOffset; } return scrollTop; },

	getDocumentWidth    : function() { var documentWidth = 0; var w1 = document.body.scrollWidth; var w2 = document.body.offsetWidth; if (w1 > w2) { documentWidth = document.body.scrollWidth; } else { documentWidth = document.body.offsetWidth; } return documentWidth; },
	getDocumentHeight   : function() { var documentHeight = 0; var h1 = document.body.scrollHeight; var h2 = document.body.offsetHeight; if (h1 > h2) { documentHeight = document.body.scrollHeight; } else { documentHeight = document.body.offsetHeight; } return documentHeight; },
	getVisibleWidth     : function() { var visibleWidth = 0; if (self.innerWidth) { visibleWidth = self.innerWidth; } else if (document.documentElement && document.documentElement.clientWidth) { visibleWidth = document.documentElement.clientWidth; } else if (document.body) { visibleWidth = document.body.clientWidth; } return visibleWidth; },
	getVisibleHeight    : function() { var visibleHeight = 0; if (self.innerHeight) { visibleHeight = self.innerHeight; } else if (document.documentElement && document.documentElement.clientHeight) { visibleHeight = document.documentElement.clientHeight; } else if (document.body) { visibleHeight = document.body.clientHeight; } return visibleHeight; },

	getElementLeft      : function(element) { var element = (typeof element == "string") ? document.getElementById(element) : element; var left = element.offsetLeft; var oParent = element.offsetParent; while (oParent != null) { left += oParent.offsetLeft; oParent = oParent.offsetParent; } return left; },
	getElementTop       : function(element) { var element = (typeof element == "string") ? document.getElementById(element) : element; var top = element.offsetTop; var oParent = element.offsetParent; while (oParent != null) { top += oParent.offsetTop; oParent = oParent.offsetParent; } return top; },
	getElementWidth     : function(element) { var element = (typeof element == "string") ? document.getElementById(element) : element; return element.offsetWidth; },
	getElementHeight    : function(element) { var element = (typeof element == "string") ? document.getElementById(element) : element; return element.offsetHeight; },

	getMouseX           : function() { return PageInfo.mouseX; },
	getMouseY           : function() { return PageInfo.mouseY; },


	// HELPER CODE FOR TRACKING MOUSE POSITION
	mouseX: 0,
	mouseY: 0,
	onMouseMove: function(e) { e = (!e) ? window.event : e; PageInfo.mouseX = e.clientX + PageInfo.getScrollLeft(); PageInfo.mouseY = e.clientY + PageInfo.getScrollTop(); }
};
if (document.addEventListener) {
	document.addEventListener("mousemove", PageInfo.onMouseMove, false);
} else if (document.attachEvent) {
	document.attachEvent("onmousemove", PageInfo.onMouseMove);
}