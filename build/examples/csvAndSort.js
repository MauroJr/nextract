"use strict";

/**
 * Example: CSV input and sort...
 */

console.log("Example still a WIP! ...");

/*
var path     = require('path'),
    Nextract = require(path.resolve(__dirname, '../nextract'));

var sampleEmployeesInputFilePath = path.resolve(process.cwd(), 'data/employees.csv'),
    sampleEmployeesOutputFilePath = path.resolve(process.cwd(), 'data/employees_output.csv');

var transform = new Nextract("csvAndSort");

transform.loadPlugins('Core', ['Input', 'Output', 'Sort', 'Logger'])
  .then(function() {
    //Take the keys from the first record and use them to make a csv header
    var outputCsvConfig = {
      header: true,
      columns: true
    };

    transform.Plugins.Core.Input.readFile('csv', sampleEmployeesInputFilePath)
      //FIXME: Sort never gets the EOF signal from Input.readFile...
      //.pipe(transform.Plugins.Core.Sort.sortIn(['last_name'], ['asc']))
      //.pipe(transform.Plugins.Core.Sort.sortOut())
      .pipe(transform.Plugins.Core.Output.writeFile('csv', sampleEmployeesOutputFilePath, outputCsvConfig))
      .on('data', function(resultingData) {
        //NOTE: This listener must exist, even if it does nothing. Otherwise, the end event is not fired.

        //Uncomment to dump the resulting data for debugging
        //console.log("resultingData", resultingData.length);
        console.log("resultingData", resultingData);
      })
      .on('finish', function(){
        transform.Plugins.Core.Logger.info('Transform finished!');
        transform.Plugins.Core.Logger.info(sampleEmployeesOutputFilePath, 'has been written');
      })
      .on('end', function() {
        transform.Plugins.Core.Logger.info('Transform ended!');
      });
  })
  .catch(function(err) {
    transform.Plugins.Core.Logger.error('Transform failed: ', err);
  });
*/
