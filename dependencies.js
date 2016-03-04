/**
 * Created by RojoJ on 03/03/2016.
 */
var PackageDependents = require("package-dependents");

// Get is-there's dependents
PackageDependents("core-js", function (err, packages) {
  //packages.forEach(function (c) {
    //console.log(c.name + (c.author && c.author.name ? " by " + c.author.name : ""));
    console.log(packages);
  //});
});