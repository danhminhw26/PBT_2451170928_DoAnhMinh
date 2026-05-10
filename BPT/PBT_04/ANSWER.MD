Câu A1:


| Position | Vẫn chiếm chỗ trong flow? | Tham chiếu vị trí | Cuộn theo trang? | Use case |
| `static` | Có | Vị trí mặc định của document | Có | Layout bình thường |
| `relative` | Có | So với vị trí gốc của chính nó | Có | Dịch nhẹ element, làm mốc cho `absolute` |
| `absolute` | Không | Parent gần nhất có `position` ≠ `static` | Có | Tooltip, dropdown, badge |
| `fixed` | Không | Viewport (màn hình) | Không | Navbar cố định, nút chat |
| `sticky` | Có | Theo scroll | Vừa có vừa không | Header dính khi cuộn |

-Khi parent gần nhất có position khác static.

Câu A2:

Trường hợp 1:Chia đều theo chiều ngang

Trường hợp 2:Mỗi item gần 50% chiều ngang nên 1 hàng chứa 2 item.

Truờng hợp 3:bố cục,Các item nằm trên cùng 1 hàng,Khoảng trống chia đều giữa các item
Căn giữa theo chiều dọc

Trường hợp 4:3 items → bố cục
Grid có 3 cột:
Cột 1 = 200px
Cột 2 = phần còn lại
Cột 3 = 200px

Trường hợp 5:
7 items → bố cục
Grid có 3 cột bằng nhau.
7 items sẽ xếp:
Hàng 1: 1 2 3
Hàng 2: 4 5 6
Hàng 3: 7

 Câu C1 — Flexbox vs Grid

 1. Navigation bar ngang (logo + menu + buttons)

Em sẽ dùng Flexbox.

Vì navbar là layout 1 chiều theo hàng ngang nên Flexbox sẽ phù hợp hơn.  
Flexbox giúp căn giữa và chia khoảng cách giữa các phần tử dễ dàng bằng `justify-content` và `align-items`.

Ví dụ:

```css
header{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
2. Lưới ảnh Instagram
dùng Grid.
Vì Grid phù hợp với layout dạng lưới gồm nhiều hàng và cột.
Ảnh Instagram thường cần chia cột đều nhau nên Grid sẽ dễ quản lý hơn Flexbox.
Ví dụ:

.gallery{
    display: grid;
    grid-template-columns: repeat(3,1fr);
    gap: 10px;
}
3. 

kết hợp Flexbox và Grid.

Flexbox dùng để chia phần sidebar và content theo chiều ngang.
Bên trong từng phần có thể tiếp tục dùng Grid hoặc Flexbox để sắp xếp nội dung.
vd:

.layout{
    display: flex;
}
4.

 dùng Grid.

Vì Grid giúp chia các cột đều nhau dễ hơn, code gọn hơn và responsive tốt hơn.

Ví dụ:

footer{
    display: grid;
    grid-template-columns: repeat(4,1fr);
}

5
 dùng Flexbox.

Vì card sản phẩm thường sắp xếp nội dung theo chiều dọc:

ảnh
tên
giá
nút mua

Flexbox với flex-direction: column sẽ phù hợp hơn.

Ví dụ:

.card{
    display: flex;
    flex-direction: column;
}

Nút mua có thể luôn nằm dưới đáy bằng:

button{
    margin-top: auto;
}

Câu C2 — Debug Flexbox
Lỗi 1 — Card không đều chiều cao
Nguyên nhân

Các card có lượng nội dung khác nhau nên chiều cao khác nhau.
Nút "Mua" không được đẩy xuống cuối card nên bị lệch.

Code sửa
.card-container{
    display: flex;
    flex-wrap: wrap;
}

.card{
    width: 30%;
    margin: 1.5%;

    display: flex;
    flex-direction: column;
}

.card img{
    width: 100%;
}

.card .btn{
    padding: 10px;
    margin-top: auto;
}
Kết quả

Các card sẽ đều hơn và nút "Mua" luôn nằm dưới cùng.

Lỗi 2 — Hero không nằm giữa màn hình
Nguyên nhân

Container .hero chỉ bật Flexbox nhưng chưa căn giữa bằng:

justify-content
align-items
Code sửa
.hero{
    height: 100vh;
    display: flex;

    justify-content: center;
    align-items: center;
}

.hero-content{
    text-align: center;
}
Kết quả

Nội dung sẽ nằm chính giữa màn hình theo cả chiều ngang và chiều dọc.

Lỗi 3 — Sidebar bị co lại
Nguyên nhân

Trong Flexbox, item mặc định có thể bị co (flex-shrink: 1).
Khi content quá dài, sidebar bị ép nhỏ lại.

Code sửa
.layout{
    display: flex;
}

.sidebar{
    width: 250px;
    flex-shrink: 0;
}

.content{
    flex: 1;
}
Kết quả

Sidebar sẽ luôn giữ nguyên chiều rộng 250px.

