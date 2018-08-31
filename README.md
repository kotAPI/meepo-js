# Meepo JS

Production - `https://cdn.rawgit.com/kotAPI/meepo-js/fa69e051/meepo.js`


### Usage

Add the script to your HTML
```html
<script src="./meepo.js"></script>
```

#### Loading the scripts 
```javascript
meepoJS.loadScripts(["script1","script2","script3"....,"script-n"],configObject).then(res => {
	console.log(res);
});
```

#### Understanding the response Object

The `loadScripts` function returns an object on loading all the scripts in the sequence,
the `status` is true if all scripts have loaded successfully, shows false if any of the script has failed.

Also returns two arrays of fields 'successful_URLs' and 'failed_URLs' that contain loaded scripts and failed script URLS respsectively

```javascript
{"status":true,"successful_URLs":[],"failed_URLs":[]}
```

#### ConfigObject

```javascript
configObject:{
	logging:true
}
```
pass this object for extra functionality

set `logging` to true if you want to log loaded/failed scripts and other log-based information.





# Contributing

We use babel-minify `https://github.com/babel/minify/tree/master/packages/babel-minify` to minify our final code.

Install this package and uglify the source into the dist folder with the name 'meepo.min.js'before sending a PR.

### Installing babel-minify

Use sudo if you're bombarded with no-enough-access errors
```
npm install babel-minify -g
```

then,

```
minify meepo.js --out-file dist/meepo.min.js
```

And then send a PR