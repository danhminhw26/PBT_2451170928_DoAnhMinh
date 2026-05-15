
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


B3:
# SCSS Compile Command

Biên dịch SCSS thành CSS bằng lệnh:

```bash
npx --yes sass scss/style.scss css/style.css
```

Kết quả:

- `scss/style.scss` bao gồm partials `_variables.scss`, `_mixins.scss` và `_components.scss`
- `css/style.css` là file CSS đã biên dịch

Câu C1 — Phân tích trang web thực

## Trang web được chọn

Trang web được chọn để phân tích là: YouTube.

Website: https://www.youtube.com


# 1. Giao diện Mobile (375px)

## Navigation

Ở kích thước mobile, thanh navigation được tối giản hơn nhiều.

- Sidebar bên trái bị ẩn.
- Xuất hiện icon hamburger menu.
- Thanh tìm kiếm thu nhỏ thành icon kính lúp.
- Các nút chức năng được sắp xếp gọn hơn.

## Grid Content

Video hiển thị theo:

- 1 cột

Thumbnail lớn để người dùng dễ thao tác trên điện thoại.

## Thành phần bị ẩn

Một số thành phần bị ẩn gồm:

- Sidebar đầy đủ
- Một số menu text
- Các shortcut phụ

## Font Size

Font chữ nhỏ hơn desktop để phù hợp màn hình nhỏ.

---

# 2. Giao diện Tablet (768px)

## Navigation

- Search bar hiển thị đầy đủ hơn.
- Sidebar chuyển sang dạng icon nhỏ.
- Thanh menu rộng hơn mobile.

## Grid Content

Video hiển thị khoảng:

- 2 đến 3 cột

Khoảng cách giữa các card hợp lí hơn.

## Thành phần bị ẩn

- Một số text trong sidebar
- Một vài quảng cáo phụ

## Font Size

Font lớn hơn mobile và dễ đọc hơn.

---

# 3. Giao diện Desktop (1440px)

## Navigation

Navigation hiển thị đầy đủ:

- Logo
- Search bar
- Notifications
- Upload
- Avatar
- Sidebar đầy đủ

## Grid Content

Video hiển thị:

- 4 đến 6 cột

Layout tận dụng gần như toàn bộ chiều ngang màn hình.

## Thành phần bị ẩn

Hầu như không có thành phần nào bị ẩn.

## Font Size

Font chữ lớn hơn và khoảng trắng nhiều hơn mobile.

---

# Media Queries tìm được trong DevTools

## Media Query 1

```css
@media (max-width: 656px) {
    .guide-renderer {
        display: none;
    }
}
Ý nghĩa

Ẩn sidebar khi màn hình nhỏ hơn 656px.

Media Query 2
@media (min-width: 1000px) {
    .video-grid {
        grid-template-columns: repeat(4, 1fr);
    }
}
Ý nghĩa

Tăng số lượng cột video khi ở màn hình desktop.

Nhận xét chung

YouTube sử dụng:

Responsive Design
CSS Grid
Flexbox
Media Queries

Trang web tối ưu khá tốt trên cả mobile, tablet và desktop.

Câu C2 — Thiết kế Responsive Strategy
Đề bài

Thiết kế trang đặt bàn nhà hàng responsive gồm:

Header
Hero Image
Grid ảnh món ăn
Form đặt bàn
Google Maps
Footer
1. Wireframe Mobile (375px)
┌──────────────┐
│ LOGO   MENU │
├──────────────┤
│ HERO IMAGE  │
├──────────────┤
│ FOOD IMAGE  │
│ FOOD IMAGE  │
│ FOOD IMAGE  │
├──────────────┤
│ BOOKING FORM│
├──────────────┤
│ GOOGLE MAP  │
├──────────────┤
│ FOOTER      │
└──────────────┘
Đặc điểm
Layout 1 cột
Form nằm dưới gallery
Navigation dùng hamburger menu
Một số text dài có thể bị ẩn
2. Wireframe Tablet (768px)
┌────────────────────┐
│ LOGO NAV PHONE     │
├────────────────────┤
│ HERO IMAGE         │
├──────────┬─────────┤
│ FOOD     │ FOOD    │
│ FOOD     │ FOOD    │
│ FOOD     │ FOOD    │
├────────────────────┤
│ BOOKING FORM       │
├────────────────────┤
│ GOOGLE MAP         │
├────────────────────┤
│ FOOTER             │
└────────────────────┘
Đặc điểm
Gallery hiển thị 2 cột
Layout rộng hơn mobile
Map nằm dưới form
3. Wireframe Desktop (1440px)
┌────────────────────────────────────┐
│ LOGO NAVIGATION PHONE             │
├────────────────────────────────────┤
│ HERO IMAGE FULL WIDTH             │
├─────────────────┬──────────────────┤
│ FOOD GRID       │ BOOKING FORM    │
│ 3 COLUMNS       │                  │
│                 │                  │
├─────────────────┴──────────────────┤
│ GOOGLE MAP FULL WIDTH             │
├────────────────────────────────────┤
│ FOOTER                            │
└────────────────────────────────────┘
Đặc điểm
Layout chia 2 cột
Gallery hiển thị 3 cột
Form đặt bàn nằm bên phải
Không cần ẩn nhiều thành phần



CSS SKELETON
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* MOBILE */

body {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
}

.hero img {
    width: 100%;
    height: auto;
}

.food-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 16px;
    padding: 16px;
}

.booking-form {
    padding: 16px;
}

.map {
    width: 100%;
    height: 300px;
}

footer {
    padding: 20px;
    text-align: center;
}

/* TABLET */

@media (min-width: 768px) {

    .food-grid {
        grid-template-columns: 1fr 1fr;
    }

}

/* DESKTOP */

@media (min-width: 1024px) {

    .main-layout {
        display: grid;
        grid-template-columns: 2fr 1fr;
        gap: 30px;
        padding: 20px;
    }

    .food-grid {
        grid-template-columns: repeat(3, 1fr);
    }

}
