## Hackerwriter

This was a XSS challenge converted into a CTF challenge.

it will load words from the text file into the page when typing. 
Once you reach over 300 characters (4 each keystroke) a parameter will appear.

the text file displays one of the earliest versions of the very first c compiler known to exist in the wild.
This compiler is licensed under the Caldera license. https://github.com/mortdeus/legacy-cc/blob/master/Caldera-license.pdf
- project: https://github.com/mortdeus/legacy-cc

## Vulnerability
If the http query passed takes an array and its value is over 50 characters and contains "script" it will var dump the object, which leads to input reflection. 

"w00t[]=______________________________________________script-reflected"


