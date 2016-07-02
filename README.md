# js-CssSelectorSpecificity
A selector's specificity is calculated as follows:

https://www.w3.org/TR/CSS21/cascade.html#specificity

count 1 if the declaration is from is a 'style' attribute rather than a rule with a selector, 0 otherwise (= a) (In HTML, values of an element's "style" attribute are style sheet rules. These rules have no selectors, so a=1, b=0, c=0, and d=0.)
count the number of ID attributes in the selector (= b)
count the number of other attributes and pseudo-classes in the selector (= c)
count the number of element names and pseudo-elements in the selector (= d)
The specificity is based only on the form of the selector. In particular, a selector of the form "[id=p33]" is counted as an attribute selector (a=0, b=0, c=1, d=0), even if the id attribute is defined as an "ID" in the source document's DTD.

Selectors inside the negation pseudo-class are counted like any other, 
but the negation itself does not count as a pseudo-class.

Concatenating the four numbers a-b-c-d (in a number system with a large base) gives the specificity.

The negation pseudo-class, :not(X), is a functional notation taking a simple selector (excluding the negation pseudo-class itself) as an argument. It represents an element that is not represented by its argument.

Negations may not be nested; :not(:not(...)) is invalid. Note also that since pseudo-elements are not simple selectors, they are not a valid argument to :not().



Some examples:

 *             {}  /* a=0 b=0 c=0 d=0 -> specificity = 0,0,0,0 */
 li            {}  /* a=0 b=0 c=0 d=1 -> specificity = 0,0,0,1 */
 li:first-line {}  /* a=0 b=0 c=0 d=2 -> specificity = 0,0,0,2 */
 ul li         {}  /* a=0 b=0 c=0 d=2 -> specificity = 0,0,0,2 */
 ul ol+li      {}  /* a=0 b=0 c=0 d=3 -> specificity = 0,0,0,3 */
 h1 + *[rel=up]{}  /* a=0 b=0 c=1 d=1 -> specificity = 0,0,1,1 */
 ul ol li.red  {}  /* a=0 b=0 c=1 d=3 -> specificity = 0,0,1,3 */
 li.red.level  {}  /* a=0 b=0 c=2 d=1 -> specificity = 0,0,2,1 */
 #x34y         {}  /* a=0 b=1 c=0 d=0 -> specificity = 0,1,0,0 */
 style=""          /* a=1 b=0 c=0 d=0 -> specificity = 1,0,0,0 */

Any character except NUL is allowed in CSS class names in CSS.
(If CSS contains NUL (escaped or not), the result is undefined.

In CSS, identifiers (including element names, classes, and IDs in selectors)
can contain only the characters [a-z0-9] and ISO 10646 characters U+00A1 and higher,
plus the hyphen (-) and the underscore (_);
they cannot start with a digit, or a hyphen followed by a digit.
Identifiers can also contain escaped characters and any ISO 10646 character as a numeric code.
For instance, the identifier "B&W?" may be written as "B\&W\?" or "B\26 W\3F".

https://www.w3.org/TR/CSS21/grammar.html#scanner

h[0-9a-f]
nonascii [\240-\377]
unicode \\{h}{1,6}(\r\n|[ \t\r\n\f])?
escape {unicode}|\\[^\r\n\f0-9a-f]

Basically1, a name must begin with an underscore (_), a hyphen (-), or a letter(a–z), followed by any number of hyphens, underscores, letters, or numbers. There is a catch: if the first character is a hyphen, the second character must2 be a letter or underscore, and the name must be at least 2 characters long.

-?[_a-zA-Z]+[_a-zA-Z0-9-]*


(io propongo: gim #([-][_A-Z]{2,}|[_A-Z]([-_A-Z\d]+)?)

-?(?:[_a-z]|[\200-\377]|\\[0-9a-f]{1,6}(\r\n|[ \t\r\n\f])?|\\[^\r\n\f0-9a-f])(?:[_a-z0-9-]|[\200-\377]|\\[0-9a-f]{1,6}(\r\n|[ \t\r\n\f])?|\\[^\r\n\f0-9a-f])*
So all of your listed character except “-” and “_” are not allowed if used directly.
But you can encode them using a backslash foo\~bar or using the unicode notation foo\7E bar
