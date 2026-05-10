Phần 1 — Chứng minh content-box vs border-box

Hộp 1 (content-box): chiều rộng thực tế = 350px
Hộp 2 (border-box): chiều rộng thực tế = 300px

Giải thích sự khác biệt:

- Khi dùng <code>box-sizing: content-box</code>, giá trị <code>width</code> chỉ áp dụng cho phần nội dung, nên padding và border được cộng thêm vào chiều rộng tổng thể. Với width 300px, padding 20px ở hai bên và border 5px ở hai bên, chiều rộng thực tế là 300 + 20*2 + 5*2 = 350px.
- Khi dùng <code>box-sizing: border-box</code>, giá trị <code>width</code> bao gồm luôn nội dung, padding và border. Vì vậy hộp có chiều rộng thực tế đúng 300px.

Phần B3 — Specificity Battle

1. p { color: #4a5568; } — Specificity: 0,0,1
2. body p { color: #6b7280; } — Specificity: 0,0,2
3. .text { color: #2563eb; } — Specificity: 0,1,0
4. .highlight { color: #16a34a; } — Specificity: 0,1,0
5. p.text { color: #f97316; } — Specificity: 0,1,1
6. p.highlight { color: #db2777; } — Specificity: 0,1,1
7. .text.highlight { color: #0ea5e9; } — Specificity: 0,2,0
8. p.text.highlight { color: #a855f7; } — Specificity: 0,2,1
9. #demo { color: #ea580c; } — Specificity: 1,0,0
10. #demo.text.highlight { color: #0f766e; } — Specificity: 1,2,0

Element cuối cùng hiển thị màu gì? Tại sao?

- Element cuối cùng hiển thị màu <span style="color:#0f766e;">#0f766e</span> (màu xanh lá đậm).
- Lý do: selector <code>#demo.text.highlight</code> có độ đặc hiệu cao nhất trong tất cả, nên nó thắng tất cả các quy tắc còn lại.

Chụp screenshot kết quả:

- Hãy mở file <code>specificity.html</code> trong trình duyệt, mở DevTools, và chụp screenshot vùng chứa đoạn text "Hello World" cùng tab Computed nếu cần. (Ở đây chưa có screenshot sẵn.)

Thay đổi thứ tự rules trong CSS file. Kết quả có đổi không? Giải thích.

- Nếu đổi thứ tự các rule và không thay đổi specificity của chúng, kết quả hiển thị vẫn không đổi vì quy tắc có specificity cao hơn vẫn thắng.
- Nếu hai rule có cùng specificity thì quy tắc xuất hiện sau trong file CSS sẽ thắng, nhưng trong trường hợp này rule với selector <code>#demo.text.highlight</code> vẫn là quy tắc ưu tiên nhất.
