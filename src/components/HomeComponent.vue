<template>
<h2>CKEditor Error Demo</h2>
Uncaught runtime errors are displayed when a page containing more than one ckeditor is <strong>opened directly or refreshed</strong>.<br>
The error is not happening on pages with single ckeditor displayed.<br>
<br>
<strong>Repro Steps:</strong>

<ol>
<li>npm run serve</li>
<li>Click on <a href="http://localhost:8080/demo-with-three-editors" target="_blank">http://localhost:8080/demo-with-three-editors</a> to open directly on browser</li>
<li>Refresh the page</li>
</ol>

<ol>
<li>npm run serve</li>
<li>Click on <a href="http://localhost:8080/demo-with-two-editors" target="_blank">http://localhost:8080/demo-with-two-editors</a> to open directly on browser</li>
<li>Refresh the page</li>
</ol>

The issue is easily reproducible when there exists more number of editors.<br>
For more details, Refer the <a href="https://github.com/wiris/html-integrations/issues/816" target="_blank">Github Issue</a>.<br>
</template>