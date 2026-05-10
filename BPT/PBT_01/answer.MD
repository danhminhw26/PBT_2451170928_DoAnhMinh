CAU_A1. Các bước khi truy cập shoppee
  1.DNS Lookup
  2.Thiết lập kết nối TCP
  3.Xác thực bảo mật (HTTPS)
  4.Server xử lý và trả về HTTP Response
  5.Tải tài nguyên phụ
  6.Render trang
CAU_A2.
  1.Dùng div class header thay vì header
  2.Dùng div class main thay vì main
  3.Tiêu đề không dùng h1 h2
  4.Ảnh không có alt
CAU_A4.
  thead chứa tiều đề bảng
  tbody chứa dât
  tfoot chứa phần cuối bảng(nhận xét)



Câu C1 — Thiết kế cấu trúc HTML

html
<header>
    <!-- nav vì đây là khu vực điều hướng chính của website -->
    <nav>
        <!-- ul vì menu không cần thứ tự cụ thể -->
        <ul>
            <li><a href="#">Trang chủ</a></li>
            <li><a href="#">Danh mục</a></li>
            <li><a href="#">Liên hệ</a></li>
        </ul>
    </nav>
</header>

<!-- Breadcrumb giúp người dùng biết vị trí hiện tại -->
<nav aria-label="breadcrumb"> <!-- nav vì đây là điều hướng -->
    <ol> <!-- ol vì breadcrumb có thứ tự phân cấp -->
        <li><a href="#">Trang chủ</a></li>
        <li><a href="#">Điện thoại</a></li>
        <li>iPhone 16</li>
    </ol>
</nav>
<main>
    <section>
        <!-- Khu vực ảnh sản phẩm -->
        <div> <!-- div dùng để nhóm layout -->
            <!-- figure dùng để chứa ảnh có ý nghĩa -->
            <figure>
                <img src="#" alt="Ảnh sản phẩm 1">
            </figure>
            <figure>
                <img src="#" alt="Ảnh sản phẩm 2">
            </figure>
            <figure>
                <img src="#" alt="Ảnh sản phẩm 3">
            </figure>
            <figure>
                <img src="#" alt="Ảnh sản phẩm 4">
            </figure>
            <figure>
                <img src="#" alt="Ảnh sản phẩm 5">
            </figure>
        </div>
        <!-- Thông tin sản phẩm -->
        <article> <!-- article vì đây là nội dung độc lập -->
            <h1>Tên sản phẩm</h1> <!-- h1 cho tiêu đề chính -->
            <p>Giá</p>
            <p>Đánh giá sao</p>
            <p>Mô tả ngắn</p>
        </article>
    </section>
    <!-- Bảng thông số kỹ thuật -->
    <section>
        <h2>Thông số kỹ thuật</h2>
        <!-- table vì dữ liệu dạng bảng -->
        <table>
            <tr>
                <th>Tên</th>
                <th>Giá trị</th>
            </tr>
            <tr>
                <td>CPU</td>
                <td>...</td>
            </tr>
        </table>
    </section>
    <!-- Khu vực đánh giá -->
    <section>
        <h2>Đánh giá & Bình luận</h2>
        <!-- article cho mỗi bình luận riêng biệt -->
        <article>
            <p>Người dùng A</p>
            <p>Nội dung bình luận</p>
        </article>
    </section>

</main>

<!-- Sidebar sản phẩm tương tự -->
<aside> <!-- aside vì nội dung phụ -->
    <h2>Sản phẩm tương tự</h2>
    <ul>
        <li><a href="#">Sản phẩm 1</a></li>
        <li><a href="#">Sản phẩm 2</a></li>
    </ul>
</aside>

<!-- Footer chứa thông tin cuối trang -->
<footer>
    <p>&copy; 2026</p>
</footer>

Câu C2 — So sánh & Tranh luận

 không nên dùng `<div>` cho mọi thứ. Semantic HTML vẫn cần thiết.

Thứ nhất là về SEO, mấy thẻ như `<header>`, `<main>` giúp Google hiểu cấu trúc trang rõ hơn, dễ index hơn.
Thứ hai là accessibility, người dùng screen reader có thể nhảy nhanh giữa các phần như `<nav>` hay `<main>`.

Ví dụ đơn giản: dùng `<button>` thì bấm bằng bàn phím được luôn, còn dùng `<div>` thì phải code thêm mà vẫn không chuẩn bằng.

Tuy nhiên `<div>` vẫn dùng tốt khi chia layout (flex, grid), kiểu như chỉ để bố cục thôi.

Nên kết hợp cả hai, không nên lạm dụng `<div>`.


  
