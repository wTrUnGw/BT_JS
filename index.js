/** BÀI 1:
 * TÍNH TIỀN LƯƠNG NHÂN VIÊN
 ** Đầu vào
 *  - tạo biến lương 1 ngày
 *  - tạo biến tổng tiền
 ** Xử lý
 *   - Lấy số lương 1 ngày * với số ngày đã làm
 * * Đầu ra
 *   - Show kết quả
 */
var btLuong = document.getElementById("btLuong");
btLuong.onclick = function () {
  var luong = document.getElementById("luong").value * 1;
  var soNgayLam = document.getElementById("soNgayLam").value * 1;
  //   Tính toán
  var tong = luong * soNgayLam;
  content = "Số tiền bạn nhận là: " + tong;
  document.getElementById("result1").innerText = content;
};

/** BÀI 2:
 * TÍNH GIÁ TRỊ TRUNG BÌNH
 ** Đầu vào
 *  - tạo 5 biến nhập số thực
 *  - tạo biến tb
 ** Xử lý
 *   - Lấy tất cả số thực cộng lại sau đó chia trung bình
 * * Đầu ra
 *   - Show kết quả
 */
var btAverage = document.getElementById("btAverage");
btAverage.onclick = function () {
  var n1 = document.getElementById("n1").value * 1;
  var n2 = document.getElementById("n2").value * 1;
  var n3 = document.getElementById("n3").value * 1;
  var n4 = document.getElementById("n4").value * 1;
  var n5 = document.getElementById("n5").value * 1;
  //   Tính toán
  var tb = (n1 + n2 + n3 + n4 + n5) / 5;
  content = "Giá trị trung bình là: " + tb;
  document.getElementById("result2").innerText = content;
};

/** BÀI 3:
 * QUY ĐỔI TIỀN USD -> VND
 ** Đầu vào
 *  - tạo biến nhập tiền
 *  - tạo biến usd gán = 23500
 *  - tạo biến btMoney
 ** Xử lý
 *   - tiền nhập vào * số tiền quy đổi
 * * Đầu ra
 *   - Show kết quả
 */

var btMoney = document.getElementById("btMoney");
btMoney.onclick = function () {
  var money = document.getElementById("money").value * 1;
  var USD = 23500;
  //   Tính toán
  var btMoney = money * USD;
  content = "số tiền quy đổi là: " + btMoney.toLocaleString();
  document.getElementById("result3").innerText = content;
};
/** BÀI 4:
 * TÍNH DIỆN TÍCH - CHU VI HÌNH CHỮ NHẬT
 ** Đầu vào
 *  - tạo biến nhập chiều dài, chiều rộng
 *  - tạo 2 biến cV, cT tính chu vi diện tích
 ** Xử lý
 *   - tính diện tích (dài * rộng)
 *   - tính chu vi (dài + rộng) * 2
 * * Đầu ra
 *   - Show kết quả
 */

var cT = document.getElementById("cT");
cT.onclick = function () {
  var length = document.getElementById("length").value * 1;
  var width = document.getElementById("width").value * 1;
  //Tính toán
  var cV = (length + width) * 2;
  var dT = length * width;
  content = "Chu vi là " + cV + "." + " " + "Diện tích là " + dT;
  document.getElementById("result4").innerText = content;
};

/** BÀI 5:
 * TÍNH TỔNG HAI KÍ SỐ
 ** Đầu vào
 *  - tạo biến nhập 2 kí số
 *  - tạo biến tổng
 *
 ** Xử lý
 *   - tìm hàng chục kí số:  biến nhập 2 kí số /10
 *   - tìm hàng đơn vị kí số:  biến nhập 2 kí số %10
 * * Đầu ra
 *   - Show kết quả
 */
var sumN = document.getElementById("sumN");
sumN.onclick = function () {
  var number = document.getElementById("number").value * 1;
  //Tính toán
  var sum = Math.floor(number / 10) + (number % 10);
  content = "Tổng 2 kí số là " + sum;
  document.getElementById("result5").innerText = content;
};
