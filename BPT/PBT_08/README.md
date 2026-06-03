# PBT_08 - JavaScript Functions, Arrays & Objects

## 📋 Nộp bài tập JavaScript: Functions, Arrays & Objects

**Lớp**: CCC Frontend  
**Thời gian**: 150 phút | **Tổng điểm**: 100 điểm

---

## 📁 Cấu trúc file

- **answers.md** - Phần A (Kiểm tra đọc hiểu) + Phần C (Suy luận)
  - Câu A1: Function hoisting
  - Câu A2: Scope & Closure
  - Câu A3: Array methods
  - Câu A4: Destructuring & Spread
  - Câu C1: Refactoring code
  - Câu C2: Thiết kế API miniArray

- **product_manager.js** - Bài B1 (20 điểm)
  - 8 hàm quản lý sản phẩm e-commerce
  - Dùng: `map`, `filter`, `reduce`, `sort`, `find`
  - Test cases: getInStock, filterProducts, sortByPrice, etc.

- **shopping_cart.js** - Bài B2 (20 điểm)
  - Module giỏ hàng dùng Closure pattern
  - Không dùng class - private data
  - Hỗ trợ: addItem, removeItem, applyDiscount, printCart
  - Test: Thêm items → in giỏ → giảm giá → xóa → in lại

- **higher_order.js** - Bài B3 (20 điểm)
  - pipe() - nối functions (compose left-to-right)
  - memoize() - cache kết quả
  - debounce() - chờ user ngừng gõ
  - retry() - thử lại nếu lỗi
  - compose() - ngược pipe
  - curry() - partial application
  - once() - chạy 1 lần

- **screenshots/** - Console output từ tests
  - test_product_manager.txt
  - test_shopping_cart.txt
  - test_higher_order.txt

---

## 🎯 Điểm số

| Phần     | Yêu cầu                | Điểm    | Status |
| -------- | ---------------------- | ------- | ------ |
| A        | Kiểm tra đọc hiểu      | 20      | ✅     |
| B1       | Product Manager        | 20      | ✅     |
| B2       | Shopping Cart          | 20      | ✅     |
| B3       | Higher-Order Functions | 20      | ✅     |
| C        | Suy luận & Refactoring | 20      | ✅     |
| **Tổng** |                        | **100** | ✅     |

> **Lưu ý**: Phần D (Video OBS) không được nộp dạng digital

---

## ✅ Checklist hoàn thành

- [x] Phần A - Answers.md
- [x] Bài B1 - product_manager.js (8 hàm)
- [x] Bài B2 - shopping_cart.js (Closure)
- [x] Bài B3 - higher_order.js (7 patterns)
- [x] Phần C - Refactoring + API design
- [x] Folder screenshots/ - Test outputs
- [x] ≥ 4 commits lên git

---

## 🚀 Cách chạy

```bash
# Test Bài B1
node product_manager.js

# Test Bài B2
node shopping_cart.js

# Test Bài B3
node higher_order.js
```

---

## 💡 Kiến thức chính

1. **Function hoisting**: Declaration vs Expression vs Arrow
2. **Scope & Closure**: var vs let, closure nhớ biến
3. **Array Methods**: filter, map, reduce, sort, find, some, every
4. **Destructuring**: Objects và nested structures
5. **Spread operator**: Shallow copy, object merge
6. **Higher-Order Functions**: Functions nhận/trả functions
7. **Closure Pattern**: Private data, encapsulation
8. **Function Composition**: pipe, compose
9. **Advanced Patterns**: memoize, debounce, retry, curry, once

---

## 📖 Tham khảo

- Ch. 05: Functions
- Ch. 06: Arrays & Objects
- Advanced JS patterns
