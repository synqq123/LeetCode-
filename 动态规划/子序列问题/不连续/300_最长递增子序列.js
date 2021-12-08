/*  思路：
     1. dp[i]的定义
       dp[i]表示i之前包括i的最⻓上升⼦序列。

     2. 状态转移⽅程
       位置i的最⻓升序⼦序列等于j从0到i-1各个位置的最⻓升序⼦序列 + 1 的最⼤值。
       所以：if (nums[i] > nums[j]) dp[i] = max(dp[i], dp[j] + 1);
       注意这⾥不是要dp[i] 与 dp[j] + 1进⾏⽐较，⽽是我们要取dp[j] + 1的最⼤值。

     3. dp[i]的初始化
        每⼀个i，对应的dp[i]（即最⻓上升⼦序列）起始⼤⼩⾄少都是是1.
        
     4. 确定遍历顺序
        dp[i] 是有0到i-1各个位置的最⻓升序⼦序列 推导⽽来，那么遍历i⼀定是从前向后遍历。
        j其实就是0到i-1，遍历i的循环⾥外层，遍历j则在内层
*/

var lengthOfLIS = function (nums) {
    let len = nums.length
    let dp = new Array(len).fill(1)
    let max = 1
    for (let i = 1; i < len; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1)
                max = Math.max(max, dp[i])
            }
        }
    }
    return max
}