Câu A1 
1. Inline CSS
Ví dụ:
<p style="color: red; font-size: 18px;">Hello World</p>
Ưu điểm:
    Áp dụng nhanh, trực tiếp lên phần tử
    Độ ưu tiên cao
Nhược điểm:
    Khó bảo trì
    Không tái sử dụng được
    Làm code HTML rối
Khi nên dùng:
    Test nhanh
    Style tạm thời

2. Internal CSS
Ví dụ:
<head>
    <style>
        p {
            color: blue;
        }
    </style>
</head>

Ưu điểm:
    Dễ quản lý hơn inline
    Viết tập trung trong 1 file
Nhược điểm:
    Không dùng lại cho nhiều trang
    Làm file HTML dài
Khi nên dùng:
    Website nhỏ
    Bài tập, demo
3. External CSS
Ví dụ:
<head>
    <link rel="stylesheet" href="style.css">
</head>
p {
    color: green;
}
Ưu điểm:
Tái sử dụng cao
    Dễ bảo trì
    Tách biệt HTML và CSS
Nhược điểm:
    Cần thêm file
    Có thể load chậm nếu mạng yếu
Khi nên dùng:
    Website thực tế
    Dự án lớn

Câu A2:
Kết quả các selector
h1
→ Chọn: ShopTLU
.price
→ Chọn:
25.990.000đ
45.990.000đ
#app header
→ Chọn toàn bộ nội dung trong header:
ShopTLU
Home
Products
About
nav a:first-child
→ Chọn: Home
.product.featured h2
→ Chọn: MacBook Pro
article > p
→ Chọn tất cả p là con trực tiếp của article:
25.990.000đ
Mô tả sản phẩm...
45.990.000đ
Mô tả sản phẩm...
a[href="/"]
→ Chọn: Home
.top-bar.dark h1
→ Chọn: ShopTLU

Câu A3:
Trường hợp 1: content-box
width = 400
padding = 20 × 2 = 40
border = 5 × 2 = 10

 Chiều rộng hiển thị = 400 + 40 + 10 = 450px

 Không gian chiếm = 450 + margin (10×2 = 20) = 470px

Trường hợp 2: border-box

 Chiều rộng hiển thị = 400px

 Content thực tế = 400 - 40 - 10 = 350px

 Không gian chiếm = 400 + 20 = 420px

Trường hợp 3: Margin collapse

 Khoảng cách = 40px

Giải thích:

Margin không cộng
Trình duyệt lấy giá trị lớn hơn

 Không phải 65px vì:

25 + 40 ≠ 65
→ chỉ lấy 40
Nâng cao
-10px và 40px
→ 40 + (-10) = 30px

 Khoảng cách = 30px

 Câu C1 
1. Tính chiều rộng thực tế (content-box)
Sidebar
width = 300px
padding = 20px × 2 = 40px
border = 1px × 2 = 2px

 Chiều rộng thực tế = 300 + 40 + 2 = 342px

Content
width = 660px
padding = 30px × 2 = 60px
border = 1px × 2 = 2px

Chiều rộng thực tế = 660 + 60 + 2 = 722px

Tổng chiều rộng
342 + 722 = 1064px

 Container chỉ có 960px → bị tràn

2. Giải thích layout bị vỡ
Tổng chiều rộng của .sidebar + .content lớn hơn container
Do dùng content-box, padding + border bị cộng thêm vào width
Kết quả:
→ .content không đủ chỗ → bị rớt xuống dòng
3. Cách sửa
 Cách 1: Dùng border-box
.sidebar, .content {
    box-sizing: border-box;
}

👉 Lúc này:

Width đã bao gồm padding + border
Tổng = 300 + 660 = 960px → vừa container

debug_layout.html
<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="debug_layout.css">
</head>
<body>

<div class="container">
    <div class="sidebar">Sidebar</div>
    <div class="content">Content</div>
</div>

</body>
</html>
debug_layout.css (Cách 1 - border-box)
.container {
    width: 960px;
    margin: 0 auto;
}

.sidebar, .content {
    float: left;
    box-sizing: border-box;
}

.sidebar {
    width: 300px;
    padding: 20px;
    border: 1px solid #ccc;
}

.content {
    width: 660px;
    padding: 30px;
    border: 1px solid #ccc;
}
debug_layout.css (Cách 2 - flexbox)
.container {
    width: 960px;
    margin: 0 auto;
    display: flex;
}

.sidebar {
    width: 300px;
    padding: 20px;
    border: 1px solid #ccc;
}

.content {
    flex: 1;
    padding: 30px;
    border: 1px solid #ccc;
}
Câu C2 
1. "Sản phẩm A" (h2)
Font-size:
.card .title { font-size: 20px }

 = 20px

Color:
.card { color: blue }
#featured .title { color: red }
.highlight { color: green !important }

 Kết quả: xanh lá (green)

Vì:

.highlight có !important → thắng tất cả
2. "Mô tả sản phẩm" (p trong featured)
.card p { color: inherit }
.card { color: blue }

 = blue

3. "Sản phẩm B" (h2)
Font-size:
.card .title { font-size: 20px }

 = 20px

Color:
Không có id
Không có !important

 kế thừa:

.card { color: blue }

 = blue

4. "Mô tả sản phẩm B" (p.highlight)
.highlight { color: green !important }

 = green
Element	Quy tắc thắng	Lý do
A h2	green	!important
A p	blue	inherit từ card
B h2	blue	kế thừa
B p	green	!important
File kiểm chứng
cascade_test.html
<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="cascade.css">
</head>
<body>

<div class="container">
    <div class="card" id="featured">
        <h2 class="title highlight">Sản phẩm A</h2>
        <p>Mô tả sản phẩm</p>
    </div>

    <div class="card">
        <h2 class="title">Sản phẩm B</h2>
        <p class="highlight">Mô tả sản phẩm B</p>
    </div>
</div>

</body>
</html>
cascade.css
body { font-size: 16px; color: #333; }
.container { font-size: 14px; }
.card { color: blue; }
.card .title { font-size: 20px; }
.card p { color: inherit; }
#featured .title { color: red; }
.highlight { color: green !important; }