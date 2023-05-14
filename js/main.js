// Bài tập: Quản lý tuyển sinh
document.getElementById('btnTongDiem').onclick = function () {
    var diemToan = document.getElementById('diemToan').value * 1,
        diemVan = document.getElementById('diemVan').value * 1,
        diemAnh = document.getElementById('diemAnh').value * 1,
        diemChuan = document.getElementById('diemChuan').value * 1,
        diemKhuVuc = document.getElementById('khuVuc').value * 1,
        diemDoiTuong = document.getElementById('doiTuong').value * 1,
        diemTong = 0,
        ketQua = '';

    diemTong = diemToan + diemVan + diemAnh + diemKhuVuc + diemDoiTuong;

    if (diemTong >= diemChuan && diemToan > 0 && diemVan > 0 && diemAnh > 0) {
        ketQua = 'Thí sinh đậu. '
    } else {
        ketQua = 'Thí sinh không đậu. '
    }

    document.getElementById('ketQua').innerHTML = ketQua + 'Tổng điểm của thí sinh là: ' + diemTong;
}

// Bài tập: Tính tiền điện
document.getElementById('btnTienDien').onclick = function () {
    var soDien = document.getElementById('soDien').value * 1,
        tien1kW = 0,
        tongTienDien = 0;

    if (0 < soDien && soDien <= 50) {
        tien1kW = 500
    }
    else if (50 < soDien && soDien <= 100) {
        tien1kW = 650
    } else if (100 < soDien && soDien <= 150) {
        tien1kW = 850
    } else if (150 < soDien && soDien <= 200) {
        tien1kW = 1100
    } else if (soDien > 200) {
        tien1kW = 1300
    }

    tongTienDien = soDien * tien1kW;

    document.getElementById('ketQua2').innerHTML = 'Tổng tiền điện của bạn là: ' + tongTienDien.toLocaleString() + 'đ'
}

// Bài tập: Tính thuế thu nhập cá nhân

function tinhThue() {
    var tongThuNhap = document.getElementById('tongThuNhap').value * 1,
        soNguoiPhuThuoc = document.getElementById('soNguoiPhuThuoc').value * 1,
        hoTen = document.getElementById('hoTen').value,
        thuNhapChiuThue = 0,
        thueSuat = 0,
        thueTNCN = 0;

    thuNhapChiuThue = tongThuNhap - 4e+6 - soNguoiPhuThuoc * 1.6e+6;

    if (thuNhapChiuThue <= 60e+6) {
        thueSuat = 5
    }
    else if (thuNhapChiuThue > 60e+6 && thuNhapChiuThue <= 120e+6) {
        thueSuat = 10
    }
    else if (thuNhapChiuThue > 120e+6 && thuNhapChiuThue <= 210e+6) {
        thueSuat = 15
    }
    else if (thuNhapChiuThue > 210e+6 && thuNhapChiuThue <= 384e+6) {
        thueSuat = 20
    }
    else if (thuNhapChiuThue > 384e+6 && thuNhapChiuThue <= 624e+6) {
        thueSuat = 25
    }
    else if (thuNhapChiuThue > 624e+6 && thuNhapChiuThue <= 960e+6) {
        thueSuat = 30
    }
    else if (thuNhapChiuThue > 960e+6) {
        thueSuat = 35
    }

    thueTNCN = thuNhapChiuThue * thueSuat / 100;

    document.getElementById('ketQua3').innerHTML = 'Họ tên: ' + hoTen + '. ' + 'Thuế thu nhập cá nhân của bạn là: ' + thueTNCN.toLocaleString() + 'đ'
}

// Bài tập: Tính tiền cáp
function thayDoiLoaiKH(){
    var loaiKH = document.getElementById('loaiKH').value * 1,
        soKetNoiDisable = document.getElementById('soKetNoi');
    if (loaiKH == 1){
        soKetNoiDisable.disabled = true
    } else if (loaiKH == 2){
        soKetNoiDisable.disabled = false
    }
}


document.getElementById('btnTinhTienCap').onclick = function () {
    var phiXuLy = 0,
        phiDichVu = 0,
        tienKenhCaoCap = 0,
        kenhCaoCap = document.getElementById('kenhCaoCap').value * 1,
        soKetNoi = document.getElementById('soKetNoi').value * 1,
        loaiKH = document.getElementById('loaiKH').value,
        maKH = document.getElementById('maKH').value,
        tongTienCap = 0;

    if (loaiKH == 1) {
        phiXuLy = 4.5;
        phiDichVu = 20.5;
        tienKenhCaoCap = 7.5
    }
    else if (loaiKH == 2) {
        phiXuLy = 15;
        if (soKetNoi <= 10) {
            phiDichVu = 75
        } else if (soKetNoi > 10) {
            phiDichVu = 75 + (soKetNoi - 10) * 5
        }
        tienKenhCaoCap = 50;
    }

    tongTienCap = phiDichVu + phiXuLy + tienKenhCaoCap * kenhCaoCap

    document.getElementById('ketQua4').innerHTML = 'Mã khách hàng: ' + maKH + ' . ' + 'Tổng tiền cáp: ' + '$' + tongTienCap;
}