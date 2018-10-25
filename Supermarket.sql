## supermarket 项目中的所有数据表都写入到其他数据库中了. 所以不在建立 supermarket 数据库.
# supermarket 数据库

# SET NAMES UTF8;

# DROP DATABASE IF EXISTS supermarket;

# CREATE DATABASE supermarket CHARSET=UTF8;

# USE supermarket;

########################## 创建 supermarket 项目数据表 #############################

# supermarket_swiper
CREATE TABLE supermarket_swiper(
id INT PRIMARY KEY AUTO_INCREMENT,
sid VARCHAR(2),
img VARCHAR(64),    # img-url
title VARCHAR(128),
href VARCHAR(128),  
backup VARCHAR(128)
);
INSERT INTO supermarket_swiper VALUES(NULL, '11', 'images/supermarket/image/b1.jpg', '这是b1轮播图', '', '' );
INSERT INTO supermarket_swiper VALUES(NULL, '12', 'images/supermarket/image/b2.jpg', '这是b1轮播图', '', '' );
INSERT INTO supermarket_swiper VALUES(NULL, '13', 'images/supermarket/image/b3.jpg', '这是b1轮播图', '', '' );

# supermarket_banner
CREATE TABLE supermarket_banner(
id INT PRIMARY KEY AUTO_INCREMENT,
bid VARCHAR(2),
img VARCHAR(64),    # img-url
top_img VARCHAR(64),
title VARCHAR(128),
href VARCHAR(128),  
type VARCHAR(4),
backup VARCHAR(128)
);
INSERT INTO supermarket_banner VALUES(NULL, '21', 'images/supermarket/image/s1.png', 'image/list1.png', '这是banner1图片', '', '1001', '');
INSERT INTO supermarket_banner VALUES(NULL, '22', 'images/supermarket/image/s2.png', 'image/list1.png', '这是banner2图片', '', '1002', '');
INSERT INTO supermarket_banner VALUES(NULL, '23', 'images/supermarket/image/s3.png', 'image/list1.png', '这是banner3图片', '', '1003', '');

# supermarket_pro_detail
CREATE TABLE supermarket_pro_detail(
id INT PRIMARY KEY AUTO_INCREMENT,
did VARCHAR(8),
name VARCHAR(32),
price DECIMAL(7,2),
spec VARCHAR(64),
img VARCHAR(64),    # img-url
stock INT,
title VARCHAR(128),
detail VARCHAR(256),
sale_volu INT,  
type VARCHAR(4),
is_new CHAR(1),
backup VARCHAR(128)
);

INSERT INTO supermarket_pro_detail VALUES(NULL, '101', '核桃味瓜子', 3.58, '200g/袋', 'images/supermarket/image/s4.png', 4512, '我是瓜子', '核桃味香瓜子', 1225, '1003', '1', '');
INSERT INTO supermarket_pro_detail VALUES(NULL, '102', '杏仁', 6.28, '500g/袋', 'images/supermarket/image/s4.png', 4512, '我是瓜子', '核桃味香瓜子', 1225, '1003', '1', '');
INSERT INTO supermarket_pro_detail VALUES(NULL, '103', '核桃', 30.00, '200g/袋', 'images/supermarket/image/s4.png', 4512, '我是瓜子', '核桃味香瓜子', 1225, '1003', '1', '');
INSERT INTO supermarket_pro_detail VALUES(NULL, '104', '开心果', 5.32, '500g/袋', 'images/supermarket/image/s5.png', 4512, '我是瓜子', '核桃味香瓜子', 1225, '1003', '0', '');
INSERT INTO supermarket_pro_detail VALUES(NULL, '105', '花生', 1.35, '300g/袋', 'images/supermarket/image/s4.png', 4512, '我是瓜子', '核桃味香瓜子', 1225, '1003', '1', '');
INSERT INTO supermarket_pro_detail VALUES(NULL, '106', '葡萄干', 32.58, '250g/袋', 'images/supermarket/image/s4.png', 4512, '我是瓜子', '核桃味香瓜子', 1225, '1003', '0', '');
INSERT INTO supermarket_pro_detail VALUES(NULL, '107', '芒果干', 5.58, '500g/袋', 'images/supermarket/image/s6.png', 4512, '我是瓜子', '核桃味香瓜子', 1225, '1003', '1', '');
INSERT INTO supermarket_pro_detail VALUES(NULL, '108', '碧根果', 2.18, '250g/袋', 'images/supermarket/image/s4.png', 4512, '我是瓜子', '核桃味香瓜子', 1225, '1003', '0', '');
INSERT INTO supermarket_pro_detail VALUES(NULL, '109', '腰果', 13.58, '100g/袋', 'images/supermarket/image/s6.png', 4512, '我是瓜子', '核桃味香瓜子', 1225, '1003', '0', '');

INSERT INTO supermarket_pro_detail VALUES(NULL, '210', '芹菜', 14.29, '500g', 'images/supermarket/image/s5.png', 1254, '我是芹菜', '芹菜', 54, '1002', '0', '');
INSERT INTO supermarket_pro_detail VALUES(NULL, '211', '黄花菜', 3.19, '500g', 'images/supermarket/image/s5.png', 1254, '我是芹菜', '芹菜', 54, '1002', '0', '');
INSERT INTO supermarket_pro_detail VALUES(NULL, '212', '韭菜', 5.26, '500g', 'images/supermarket/image/s5.png', 1254, '我是芹菜', '芹菜', 54, '1002', '1', '');
INSERT INTO supermarket_pro_detail VALUES(NULL, '213', '菠菜', 6.19, '500g', 'images/supermarket/image/s5.png', 1254, '我是芹菜', '芹菜', 54, '1002', '0', '');
INSERT INTO supermarket_pro_detail VALUES(NULL, '214', '白菜', 8.89, '500g', 'images/supermarket/image/s5.png', 1254, '我是芹菜', '芹菜', 54, '1002', '1', '');
INSERT INTO supermarket_pro_detail VALUES(NULL, '215', '萝卜', 9.89, '500g', 'images/supermarket/image/s5.png', 1254, '我是芹菜', '芹菜', 54, '1002', '1', '');
INSERT INTO supermarket_pro_detail VALUES(NULL, '216', '莴笋', 4.00, '500g', 'images/supermarket/image/s5.png', 1254, '我是芹菜', '芹菜', 54, '1002', '0', '');
INSERT INTO supermarket_pro_detail VALUES(NULL, '217', '竹笋', 5.35, '500g', 'images/supermarket/image/s5.png', 1254, '我是芹菜', '芹菜', 54, '1002', '0', '');

INSERT INTO supermarket_pro_detail VALUES(NULL, '321', '粟米', 6.78, '200g/袋', 'images/supermarket/image/s6.png', 45, '我是粟米', '粟米', 124, '1006', '1', '');
INSERT INTO supermarket_pro_detail VALUES(NULL, '322', '小米', 16.58, '500g/袋', 'images/supermarket/image/s6.png', 45, '我是粟米', '粟米', 124, '1006', '0', '');
INSERT INTO supermarket_pro_detail VALUES(NULL, '323', '大豆', 16.32, '200g/袋', 'images/supermarket/image/s5.png', 45, '我是粟米', '粟米', 124, '1006', '1', '');
INSERT INTO supermarket_pro_detail VALUES(NULL, '324', '小麦', 12.23, '500g/袋', 'images/supermarket/image/s6.png', 45, '我是粟米', '粟米', 124, '1006', '1', '');
INSERT INTO supermarket_pro_detail VALUES(NULL, '325', '黑米', 25.12, '200g/袋', 'images/supermarket/image/s5.png', 45, '我是粟米', '粟米', 124, '1006', '0', '');
INSERT INTO supermarket_pro_detail VALUES(NULL, '326', '玉米', 34.23, '250g/袋', 'images/supermarket/image/s6.png', 45, '我是粟米', '粟米', 124, '1006', '1', '');
INSERT INTO supermarket_pro_detail VALUES(NULL, '327', '糯米', 34.23, '200g/袋', 'images/supermarket/image/s4.png', 45, '我是粟米', '粟米', 124, '1006', '0', '');
INSERT INTO supermarket_pro_detail VALUES(NULL, '328', '荞麦', 9.99, '250g/袋', 'images/supermarket/image/s6.png', 45, '我是粟米', '粟米', 124, '1006', '1', '');


INSERT INTO supermarket_pro_detail VALUES(NULL, '430', '李子', 12.18, '500g', 'images/supermarket/image/c2.png', 35, '我是李子', '李子', 2424, '1001', '1', '');
INSERT INTO supermarket_pro_detail VALUES(NULL, '431', '桃子', 22.38, '500g', 'images/supermarket/image/c3.png', 35, '我是李子', '李子', 2424, '1001', '0', '');
INSERT INTO supermarket_pro_detail VALUES(NULL, '432', '杏子', 35.12, '500g', 'images/supermarket/image/c2.png', 35, '我是李子', '李子', 2424, '1001', '1', '');
INSERT INTO supermarket_pro_detail VALUES(NULL, '433', '苹果', 22.18, '500g', 'images/supermarket/image/c4.png', 35, '我是李子', '李子', 2424, '1001', '0', '');
INSERT INTO supermarket_pro_detail VALUES(NULL, '434', '香蕉', 12.83, '500g', 'images/supermarket/image/c3.png', 35, '我是李子', '李子', 2424, '1001', '0', '');

INSERT INTO supermarket_pro_detail VALUES(NULL, '541', '饼干', 9.23, '100g', 'images/supermarket/image/s6.png', 659, '我是饼干', '饼干', 3654, '1004', '1', '');
INSERT INTO supermarket_pro_detail VALUES(NULL, '542', '面包', 12.78, '100g', 'images/supermarket/image/s4.png', 659, '我是饼干', '饼干', 3654, '1004', '0', '');
INSERT INTO supermarket_pro_detail VALUES(NULL, '543', '蛋卷', 23.89, '100g', 'images/supermarket/image/s5.png', 659, '我是饼干', '饼干', 3654, '1004', '1', '');
INSERT INTO supermarket_pro_detail VALUES(NULL, '544', '曲奇', 9.19, '100g', 'images/supermarket/image/s6.png', 659, '我是饼干', '饼干', 3654, '1004', '0', '');
INSERT INTO supermarket_pro_detail VALUES(NULL, '545', '烧饼', 8.08, '100g', 'images/supermarket/image/s5.png', 659, '我是饼干', '饼干', 3654, '1004', '0', '');

INSERT INTO supermarket_pro_detail VALUES(NULL, '650', '毛尖', 127.78, '500g/袋', 'images/supermarket/image/s4.png', 187, '我是粟米', '粟米', 656, '1005', '0', '');
INSERT INTO supermarket_pro_detail VALUES(NULL, '651', '铁观音', 234.45, '500g/袋', 'images/supermarket/image/s5.png', 187, '我是粟米', '粟米', 656, '1005', '0', '');
INSERT INTO supermarket_pro_detail VALUES(NULL, '652', '菊花', 999.00, '500g/袋', 'images/supermarket/image/s6.png', 187, '我是粟米', '粟米', 656, '1005', '1', '');
INSERT INTO supermarket_pro_detail VALUES(NULL, '653', '普洱', 234.00, '500g/袋', 'images/supermarket/image/s4.png', 187, '我是粟米', '粟米', 656, '1005', '1', '');
INSERT INTO supermarket_pro_detail VALUES(NULL, '654', '雀舌', 99.99, '500g/袋', 'images/supermarket/image/s5.png', 187, '我是粟米', '粟米', 656, '1005', '0', '');
INSERT INTO supermarket_pro_detail VALUES(NULL, '655', '立顿红茶', 123.45, '500g/袋', 'images/supermarket/image/s6.png', 187, '我是粟米', '粟米', 656, '1005', '0', '');

# supermarket_shoppingcar
CREATE TABLE supermarket_shoppingcar(
id INT PRIMARY KEY AUTO_INCREMENT,
pid VARCHAR(8),
user_id VARCHAR(8),
count_num INT,
is_checked CHAR(1),
backup VARCHAR(128)
);
INSERT INTO supermarket_shoppingcar VALUES(NULL, '105', '1001', 2, '1', '');
INSERT INTO supermarket_shoppingcar VALUES(NULL, '545', '1001', 5, '0', '');
INSERT INTO supermarket_shoppingcar VALUES(NULL, '215', '1001', 1, '1', '');
INSERT INTO supermarket_shoppingcar VALUES(NULL, '650', '1001', 1, '1', '');

# supermarket_p_order
CREATE TABLE supermarket_p_order(
id INT PRIMARY KEY AUTO_INCREMENT,
oid VARCHAR(8),
pid VARCHAR(8),
user_id VARCHAR(8),
count_num INT,
status CHAR(1),
backup VARCHAR(128)
);

INSERT INTO supermarket_p_order VALUES(NULL, '100', '321', '1001', '2', '0', '');
INSERT INTO supermarket_p_order VALUES(NULL, '101', '431', '1001', '1', '1', '');
INSERT INTO supermarket_p_order VALUES(NULL, '102', '541', '1001', '1', '2', '');
INSERT INTO supermarket_p_order VALUES(NULL, '103', '652', '1001', '5', '1', '');
INSERT INTO supermarket_p_order VALUES(NULL, '104', '102', '1001', '3', '0', '');

# order_detail
CREATE TABLE supermarket_order_detail(
id INT PRIMARY KEY AUTO_INCREMENT,
oid VARCHAR(8),
order_time VARCHAR(16), 
pay_time VARCHAR(16), 
deliver_time VARCHAR(16), 
recevied_time VARCHAR(16), 
backup VARCHAR(128)
);
INSERT INTO supermarket_order_detail VALUES(NULL, '101', '2018/10/15', '2018/10/15', '2018/10/16', '2018/10/18', '');
INSERT INTO supermarket_order_detail VALUES(NULL, '102','2018/10/18', '2018/10/18', '2018/10/19', '', '');
INSERT INTO supermarket_order_detail VALUES(NULL, '103','2018/10/17', '2018/10/17', '2018/10/18', '2018/10/20', '');


# supermarket_user
CREATE TABLE supermarket_user(
id INT PRIMARY KEY AUTO_INCREMENT,
uid VARCHAR(8),
uname VARCHAR(16),
backup VARCHAR(128)
);
INSERT INTO supermarket_user VALUES(NULL, '1001','visitor1' , '');
INSERT INTO supermarket_user VALUES(NULL, '1002','visitor2' , '');
INSERT INTO supermarket_user VALUES(NULL, '1003','visitor3' , '');
INSERT INTO supermarket_user VALUES(NULL, '1004','visitor4' , '');
INSERT INTO supermarket_user VALUES(NULL, '1005','visitor5' , '');


# supermarket_pro_class
CREATE TABLE supermarket_pro_class(
id INT PRIMARY KEY AUTO_INCREMENT,
cid VARCHAR(8),
name VARCHAR(16),
type VARCHAR(8),
img VARCHAR(64),
backup VARCHAR(128)
);
INSERT INTO supermarket_pro_class VALUES(NULL, '1001', '果味' , '1001' , 'images/supermarket/image/c1.png', '');
INSERT INTO supermarket_pro_class VALUES(NULL, '1002', '蔬菜' , '1002' , 'images/supermarket/image/c1.png', '');
INSERT INTO supermarket_pro_class VALUES(NULL, '1003', '炒货' , '1003' , 'images/supermarket/image/c1.png', '');
INSERT INTO supermarket_pro_class VALUES(NULL, '1004', '点心' , '1004' , 'images/supermarket/image/c1.png', '');
INSERT INTO supermarket_pro_class VALUES(NULL, '1005', '粗茶' , '1005' , 'images/supermarket/image/c1.png', '');
INSERT INTO supermarket_pro_class VALUES(NULL, '1006', '淡饭' , '1006' , 'images/supermarket/image/c1.png', '');

