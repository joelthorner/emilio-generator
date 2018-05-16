Replace %loops% and ifs
-----------------------------------
```
([%]{1,2}\/?(if[A-Za-z0-9]{1,}|loop)[%]{1,2})
languages/*.js
<!-- ${1} -->
```

Replace %pages% and %banners% loops
-----------------------------------
```
([%]{1,2}\/?((Pages|pages)|(Banners|banners))-[0-9]{1,}-(Loop|loop)[%]{1,2})
languages/*.js
<!-- ${1} -->
```