# coffee-store
Joe's Coffee Store website for HTML/CSS/JavaScript practice

- 2nd practice project
- Languages/Frameworks used : HTML, CSS
- Template used : boilerplate 6.1.0  
---
- Things that I got errors and spent quiet a time to figure out what was wrong :
1. Text in <p> and some other tags : As font-size increase, margin top, bottom get increased as well as default. So it's important to use below code to prevent unexpected margins.  
<pre>* {  
  margin: 0;  
  padding: 0;  
}</pre>
  
2. When css file is in css folder and load image in another folder "img", make sure to add "../" (ex: "../img/image-name")  

3. When two divs are inlined by "float", they are aligned top  
<pre>
TOP       RIGHT
MIDDLE
BOTTOM
</pre>
  When two divs are inlined by "inline-block", they are aligned bottom  
<pre>
TOP       
MIDDLE
BOTTOM    RIGHT
</pre>

4. Any div that is attached to "float" div ignores margin toward the "float" div. So make empty div with "clear: both;" between the "float" div and other working div.
