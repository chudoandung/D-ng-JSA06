I) Cách sử dụng
- 1 số khái niệm
+ clone : Clone là 1 bản sao của kho mã nguồn. Khi bạn muốn làm việc với 1 dự án, bạn có thể clone dự án đó về máy của mình và làm việc với dự án đó 
+ commit : Mỗi lần thay đổi mã nguồn, bạn cần commit để lưu lại phiên bản hiện tại của mã nguồn
+ push : Đẩy code từ máy lên git sau khi chúng ta commit
+ pull : Lấy code commit từ trên git về máy tính. Khi bạn muốn lấy các commit mới nhất về máy 

- Cách sử dụng câu lệnh
B1 : Đăng nhập github và tạo Repo ( để chế độ public )
B2 : Lên gg: Git Dowload: tải về theo phiên bản của máy 
B3 : Kết nối giữa máy mình với tài khoản trên github: Gõ trên gg: git config global
B4 : Khởi tạo tên người dùng ( trên git hub ) + mail đăng kí Github
- $git config--global user.name "doandung"
- $git config--global user.email chudoandungg@gmail.com
B5 : Kiểm tra config được hay chưa, chưa thì gõ như sau: 
- $git config--list
B6 : Vào thư mục gốc chứa sản phẩm: chuột phải chọn gitBash
B7 : Khởi tạo git init ( file gốc sẽ hiển thị 1 file .git )
B8 : Kết nối, liên kết git trong máy của mình với git trên internet
-$ git remote add origin......
B9 : kiểm tra xem kết nối được chưa
-$ git remove -v
B10 : Đưa toàn bộ code lên GitHub :
- $git add
- Gói lại : $git commit -m ".."
- Đẩy từ máy lên github: git pist origin master
