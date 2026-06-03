# PHẦN A — KIỂM TRA ĐỌC HIỂU (20 điểm)

## Câu A1 (5đ) — Function Declaration vs Expression vs Arrow

### 1. Function Declaration

```javascript
function tinhThueBaoHiem(luong) {
  const thue = luong > 11000000 ? luong * 0.1 : 0;
  return {
    thuong: luong,
    thuc_nhan: luong - thue,
  };
}
```

### 2. Function Expression

```javascript
const tinhThueBaoHiem = function (luong) {
  const thue = luong > 11000000 ? luong * 0.1 : 0;
  return {
    thuong: luong,
    thuc_nhan: luong - thue,
  };
};
```

### 3. Arrow Function

```javascript
const tinhThueBaoHiem = (luong) => {
  const thue = luong > 11000000 ? luong * 0.1 : 0;
  return {
    thuong: luong,
    thuc_nhan: luong - thue,
  };
};
```

### Hoisting Differences:

**Function Declaration** được hoisted hoàn toàn (nó được kéo lên đầu scope kèm theo body):

```javascript
console.log(tinhThueBaoHiem(15000000)); // ✅ Hoạt động ngay (hoisted)

function tinhThueBaoHiem(luong) {
  const thue = luong > 11000000 ? luong * 0.1 : 0;
  return { thuong: luong, thuc_nhan: luong - thue };
}
```

**Function Expression & Arrow Function** chỉ hoisted Variable (không hoisted với giá trị):

```javascript
console.log(tinhThueBaoHiem(15000000)); // ❌ ReferenceError: Cannot access before initialization

const tinhThueBaoHiem = (luong) => {
  const thue = luong > 11000000 ? luong * 0.1 : 0;
  return { thuong: luong, thuc_nhan: luong - thue };
};
```

**Kết luận**: Function Declaration khác ở chỗ nó được hoisted với body đầy đủ, còn const/let không hoisted với giá trị (Temporal Dead Zone).

---

## Câu A2 (5đ) — Scope & Closure

### Đoạn 1 Output:

```
1
2
3
2
2
```

**Giải thích**: Hàm `counter()` tạo closure, biến `count` được "nhớ" trong object được trả về. Mỗi lần gọi `increment()` hay `decrement()` đều thay đổi biến `count` chung.

### Đoạn 2 Output:

```
var: 3
var: 3
var: 3
let: 0
let: 1
let: 2
```

**Giải thích**:

- **`var`**: Có **function scope** (không có block scope), nên `i` được chia sẻ trong toàn bộ for loop. Khi setTimeout chạy, `i` đã = 3 → in `var: 3` 3 lần.
- **`let`**: Có **block scope**, mỗi lần lặp tạo một biến `j` mới, closure "nhớ" giá trị `j` của lần lặp đó → in `let: 0, 1, 2`.

---

## Câu A3 (5đ) — Array Methods

```javascript
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 1. Lấy các số chẵn
nums.filter((n) => n % 2 === 0); // → [2, 4, 6, 8, 10]

// 2. Nhân mỗi số với 3
nums.map((n) => n * 3); // → [3, 6, 9, 12, 15, 18, 21, 24, 27, 30]

// 3. Tính tổng tất cả
nums.reduce((sum, n) => sum + n, 0); // → 55

// 4. Tìm số đầu tiên > 7
nums.find((n) => n > 7); // → 8

// 5. Kiểm tra CÓ số > 10 không
nums.some((n) => n > 10); // → false

// 6. Kiểm tra TẤT CẢ đều > 0
nums.every((n) => n > 0); // → true

// 7. Tạo mảng "Số X là [chẵn/lẻ]"
nums.map((n) => `Số ${n} là ${n % 2 === 0 ? "chẵn" : "lẻ"}`);
// → ["Số 1 là lẻ", "Số 2 là chẵn", ...]

// 8. Đảo ngược mảng (không mutate gốc)
[...nums].reverse(); // → [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
```

---

## Câu A4 (5đ) — Object Destructuring & Spread

```javascript
const product = {
  name: "iPhone 16",
  price: 25990000,
  specs: { ram: 8, storage: 256, color: "Titan" },
};

// Destructuring
const {
  name,
  price,
  specs: { ram, color },
} = product;
console.log(name, price, ram, color); // → iPhone 16 25990000 8 Titan
console.log(specs); // → ReferenceError: specs is not defined
// (vì specs được destructure, không tạo biến 'specs')

// Spread
const updated = { ...product, price: 23990000, sale: true };
console.log(updated.price); // → 23990000 (đã override)
console.log(updated.sale); // → true (thêm property mới)
console.log(product.price); // → 25990000 (gốc không đổi, shallow copy)

// Spread gotcha
const copy = { ...product };
copy.specs.ram = 16;
console.log(product.specs.ram); // → 16 ❌ (shallow copy! specs vẫn reference cùng object)
// Giải thích: ...product chỉ copy shallow level 1,
// specs là object, vẫn reference cùng object gốc
```

---

---

# PHẦN C — SUY LUẬN (20 điểm)

## Câu C1 (10đ) — Refactor Code

### TRƯỚC (ugly code):

```javascript
function processOrders(orders) {
  var result = [];
  for (var i = 0; i < orders.length; i++) {
    if (orders[i].status === "completed") {
      if (orders[i].total > 100000) {
        var item = {};
        item.id = orders[i].id;
        item.customer = orders[i].customer;
        item.total = orders[i].total;
        item.discount = orders[i].total * 0.1;
        item.finalTotal = orders[i].total - item.discount;
        result.push(item);
      }
    }
  }
  // Sort by finalTotal descending
  for (var j = 0; j < result.length; j++) {
    for (var k = j + 1; k < result.length; k++) {
      if (result[j].finalTotal < result[k].finalTotal) {
        var temp = result[j];
        result[j] = result[k];
        result[k] = temp;
      }
    }
  }
  return result;
}
```

### SAU (refactored, ≤10 lines):

```javascript
function processOrders(orders) {
  return orders
    .filter((order) => order.status === "completed" && order.total > 100000)
    .map(({ id, customer, total }) => ({
      id,
      customer,
      total,
      discount: total * 0.1,
      finalTotal: total * 0.9,
    }))
    .sort((a, b) => b.finalTotal - a.finalTotal);
}
```

**Cải tiến**:

- `filter()` thay thế if-if lồng
- `map()` + destructuring thay thế vòng lặp để tạo items
- `sort()` thay thế bubble sort xấu xí
- Dùng arrow functions, const (ES6+)
- 7 dòng code thay vì 20+ dòng

---

## Câu C2 (10đ) — Thiết kế API

```javascript
const miniArray = {
  map(arr, fn) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
      result.push(fn(arr[i], i, arr));
    }
    return result;
  },

  filter(arr, fn) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
      if (fn(arr[i], i, arr)) {
        result.push(arr[i]);
      }
    }
    return result;
  },

  reduce(arr, fn, initialValue) {
    let accumulator = initialValue;
    for (let i = 0; i < arr.length; i++) {
      accumulator = fn(accumulator, arr[i], i, arr);
    }
    return accumulator;
  },
};

// Test:
console.log(miniArray.map([1, 2, 3], (x) => x * 2)); // → [2, 4, 6]
console.log(miniArray.filter([1, 2, 3, 4], (x) => x > 2)); // → [3, 4]
console.log(miniArray.reduce([1, 2, 3, 4], (a, b) => a + b, 0)); // → 10
```

**Chi tiết**:

- **map**: Tạo mảng mới, áp dụng callback trên mỗi phần tử (trả về giá trị mới)
- **filter**: Tạo mảng mới, chỉ giữ phần tử pass điều kiện
- **reduce**: Tích lũy kết quả từ accumulator + từng phần tử
- Mỗi callback nhận `(value, index, array)` như built-in
