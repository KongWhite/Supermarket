1. 微信小程序项目 -- 零食商城
   1. 包含组件:
      1. 首页               -- home.wxml
      2. 商品列表页         -- pro-list.wxml
      3. 商品详情页         -- pro-detail.wxml
      4. 商品二级列表页     -- pro.wxml
      5. 购物车             -- shoppingcar.wxml
      6. 用户中心           -- user.wxml
      7. 数据库
 
   2. 个人工作分配:
      1. 方姿平: 首页 + 商品二级列表页
      2. 黄浩锐: 商品列表
      3. 简家琪: 购物车 
      4. 何其流: 用户中心
      5. 黄施展: 商品详情页
      6. 许金山: 数据库
      
   3. 数据库
      
      1. swiper: id, sid, img, title, href, backup

      2. banner(主题海报/二级菜单入口): id, bid, img, href, title, type(包含哪类产品), backup

      3. pro_detail: id, did, name, price, spec, img, is_new(是否新品推荐),
	                stock(存量), title, detail, sales_volu(销量), type(属于哪种类型), backup
	       type: fruit(水果): 1001, veg(蔬菜): 1002, dry(炒货): 1003, dessert(点心): 1004, tea(茶饮): 1005, cereal(谷物): 1006, backup

      4. shoppingcar(购物车): id, pid, user_id, count_num, is_checked, backup

      5. p_order(订单): id, oid, pid, user_id, status, count_num
         	status: 0 -> 待付款;  1 -> 已完成;  2->配送中
		  
      6. order_detail: id, odid, order_time, pay_time, deliver_time, recevied_time, addr_id

      7. user: id, uid, uname