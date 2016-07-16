'use strict'
var casper = require('casper').create()
casper.start('http://www.cnn.com', function() {
    this.echo(this.getTitle())
})
casper.then(function() {
    this.echo('You are scraping data from ' + this.getCurrentUrl())
})
casper.run(function() {
    this.echo('Suite ended').exit()
})
