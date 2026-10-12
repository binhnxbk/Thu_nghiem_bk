const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

const company = {
  name: 'BK Group',
  sloganMain: 'VỮNG NỀN TẢNG – KIẾN TẠO GIÁ TRỊ – VƯƠN TẦM PHÁT TRIỂN',
  sloganSub: 'Vững chắc trong thực thi · Minh bạch trong quản trị · Bền vững trong phát triển',
  phone: '0123 456 789',
  email: 'info@bkgroup.vn',
  address: '123 Đường ABC, Quận XYZ, TP. Hà Nội'
};

const services = [
  {
    icon: '🏗️',
    title: 'Thi công xây dựng',
    desc: 'Thi công nhà ở dân dụng, công trình công nghiệp và hạ tầng kỹ thuật với quy trình quản lý chất lượng chặt chẽ.'
  },
  {
    icon: '📐',
    title: 'Tư vấn thiết kế',
    desc: 'Thiết kế kiến trúc, kết cấu và nội thất tối ưu công năng, thẩm mỹ, chi phí cho mọi loại công trình.'
  },
  {
    icon: '📋',
    title: 'Quản lý dự án',
    desc: 'Lập kế hoạch, giám sát tiến độ và ngân sách, đảm bảo bàn giao đúng cam kết với chủ đầu tư.'
  },
  {
    icon: '🔧',
    title: 'Cải tạo – Sửa chữa',
    desc: 'Cải tạo, nâng cấp công trình hiện hữu, tối ưu không gian sử dụng và kéo dài tuổi thọ công trình.'
  },
  {
    icon: '🧱',
    title: 'Cung ứng vật liệu',
    desc: 'Cung cấp vật liệu xây dựng chính hãng, nguồn gốc rõ ràng, đảm bảo tiến độ và chất lượng công trình.'
  },
  {
    icon: '✅',
    title: 'Giám sát – Nghiệm thu',
    desc: 'Giám sát thi công độc lập, kiểm định chất lượng và hỗ trợ nghiệm thu, bàn giao công trình.'
  }
];

const projects = [
  { title: 'Khu nhà ở liền kề Green Valley', type: 'Nhà ở dân dụng', year: '2024' },
  { title: 'Nhà máy sản xuất linh kiện điện tử', type: 'Công trình công nghiệp', year: '2023' },
  { title: 'Tòa văn phòng BK Tower', type: 'Công trình thương mại', year: '2023' },
  { title: 'Trường mầm non Hoa Sen', type: 'Công trình giáo dục', year: '2022' },
  { title: 'Cải tạo biệt thự Sunrise', type: 'Cải tạo – Sửa chữa', year: '2022' },
  { title: 'Hạ tầng khu công nghiệp An Phát', type: 'Hạ tầng kỹ thuật', year: '2021' }
];

const values = [
  { title: 'Vững chắc trong thực thi', desc: 'Thi công đúng kỹ thuật, đúng tiến độ, lấy chất lượng công trình làm nền tảng cho mọi cam kết.' },
  { title: 'Minh bạch trong quản trị', desc: 'Công khai chi phí, quy trình rõ ràng, đồng hành cùng khách hàng trong suốt dự án.' },
  { title: 'Bền vững trong phát triển', desc: 'Đầu tư con người, công nghệ và giải pháp xanh để phát triển lâu dài, có trách nhiệm.' }
];

app.get('/', (req, res) => {
  res.render('index', {
    page: 'home',
    company,
    services,
    projects: projects.slice(0, 3),
    values
  });
});

app.get('/gioi-thieu', (req, res) => {
  res.render('about', { page: 'about', company, values });
});

app.get('/dich-vu', (req, res) => {
  res.render('services', { page: 'services', company, services });
});

app.get('/du-an', (req, res) => {
  res.render('projects', { page: 'projects', company, projects });
});

app.get('/lien-he', (req, res) => {
  res.render('contact', { page: 'contact', company, submitted: false });
});

app.post('/lien-he', (req, res) => {
  const { name, phone, message } = req.body;
  console.log('Yêu cầu liên hệ mới:', { name, phone, message });
  res.render('contact', { page: 'contact', company, submitted: true });
});

app.use((req, res) => {
  res.status(404).render('404', { page: '404', company });
});

app.listen(PORT, () => {
  console.log(`BK Group website đang chạy tại http://localhost:${PORT}`);
});
