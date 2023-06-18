//https://leetcode.com/problems/sleep/

async function sleep(millis) {
    return new Promise((res) => setTimeout(res, millis))
}