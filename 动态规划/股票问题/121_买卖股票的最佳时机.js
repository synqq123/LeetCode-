 function maxProfit(prices) {
            let len = prices.length
            if (len === 1) return 0;
            let prev = 0;
            let curr = 0;
            let min = prices[0];
            for (let i = 1; i < prices.length; i++) {
                curr = Math.max(prev, prices[i] - min);
                min = Math.min(min, prices[i])
                prev = curr;
            }
            return curr;
 }
    
