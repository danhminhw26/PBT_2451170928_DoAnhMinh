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