/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number[][]} queries
 * @return {number[]}
 */
var resultArray = function(nums, k, queries) {
    const n = nums.length;

    let size = 1;
    while (size < n) size <<= 1;

    const H = new Array(2 * size * k).fill(0);
    const prod = new Array(2 * size).fill(1 % k);

    const pull = (i) => {
        const lc = 2 * i;
        const rc = lc + 1;
        const lp = prod[lc];

        const bi = i * k;
        const bl = lc * k;
        const br = rc * k;

        for (let q = 0; q < k; q++) {
            H[bi + q] = H[bl + q];
        }

        for (let q = 0; q < k; q++) {
            const c = H[br + q];

            if (c) {
                H[bi + (lp * q) % k] += c;
            }
        }

        prod[i] = (lp * prod[rc]) % k;
    };

    for (let i = 0; i < n; i++) {
        const v = nums[i] % k;
        const nd = size + i;

        H[nd * k + v] = 1;
        prod[nd] = v;
    }

    for (let i = size - 1; i >= 1; i--) {
        pull(i);
    }

    const update = (idx, val) => {
        const nd = size + idx;
        const base = nd * k;

        for (let q = 0; q < k; q++) {
            H[base + q] = 0;
        }

        const v = val % k;

        H[base + v] = 1;
        prod[nd] = v;

        let cur = nd >> 1;

        while (cur) {
            pull(cur);
            cur >>= 1;
        }
    };

    const ans = [];

    for (const [idx, val, start, x] of queries) {
        update(idx, val);

        let l = start + size;
        let r = n + size;

        const ln = [];
        const rn = [];

        while (l < r) {
            if (l & 1) {
                ln.push(l++);
            }

            if (r & 1) {
                rn.push(--r);
            }

            l >>= 1;
            r >>= 1;
        }

        const res = new Array(k).fill(0);
        let p = 1 % k;

        for (const node of ln) {
            const base = node * k;

            for (let q = 0; q < k; q++) {
                const c = H[base + q];

                if (c) {
                    res[(p * q) % k] += c;
                }
            }

            p = (p * prod[node]) % k;
        }

        for (let i = rn.length - 1; i >= 0; i--) {
            const node = rn[i];
            const base = node * k;

            for (let q = 0; q < k; q++) {
                const c = H[base + q];

                if (c) {
                    res[(p * q) % k] += c;
                }
            }

            p = (p * prod[node]) % k;
        }

        ans.push(res[x]);
    }

    return ans;
};