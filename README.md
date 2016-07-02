# js-CssSelectorSpecificity
A selector's specificity is calculated as follows:

0)Selectors inside the negation pseudo-class are counted
1a)count the number of ID selectors in the selector
2b)count the number of class selectors, attributes selectors, and pseudo-classes in the selector
3c)count the number of type selectors and pseudo-elements in the selector


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


(io propongo: #([-][_A-Z]{2}|[_A-Z][-_A-Z\d]+))

-?(?:[_a-z]|[\200-\377]|\\[0-9a-f]{1,6}(\r\n|[ \t\r\n\f])?|\\[^\r\n\f0-9a-f])(?:[_a-z0-9-]|[\200-\377]|\\[0-9a-f]{1,6}(\r\n|[ \t\r\n\f])?|\\[^\r\n\f0-9a-f])*
So all of your listed character except “-” and “_” are not allowed if used directly.
But you can encode them using a backslash foo\~bar or using the unicode notation foo\7E bar
