#!/usr/bin/env node
// Generated by CoffeeScript 2.4.1
(function() {
  var Modules, module, name;

  Modules = require("./allmodules.js");

  global.allModules = Modules;

  for (name in Modules) {
    module = Modules[name];
    module.initialize();
  }

  Modules.startupmodule.cliStartup();

}).call(this);
