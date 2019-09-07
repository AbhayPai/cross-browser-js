import Element from "./../base/element";
import Event from "./../base/event";
import Structure from "./../base/structure";
import Str from "./../base/string";
import Cookie from "./../base/cookie";
import DateUtil from "./../base/date";
import Mobile from "./../components/mobile";
import Browser from "./../components/browser-detect";

// Base Elements
export function hasClass() {
    return Element.hasClass.apply(this, arguments);
}

export function addClass() {
    return Element.addClass.apply(this, arguments);
}

export function removeClass() {
    return Element.removeClass.apply(this, arguments);
}

export function toggleClass() {
    return Element.toggleClass.apply(this, arguments);
}

export function siblings() {
    return Element.siblings.apply(this, arguments);
}

export function findSibling() {
    return Element.findSibling.apply(this, arguments);
}

export function hasCollection() {
    return Element.hasCollection.apply(this, arguments);
}

export function findParent() {
    return Element.findParent.apply(this, arguments);
}

export function isNodeList() {
    return Element.isNodeList.apply(this, arguments);
}

export function nextElementSibling() {
    return Element.nextElementSibling.apply(this, arguments);
}

export function previousElementSibling() {
    return Element.previousElementSibling.apply(this, arguments);
}

export function getAttributes() {
    return Element.getAttributes.apply(this, arguments);
}

export function scrollTo() {
    return Element.scrollTo.apply(this, arguments);
}

export function getCoords() {
    return Element.getCoords.apply(this, arguments);
}

export function prepend() {
    return Element.prepend.apply(this, arguments);
}

// Base Events
export function ready() {
    return Event.ready.apply(this, arguments);
}

export function addEventListener() {
    return Event.addEventListener.apply(this, arguments);
}

export function removeEventListener() {
    return Event.removeEventListener.apply(this, arguments);
}

export function invoke() {
    return Event.invoke.apply(this, arguments);
}

export function listen() {
    return Event.listen.apply(this, arguments);
}

export function delegate() {
    return Event.delegate.apply(this, arguments);
}

export function getTarget() {
    return Event.getTarget.apply(this, arguments);
}

export function preventDefault() {
    return Event.preventDefault.apply(this, arguments);
}

export function triggerEvent() {
    return Event.triggerEvent.apply(this, arguments);
}

// Base Structure
export function forEach() {
    return Structure.forEach.apply(this, arguments);
}

export function isArray() {
    return Structure.isArray.apply(this, arguments);
}

export function forEachElement() {
    return Structure.forEachElement.apply(this, arguments);
}

export function arrayFilter() {
    return Structure.arrayFilter.apply(this, arguments);
}

export function filter() {
    return Structure.filter.apply(this, arguments);
}

export function clone() {
    return Structure.clone.apply(this, arguments);
}

export function isEmptyObject() {
    return Structure.isEmptyObject.apply(this, arguments);
}

export function empty() {
    return Structure.empty.apply(this, arguments);
}

export function append() {
    return Structure.append.apply(this, arguments);
}

export function serialize() {
    return Structure.serialize.apply(this, arguments);
}

export function inArray() {
    return Structure.inArray.apply(this, arguments);
}

// Base Strings
export function trim() {
    return Str.trim.apply(this, arguments);
}

export function replaceStringTokens() {
    return Str.replaceStringTokens.apply(this, arguments);
}

export function getAsciiSum() {
    return Str.getAsciiSum.apply(this, arguments);
}

// Base Cookie
export function getCookie() {
    return Cookie.getCookie.apply(this, arguments);
}

export function removeCookie() {
    return Cookie.removeCookie.apply(this, arguments);
}

// Component Mobile Detect
export function mobileTest() {
    return Mobile.test();
}
export function isMobile() {
    return Mobile.isMobile();
}

// Component Browser Detect
export function broswerTest() {
    return Browser.test();
}

export function isOpera() {
    return Browser.isOpera();
}

export function isFirefox() {
    return Browser.isFirefox();
}

export function isIE() {
    return Browser.isIE();
}

export function isEdge() {
    return Browser.isEdge();
}

export function isChrome() {
    return Browser.isChrome();
}
