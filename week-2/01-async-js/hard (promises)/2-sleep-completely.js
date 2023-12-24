/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function sleep(seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds);
    // let startTime = Date.now();
    // if (Date.now() - startTime > seconds) {
    //   resolve();
    // }
  });
}

module.exports = sleep;
