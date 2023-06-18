//https://leetcode.com/problems/sleep/

//solution 1

async function sleep(millis) {
    return new Promise((res) => setTimeout(res, millis))
}

//solution 2

async function sleep(millis) {
    return new Promise((delayresolve, reject) => {
      if (typeof millis !== 'number' || isNaN(millis)) {
        reject(new Error('Invalid argument. Expected a number.'));
      } else {
        setTimeout(delayresolve, millis);
      }
    });
  }