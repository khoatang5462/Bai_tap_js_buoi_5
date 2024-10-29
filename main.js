//Bài tập tuyển sinh

document.getElementById("btnTuyenSinh").onclick = function (event) {
    event.preventDefault();
    const diemChuan = Number(document.getElementById("diemChuan").value);
    const diem1 = Number(document.getElementById("diem1").value);
    const diem2 = Number(document.getElementById("diem2").value);
    const diem3 = Number(document.getElementById("diem3").value);

    const khuVuc = document.getElementById("khuVuc").value;
    const doiTuong = document.getElementById("doiTuong").value;

    if (diem1 === 0 || diem2 === 0 || diem3 === 0) {
        document.getElementById("ketQuaTuyenSinh").innerHTML = "Rớt";
        document.getElementById("ketQuaTuyenSinh").style.color = "red";
        return;
    }
    let diemUuTienKV = 0;
    if (khuVuc === "A") diemUuTienKV = 2;
    if (khuVuc === "B") diemUuTienKV = 1;
    if (khuVuc === "C") diemUuTienKV = 0.5;

    let diemUuTienDT = 0;
    if (doiTuong === 1) diemUuTienDT = 2.5;
    if (doiTuong === 2) diemUuTienDT = 1.5;
    if (doiTuong === 3) diemUuTienDT = 1;

    const tongDiem = diem1 + diem2 + diem3 + diemUuTienKV + diemUuTienDT;
    if (tongDiem >= diemChuan) {
        document.getElementById(
            "ketQuaTuyenSinh"
        ).innerHTML = `Đậu. Tổng điểm: ${tongDiem} `;
        document.getElementById(
            "ketQuaTuyenSinh"
        ).style.color = "green";
    } else {
        document.getElementById(
            "ketQuaTuyenSinh"
        ).innerHTML = `Rớt. Tổng điểm: ${tongDiem} `;
        document.getElementById(
            "ketQuaTuyenSinh"
        ).style.color = "red";
    }
};

// Tính tiền điện
document.getElementById("btnTienDien").onclick = function () {
    const tenChuHo = document.getElementById("tenChuHo").value;
    const soKw = document.getElementById("soKw").value * 1;
    const tienDien = quyTacTraTien(soKw);

    document.getElementById(
        "ketQuaTongTienDien"
    ).innerHTML = `Chủ hộ: ${tenChuHo}<br>Tổng tiền điện: ${tienDien.toLocaleString()} VND`;
};

function quyTacTraTien(soKw) {
    let tongTienDien = 0;

    if (soKw <= 50) {
        tongTienDien = soKw * 500;
    } else if (soKw <= 100) {
        tongTienDien = 50 * 500 + (soKw - 50) * 650;
    } else if (soKw <= 150) {
        tongTienDien = 50 * 500 + 50 * 650 + (soKw - 100) * 850;
    } else if (soKw <= 200) {
        tongTienDien = 50 * 500 + 50 * 650 + 50 * 850 + (soKw - 150) * 1100;
    } else {
        tongTienDien =
            50 * 500 + 50 * 650 + 50 * 850 + 50 * 1100 + (soKw - 200) * 1300;
    }

    return tongTienDien;
}

//Tính tiền thuế

document.getElementById("btnTinhThue").onclick = function () {
    const hoVaTen = document.getElementById("hoVaTen").value;
    const tongThuNhapNam = document.getElementById("tongThuNhapNam").value * 1;
    const soNguoiPhuThuoc = document.getElementById("soNguoiPhuThuoc").value * 1;

    const thuePhaiTra = tinhThueThuNhap(tongThuNhapNam, soNguoiPhuThuoc);
    document.getElementById(
        "tienThue"
    ).innerHTML = `Họ tên: ${hoVaTen}<br>Thuế thu nhập phải trả: ${thuePhaiTra.toLocaleString()}  triệu VND`;
};

function tinhThueThuNhap(tongThuNhapNam, soNguoiPhuThuoc) {
    const thuNhapChiuThue = tongThuNhapNam - 4 - soNguoiPhuThuoc * 1.6;
    let thuePhaiTra = 0;
    if (thuNhapChiuThue <= 60) {
        thuePhaiTra = thuNhapChiuThue * 0.05;
    } else if (thuNhapChiuThue <= 120) {
        thuePhaiTra = 60 * 0.05 + (thuNhapChiuThue - 60) * 0.1;
    } else if (thuNhapChiuThue <= 210) {
        thuePhaiTra = 60 * 0.05 + 60 * 0.1 + (thuNhapChiuThue - 120) * 0.15;
    } else if (thuNhapChiuThue <= 384) {
        thuePhaiTra =
            60 * 0.05 + 60 * 0.1 + 90 * 0.15 + (thuNhapChiuThue - 210) * 0.2;
    } else if (thuNhapChiuThue <= 624) {
        thuePhaiTra =
            60 * 0.05 +
            60 * 0.1 +
            90 * 0.15 +
            174 * 0.2 +
            (thuNhapChiuThue - 384) * 0.25;
    } else if (thuNhapChiuThue <= 960) {
        thuePhaiTra =
            60 * 0.05 +
            60 * 0.1 +
            90 * 0.15 +
            174 * 0.2 +
            240 * 0.25 +
            (thuNhapChiuThue - 624) * 0.3;
    } else {
        thuePhaiTra =
            60 * 0.05 +
            60 * 0.1 +
            90 * 0.15 +
            174 * 0.2 +
            240 * 0.25 +
            336 * 0.3 +
            (thuNhapChiuThue - 960) * 0.35;
    }

    return thuePhaiTra;
}
// Tính tiền cáp
document.getElementById("loaiKhachHang").onchange = function () {
    if (document.getElementById("loaiKhachHang").value === "doanhNghiep") {
        document.getElementById("nhomKetNoi").classList.remove("d-none");
    } else {
        document.getElementById("nhomKetNoi").classList.add("d-none");
    }
};

document.getElementById("btnTinh").onclick = function () {
    let loaiKhachHang = document.getElementById("loaiKhachHang").value;
    let maKhachHang = document.getElementById("maKhachHang").value;
    let soKenhCaoCap = document.getElementById("soKenhCaoCap").value * 1;
    let soKetNoi = document.getElementById("soKetNoi").value * 1;

    let tongTienCap = tinhTienCap(loaiKhachHang, soKenhCaoCap, soKetNoi);

    document.getElementById("ketQuaTienCap").innerHTML =
        "Mã khách hàng: " +
        maKhachHang +
        "<br> Tổng tiền cáp: " +
        tongTienCap.toLocaleString() +
        " $";
};

function tinhTienCap(loaiKhachHang, soKenhCaoCap, soKetNoi) {
    let tongTienCap = 0;
    if (loaiKhachHang === "hoGiaDinh") {
        tongTienCap = 4.5 + 20.5 + 7.5 * soKenhCaoCap;
    } else if (loaiKhachHang === "doanhNghiep") {
        tongTienCap =
            15 + 75 + (soKetNoi > 10 ? soKetNoi - 10 : 0) * 5 + 50 * soKenhCaoCap;
    }
    return tongTienCap;
}
