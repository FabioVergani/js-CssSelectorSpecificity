function SpecificityOf(selector,inline=0){
 function f(i,p){const r=s.match(p);if(r!==null){m[i]+=r.length;}}
 const s=selector,m=[inline,0,0,0];
//type-selectors
 f(3,/(^|\s)[A-Z]+/gim);
//#id
 f(1,/\#(([-][_A-Z]{2,})|([_A-Z]([-_A-Z\d]+)?))/gim);
//[attributes]
 f(2,/\[.*?\]/gim);
//.class
 f(2,/\.(([-][_A-Z]{2,})|([_A-Z]([-_A-Z\d]+)?))/gim);
//:pseudo-classes except ':not'
 f(2,/:(hover|focus|active|visited|link|empty|lang|scope|target|root|fullscreen|default|dir|left|right|optional|any|valid|in(determinate|valid)|(in|out\-of)\-range|(requir|check|((dis|en)abl))ed|(first|only|last)\-(child|of\-type)|(((nth(\-last)?)\-(child|of\-type))\(.*\))|((\-.+\-)?(read\-(write|only))))/gim);
//pseudo-elements
 f(3,/([:]{1,2}(before|after|first\-(letter|line)))|(::(marker|backdrop|(spelling|grammar)\-error|((\-.+\-)?((selection|placeholder|fill(\-(lower|upper))?)|(progress\-(bar|value))|(thumb|track)|(range\-(progress|thumb|track))))))/gim);
 return m;
};
//
console.dir(SpecificityOf('body:not(html #ss.red):not(:focus) a.red:link'));
console.dir(SpecificityOf(' h1 + *[rel=up]'));
