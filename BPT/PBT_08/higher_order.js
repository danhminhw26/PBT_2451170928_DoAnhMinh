// 1. pipe() — Nối chuỗi functions
function pipe(...fns) {
  return (value) => fns.reduce((acc, fn) => fn(acc), value);
}

const process = pipe(
  (x) => x * 2, // 5 → 10
  (x) => x + 10, // 10 → 20
  (x) => x.toString(), // 20 → "20"
  (x) => "Kết quả: " + x,
);

console.log("=== PIPE FUNCTION ===");
console.log(process(5)); // → "Kết quả: 20"
console.log(process(10)); // → "Kết quả: 40"

// 2. memoize() — Cache kết quả
function memoize(fn) {
  const cache = {};
  return (n) => {
    if (n in cache) {
      return cache[n];
    }
    const result = fn(n);
    cache[n] = result;
    return result;
  };
}

const expensiveCalc = memoize((n) => {
  console.log("Đang tính...");
  let result = 0;
  for (let i = 0; i < n; i++) result += i;
  return result;
});

console.log("\n=== MEMOIZE FUNCTION ===");
console.log(expensiveCalc(1000000)); // → "Đang tính..." → 499999500000
console.log(expensiveCalc(1000000)); // → (không in "Đang tính...", lấy cache!)
console.log(expensiveCalc(100)); // → "Đang tính..." (cache mới)
console.log(expensiveCalc(100)); // → (từ cache)

// 3. debounce() — Chờ user ngừng gõ mới thực hiện
function debounce(fn, delay) {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn(...args), delay);
  };
}

const search = debounce((query) => {
  console.log("Searching:", query);
}, 500);

console.log("\n=== DEBOUNCE FUNCTION ===");
search("java"); // Huỷ
search("javasc"); // Huỷ
search("javascript"); // Chạy sau 500ms
// Gọi liên tục → chỉ lần cuối mới chạy

// Simulate: Gõ từng ký tự với khoảng cách
setTimeout(() => search("j"), 100);
setTimeout(() => search("ja"), 200);
setTimeout(() => search("jav"), 300);
setTimeout(() => search("java"), 400);
setTimeout(() => search("javas"), 500);
// Chỉ "javas" được search sau 1000ms tính từ lần cuối

// 4. retry() — Thử lại nếu lỗi
async function retry(fn, maxAttempts = 3) {
  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      return await fn();
    } catch (error) {
      console.log(`Attempt ${attempt}/${maxAttempts} failed:`, error.message);
      if (attempt === maxAttempts) {
        throw new Error(`Failed after ${maxAttempts} attempts`);
      }
    }
  }
}

console.log("\n=== RETRY FUNCTION ===");

// Simulated API call that fails first 2 times
let attemptCount = 0;
const unstableAPI = async () => {
  attemptCount++;
  if (attemptCount < 3) {
    throw new Error("Connection timeout");
  }
  return "Success! Data fetched.";
};

(async () => {
  try {
    const result = await retry(unstableAPI, 3);
    console.log("Result:", result);
  } catch (error) {
    console.log("Error:", error.message);
  }
})();

// 5. compose() — Nối ngược (phải sang trái)
function compose(...fns) {
  return (value) => fns.reduceRight((acc, fn) => fn(acc), value);
}

const reverseProcess = compose(
  (x) => "Result: " + x,
  (x) => x.toString(),
  (x) => x + 10,
  (x) => x * 2,
);

console.log("\n=== COMPOSE FUNCTION (reverse pipe) ===");
console.log(reverseProcess(5)); // (5 * 2) + 10 = 20 → "Result: 20"

// 6. curry() — Chuyển function thành chuỗi partial functions
function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn(...args);
    }
    return (...nextArgs) => curried(...args, ...nextArgs);
  };
}

const add = (a, b, c) => a + b + c;
const curriedAdd = curry(add);

console.log("\n=== CURRY FUNCTION ===");
console.log(curriedAdd(1)(2)(3)); // → 6
console.log(curriedAdd(1, 2)(3)); // → 6
console.log(curriedAdd(1)(2, 3)); // → 6
console.log(curriedAdd(1, 2, 3)); // → 6

// 7. once() — Gọi hàm chỉ 1 lần
function once(fn) {
  let called = false;
  let result;
  return (...args) => {
    if (!called) {
      called = true;
      result = fn(...args);
    }
    return result;
  };
}

const initialize = once(() => {
  console.log("Initializing system...");
  return "System ready";
});

console.log("\n=== ONCE FUNCTION ===");
console.log(initialize()); // → "Initializing system..." → "System ready"
console.log(initialize()); // → "System ready" (không chạy hàm, trả về cache)
console.log(initialize()); // → "System ready"
