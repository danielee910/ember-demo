/* eslint-env node */
'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    // Add options here
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  // import css files
  app.import('bower_components/select2/dist/css/select2.min.css');
  app.import('bower_components/bootstrap/dist/css/bootstrap.min.css');
  app.import('bower_components/bootstrap-daterangepicker/daterangepicker.css');
  app.import('bower_components/dropzone/dist/dropzone.css');
  app.import('bower_components/datatables.net-bs/css/dataTables.bootstrap.min.css');
  app.import('bower_components/fullcalendar/dist/fullcalendar.min.css');
  app.import('bower_components/perfect-scrollbar/css/perfect-scrollbar.min.css');

  // import js files
  app.import('bower_components/jquery/dist/jquery.min.js');
  app.import('bower_components/moment/moment.js');
  app.import('bower_components/chart.js/dist/Chart.min.js');
  app.import('bower_components/select2/dist/js/select2.full.min.js');
  app.import('bower_components/ckeditor/ckeditor.js');
  app.import('bower_components/bootstrap-validator/dist/validator.min.js');
  app.import('bower_components/bootstrap-daterangepicker/daterangepicker.js');
  app.import('bower_components/dropzone/dist/dropzone.js');
  app.import('bower_components/editable-table/mindmup-editabletable.js');
  app.import('bower_components/datatables.net/js/jquery.dataTables.min.js');
  app.import('bower_components/datatables.net-bs/js/dataTables.bootstrap.min.js');
  app.import('bower_components/fullcalendar/dist/fullcalendar.min.js');
  app.import('bower_components/perfect-scrollbar/js/perfect-scrollbar.jquery.min.js');
  app.import('bower_components/tether/dist/js/tether.min.js');
  app.import('bower_components/bootstrap/js/dist/util.js');
  app.import('bower_components/bootstrap/js/dist/alert.js');
  app.import('bower_components/bootstrap/js/dist/button.js');
  app.import('bower_components/bootstrap/js/dist/carousel.js');
  app.import('bower_components/bootstrap/js/dist/collapse.js');
  app.import('bower_components/bootstrap/js/dist/dropdown.js');
  app.import('bower_components/bootstrap/js/dist/modal.js');
  app.import('bower_components/bootstrap/js/dist/tab.js');
  app.import('bower_components/bootstrap/js/dist/tooltip.js');
  app.import('bower_components/bootstrap/js/dist/popover.js');

  return app.toTree();
};
