'use strict';
import tests from './src/index.js';
const run_tests = (tests) => Promise.all(tests).catch(error => error);
run_tests(tests);
export default run_tests;