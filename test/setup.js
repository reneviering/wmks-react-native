"use strict";
global.__TEST__ = true;

var chai = require("chai");
var sinon = require('sinon');

require('react-native-mock/mock.js');

global.sinon = sinon;
global.expect = chai.expect;
