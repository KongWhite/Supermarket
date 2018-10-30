1. 微信小程序项目 -- 零食商城
 ----------------------------
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
      * 数据库后续更新, 所有表名加前缀 supermarket_ 
      <pre>
      1. swiper: id, sid, img, title, href, backup

      2. banner(主题海报/二级菜单入口): id, bid, img, href, title, type(包含哪类产品), backup

      3. pro_detail: id, did, name, price, spec, img, is_new(是否新品推荐),
	                stock(存量), title, detail, sales_volu(销量), type(属于哪种类型), backup
	       type: fruit(果味): 1001, veg(蔬菜): 1002, dry(炒货): 1003, dessert(点心): 1004, tea(粗茶): 1005, cereal(淡饭): 1006, backup

      4. shoppingcar(购物车): id, pid, user_id, count_num, is_checked, backup

      5. p_order(订单): id, oid, pid, user_id, status, count_num
         	status: 0 -> 待付款;  1 -> 已完成;  2->配送中
		  
      6. order_detail: id, oid, order_time, pay_time, deliver_time, recevied_time, addr_id

      7. user: id, uid, uname

      8. pro_class(新增,产品分类): id, cid, name, type(对应商品类型), backup
	       type: fruit(果味): 1001, veg(蔬菜): 1002, dry(炒货): 1003, dessert(点心): 1004, tea(粗茶): 1005, cereal(淡饭): 1006, backup
   </pre>
   
   4. 后台请求接口: 
      * 二次修订, 修改服务器地址
      * 修改数据端口
  <pre>
      1. 服务器地址及端口: https://myserver.applinzi.com
	
      2. /supIndex/swiper 
         return -> img      轮播图地址
	 
      3. /supIndex/banner 
	 return -> img      banner 图片地址
	           top_img  二级列表最上面图片地址
		   type     对应二级列表的产品类型编号	

      4. /supIndex/new-pro
         return -> did     商品 id
		   ,name   商品名
	   	   ,price  商品单价
	 	   ,spec   商品规格
	           ,img    商品图片地址

      5. /supProducts/list-name
         return -> cid     商品分类名id
		   ,name   商品分类名
		   ,type   商品分类名对应的商品分类类型
		   ,img    商品列表最上层图片地址

      6. /supProducts/list?type=type
         get 方式获取类型为 type 的所有商品
         return -> did     商品 id
		   ,name   商品名
	   	   ,price  商品单价
	 	   ,spec   商品规格
	           ,img    商品图片地址

      7. /supProducts/details?did=did
	 get 方式获取 did 为 did 的商品详细信息(用于商品详情页)
         return -> did     商品 id
		   ,name   商品名
	   	   ,price  商品单价
	 	   ,spec   商品规格
	           ,img    商品图片地址	
		   ,stock  商品库存
		   ,title  商品标题
		   ,detail 商品详细描述
		   ,sale_volu  商品销售量

      8. /supOrder/shoppingcar
	 get 
         return -> pid         商品id
	  	   ,user_id    用户id
		   ,count_num  商品数量
		   ,is_checked 是否选中商品

      9. /supOrder/list?user_id=1001    (获取以及付款的订单的列表, 目前只测试 user_id = 1001 的用户)
         get
         return -> oid         订单id
		   ,pid        商品id
		   ,user_id    用户id
		   ,status     订单状态
		   ,count_num  购买产品个数	 

      10. /supOrder/addPro ( 提交购物车商品信息到数据库 )
         post
	 提交以对象形式提交, 对象属性名分别为:
	 user_id / count_num / pid -> 表示用户id / 商品数量 / 商品id

      11. /supUser/get-info?uid=uid ( 获取 用户id = uid 的用户信息 )
          get
	  return -> uid,       用户id
		    uname,     用户名
		    nickname,  用户昵称
		    phone,     电话
		    birth      生日

      12. /supUser/add-user ( 提交用户信息 )
          post
	  提交以对象形式提交, 对象属性名分别为:
	  uid / uname / nickname / phone / birth  -> 表示用户id / 用户名 / 用户昵称 / 电话 / 生日
      
      </pre>

   5. Supermarket.sql 文件中的数据没有更新, 最新数据库内容保存在本地. sina.sql

   6. 请各位在 微信公众平台 / 设置 下修改服务器域名为        https://myserver.applinzi.com 以允许小程序访问此域名.
      同时, 在 小程序开发者工具 右上角 详情 中刷新 域名信息. 并且取消勾选 不校验合法域名. 
      如果在微信公众平台设置了服务器域名, 在开发中工具 详情 中可以看到设置的对应域名信息.


