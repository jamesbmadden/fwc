## 0.3.0
<ul>
  <li>Properties now come from a config object rather than the deconstruction assignment to allow better compatibility.</li>
  <li>The returned instance of the Component class now has many methods to allow it to be used in the construction of other components.</li>
</ul>

## 0.2.1
<ul>
  <li>Components class now has a static "defined" method that returns an array of defined components.</li>
  <li>Functions are now better documented to provide better autocomplete suggestions in editors such as Visual Studio Code.</li>
</ul>


## 0.2.0
<ul>
  <li>Lit-Html is now exported directly from the fwc package, so you no longer have to install and import from the lit-html package seperately.</li>
  <li>Instance is now exported as a second argument in the render function, allowing for interaction with properties.</li>
  <li>New Example Component, Simple Counter, to show the uses for the instance argument, and modified the original example.</li>
</ul>

## 0.1.1
<ul>
  <li>Added README and CHANGELOG markdown files, and ignored .DS_STORE files to massively reduce package size.</li>
</ul>

## 0.1.0
<ul>
  <li>Initial test release of the library to NPM. Major limitations hold back this release from actual use in complex components.</li>
</ul>