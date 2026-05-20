PHẦN A — ĐỌC HIỂU
Câu A1. Grid System

Đoạn code:

<div class="container">
    <div class="row">
        <div class="col-12 col-md-6 col-lg-3">Box 1</div>
        <div class="col-12 col-md-6 col-lg-3">Box 2</div>
        <div class="col-12 col-md-6 col-lg-3">Box 3</div>
        <div class="col-12 col-md-6 col-lg-3">Box 4</div>
    </div>
</div>

Bootstrap grid có 12 cột.

Layout theo từng kích thước
Kích thước	< 768px	768px - 991px	≥ 992px
Class áp dụng	col-12	col-md-6	col-lg-3
Số cột mỗi box	12	6	3
Số box / hàng	1	2	4
Layout

Mobile:

[Box1]
[Box2]
[Box3]
[Box4]

Tablet:

[Box1][Box2]
[Box3][Box4]

Desktop:

[Box1][Box2][Box3][Box4]
col-md-6 nghĩa là gì?
md là breakpoint medium (>=768px)
6 nghĩa là chiếm 6/12 cột

=> phần tử chiếm 50% chiều ngang ở tablet trở lên.

Tại sao không cần col-sm-12?

Vì Bootstrap dùng mobile-first.

Class col-12 đã áp dụng cho mobile và sm nên không cần viết thêm col-sm-12.

Câu A2. Utilities & Components
d-none d-md-block
d-none = display none
d-md-block = từ md trở lên display block

Kết quả:

Mobile: ẩn
Tablet/Desktop: hiện
5 spacing utilities
mt-3
margin-top: 1rem;
mb-auto
margin-bottom: auto;
px-4
padding-left/right: 1.5rem;
py-2
padding-top/bottom: 0.5rem;
ms-5
margin-left: 3rem;
Khác nhau giữa container
.container

Width cố định theo breakpoint.

.container-fluid

Chiếm toàn bộ chiều ngang.

.container-md

Full width đến md, sau đó fixed width.

PHẦN C — PHÂN TÍCH
Câu C1. Tùy biến Bootstrap

Muốn đổi màu primary của Bootstrap thì cần dùng Sass.

Các bước:
Bước 1

Cài bootstrap bằng npm:

npm install bootstrap
Bước 2

Tạo file custom.scss

$primary: #E63946;

@import "bootstrap/scss/bootstrap";
Bước 3

Compile SCSS:

sass custom.scss custom.css
Tại sao không nên override trực tiếp?

Ví dụ:

.btn-primary{
    background:red;
}

Cách này không tốt vì:

chỉ đổi riêng button
không đổi toàn bộ component khác
dễ conflict CSS
khó maintain

Dùng Sass variables sẽ đồng bộ toàn bộ framework.

Câu C2. So sánh Bootstrap và CSS thuần
CSS thuần
.nav{
    display:flex;
    justify-content:space-between;
}

.card{
    border:1px solid #ddd;
    padding:20px;
}
So sánh
Tiêu chí	CSS thuần	Bootstrap
Dòng CSS	nhiều	ít
Thời gian	lâu	nhanh
Responsive	tự viết	có sẵn
Tùy biến	cao	trung bình
Khi nên dùng Bootstrap
Landing page
Dashboard
Prototype
Làm nhanh
Khi không nên dùng Bootstrap
UI quá custom
Website animation phức tạp
Design system riêng

TRACK B — TAILWINDCSS
PHẦN A — ĐỌC HIỂU
Câu A1. Utility Classes
<div class="flex items-center justify-between p-4 bg-white shadow-md rounded-lg 
hover:shadow-xl transition-shadow duration-300">
Giải thích
flex → display:flex
items-center → align-items:center
justify-between → justify-content:space-between
p-4 → padding:1rem
bg-white → background trắng
shadow-md → đổ bóng vừa
rounded-lg → bo góc lớn
hover:shadow-xl → hover shadow lớn
transition-shadow → animation shadow
duration-300 → thời gian animation 300ms
img classes
w-16 → width 64px
h-16 → height 64px
rounded-full → hình tròn
object-cover → ảnh fit khung
text classes
ml-4 → margin-left 1rem
flex-1 → flex-grow 1
text-lg → font lớn
font-semibold → semi-bold
text-gray-800 → màu xám đậm
truncate → ellipsis text
button classes
px-4 → padding ngang
py-2 → padding dọc
bg-blue-500 → nền xanh
text-white → chữ trắng
rounded-md → bo góc vừa
hover:bg-blue-600 → hover đổi màu
focus:ring-2 → ring 2px
focus:ring-blue-300 → ring xanh
Câu A2. Responsive & States
Responsive prefix
md: → >=768px
lg: → >=1024px
xl: → >=1280px

Ví dụ:

md:grid-cols-2 lg:grid-cols-4
mobile: mặc định
md: 2 cột
lg: 4 cột
State modifiers
hover: → khi hover
focus: → khi focus
active: → khi click
group-hover: → child đổi style khi parent hover
Class tương đương d-none d-md-flex
hidden md:flex
hidden → display none
md:flex → từ md trở lên display flex
Câu C1 (10đ) — Tailwind vs CSS thuần
1. HTML file size (CSS thuần vs Tailwind)
✔ CSS thuần

Ví dụ component navbar + card:

HTML ngắn
nhưng phải viết thêm CSS riêng
<div class="navbar"></div>
<div class="card"></div>

CSS:

.navbar {
    display: flex;
    justify-content: space-between;
    padding: 16px;
}

.card {
    border: 1px solid #ddd;
    padding: 20px;
}

➡ Tổng: 2 file (HTML + CSS)

✔ Tailwind
<div class="flex justify-between p-4"></div>

<div class="border p-5"></div>

➡ CSS file gần như không cần viết thêm

➡ Nhưng HTML sẽ dài hơn

📊 So sánh
Tiêu chí	CSS thuần	Tailwind
HTML size	nhỏ	dài hơn
CSS size	lớn	gần như không cần
Tổng file	2 file	1 file
2. Maintainability (dễ đọc / dễ sửa)
CSS thuần

❌ Khó debug khi project lớn:

phải tìm class trong file CSS
dễ conflict class
dễ override nhầm
Tailwind

✔ dễ sửa trực tiếp ngay HTML:

<div class="p-4 bg-blue-500 text-white rounded">

✔ thấy ngay style ở đâu

❌ nhưng:

HTML dài
khó nhìn nếu quá nhiều class
Kết luận:
CSS thuần	Tailwind
dễ tách logic	dễ sửa nhanh
khó maintain project lớn	dễ maintain UI component
3. Reusability
CSS thuần

Dùng lại bằng class:

.btn-primary {
    background: blue;
    padding: 10px;
}

✔ dễ reuse

Tailwind

Dùng lại bằng:

✔ @apply
.btn-primary {
    @apply bg-blue-500 text-white px-4 py-2 rounded;
}

➡ tạo class reusable giống CSS thuần

So sánh reuse
CSS thuần	Tailwind
class tự viết	dùng @apply
component hóa rõ	utility-based
Câu C2 (10đ) — Performance
1. Vì sao Tailwind CSS file cuối nhỏ hơn Bootstrap?
Bootstrap:
build sẵn tất cả components:
modal
carousel
dropdown
grid system
utilities

➡ file CSS rất lớn (nhiều KB đến MB)

Tailwind:
chỉ cung cấp utility classes
không build sẵn component

➡ chỉ generate class bạn đang dùng

2. Tailwind PurgeCSS / JIT là gì?
✔ PurgeCSS (hoặc content scanning)

Tailwind sẽ:

👉 scan toàn bộ HTML / JS / Vue / React

tìm class đang dùng
❌ loại bỏ:
class không dùng
CSS dư thừa

Ví dụ:

bg-red-500 (không dùng → bị xóa)
text-xl (không dùng → bị xóa)
✔ chỉ giữ lại:
class thực sự xuất hiện trong code
✔ JIT (Just-In-Time)
tạo CSS theo nhu cầu realtime
ví dụ:
p-13

➡ Tailwind tự generate nếu có dùng

3. Khi nào KHÔNG nên dùng TailwindCSS?
❌ Trường hợp 1: Project nhỏ / landing page đơn giản

Ví dụ:

website 1 trang
giới thiệu công ty

👉 Tailwind sẽ:

quá nhiều class
không cần thiết

✔ CSS thuần nhanh hơn

❌ Trường hợp 2: Team không quen Tailwind

Ví dụ:

team backend làm UI nhẹ
người không biết utility-first

👉 sẽ:

khó đọc class
khó maintain

✔ Bootstrap / CSS truyền thống dễ hơn
