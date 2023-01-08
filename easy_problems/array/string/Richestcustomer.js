//leetcode.com/problems/richest-customer-wealth/

const maximumWealth = accounts =>  Math.max(...accounts.map(acc => acc.reduce((prev, cur) => prev + cur, 0)));