
# Câu A1 — Viewport & Mobile-First
## 1. Thẻ meta viewport chuẩn

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

### Giải thích:

- `width=device-width`
  → Chiều rộng website sẽ bằng chiều rộng thiết bị.

- `initial-scale=1.0`
  → Mức zoom ban đầu là 100%.

---

## 2. Nếu thiếu thẻ viewport

Nếu không có thẻ này thì trên iPhone hoặc điện thoại:

- Website sẽ bị thu nhỏ
- Chữ rất bé
- Trình duyệt giả lập website như màn hình desktop
- Ngườidùng phải zoom để đọc 

Responsive sẽ hoạt động không đúng.

---

## 3. Mobile-First và Desktop-First

| Mobile-First | Desktop-First |
|---|---|
| Thiết kế mobile trước | Thiết kế desktop trước |
| Dùng `min-width` | Dùng `max-width` |
| CSS nhẹ hơn | CSS thường nặng hơn |
| Phổ biến hiện nay | Ít dùng hơn |

---

## 4. Ví dụ Mobile-First

```css
.container {
    width: 100%;
}

@media (min-width: 768px) {
    .container {
        width: 750px;
    }
}
```

---

## 5. Ví dụ Desktop-First

```css
.container {
    width: 750px;
}

@media (max-width: 768px) {
    .container {
        width: 100%;
    }
}
```

---

## 6. Vì sao Mobile-First được khuyên dùng?

- Người dùng điện thoại nhiều hơn desktop
- Tối ưu hiệu năng tốt hơn
- CSS dễ quản lí
- Google ưu tiên Mobile-First indexing

---

# Câu A2 — Breakpoints

| Breakpoint | Kích thước | Thiết bị |
|---|---|---|
| xs | <576px | Điện thoại nhỏ |
| sm | ≥576px | Điện thoại lớn |
| md | ≥768px | Tablet |
| lg | ≥992px | Laptop |
| xl | ≥1200px | Desktop lớn |
| xxl | ≥1400px | Màn hình lớn |



## Ví dụ lưới sản phẩm

| Thiết bị | Số cột |
|---|---|
| Mobile | 1 cột |
| Tablet | 2 cột |
| Laptop | 3 cột |
| Desktop lớn | 4 cột |

---

# Câu A3 — Media Queries

## CSS

```css
.container {
    width: 100%;
    padding: 10px;
}

@media (min-width: 576px) {
    .container {
        width: 540px;
    }
}

@media (min-width: 768px) {
    .container {
        width: 720px;
    }
}

@media (min-width: 992px) {
    .container {
        width: 960px;
    }
}

@media (min-width: 1200px) {
    .container {
        width: 1140px;
    }
}
```

---

## Bảng kết quả

| Chiều rộng màn hình | `.container width` |
|---|---|
| 375px | 100% |
| 600px | 540px |
| 800px | 720px |
| 1000px | 960px |
| 1400px | 1140px |

---

# Câu A4 — SCSS Basics

## 1. Variables

Dùng để lưu giá trị.

```scss
$primary-color: blue;

h1 {
    color: $primary-color;
}
```

---

## 2. Nesting

Cho phép viết CSS lồng nhau.

```scss
nav {
    ul {
        display: flex;
    }

    li {
        list-style: none;
    }
}
```

---

## 3. Mixins

Tái sử dụng đoạn CSS.

```scss
@mixin center {
    display: flex;
    justify-content: center;
    align-items: center;
}

.box {
    @include center;
}
```

---

## 4. Extend / Inheritance

Kế thừa CSS từ class khác.

```scss
.button {
    padding: 10px;
    border-radius: 5px;
}

.primary-btn {
    @extend .button;
    background: blue;
}
```

---

## 5. Tại sao trình duyệt không đọc được SCSS?

Vì SCSS không phải CSS chuẩn.

Trình duyệt chỉ hiểu file `.css`.

---

## 6. Làm sao chuyển SCSS sang CSS?

Cần dùng SCSS Compiler hoặc Sass.

Ví dụ:

```bash
sass style.scss style.css
```

Sau khi compile:

```scss
style.scss
```

↓

```css
style.css
```

Trình duyệt sẽ đọc file CSS đã được chuyển đổi.


B1:
