function createCart() {
  // Private data
  let items = [];
  let discountCode = null;
  let discountAmount = 0;

  const discountCodes = {
    SALE10: 0.1,
    SALE20: 0.2,
    FREESHIP: 30000,
  };

  return {
    // Thêm sản phẩm (nếu đã có → tăng quantity)
    addItem(product, quantity = 1) {
      const existingItem = items.find((item) => item.id === product.id);
      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        items.push({ ...product, quantity });
      }
    },

    // Xóa sản phẩm theo id
    removeItem(productId) {
      items = items.filter((item) => item.id !== productId);
    },

    // Cập nhật số lượng
    updateQuantity(productId, newQuantity) {
      const item = items.find((item) => item.id === productId);
      if (item) {
        if (newQuantity <= 0) {
          this.removeItem(productId);
        } else {
          item.quantity = newQuantity;
        }
      }
    },

    // Tính tổng tiền
    getTotal() {
      const subtotal = items.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0,
      );
      return subtotal - discountAmount;
    },

    // Áp dụng mã giảm giá
    applyDiscount(code) {
      if (discountCodes[code]) {
        discountCode = code;
        const subtotal = items.reduce(
          (sum, item) => sum + item.price * item.quantity,
          0,
        );

        if (code === "FREESHIP") {
          discountAmount = 30000;
        } else {
          discountAmount = subtotal * discountCodes[code];
        }
        return true;
      }
      return false;
    },

    // In giỏ hàng dạng bảng
    printCart() {
      if (items.length === 0) {
        console.log("Giỏ hàng trống!");
        return;
      }

      const subtotal = items.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0,
      );
      const total = this.getTotal();

      console.log(
        "┌──────────────────────────────────────────────────────────┐",
      );
      console.log(
        "│ # │ Sản phẩm         │ SL │ Đơn giá      │ Tổng         │",
      );
      console.log(
        "├──────────────────────────────────────────────────────────┤",
      );

      items.forEach((item, index) => {
        const itemTotal = item.price * item.quantity;
        const name = item.name.padEnd(15);
        const price = item.price.toLocaleString("vi-VN").padStart(12);
        const total = itemTotal.toLocaleString("vi-VN").padStart(12);
        console.log(
          `│ ${index + 1} │ ${name} │  ${item.quantity}  │ ${price}  │ ${total}  │`,
        );
      });

      console.log(
        "├──────────────────────────────────────────────────────────┤",
      );
      console.log(
        `│ Tổng cộng:                         ${subtotal.toLocaleString("vi-VN").padStart(12)}đ │`,
      );
      if (discountCode) {
        console.log(
          `│ Giảm giá (${discountCode}):                   -${discountAmount.toLocaleString("vi-VN").padStart(10)}đ │`,
        );
      }
      console.log(
        `│ Thành tiền:                        ${total.toLocaleString("vi-VN").padStart(12)}đ │`,
      );
      console.log(
        "└──────────────────────────────────────────────────────────┘",
      );
    },

    // Lấy tổng số sản phẩm (tổng quantity)
    getItemCount() {
      return items.reduce((count, item) => count + item.quantity, 0);
    },

    // Xóa toàn bộ giỏ
    clearCart() {
      items = [];
      discountCode = null;
      discountAmount = 0;
    },
  };
}

// === TEST ===
const cart = createCart();

cart.addItem({ id: 1, name: "iPhone 16", price: 25990000 }, 1);
cart.addItem({ id: 3, name: "AirPods Pro", price: 6990000 }, 2);
cart.addItem({ id: 1, name: "iPhone 16", price: 25990000 }, 1); // Tăng lên 2

console.log("=== GIỎ HÀNG BAN ĐẦU ===");
cart.printCart();

console.log("\n=== ÁÙNG DỤNG DISCOUNT SALE10 ===");
cart.applyDiscount("SALE10");
cart.printCart();

console.log(`\nSố SP: ${cart.getItemCount()}`);

console.log("\n=== XÓA SẢN PHẨM ID 3 ===");
cart.removeItem(3);
console.log(`Sau xóa: ${cart.getItemCount()} SP`);
cart.printCart();

console.log("\n=== XÓA TẤT CẢ ===");
cart.clearCart();
console.log(`Giỏ hàng sau khi xóa tất cả:`);
cart.printCart();
