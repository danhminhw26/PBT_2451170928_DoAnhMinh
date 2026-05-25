Cau A1:
Đoạn 1
console.log(x);
var x = 5;
Dự đoán:
undefined
Giải thích:

var được hoisting (đưa khai báo lên đầu scope).

JavaScript hiểu gần như:

var x;
console.log(x);
x = 5;

Nên x tồn tại nhưng chưa có giá trị ⇒ undefined.

Đoạn 2
console.log(y);
let y = 10;
Dự đoán:
ReferenceError
Giải thích:

let cũng hoisting nhưng nằm trong Temporal Dead Zone (TDZ) cho tới khi được khai báo.

Không được truy cập trước dòng:

let y = 10;
Đoạn 3
const z = 15;
z = 20;
console.log(z);
Dự đoán:
TypeError
Giải thích:

const không cho phép gán lại giá trị.

Đoạn 4
const arr = [1, 2, 3];
arr.push(4);
console.log(arr);
Dự đoán:
[1, 2, 3, 4]
Giải thích:

const không cho đổi tham chiếu object/array, nhưng vẫn được phép sửa nội dung bên trong.

Sai:

arr = [1,2];

Đúng:

arr.push(4);
Đoạn 5
let a = 1;
{
let a = 2;
console.log("Trong block:", a);
}
console.log("Ngoài block:", a);
Dự đoán:
Trong block: 2
Ngoài block: 1
Giải thích:

let có block scope.

Biến a trong {} là biến khác với bên ngoài.

Câu A2 — Data Types & Coercion
console.log(typeof null);

→ "object"

Đây là bug lịch sử của JavaScript.

console.log(typeof undefined);

→ "undefined"

console.log(typeof NaN);

→ "number"

NaN nghĩa là “Not a Number” nhưng kiểu dữ liệu vẫn là number.

console.log("5" + 3);

→ "53"

- với string sẽ nối chuỗi.

console.log("5" - 3);

→ 2

- ép kiểu sang number rồi tính toán.

console.log("5" \* "3");

→ 15

- ép sang number.

console.log(true + true);

→ 2

true = 1

console.log([] + []);

→ ""

Array rỗng chuyển thành chuỗi rỗng.

console.log([] + {});

→ "[object Object]"

[] -> ""

{} -> "[object Object]"

console.log({} + []);

→ 0 (trong nhiều môi trường console)

Giải thích:

{} // bị hiểu là block rỗng
+[] // => 0
Vì sao "5" + 3 khác "5" - 3?
"5" + 3

Toán tử + ưu tiên nối chuỗi nếu có string.

"5" + 3
=> "53"
"5" - 3

Toán tử - chỉ dùng cho toán học nên JS ép kiểu:

"5" -> 5
5 - 3 = 2
Câu A3 — == vs ===
console.log(5 == "5");

→ true

== ép kiểu trước khi so sánh.

console.log(5 === "5");

→ false

=== so sánh cả giá trị lẫn kiểu dữ liệu.

console.log(null == undefined);

→ true

console.log(null === undefined);

→ false

console.log(NaN == NaN);

→ false

NaN không bằng bất kỳ thứ gì, kể cả chính nó.

console.log(0 == false);

→ true

false -> 0

console.log(0 === false);

→ false

console.log("" == false);

→ true

Ép kiểu:

"" -> 0
false -> 0
Nên dùng == hay ===?

Nên dùng:

===

Vì:

Không ép kiểu ngầm
Ít bug hơn
Dễ đoán hơn
Chuẩn hiện đại trong JavaScript

Chỉ dùng == khi thật sự hiểu rõ coercion.

Câu A4 — Truthy & Falsy
TẤT CẢ giá trị Falsy trong JavaScript
false
0
-0
0n
""
null
undefined
NaN

Ngoài các giá trị trên thì hầu như đều là Truthy.

Dự đoán
if ("0") console.log("A");

→ In "A"

"0" là string không rỗng ⇒ truthy.

if ("") console.log("B");

→ Không in

if ([]) console.log("C");

→ In "C"

Array rỗng vẫn truthy.

if ({}) console.log("D");

→ In "D"

if (null) console.log("E");

→ Không in

if (0) console.log("F");

→ Không in

if (-1) console.log("G");

→ In "G"

if (" ") console.log("H");

→ In "H"

Có chứa dấu space nên không phải chuỗi rỗng.

Câu A5 — Template Literals
Cách 1
var greeting = `Xin chào ${name}! Bạn ${age} tuổi.`;
Cách 2
var url = `https://api.example.com/users/${userId}/orders?page=${page}`;
Cách 3
var html = `

<div class="card">
    <h2>${title}</h2>
    <p>${description}</p>
    <span>Giá: ${price}đ</span>
</div>
`;
Lỗi 1 — So sánh sai trong if
Code lỗi
if (giaSauGiam = 0)
Vấn đề

Bạn đang dùng:

=

Đây là phép gán, không phải so sánh.

Nó sẽ gán:

giaSauGiam = 0

Sau đó if(0) ⇒ falsy.

Cách sửa
if (giaSauGiam === 0)
Lỗi 2 — Truyền "100000" là string
Code lỗi
const gia = tinhGiaGiamGia("100000", 20)
Vấn đề

"100000" là string.

JavaScript có ép kiểu ngầm nên code vẫn chạy, nhưng rất nguy hiểm và dễ bug.

Cách sửa
const gia = tinhGiaGiamGia(100000, 20)
Lỗi 3 — Hàm không kiểm tra kiểu dữ liệu
Vấn đề

Nếu người dùng truyền:

tinhGiaGiamGia("abc", 20)

thì sẽ ra:

NaN
Cách sửa

Thêm kiểm tra:

if (typeof giaBan !== "number" || typeof phanTramGiam !== "number") {
    return "Dữ liệu không hợp lệ"
}
Lỗi 4 — Không kiểm tra giá âm
Vấn đề

Giá bán âm:

-100000

là vô lý.

Cách sửa
if (giaBan < 0) {
    return "Giá bán không hợp lệ"
}
Lỗi 5 — Dùng var thay vì const
Code
var giamGia = giaBan * phanTramGiam / 100
Vấn đề

giamGia không bị thay đổi sau khi tạo.

Nên dùng:

const

để tránh bị sửa nhầm.

Cách sửa
const giamGia = giaBan * phanTramGiam / 100
Lỗi 6 — Lỗi “ẩn” với var trong vòng lặp
Code lỗi
for (var i = 0; i < 5; i++) {
    setTimeout(function() {
        console.log("Item " + i)
    }, 1000)
}
Output thực tế

Sau 1 giây:

Item 5
Item 5
Item 5
Item 5
Item 5
Tại sao?

var có function scope, không có block scope.

Toàn bộ callback setTimeout dùng chung một biến i.

Khi setTimeout chạy:

for

đã kết thúc rồi ⇒ i = 5.

Nên tất cả đều in:

5
Cách sửa bằng let
for (let i = 0; i < 5; i++) {
    setTimeout(function() {
        console.log("Item " + i)
    }, 1000)
}
Vì sao let sửa được?

let có block scope.

Mỗi vòng lặp sẽ tạo một biến i riêng:

vòng 1 → i = 0
vòng 2 → i = 1
...

Nên output đúng:

Item 0
Item 1
Item 2
Item 3
Item 4
Phiên bản code đã sửa hoàn chỉnh
function tinhGiaGiamGia(giaBan, phanTramGiam) {

    if (typeof giaBan !== "number" || typeof phanTramGiam !== "number") {
        return "Dữ liệu không hợp lệ";
    }

    if (giaBan < 0) {
        return "Giá bán không hợp lệ";
    }

    if (phanTramGiam < 0 || phanTramGiam > 100) {
        return "Phần trăm giảm không hợp lệ";
    }

    const giamGia = giaBan * phanTramGiam / 100;
    const giaSauGiam = giaBan - giamGia;

    if (giaSauGiam === 0) {
        console.log("Sản phẩm miễn phí!");
    }

    return giaSauGiam;
}

// Test
const gia = tinhGiaGiamGia(100000, 20);
console.log("Giá sau giảm: " + gia + "đ");

const gia2 = tinhGiaGiamGia(50000, 110);
console.log("Giá: " + gia2);

for (let i = 0; i < 5; i++) {
    setTimeout(function() {
        console.log("Item " + i);
    }, 1000);
}
