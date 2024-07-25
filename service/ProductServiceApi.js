export const ProductServiceApi = {
    getProductsData() {
        return [
            {
                id: 1,
                code: 'code1',
                title: '(CÓ ẢNH THẬT) Bảng welcome đám cưới, bảng kí tên, bảng cổng cưới, bảng chào wedding,đám hỏi, lễ vu quy, lễ đính hôn',
                rating: 4.8,
                total_rating: 58,
                total_review: 400,
                sold: 219,
                price_start: 199000,
                price_end: 299000,
                quantity: 1932,
                product_category :1,
                option: [
                   {id : 1, value :  '50x75 cm'},
                   {id : 2, value :  '60x90 cm'},                    
                ],
                list_type: [
                    {
                        id :1,
                        name: "SET1",
                        option1: 249000,
                        option2: 299000,
                        image: 'https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lkd9476kxxgo4d',
                        thumbnail: 'https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lkd9476kxxgo4d'
                    },
                    {
                        id :2,
                        name: "SET2",
                        option1: 350000,
                        option2: 420000,
                        image: 'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lpkc10vrnreq51',
                        thumbnail: 'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lpkc10vrnreq51'
                    },
                    {
                        id :3,
                        name: "SET3",
                        option1: 510000,
                        option2: 799000,
                        image: 'https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lkd9476kzc149d',
                        thumbnail: 'https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lkd9476kzc149d'
                    },
                ],
                favorite_count: 249,
                information: {
                    category_info: 'Fairy Decor > Trang chủ > Sản phẩm > Chi tiết sản phẩm',
                    total: 1590
                },
                description:
                    `   
                    <h4>FAIRY DECOR</h4>
                    <h5>••• BẢNG WELCOME ĐÁM CƯỚI •••</h5>
                    <p style="font-weight: 600;">Chất liệu :</p>
                    <p>
                        Tranh được in trên nền vải canvas, và được ép lên tấm formex chống nước (5mm). <br>
                        In UV, mực tốt, lên chuẩn màu, sắc nét. <br>
                    </p>
                    <p style="font-weight: 600;">Kích thước:</p>
                    <p>
                        50x75cm <br>
                        60x90cm <br>
                        In cỡ tùy thích: Ib cho shop nha <br>
                    </p>
                    <p>SDT : 033.356.8062 (Zalo/Call)</p>
                `,
                avatar : 'https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lkdc3ur38pt43b', 
                image_slide :[
                    {id: 1, link : 'https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lkdc3ur38pt43b'},
                    {id: 2, link : 'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lmv5ytzeepjz19'},
                    {id: 3, link : 'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lnp9mib3g32252'},
                    {id: 4, link : 'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lnp9mib3hhmi0f'},
                    {id: 5, link : 'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lmpojlvirrhb44'},
                    {id: 6, link : 'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lmpojlviukm7ec'},
                    {id: 7, link : 'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lmpojlvit61r76'},
                    {id: 8, link : 'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-losiu31ips0b80'},
                    {id: 9, link : 'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-ltizgs8t2nm2de'},
                ],
                
                reviews:[
                    {
                        id : 1,
                        user_name : 'ngocha_123',
                        star : 5,
                        avatar:'https://down-vn.img.susercontent.com/file/3e65ce0ae4cef6965ec46a535cc7df0a_tn',
                        description :'Nhận hàng ưng lắm mn ạ, tranh đẹp mà chật lượng lắm nhân viên tư vấn hỗ trợ nhiệt tình luôn đáng để mua nhé❤️',
                        info:"2023-11-25 23:32 | Phân loại hàng: SET 1,50x75 cm",
                        rating: 5,
                        image_rate :[
                            {
                                id: 1,
                                link: 'https://down-bs-vn.img.susercontent.com/vn-11134103-7r98o-loijkgp4vkz7d4.webp',
                                type : "image"
                            }
                        ],
                     
                    },
                    {
                        id : 2,
                        user_name : 'iammieoo',
                        star : 5,
                        avatar:'https://down-vn.img.susercontent.com/file/vn-11134233-7r98o-lqlk2q1xg4pebe_tn',
                        description :'Sốp rất là cute, chỉnh từng tí từng tí do khách rất là khó chiều, sản phẩm nhìn ưng, chất liệu thì mình nghĩ nó sẽ dày dặn hơn nhưng giá này thì vậy là oke lắm rồi, gom mãi mới được mấy ảnh để đánh giá cho sốp',
                        info:"2024-01-18 23:28 | Phân loại hàng: SET 3,50x75 cm",
                        rating: 5,
                        image_rate :[
                           {
                                id: 1,
                                link: 'https://down-bs-vn.img.susercontent.com/vn-11134103-7r98o-lqnm043f1yyf14.webp',
                                type : "image"
                            },
                            {
                                id: 2,
                                link : 'https://down-aka-sg.vod.susercontent.com/api/v4/11110103/mms/vn-11110103-6ke17-lqnm27pmecs73f.default.mp4',
                                type : "video"
                            }
                        ]
                    },
                    {
                        id : 3,
                        user_name : 'nguyenvan921',
                        star : 5,
                        avatar:'https://down-vn.img.susercontent.com/file/0657cf0ec1eb11c0cf248a719659061a_tn',
                        description :'Shop tư vấn nhiệt tình, hỗ trợ sửa theo ý khách, tranh in sắc nét, với giá như vậy là Oke. Đóng gói cẩn thân giao hàng nhanh',
                        info:"2023-11-14 07:29 | Phân loại hàng: SET 3,60x90 cm",
                        rating: 5,
                        image_rate :[
                            {
                                id: 1,
                                link: 'https://down-bs-vn.img.susercontent.com/vn-11134103-7r98o-lo1vycah9cvua9.webp',
                                type : "image"
                            }
                        ],
                    },
                    {
                        id : 4,
                        user_name : 'bichhang1305',
                        star : 5,
                        avatar:'https://down-vn.img.susercontent.com/file/vn-11134233-7r98o-lqbu4iujdnav51_tn',
                        description :'Ảnh nét ạ , xinh lắm luôn , phù hợp với giá tiền , đóng gói cẩn thận ạ , tư vấn nhiệt tình ạ',
                        info:"2024-05-05 08:47 | Phân loại hàng: SET 3,50x75 cm",
                        rating: 5,
                        image_rate :[
                            {
                                id: 1,
                                link: 'https://down-bs-vn.img.susercontent.com/vn-11134103-7r98o-luwvw2h9lixee3.webp',
                                type : "image"
                            }
                        ],
                    },
                    {
                        id : 5,
                        user_name : 'lele2309',
                        star : 5,
                        avatar:'https://down-vn.img.susercontent.com/file/vn-11134233-7r98o-lqbu4iujdnav51_tn',
                        description :'Ảnh chụp chất lượng thấp nhưng ở ngoài thì cao nhé. Shop tư vấn và làm theo yêu cầu rất tận tình ạ. Shop hỗ trợ khi đơn bên vận chuyển chưa giao. Đánh giá shop 5* điểm phục vụ sau này sẽ quay lại.Thank shop đã hỗ trợ ạ',
                        info:"2023-12-17 18:57 | Phân loại hàng: SET 24,60x90 cm",
                        rating: 5,
                        image_rate :[
                            {
                                id: 1,
                                link: 'https://down-bs-vn.img.susercontent.com/vn-11134103-7r98o-lpdnk4kb2u6zb5.webp',
                                type : "image"
                            }
                        ],
                    },
                    {
                        id : 6,
                        user_name : 'hienthanh214',
                        star : 5,
                        avatar:'https://down-vn.img.susercontent.com/file/5ac8ecbbd493372657d7d774daf7843d_tn',
                        description :'Shop hỗ trợ nhanh và giúp sửa theo ý. Nhận hàng xinh nhé ạ,mình chụp hình ánh sáng không ổn nên hơi tối',
                        info:"2023-11-07 20:18 | Phân loại hàng: SET 16,50x75 cm",
                        rating: 5,
                        image_rate :[
                            {
                                id: 1,
                                link: 'https://down-cvs-sg.vod.susercontent.com/api/v4/11110103/mms/vn-11110103-6ke15-lnsnr0t5rg194d.default.mp4',
                                type : "video"
                            },
                            {
                                id: 2,
                                link: 'https://down-bs-vn.img.susercontent.com/vn-11134103-7r98o-lnsnqubt8x2yf2.webp',
                                type : "image"
                            }
                        ],
                    },
                    {
                        id : 7,
                        user_name : 'sanlynh',
                        star : 5,
                        avatar:'https://down-vn.img.susercontent.com/file/vn-11134233-7r98o-lwx10xth2cwp59_tn',
                        description :'Shop hỗ trợ nhiệt tình. Ảnh rất đẹp luôn ạ, sẽ ủng hộ thêm',
                        info:"2024-01-21 21:42 | Phân loại hàng: SET 1,50x75 cm",
                        rating: 5,
                        image_rate :[
                            {
                                id: 1,
                                link: 'https://down-bs-vn.img.susercontent.com/vn-11134103-7r98o-lqrsgjqyt6wn56.webp',
                                type : "image"
                            },
                            {
                                id: 2,
                                link: 'https://down-bs-vn.img.susercontent.com/vn-11134103-7r98o-lqrsgjqydqnr4f.webp',
                                type : "image"
                            }
                        ],
                    },
                    {
                        id : 8,
                        user_name : 'khanhvieng',
                        star : 5,
                        avatar:'https://down-vn.img.susercontent.com/file/90008820cba32ac833ffb2cc07c9c435_tn',
                        description :'Ảnh đẹp lắm ạ, shop hỗ trợ nhiệt tình trước khi vận chuyển hàng',
                        info:"2023-12-04 19:37 | Phân loại hàng: SET 24,60x90 cm",
                        rating: 5,
                        image_rate :[
                            {
                                id: 1,
                                link: 'https://down-tx-sg.vod.susercontent.com/api/v4/11110103/mms/vn-11110103-6ke17-lov5lwi6bv4rd4.default.mp4',
                                type : "video"
                            },
                            {
                                id: 2,
                                link: 'https://down-bs-vn.img.susercontent.com/vn-11134103-7r98o-lov5lridmz4r21.webp',
                                type : "image"
                            }
                        ],
                    },
                    {
                        id : 9,
                        user_name : 'khanhvieng',
                        star : 5,
                        avatar:'https://down-vn.img.susercontent.com/file/90008820cba32ac833ffb2cc07c9c435_tn',
                        description :'Sản phẩm chất lượng ok trong quá trình vận chuyển có bị lõm một chút ở phía sau nhưng do shop in bằng vải Canva nên không ảnh hưởng đến chất lượng hình ảnh phía trước. Nói chung là sản phẩm hết ok ￼',
                        info:"2024-01-09 10:37 | Phân loại hàng: SET 1,60x90 cm",
                        rating: 5,
                        image_rate :[
                            {
                                id: 1,
                                link: 'https://down-bs-vn.img.susercontent.com/vn-11134103-7r98o-lqa03tjjwrhz03.webp',
                                type : "image"
                            },
                        ],
                    },
                    {
                        id : 10,
                        user_name : 'hathu30497',
                        star : 5,
                        avatar:'https://down-vn.img.susercontent.com/file/71aa1b8740c2525cbd8fe21adcd56346_tn',
                        description :'Ảnh siêu xinh, siêu ưng, shop hỗ trợ nhiệt tình, còn ủng hộ thêm nhiều nữa nha￼',
                        info:"2024-01-09 10:37 | Phân loại hàng: SET 1,60x90 cm",
                        rating: 5,
                        image_rate :[
                            {
                                id: 1,
                                link: 'https://down-bs-vn.img.susercontent.com/vn-11134103-7r98o-lnwv60jcxf59a7.webp',
                                type : "image"
                            },
                            {
                                id: 2,
                                link: 'https://down-bs-vn.img.susercontent.com/vn-11134103-7r98o-lnwv60jcjdgt72.webp',
                                type : "image"
                            }
                        ],
                    }
                ]
            },
            {
                //https://shopee.vn/(C%C3%B3-%E1%BA%A2NH-TH%E1%BA%ACT)-Tranh-Treo-T%C6%B0%E1%BB%9Dng-Canvas-Ngh%E1%BB%87-Thu%E1%BA%ADt-painting-Decor-Ph%C3%B2ng-ng%E1%BB%A7-ph%C3%B2ng-kh%C3%A1ch-%E2%9A%A1FREE-SHIP%E2%9A%A1Tranh-%C4%91%E1%BA%B9p-gi%C3%A1-r%E1%BA%BB-i.2335439.11147723745?sp_atk=075df998-5ff6-43fb-8062-976e45b6d45e&xptdk=075df998-5ff6-43fb-8062-976e45b6d45e
                id: 2,
                code: 'code2',
                title: '(Có ẢNH THẬT) Tranh Treo Tường Canvas,Nghệ Thuật painting, Decor Phòng ngủ,phòng khách ⚡FREE SHIP⚡Tranh đẹp giá rẻ',
                rating: 4.8,
                total_rating: 7,
                total_review: 400,
                sold: 198,
                price_start: 199000,
                price_end: 299000,
                quantity: 955,
                product_category : 2,
                option: [
                   {id : 1, value :  '40x60 cm'},
                   {id : 2, value :  '50x75 cm'},                    
                ],
                list_type: [
                    {
                        id :1,
                        name: "SET1",
                        option1: 199000,
                        option2: 299000,
                        image: 'https://down-vn.img.susercontent.com/file/sg-11134201-22110-lomv3cpu0tjvb7',
                        thumbnail: 'https://down-vn.img.susercontent.com/file/sg-11134201-22110-lomv3cpu0tjvb7'
                    },
                    {
                        id :2,
                        name: "SET2",
                        option1: 199000,
                        option2: 299000,
                        image: 'https://down-vn.img.susercontent.com/file/sg-11134201-22110-mk8sb6fp0tjvd8',
                        thumbnail: 'https://down-vn.img.susercontent.com/file/sg-11134201-22110-mk8sb6fp0tjvd8'
                    },
                    {
                        id :3,
                        name: "SET3",
                        option1: 199000,
                        option2: 299000,
                        image: 'https://down-vn.img.susercontent.com/file/sg-11134201-22110-qbj4hliv0tjv57',
                        thumbnail: 'https://down-vn.img.susercontent.com/file/sg-11134201-22110-qbj4hliv0tjv57'
                    },
                ],
                favorite_count: 164,
                information: {
                    category_info: 'Fairy Decor > Trang chủ > Sản phẩm > Chi tiết sản phẩm',
                    total: 1590
                },
                description:
                    `   
                    <h4>FAIRY DECOR</h4>
                    <p>
                        01 SET GỒM 1 TRANH VẢI CANVAS CÓ KHUNG NỔI.(Đầy đủ khung và đinh treo đính kèm) <br>
                        Bao gồm các size:  <br>
                        -  Kích thước: 40x60cm  <br>
                        -  Kích thước: 50x75cm  <br>
                        - Kích thước: 60x90cm => Khách muốn in kích thước này nhắn cho shop <br>
                        - Kích thước tùy ý => Ib zalo: 0333568062 <br>
                        NGUYÊN LIỆU LÀM TRANH <br>
                        - Khác với các shop khác, Tranh Decor Hiện Đại sử dụng nguyên liệu là vải Canvas (chuyên dùng vẽ tranh sơn dầu),bề mặt vải sáng, ganh sần rất thẩm mỹ và không bị bóng. Mực in chuyên dụng tươi sáng và chân thực.<br>
                        - Tranh không bám bụi và dễ dàng vệ sinh bằng khăn ướt<br>
                        - Vải được ép lên tấm nhựa tổng hợp để có độ phẳng tuyệt đối<br>
                        - Khung tranh có viền siêu mỏng giúp tranh nhìn không bị thô<br>
                        ---------------------------------------------------------<br>
                        Shop tặng kèm đinh 3 chân tiện dụng không phải khoan tường, phụ nữ tay yếu cũng đóng được. <br>
                        ---------------------------------------------------------<br>
                        CHÚNG TÔI CAM KẾT: XUẤT HÀNG ĐÚNG CHỦNG LOẠI <br>
                        Sản xuất tại Việt Nam + Giá tốt nhất Thị Trường. <br>
                        Mẫu in ra nét như hình + Không bay màu + Không chứa chất độc hại <br>
                        Mẫu in ra nét như hình + Không bay màu + Không chứa chất độc hại <br>
                        Bảo hành 3 Năm + Đổi trả trong 7 ngày không cần lý do <br>
                        Miễn phí tư vấn, thiết kế và sản xuất theo yêu cầu<br>
                        ---------------------------------------------------------<br>
                        VIDEO UP SHOPEE bị giảm dung lượng nhiều nên nhìn không rõ sản phẩm<br>
                        QUÝ KHÁCH VUI LÒNG KẾT NỐI  ZALO 033.356.8062 để xem VIDEO sắc nét thực tế sản phẩm<br>
                        Miễn phí tư vấn, thiết kế và sản xuất theo yêu cầu<br>
                        ---------------------------------------------------------<br>
                        Địa chỉ: Fairy Decor - Hà Trì , Hà Đông, Hà Nội<br>
                        Hotline tư vấn bán hàng : 033.356.8062<br>
                    </p>
                `,
                avatar : 'https://down-vn.img.susercontent.com/file/sg-11134201-22110-u3iwel9o0tjvd8', 
                image_slide :[
                    {id: 1, link : 'https://down-vn.img.susercontent.com/file/sg-11134201-22110-u3iwel9o0tjvd8'},
                    {id: 2, link : 'https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lil4gso3padu5e'},
                    {id: 3, link : 'https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lil4gso3qoyab3'},
                    {id: 4, link : 'https://down-vn.img.susercontent.com/file/sg-11134201-22110-mk8sb6fp0tjvd8'},
                    {id: 5, link : 'https://down-vn.img.susercontent.com/file/sg-11134201-22110-eaet66fp0tjv45'},
                ],
                
                reviews:[
                    {
                        id : 1,
                        user_name : 'm53.h86',
                        star : 5,
                        avatar:'https://down-vn.img.susercontent.com/file/vn-11134233-7qukw-lhrahwom3kp113_tn',
                        description :'Shop đóng gói cẩn thận kĩ càng lắm ạ, tranh đẹp, nhìn giốnh tranh sơn dầu. Chất lượng tốt, đáng mua nha mn uii',
                        info:"2023-10-26 15:07 | Phân loại hàng: SET 2,40x60 cm",
                        rating: 5,
                        image_rate :[
                            {
                                id: 1,
                                link: 'https://down-bs-vn.img.susercontent.com/vn-11134103-7r98o-lnb7zmer8c8d13.webp',
                                type : "image"
                            }
                        ],
                     
                    },
                    {
                        id : 2,
                        user_name : 'thuhang.vcu',
                        star : 5,
                        avatar:'https://down-vn.img.susercontent.com/file/9bff1b33671a5cb8dcbe21451e4dfe0c_tn',
                        description :'Tranh rất xinh, shop đóng gói cẩn thận, cho shop 10 điểm, kể to hơn 1 tí nữa thì đẹp, nhưng giá này quá ok rồi nha',
                        info:"2024-01-18 23:28 | Phân loại hàng: SET 3,50x75 cm",
                        rating: 5,
                        image_rate :[
                           {
                                id: 1,
                                link: 'https://down-bs-vn.img.susercontent.com/vn-11134103-7r98o-lnwhuvmu7vu587.webp',
                                type : "image"
                            },
                            {
                                id: 2,
                                link : 'https://down-bs-vn.img.susercontent.com/vn-11134103-7r98o-lnwhuvno6nzhd1.webp',
                                type : "image"
                            }
                        ]
                    },
                    {
                        id : 3,
                        user_name : 'homiemart_100416',
                        star : 5,
                        avatar:'https://down-vn.img.susercontent.com/file/b9acfd93662133476479e6ff983a7552_tn',
                        description :'Tranh đẹp lắm ạ. Treo lên ai cũng hỏi chỗ mua ạ',
                        info:"2023-06-14 08:03 | Phân loại hàng: SET 11,50x75 cm",
                        rating: 5,
                        image_rate :[
                            {
                                id: 1,
                                link: 'https://down-bs-vn.img.susercontent.com/vn-11134103-7qukw-lilaudpwsvrm29.webp',
                                type : "image"
                            }
                        ],
                    },
                    {
                        id : 4,
                        user_name : 'mindo92vn',
                        star : 5,
                        avatar:'https://down-vn.img.susercontent.com/file/df49d8f9810b59a1dc3345051f1de462_tn',
                        description :'tranh vừa xinh. ship rất cẩn thận. Bóc ra vừa ý treo lên tương ngayyyyy. Tóm lại là rất đáng mua nha',
                        info:"2023-06-14 08:03 | Phân loại hàng: SET 11,50x75 cm",
                        rating: 5,
                        image_rate :[
                            {
                                id: 1,
                                link: 'https://down-tx-sg.vod.susercontent.com/api/v4/11110103/mms/vn-11110103-6ke17-lmt74wer1hi7a3.default.mp4',
                                type : "video"
                            },
                            {
                                id: 2,
                                link: 'https://down-bs-vn.img.susercontent.com/vn-11134103-7r98o-lmt74qgtqjfjd8.webp',
                                type : "image"
                            },
                            {
                                id: 3,
                                link: 'https://down-bs-vn.img.susercontent.com/vn-11134103-7r98o-lmt74qgtrxzz0d.webp',
                                type : "image"
                            },
                            
                        ],
                    },
                    {
                        id : 5,
                        user_name : 'duyentlu',
                        star : 5,
                        avatar:'https://down-vn.img.susercontent.com/file/5744f6547c290565176091d71d595534_tn',
                        description :'Shop đóng gói chắc chắn , tặng kèm nhiều đinh treo, tranh đẹp màu sắc tươi như hình , sẽ ủng hộ lần sau',
                        info:"2023-05-11 12:28 | Phân loại hàng: SET 1,40x60 cm",
                        rating: 5,
                        image_rate :[
                            {
                                id: 1,
                                link: 'https://down-bs-vn.img.susercontent.com/vn-11134103-7qukw-lgna52msxlv779.webp',
                                type : "image"
                            },
                        ],
                    },
                ]
            },
            {
                //https://shopee.vn/(C%C3%93-%E1%BA%A2NH-TH%E1%BA%ACT)-Tranh-Treo-T%C6%B0%E1%BB%9Dng-Canvas-Decor-Ph%C3%B2ng-ng%E1%BB%A7-ph%C3%B2ng-kh%C3%A1ch-%C4%91%E1%BA%B9p%E2%9A%A1FREE-SHIP%E2%9A%A1B%E1%BB%99-vintage-gi%C3%A1-r%E1%BA%BB-th%C3%AAm-i.2335439.4485110641?xptdk=5fef9250-e2f5-420c-813a-d8d63073a0e3
                id: 3,
                code: 'code3',
                title: '(CÓ ẢNH THẬT) Tranh Treo Tường Canvas,Decor Phòng ngủ,phòng khách đẹp⚡FREE SHIP⚡Bộ vintage giá rẻ thêm',
                rating: 5.0,
                total_rating: 4,
                total_review: 400,
                sold: 134,
                price_start: 299000,
                price_end: 479000,
                quantity: 878,
                product_category : 2,
                option: [
                   {id : 1, value :  '30x45 cm'},
                   {id : 2, value :  '40x60 cm'},                    
                ],
                list_type: [
                    {
                        id :1,
                        name: "SET1",
                        option1: 299000,
                        option2: 479000,
                        image: 'https://down-vn.img.susercontent.com/file/885b97dd6945151e91ee1962936ccf17',
                        thumbnail: 'https://down-vn.img.susercontent.com/file/885b97dd6945151e91ee1962936ccf17'
                    },
                    {
                        id :2,
                        name: "SET2",
                        option1: 299000,
                        option2: 479000,
                        image: 'https://down-vn.img.susercontent.com/file/91511d572aa72c2dfe0e14b5e356b783',
                        thumbnail: 'https://down-vn.img.susercontent.com/file/91511d572aa72c2dfe0e14b5e356b783'
                    },
                    {
                        id :3,
                        name: "SET3",
                        option1: 299000,
                        option2: 479000,
                        image: 'https://down-vn.img.susercontent.com/file/39ee038184816c64feac55a22084efa2',
                        thumbnail: 'https://down-vn.img.susercontent.com/file/39ee038184816c64feac55a22084efa2'
                    },
                    {
                        id :4,
                        name: "SET4",
                        option1: 299000,
                        option2: 479000,
                        image: 'https://down-vn.img.susercontent.com/file/2cda85c77613d640ddd4c8a47665a713',
                        thumbnail: 'https://down-vn.img.susercontent.com/file/2cda85c77613d640ddd4c8a47665a713'
                    },
                    {
                        id :5,
                        name: "SET5",
                        option1: 299000,
                        option2: 479000,
                        image: 'https://down-vn.img.susercontent.com/file/ff06a32b41d71df5602b260721e014f7',
                        thumbnail: 'https://down-vn.img.susercontent.com/file/ff06a32b41d71df5602b260721e014f7'
                    },
                ],
                favorite_count: 47,
                information: {
                    category_info: 'Fairy Decor > Trang chủ > Sản phẩm > Chi tiết sản phẩm',
                    total: 1590
                },
                description:
                    `   
                    <h4>FAIRY DECOR</h4>
                    <p>
                        01 SET GỒM ^ TRANH VẢI CANVAS CÓ KHUNG NỔI. <br>
                        Bao gồm các size:  <br>
                        - Size nhỏ: Gồm 2 bức 23x33cm + 4 bức 16x21cm  <br>
                        - Size vừa: Gồm 2 bức 28x40cm+ 4 bức 19x25cm  <br>
                        - Size lớn: Gồm 2 bức 40x60cm+ 4 bức 28x37cm => Khách muốn in size lớn ib shop nha <br>
                        - Ib zalo: 0333568062 <br>
                        NGUYÊN LIỆU LÀM TRANH <br>
                        - Khác với các shop khác, Tranh Decor Hiện Đại sử dụng nguyên liệu là vải Canvas (chuyên dùng vẽ tranh sơn dầu),bề mặt vải sáng, ganh sần rất thẩm mỹ và không bị bóng. Mực in chuyên dụng tươi sáng và chân thực.<br>
                        - Tranh không bám bụi và dễ dàng vệ sinh bằng khăn ướt<br>
                        - Vải được ép lên tấm nhựa tổng hợp để có độ phẳng tuyệt đối<br>
                        - Khung tranh có viền siêu mỏng giúp tranh nhìn không bị thô<br>
                        ---------------------------------------------------------<br>
                        Shop tặng kèm đinh 3 chân tiện dụng không phải khoan tường, phụ nữ tay yếu cũng đóng được. <br>
                        ---------------------------------------------------------<br>
                        CHÚNG TÔI CAM KẾT: XUẤT HÀNG ĐÚNG CHỦNG LOẠI <br>
                        Sản xuất tại Việt Nam + Giá tốt nhất Thị Trường. <br>
                        Mẫu in ra nét như hình + Không bay màu + Không chứa chất độc hại <br>
                        Mẫu in ra nét như hình + Không bay màu + Không chứa chất độc hại <br>
                        Bảo hành 3 Năm + Đổi trả trong 7 ngày không cần lý do <br>
                        Miễn phí tư vấn, thiết kế và sản xuất theo yêu cầu<br>
                        ---------------------------------------------------------<br>
                        VIDEO UP SHOPEE bị giảm dung lượng nhiều nên nhìn không rõ sản phẩm<br>
                        QUÝ KHÁCH VUI LÒNG KẾT NỐI  ZALO 033.356.8062 để xem VIDEO sắc nét thực tế sản phẩm<br>
                        Miễn phí tư vấn, thiết kế và sản xuất theo yêu cầu<br>
                        ---------------------------------------------------------<br>
                        Địa chỉ: Fairy Decor - Hà Trì , Hà Đông, Hà Nội<br>
                        Hotline tư vấn bán hàng : 033.356.8062<br>
                    </p>
                `,
                avatar : 'https://down-vn.img.susercontent.com/file/4f4d8d8a190654ebc0bdc657a39cda0f', 
                image_slide :[
                    {id: 1, link : 'https://down-vn.img.susercontent.com/file/4f4d8d8a190654ebc0bdc657a39cda0f'},
                    {id: 2, link : 'https://down-vn.img.susercontent.com/file/885b97dd6945151e91ee1962936ccf17'},
                    {id: 3, link : 'https://down-vn.img.susercontent.com/file/91511d572aa72c2dfe0e14b5e356b783'},
                    {id: 4, link : 'https://down-vn.img.susercontent.com/file/39338c76c91c30d41983fe117e71fe6c'},
                    {id: 5, link : 'https://down-vn.img.susercontent.com/file/d40db58eb116856fb0a3a9ce62951fc2'},
                    {id: 6, link : 'https://down-vn.img.susercontent.com/file/39ee038184816c64feac55a22084efa2'},
                    {id: 7, link : 'https://down-vn.img.susercontent.com/file/f0bb250cfc9fe802489828d6a145a9e9'},
                    {id: 7, link : 'https://down-vn.img.susercontent.com/file/1664a6368b83efa7552f21f8337b3a39'},
                ],
                
                reviews:[
                    {
                        id : 1,
                        user_name : 'manhpvd',
                        star : 5,
                        avatar:'https://down-vn.img.susercontent.com/file/vn-11134233-7qukw-lhrahwom3kp113_tn',
                        description :'Chất lượng tốt, đáng mua nha, sẽ ủng hộ thêm shop nhé',
                        info:"2022-05-03 11:27 | Phân loại hàng: SET 7,40x60 cm",
                        rating: 5,
                        image_rate :[
                            {
                                id: 1,
                                link: 'https://down-bs-vn.img.susercontent.com/1c5551ae8d072e6665e67f17769a68e1.webp',
                                type : "image"
                            }
                        ],
                     
                    },
                    {
                        id : 2,
                        user_name : 'thuhang.vcu',
                        star : 5,
                        avatar:'https://down-vn.img.susercontent.com/file/9bff1b33671a5cb8dcbe21451e4dfe0c_tn',
                        description :'Tranh rất xinh, shop đóng gói cẩn thận, cho shop 10 điểm, kể to hơn 1 tí nữa thì đẹp, nhưng giá này quá ok rồi nha',
                        info:"2024-01-18 23:28 | Phân loại hàng: SET 3,50x75 cm",
                        rating: 5,
                        image_rate :[
                           {
                                id: 1,
                                link: 'https://down-bs-vn.img.susercontent.com/vn-11134103-7r98o-lnwhuvmu7vu587.webp',
                                type : "image"
                            },
                            {
                                id: 2,
                                link : 'https://down-bs-vn.img.susercontent.com/vn-11134103-7r98o-lnwhuvno6nzhd1.webp',
                                type : "image"
                            }
                        ]
                    },
                    {
                        id : 3,
                        user_name : 'homiemart_100416',
                        star : 5,
                        avatar:'https://down-vn.img.susercontent.com/file/b9acfd93662133476479e6ff983a7552_tn',
                        description :'Tranh đẹp lắm ạ. Treo lên ai cũng hỏi chỗ mua ạ',
                        info:"2023-06-14 08:03 | Phân loại hàng: SET 11,50x75 cm",
                        rating: 5,
                        image_rate :[
                            {
                                id: 1,
                                link: 'https://down-bs-vn.img.susercontent.com/vn-11134103-7qukw-lilaudpwsvrm29.webp',
                                type : "image"
                            }
                        ],
                    },
                    {
                        id : 4,
                        user_name : 'mindo92vn',
                        star : 5,
                        avatar:'https://down-vn.img.susercontent.com/file/df49d8f9810b59a1dc3345051f1de462_tn',
                        description :'tranh vừa xinh. ship rất cẩn thận. Bóc ra vừa ý treo lên tương ngayyyyy. Tóm lại là rất đáng mua nha',
                        info:"2023-06-14 08:03 | Phân loại hàng: SET 11,50x75 cm",
                        rating: 5,
                        image_rate :[
                            {
                                id: 1,
                                link: 'https://down-tx-sg.vod.susercontent.com/api/v4/11110103/mms/vn-11110103-6ke17-lmt74wer1hi7a3.default.mp4',
                                type : "video"
                            },
                            {
                                id: 2,
                                link: 'https://down-bs-vn.img.susercontent.com/vn-11134103-7r98o-lmt74qgtqjfjd8.webp',
                                type : "image"
                            },
                            {
                                id: 3,
                                link: 'https://down-bs-vn.img.susercontent.com/vn-11134103-7r98o-lmt74qgtrxzz0d.webp',
                                type : "image"
                            },
                            
                        ],
                    },
                    {
                        id : 5,
                        user_name : 'duyentlu',
                        star : 5,
                        avatar:'https://down-vn.img.susercontent.com/file/5744f6547c290565176091d71d595534_tn',
                        description :'Shop đóng gói chắc chắn , tặng kèm nhiều đinh treo, tranh đẹp màu sắc tươi như hình , sẽ ủng hộ lần sau',
                        info:"2023-05-11 12:28 | Phân loại hàng: SET 1,40x60 cm",
                        rating: 5,
                        image_rate :[
                            {
                                id: 1,
                                link: 'https://down-bs-vn.img.susercontent.com/vn-11134103-7qukw-lgna52msxlv779.webp',
                                type : "image"
                            },
                        ],
                    },
                ]
            },
            {
                id: 4,
                code: 'code4',
                title: '(Có ẢNH THẬT) Tranh Treo Tường Phong Thủy,Tráng gương,Tranh canvas,Decor phòng khách, phòng ngủ đẹp⚡FREE SHIP giá rẻ',
                rating: 5.0,
                total_rating: 4,
                total_review: 400,
                sold: 334,
                price_start: 299000,
                price_end: 479000,
                quantity: 878,
                product_category : 2,
                option: [
                   {id : 1, value :  '30x45 cm'},
                   {id : 2, value :  '40x60 cm'},                    
                ],
                list_type: [
                    {
                        id :1,
                        name: "SET1",
                        option1: 299000,
                        option2: 479000,
                        image: 'https://down-vn.img.susercontent.com/file/885b97dd6945151e91ee1962936ccf17',
                        thumbnail: 'https://down-vn.img.susercontent.com/file/885b97dd6945151e91ee1962936ccf17'
                    },
                    {
                        id :2,
                        name: "SET2",
                        option1: 299000,
                        option2: 479000,
                        image: 'https://down-vn.img.susercontent.com/file/91511d572aa72c2dfe0e14b5e356b783',
                        thumbnail: 'https://down-vn.img.susercontent.com/file/91511d572aa72c2dfe0e14b5e356b783'
                    },
                    {
                        id :3,
                        name: "SET3",
                        option1: 299000,
                        option2: 479000,
                        image: 'https://down-vn.img.susercontent.com/file/39ee038184816c64feac55a22084efa2',
                        thumbnail: 'https://down-vn.img.susercontent.com/file/39ee038184816c64feac55a22084efa2'
                    },
                    {
                        id :4,
                        name: "SET4",
                        option1: 299000,
                        option2: 479000,
                        image: 'https://down-vn.img.susercontent.com/file/2cda85c77613d640ddd4c8a47665a713',
                        thumbnail: 'https://down-vn.img.susercontent.com/file/2cda85c77613d640ddd4c8a47665a713'
                    },
                    {
                        id :5,
                        name: "SET5",
                        option1: 299000,
                        option2: 479000,
                        image: 'https://down-vn.img.susercontent.com/file/ff06a32b41d71df5602b260721e014f7',
                        thumbnail: 'https://down-vn.img.susercontent.com/file/ff06a32b41d71df5602b260721e014f7'
                    },
                ],
                favorite_count: 47,
                information: {
                    category_info: 'Fairy Decor > Trang chủ > Sản phẩm > Chi tiết sản phẩm',
                    total: 1590
                },
                description:
                    `   
                    <h4>FAIRY DECOR</h4>
                    <p>
                        01 SET GỒM ^ TRANH VẢI CANVAS CÓ KHUNG NỔI. <br>
                        Bao gồm các size:  <br>
                        - Size nhỏ: Gồm 2 bức 23x33cm + 4 bức 16x21cm  <br>
                        - Size vừa: Gồm 2 bức 28x40cm+ 4 bức 19x25cm  <br>
                        - Size lớn: Gồm 2 bức 40x60cm+ 4 bức 28x37cm => Khách muốn in size lớn ib shop nha <br>
                        - Ib zalo: 0333568062 <br>
                        NGUYÊN LIỆU LÀM TRANH <br>
                        - Khác với các shop khác, Tranh Decor Hiện Đại sử dụng nguyên liệu là vải Canvas (chuyên dùng vẽ tranh sơn dầu),bề mặt vải sáng, ganh sần rất thẩm mỹ và không bị bóng. Mực in chuyên dụng tươi sáng và chân thực.<br>
                        - Tranh không bám bụi và dễ dàng vệ sinh bằng khăn ướt<br>
                        - Vải được ép lên tấm nhựa tổng hợp để có độ phẳng tuyệt đối<br>
                        - Khung tranh có viền siêu mỏng giúp tranh nhìn không bị thô<br>
                        ---------------------------------------------------------<br>
                        Shop tặng kèm đinh 3 chân tiện dụng không phải khoan tường, phụ nữ tay yếu cũng đóng được. <br>
                        ---------------------------------------------------------<br>
                        CHÚNG TÔI CAM KẾT: XUẤT HÀNG ĐÚNG CHỦNG LOẠI <br>
                        Sản xuất tại Việt Nam + Giá tốt nhất Thị Trường. <br>
                        Mẫu in ra nét như hình + Không bay màu + Không chứa chất độc hại <br>
                        Mẫu in ra nét như hình + Không bay màu + Không chứa chất độc hại <br>
                        Bảo hành 3 Năm + Đổi trả trong 7 ngày không cần lý do <br>
                        Miễn phí tư vấn, thiết kế và sản xuất theo yêu cầu<br>
                        ---------------------------------------------------------<br>
                        VIDEO UP SHOPEE bị giảm dung lượng nhiều nên nhìn không rõ sản phẩm<br>
                        QUÝ KHÁCH VUI LÒNG KẾT NỐI  ZALO 033.356.8062 để xem VIDEO sắc nét thực tế sản phẩm<br>
                        Miễn phí tư vấn, thiết kế và sản xuất theo yêu cầu<br>
                        ---------------------------------------------------------<br>
                        Địa chỉ: Fairy Decor - Hà Trì , Hà Đông, Hà Nội<br>
                        Hotline tư vấn bán hàng : 033.356.8062<br>
                    </p>
                `,
                avatar : 'https://down-vn.img.susercontent.com/file/62c33179eef483e6c87dc0d1c1792a36', 
                image_slide :[
                    {id: 1, link : 'https://down-vn.img.susercontent.com/file/62c33179eef483e6c87dc0d1c1792a36'},
                    {id: 2, link : 'https://down-vn.img.susercontent.com/file/7fc7aace5fb6cf7293d78f4857179c68'},
                    {id: 3, link : 'https://down-vn.img.susercontent.com/file/91e293c1b7911c0117fc5c4d7cf73259'},
                    {id: 4, link : 'https://down-vn.img.susercontent.com/file/65cafbed3da9038f23398a2484cb3b5a'},
                    {id: 5, link : 'https://down-vn.img.susercontent.com/file/db32824a839d1afd0ba137d9f3840388'},
                    {id: 6, link : 'https://down-vn.img.susercontent.com/file/17b3dcb4f6c9de585f200099197f519a'},
                ],
                
                reviews:[
                    {
                        id : 1,
                        user_name : 'manhpvd',
                        star : 5,
                        avatar:'https://down-vn.img.susercontent.com/file/vn-11134233-7qukw-lhrahwom3kp113_tn',
                        description :'Chất lượng tốt, đáng mua nha, sẽ ủng hộ thêm shop nhé',
                        info:"2022-05-03 11:27 | Phân loại hàng: SET 7,40x60 cm",
                        rating: 5,
                        image_rate :[
                            {
                                id: 1,
                                link: 'https://down-bs-vn.img.susercontent.com/1c5551ae8d072e6665e67f17769a68e1.webp',
                                type : "image"
                            }
                        ],
                     
                    },
                    {
                        id : 2,
                        user_name : 'thuhang.vcu',
                        star : 5,
                        avatar:'https://down-vn.img.susercontent.com/file/9bff1b33671a5cb8dcbe21451e4dfe0c_tn',
                        description :'Tranh rất xinh, shop đóng gói cẩn thận, cho shop 10 điểm, kể to hơn 1 tí nữa thì đẹp, nhưng giá này quá ok rồi nha',
                        info:"2024-01-18 23:28 | Phân loại hàng: SET 3,50x75 cm",
                        rating: 5,
                        image_rate :[
                           {
                                id: 1,
                                link: 'https://down-bs-vn.img.susercontent.com/vn-11134103-7r98o-lnwhuvmu7vu587.webp',
                                type : "image"
                            },
                            {
                                id: 2,
                                link : 'https://down-bs-vn.img.susercontent.com/vn-11134103-7r98o-lnwhuvno6nzhd1.webp',
                                type : "image"
                            }
                        ]
                    },
                    {
                        id : 3,
                        user_name : 'homiemart_100416',
                        star : 5,
                        avatar:'https://down-vn.img.susercontent.com/file/b9acfd93662133476479e6ff983a7552_tn',
                        description :'Tranh đẹp lắm ạ. Treo lên ai cũng hỏi chỗ mua ạ',
                        info:"2023-06-14 08:03 | Phân loại hàng: SET 11,50x75 cm",
                        rating: 5,
                        image_rate :[
                            {
                                id: 1,
                                link: 'https://down-bs-vn.img.susercontent.com/vn-11134103-7qukw-lilaudpwsvrm29.webp',
                                type : "image"
                            }
                        ],
                    },
                    {
                        id : 4,
                        user_name : 'mindo92vn',
                        star : 5,
                        avatar:'https://down-vn.img.susercontent.com/file/df49d8f9810b59a1dc3345051f1de462_tn',
                        description :'tranh vừa xinh. ship rất cẩn thận. Bóc ra vừa ý treo lên tương ngayyyyy. Tóm lại là rất đáng mua nha',
                        info:"2023-06-14 08:03 | Phân loại hàng: SET 11,50x75 cm",
                        rating: 5,
                        image_rate :[
                            {
                                id: 1,
                                link: 'https://down-tx-sg.vod.susercontent.com/api/v4/11110103/mms/vn-11110103-6ke17-lmt74wer1hi7a3.default.mp4',
                                type : "video"
                            },
                            {
                                id: 2,
                                link: 'https://down-bs-vn.img.susercontent.com/vn-11134103-7r98o-lmt74qgtqjfjd8.webp',
                                type : "image"
                            },
                            {
                                id: 3,
                                link: 'https://down-bs-vn.img.susercontent.com/vn-11134103-7r98o-lmt74qgtrxzz0d.webp',
                                type : "image"
                            },
                            
                        ],
                    },
                    {
                        id : 5,
                        user_name : 'duyentlu',
                        star : 5,
                        avatar:'https://down-vn.img.susercontent.com/file/5744f6547c290565176091d71d595534_tn',
                        description :'Shop đóng gói chắc chắn , tặng kèm nhiều đinh treo, tranh đẹp màu sắc tươi như hình , sẽ ủng hộ lần sau',
                        info:"2023-05-11 12:28 | Phân loại hàng: SET 1,40x60 cm",
                        rating: 5,
                        image_rate :[
                            {
                                id: 1,
                                link: 'https://down-bs-vn.img.susercontent.com/vn-11134103-7qukw-lgna52msxlv779.webp',
                                type : "image"
                            },
                        ],
                    },
                    {
                        id : 5,
                        user_name : 'duyentlu',
                        star : 5,
                        avatar:'https://down-vn.img.susercontent.com/file/5744f6547c290565176091d71d595534_tn',
                        description :'Shop đóng gói chắc chắn , tặng kèm nhiều đinh treo, tranh đẹp màu sắc tươi như hình , sẽ ủng hộ lần sau',
                        info:"2023-05-11 12:28 | Phân loại hàng: SET 1,40x60 cm",
                        rating: 5,
                        image_rate :[
                            {
                                id: 1,
                                link: 'https://down-bs-vn.img.susercontent.com/vn-11134103-7qukw-lgna52msxlv779.webp',
                                type : "image"
                            },
                        ],
                    },
                ]
            },
            {
                id: 5,
                code: 'code5',
                title: 'Sản phẩm số 5',
                rating: 5.0,
                total_rating: 4,
                total_review: 400,
                sold: 134,
                price_start: 299000,
                price_end: 479000,
                quantity: 878,
                product_category : 2,
                option: [
                   {id : 1, value :  '30x45 cm'},
                   {id : 2, value :  '40x60 cm'},                    
                ],
                list_type: [
                    {
                        id :1,
                        name: "SET1",
                        option1: 299000,
                        option2: 479000,
                        image: 'https://down-vn.img.susercontent.com/file/885b97dd6945151e91ee1962936ccf17',
                        thumbnail: 'https://down-vn.img.susercontent.com/file/885b97dd6945151e91ee1962936ccf17'
                    },
                    {
                        id :2,
                        name: "SET2",
                        option1: 299000,
                        option2: 479000,
                        image: 'https://down-vn.img.susercontent.com/file/91511d572aa72c2dfe0e14b5e356b783',
                        thumbnail: 'https://down-vn.img.susercontent.com/file/91511d572aa72c2dfe0e14b5e356b783'
                    },
                    {
                        id :3,
                        name: "SET3",
                        option1: 299000,
                        option2: 479000,
                        image: 'https://down-vn.img.susercontent.com/file/39ee038184816c64feac55a22084efa2',
                        thumbnail: 'https://down-vn.img.susercontent.com/file/39ee038184816c64feac55a22084efa2'
                    },
                    {
                        id :4,
                        name: "SET4",
                        option1: 299000,
                        option2: 479000,
                        image: 'https://down-vn.img.susercontent.com/file/2cda85c77613d640ddd4c8a47665a713',
                        thumbnail: 'https://down-vn.img.susercontent.com/file/2cda85c77613d640ddd4c8a47665a713'
                    },
                    {
                        id :5,
                        name: "SET5",
                        option1: 299000,
                        option2: 479000,
                        image: 'https://down-vn.img.susercontent.com/file/ff06a32b41d71df5602b260721e014f7',
                        thumbnail: 'https://down-vn.img.susercontent.com/file/ff06a32b41d71df5602b260721e014f7'
                    },
                ],
                favorite_count: 47,
                information: {
                    category_info: 'Fairy Decor > Trang chủ > Sản phẩm > Chi tiết sản phẩm',
                    total: 1590
                },
                description:
                    `   
                    <h4>FAIRY DECOR</h4>
                    <p>
                        01 SET GỒM ^ TRANH VẢI CANVAS CÓ KHUNG NỔI. <br>
                        Bao gồm các size:  <br>
                        - Size nhỏ: Gồm 2 bức 23x33cm + 4 bức 16x21cm  <br>
                        - Size vừa: Gồm 2 bức 28x40cm+ 4 bức 19x25cm  <br>
                        - Size lớn: Gồm 2 bức 40x60cm+ 4 bức 28x37cm => Khách muốn in size lớn ib shop nha <br>
                        - Ib zalo: 0333568062 <br>
                        NGUYÊN LIỆU LÀM TRANH <br>
                        - Khác với các shop khác, Tranh Decor Hiện Đại sử dụng nguyên liệu là vải Canvas (chuyên dùng vẽ tranh sơn dầu),bề mặt vải sáng, ganh sần rất thẩm mỹ và không bị bóng. Mực in chuyên dụng tươi sáng và chân thực.<br>
                        - Tranh không bám bụi và dễ dàng vệ sinh bằng khăn ướt<br>
                        - Vải được ép lên tấm nhựa tổng hợp để có độ phẳng tuyệt đối<br>
                        - Khung tranh có viền siêu mỏng giúp tranh nhìn không bị thô<br>
                        ---------------------------------------------------------<br>
                        Shop tặng kèm đinh 3 chân tiện dụng không phải khoan tường, phụ nữ tay yếu cũng đóng được. <br>
                        ---------------------------------------------------------<br>
                        CHÚNG TÔI CAM KẾT: XUẤT HÀNG ĐÚNG CHỦNG LOẠI <br>
                        Sản xuất tại Việt Nam + Giá tốt nhất Thị Trường. <br>
                        Mẫu in ra nét như hình + Không bay màu + Không chứa chất độc hại <br>
                        Mẫu in ra nét như hình + Không bay màu + Không chứa chất độc hại <br>
                        Bảo hành 3 Năm + Đổi trả trong 7 ngày không cần lý do <br>
                        Miễn phí tư vấn, thiết kế và sản xuất theo yêu cầu<br>
                        ---------------------------------------------------------<br>
                        VIDEO UP SHOPEE bị giảm dung lượng nhiều nên nhìn không rõ sản phẩm<br>
                        QUÝ KHÁCH VUI LÒNG KẾT NỐI  ZALO 033.356.8062 để xem VIDEO sắc nét thực tế sản phẩm<br>
                        Miễn phí tư vấn, thiết kế và sản xuất theo yêu cầu<br>
                        ---------------------------------------------------------<br>
                        Địa chỉ: Fairy Decor - Hà Trì , Hà Đông, Hà Nội<br>
                        Hotline tư vấn bán hàng : 033.356.8062<br>
                    </p>
                `,
                avatar : 'https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lil4gso3qoyab3', 
                image_slide :[
                    {id: 1, link : 'https://down-vn.img.susercontent.com/file/sg-11134201-22110-u3iwel9o0tjvd8'},
                    {id: 2, link : 'https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lil4gso3padu5e'},
                    {id: 3, link : 'https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lil4gso3qoyab3'},
                    {id: 4, link : 'https://down-vn.img.susercontent.com/file/sg-11134201-22110-mk8sb6fp0tjvd8'},
                    {id: 5, link : 'https://down-vn.img.susercontent.com/file/sg-11134201-22110-eaet66fp0tjv45'},
                ],
                
                reviews:[
                    {
                        id : 1,
                        user_name : 'manhpvd',
                        star : 5,
                        avatar:'https://down-vn.img.susercontent.com/file/vn-11134233-7qukw-lhrahwom3kp113_tn',
                        description :'Chất lượng tốt, đáng mua nha, sẽ ủng hộ thêm shop nhé',
                        info:"2022-05-03 11:27 | Phân loại hàng: SET 7,40x60 cm",
                        rating: 5,
                        image_rate :[
                            {
                                id: 1,
                                link: 'https://down-bs-vn.img.susercontent.com/1c5551ae8d072e6665e67f17769a68e1.webp',
                                type : "image"
                            }
                        ],
                     
                    },
                    {
                        id : 2,
                        user_name : 'thuhang.vcu',
                        star : 5,
                        avatar:'https://down-vn.img.susercontent.com/file/9bff1b33671a5cb8dcbe21451e4dfe0c_tn',
                        description :'Tranh rất xinh, shop đóng gói cẩn thận, cho shop 10 điểm, kể to hơn 1 tí nữa thì đẹp, nhưng giá này quá ok rồi nha',
                        info:"2024-01-18 23:28 | Phân loại hàng: SET 3,50x75 cm",
                        rating: 5,
                        image_rate :[
                           {
                                id: 1,
                                link: 'https://down-bs-vn.img.susercontent.com/vn-11134103-7r98o-lnwhuvmu7vu587.webp',
                                type : "image"
                            },
                            {
                                id: 2,
                                link : 'https://down-bs-vn.img.susercontent.com/vn-11134103-7r98o-lnwhuvno6nzhd1.webp',
                                type : "image"
                            }
                        ]
                    },
                    {
                        id : 3,
                        user_name : 'homiemart_100416',
                        star : 5,
                        avatar:'https://down-vn.img.susercontent.com/file/b9acfd93662133476479e6ff983a7552_tn',
                        description :'Tranh đẹp lắm ạ. Treo lên ai cũng hỏi chỗ mua ạ',
                        info:"2023-06-14 08:03 | Phân loại hàng: SET 11,50x75 cm",
                        rating: 5,
                        image_rate :[
                            {
                                id: 1,
                                link: 'https://down-bs-vn.img.susercontent.com/vn-11134103-7qukw-lilaudpwsvrm29.webp',
                                type : "image"
                            }
                        ],
                    },
                    {
                        id : 4,
                        user_name : 'mindo92vn',
                        star : 5,
                        avatar:'https://down-vn.img.susercontent.com/file/df49d8f9810b59a1dc3345051f1de462_tn',
                        description :'tranh vừa xinh. ship rất cẩn thận. Bóc ra vừa ý treo lên tương ngayyyyy. Tóm lại là rất đáng mua nha',
                        info:"2023-06-14 08:03 | Phân loại hàng: SET 11,50x75 cm",
                        rating: 5,
                        image_rate :[
                            {
                                id: 1,
                                link: 'https://down-tx-sg.vod.susercontent.com/api/v4/11110103/mms/vn-11110103-6ke17-lmt74wer1hi7a3.default.mp4',
                                type : "video"
                            },
                            {
                                id: 2,
                                link: 'https://down-bs-vn.img.susercontent.com/vn-11134103-7r98o-lmt74qgtqjfjd8.webp',
                                type : "image"
                            },
                            {
                                id: 3,
                                link: 'https://down-bs-vn.img.susercontent.com/vn-11134103-7r98o-lmt74qgtrxzz0d.webp',
                                type : "image"
                            },
                            
                        ],
                    },
                    {
                        id : 5,
                        user_name : 'duyentlu',
                        star : 5,
                        avatar:'https://down-vn.img.susercontent.com/file/5744f6547c290565176091d71d595534_tn',
                        description :'Shop đóng gói chắc chắn , tặng kèm nhiều đinh treo, tranh đẹp màu sắc tươi như hình , sẽ ủng hộ lần sau',
                        info:"2023-05-11 12:28 | Phân loại hàng: SET 1,40x60 cm",
                        rating: 5,
                        image_rate :[
                            {
                                id: 1,
                                link: 'https://down-bs-vn.img.susercontent.com/vn-11134103-7qukw-lgna52msxlv779.webp',
                                type : "image"
                            },
                        ],
                    },
                    {
                        id : 5,
                        user_name : 'duyentlu',
                        star : 5,
                        avatar:'https://down-vn.img.susercontent.com/file/5744f6547c290565176091d71d595534_tn',
                        description :'Shop đóng gói chắc chắn , tặng kèm nhiều đinh treo, tranh đẹp màu sắc tươi như hình , sẽ ủng hộ lần sau',
                        info:"2023-05-11 12:28 | Phân loại hàng: SET 1,40x60 cm",
                        rating: 5,
                        image_rate :[
                            {
                                id: 1,
                                link: 'https://down-bs-vn.img.susercontent.com/vn-11134103-7qukw-lgna52msxlv779.webp',
                                type : "image"
                            },
                        ],
                    },
                ]
            },
            {
                id: 6,
                code: 'code6',
                title: 'Sản phẩm thứ 6',
                rating: 5.0,
                total_rating: 4,
                total_review: 400,
                sold: 134,
                price_start: 299000,
                price_end: 479000,
                quantity: 878,
                product_category : 2,
                option: [
                   {id : 1, value :  '30x45 cm'},
                   {id : 2, value :  '40x60 cm'},                    
                ],
                list_type: [
                    {
                        id :1,
                        name: "SET1",
                        option1: 299000,
                        option2: 479000,
                        image: 'https://down-vn.img.susercontent.com/file/885b97dd6945151e91ee1962936ccf17',
                        thumbnail: 'https://down-vn.img.susercontent.com/file/885b97dd6945151e91ee1962936ccf17'
                    },
                    {
                        id :2,
                        name: "SET2",
                        option1: 299000,
                        option2: 479000,
                        image: 'https://down-vn.img.susercontent.com/file/91511d572aa72c2dfe0e14b5e356b783',
                        thumbnail: 'https://down-vn.img.susercontent.com/file/91511d572aa72c2dfe0e14b5e356b783'
                    },
                    {
                        id :3,
                        name: "SET3",
                        option1: 299000,
                        option2: 479000,
                        image: 'https://down-vn.img.susercontent.com/file/39ee038184816c64feac55a22084efa2',
                        thumbnail: 'https://down-vn.img.susercontent.com/file/39ee038184816c64feac55a22084efa2'
                    },
                    {
                        id :4,
                        name: "SET4",
                        option1: 299000,
                        option2: 479000,
                        image: 'https://down-vn.img.susercontent.com/file/2cda85c77613d640ddd4c8a47665a713',
                        thumbnail: 'https://down-vn.img.susercontent.com/file/2cda85c77613d640ddd4c8a47665a713'
                    },
                    {
                        id :5,
                        name: "SET5",
                        option1: 299000,
                        option2: 479000,
                        image: 'https://down-vn.img.susercontent.com/file/ff06a32b41d71df5602b260721e014f7',
                        thumbnail: 'https://down-vn.img.susercontent.com/file/ff06a32b41d71df5602b260721e014f7'
                    },
                ],
                favorite_count: 47,
                information: {
                    category_info: 'Fairy Decor > Trang chủ > Sản phẩm > Chi tiết sản phẩm',
                    total: 1590
                },
                description:
                    `   
                    <h4>FAIRY DECOR</h4>
                    <p>
                        01 SET GỒM ^ TRANH VẢI CANVAS CÓ KHUNG NỔI. <br>
                        Bao gồm các size:  <br>
                        - Size nhỏ: Gồm 2 bức 23x33cm + 4 bức 16x21cm  <br>
                        - Size vừa: Gồm 2 bức 28x40cm+ 4 bức 19x25cm  <br>
                        - Size lớn: Gồm 2 bức 40x60cm+ 4 bức 28x37cm => Khách muốn in size lớn ib shop nha <br>
                        - Ib zalo: 0333568062 <br>
                        NGUYÊN LIỆU LÀM TRANH <br>
                        - Khác với các shop khác, Tranh Decor Hiện Đại sử dụng nguyên liệu là vải Canvas (chuyên dùng vẽ tranh sơn dầu),bề mặt vải sáng, ganh sần rất thẩm mỹ và không bị bóng. Mực in chuyên dụng tươi sáng và chân thực.<br>
                        - Tranh không bám bụi và dễ dàng vệ sinh bằng khăn ướt<br>
                        - Vải được ép lên tấm nhựa tổng hợp để có độ phẳng tuyệt đối<br>
                        - Khung tranh có viền siêu mỏng giúp tranh nhìn không bị thô<br>
                        ---------------------------------------------------------<br>
                        Shop tặng kèm đinh 3 chân tiện dụng không phải khoan tường, phụ nữ tay yếu cũng đóng được. <br>
                        ---------------------------------------------------------<br>
                        CHÚNG TÔI CAM KẾT: XUẤT HÀNG ĐÚNG CHỦNG LOẠI <br>
                        Sản xuất tại Việt Nam + Giá tốt nhất Thị Trường. <br>
                        Mẫu in ra nét như hình + Không bay màu + Không chứa chất độc hại <br>
                        Mẫu in ra nét như hình + Không bay màu + Không chứa chất độc hại <br>
                        Bảo hành 3 Năm + Đổi trả trong 7 ngày không cần lý do <br>
                        Miễn phí tư vấn, thiết kế và sản xuất theo yêu cầu<br>
                        ---------------------------------------------------------<br>
                        VIDEO UP SHOPEE bị giảm dung lượng nhiều nên nhìn không rõ sản phẩm<br>
                        QUÝ KHÁCH VUI LÒNG KẾT NỐI  ZALO 033.356.8062 để xem VIDEO sắc nét thực tế sản phẩm<br>
                        Miễn phí tư vấn, thiết kế và sản xuất theo yêu cầu<br>
                        ---------------------------------------------------------<br>
                        Địa chỉ: Fairy Decor - Hà Trì , Hà Đông, Hà Nội<br>
                        Hotline tư vấn bán hàng : 033.356.8062<br>
                    </p>
                `,
                avatar : 'https://down-vn.img.susercontent.com/file/sg-11134201-22110-mk8sb6fp0tjvd8', 
                image_slide :[
                    {id: 1, link : 'https://down-vn.img.susercontent.com/file/sg-11134201-22110-u3iwel9o0tjvd8'},
                    {id: 2, link : 'https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lil4gso3padu5e'},
                    {id: 3, link : 'https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lil4gso3qoyab3'},
                    {id: 4, link : 'https://down-vn.img.susercontent.com/file/sg-11134201-22110-mk8sb6fp0tjvd8'},
                    {id: 5, link : 'https://down-vn.img.susercontent.com/file/sg-11134201-22110-eaet66fp0tjv45'},
                ],
                
                reviews:[
                    {
                        id : 1,
                        user_name : 'manhpvd',
                        star : 5,
                        avatar:'https://down-vn.img.susercontent.com/file/vn-11134233-7qukw-lhrahwom3kp113_tn',
                        description :'Chất lượng tốt, đáng mua nha, sẽ ủng hộ thêm shop nhé',
                        info:"2022-05-03 11:27 | Phân loại hàng: SET 7,40x60 cm",
                        rating: 5,
                        image_rate :[
                            {
                                id: 1,
                                link: 'https://down-bs-vn.img.susercontent.com/1c5551ae8d072e6665e67f17769a68e1.webp',
                                type : "image"
                            }
                        ],
                     
                    },
                    {
                        id : 2,
                        user_name : 'thuhang.vcu',
                        star : 5,
                        avatar:'https://down-vn.img.susercontent.com/file/9bff1b33671a5cb8dcbe21451e4dfe0c_tn',
                        description :'Tranh rất xinh, shop đóng gói cẩn thận, cho shop 10 điểm, kể to hơn 1 tí nữa thì đẹp, nhưng giá này quá ok rồi nha',
                        info:"2024-01-18 23:28 | Phân loại hàng: SET 3,50x75 cm",
                        rating: 5,
                        image_rate :[
                           {
                                id: 1,
                                link: 'https://down-bs-vn.img.susercontent.com/vn-11134103-7r98o-lnwhuvmu7vu587.webp',
                                type : "image"
                            },
                            {
                                id: 2,
                                link : 'https://down-bs-vn.img.susercontent.com/vn-11134103-7r98o-lnwhuvno6nzhd1.webp',
                                type : "image"
                            }
                        ]
                    },
                    {
                        id : 3,
                        user_name : 'homiemart_100416',
                        star : 5,
                        avatar:'https://down-vn.img.susercontent.com/file/b9acfd93662133476479e6ff983a7552_tn',
                        description :'Tranh đẹp lắm ạ. Treo lên ai cũng hỏi chỗ mua ạ',
                        info:"2023-06-14 08:03 | Phân loại hàng: SET 11,50x75 cm",
                        rating: 5,
                        image_rate :[
                            {
                                id: 1,
                                link: 'https://down-bs-vn.img.susercontent.com/vn-11134103-7qukw-lilaudpwsvrm29.webp',
                                type : "image"
                            }
                        ],
                    },
                    {
                        id : 4,
                        user_name : 'mindo92vn',
                        star : 5,
                        avatar:'https://down-vn.img.susercontent.com/file/df49d8f9810b59a1dc3345051f1de462_tn',
                        description :'tranh vừa xinh. ship rất cẩn thận. Bóc ra vừa ý treo lên tương ngayyyyy. Tóm lại là rất đáng mua nha',
                        info:"2023-06-14 08:03 | Phân loại hàng: SET 11,50x75 cm",
                        rating: 5,
                        image_rate :[
                            {
                                id: 1,
                                link: 'https://down-tx-sg.vod.susercontent.com/api/v4/11110103/mms/vn-11110103-6ke17-lmt74wer1hi7a3.default.mp4',
                                type : "video"
                            },
                            {
                                id: 2,
                                link: 'https://down-bs-vn.img.susercontent.com/vn-11134103-7r98o-lmt74qgtqjfjd8.webp',
                                type : "image"
                            },
                            {
                                id: 3,
                                link: 'https://down-bs-vn.img.susercontent.com/vn-11134103-7r98o-lmt74qgtrxzz0d.webp',
                                type : "image"
                            },
                            
                        ],
                    },
                    {
                        id : 5,
                        user_name : 'duyentlu',
                        star : 5,
                        avatar:'https://down-vn.img.susercontent.com/file/5744f6547c290565176091d71d595534_tn',
                        description :'Shop đóng gói chắc chắn , tặng kèm nhiều đinh treo, tranh đẹp màu sắc tươi như hình , sẽ ủng hộ lần sau',
                        info:"2023-05-11 12:28 | Phân loại hàng: SET 1,40x60 cm",
                        rating: 5,
                        image_rate :[
                            {
                                id: 1,
                                link: 'https://down-bs-vn.img.susercontent.com/vn-11134103-7qukw-lgna52msxlv779.webp',
                                type : "image"
                            },
                        ],
                    },
                    {
                        id : 5,
                        user_name : 'duyentlu',
                        star : 5,
                        avatar:'https://down-vn.img.susercontent.com/file/5744f6547c290565176091d71d595534_tn',
                        description :'Shop đóng gói chắc chắn , tặng kèm nhiều đinh treo, tranh đẹp màu sắc tươi như hình , sẽ ủng hộ lần sau',
                        info:"2023-05-11 12:28 | Phân loại hàng: SET 1,40x60 cm",
                        rating: 5,
                        image_rate :[
                            {
                                id: 1,
                                link: 'https://down-bs-vn.img.susercontent.com/vn-11134103-7qukw-lgna52msxlv779.webp',
                                type : "image"
                            },
                        ],
                    },
                ]
            },
            {
                id: 7,
                code: 'code7',
                title: 'Sản phẩm thứ 7',
                rating: 5.0,
                total_rating: 4,
                total_review: 400,
                sold: 134,
                price_start: 299000,
                price_end: 479000,
                quantity: 878,
                product_category : 2,
                option: [
                   {id : 1, value :  '30x45 cm'},
                   {id : 2, value :  '40x60 cm'},                    
                ],
                list_type: [
                    {
                        id :1,
                        name: "SET1",
                        option1: 299000,
                        option2: 479000,
                        image: 'https://down-vn.img.susercontent.com/file/885b97dd6945151e91ee1962936ccf17',
                        thumbnail: 'https://down-vn.img.susercontent.com/file/885b97dd6945151e91ee1962936ccf17'
                    },
                    {
                        id :2,
                        name: "SET2",
                        option1: 299000,
                        option2: 479000,
                        image: 'https://down-vn.img.susercontent.com/file/91511d572aa72c2dfe0e14b5e356b783',
                        thumbnail: 'https://down-vn.img.susercontent.com/file/91511d572aa72c2dfe0e14b5e356b783'
                    },
                    {
                        id :3,
                        name: "SET3",
                        option1: 299000,
                        option2: 479000,
                        image: 'https://down-vn.img.susercontent.com/file/39ee038184816c64feac55a22084efa2',
                        thumbnail: 'https://down-vn.img.susercontent.com/file/39ee038184816c64feac55a22084efa2'
                    },
                    {
                        id :4,
                        name: "SET4",
                        option1: 299000,
                        option2: 479000,
                        image: 'https://down-vn.img.susercontent.com/file/2cda85c77613d640ddd4c8a47665a713',
                        thumbnail: 'https://down-vn.img.susercontent.com/file/2cda85c77613d640ddd4c8a47665a713'
                    },
                    {
                        id :5,
                        name: "SET5",
                        option1: 299000,
                        option2: 479000,
                        image: 'https://down-vn.img.susercontent.com/file/ff06a32b41d71df5602b260721e014f7',
                        thumbnail: 'https://down-vn.img.susercontent.com/file/ff06a32b41d71df5602b260721e014f7'
                    },
                ],
                favorite_count: 47,
                information: {
                    category_info: 'Fairy Decor > Trang chủ > Sản phẩm > Chi tiết sản phẩm',
                    total: 1590
                },
                description:
                    `   
                    <h4>FAIRY DECOR</h4>
                    <p>
                        01 SET GỒM ^ TRANH VẢI CANVAS CÓ KHUNG NỔI. <br>
                        Bao gồm các size:  <br>
                        - Size nhỏ: Gồm 2 bức 23x33cm + 4 bức 16x21cm  <br>
                        - Size vừa: Gồm 2 bức 28x40cm+ 4 bức 19x25cm  <br>
                        - Size lớn: Gồm 2 bức 40x60cm+ 4 bức 28x37cm => Khách muốn in size lớn ib shop nha <br>
                        - Ib zalo: 0333568062 <br>
                        NGUYÊN LIỆU LÀM TRANH <br>
                        - Khác với các shop khác, Tranh Decor Hiện Đại sử dụng nguyên liệu là vải Canvas (chuyên dùng vẽ tranh sơn dầu),bề mặt vải sáng, ganh sần rất thẩm mỹ và không bị bóng. Mực in chuyên dụng tươi sáng và chân thực.<br>
                        - Tranh không bám bụi và dễ dàng vệ sinh bằng khăn ướt<br>
                        - Vải được ép lên tấm nhựa tổng hợp để có độ phẳng tuyệt đối<br>
                        - Khung tranh có viền siêu mỏng giúp tranh nhìn không bị thô<br>
                        ---------------------------------------------------------<br>
                        Shop tặng kèm đinh 3 chân tiện dụng không phải khoan tường, phụ nữ tay yếu cũng đóng được. <br>
                        ---------------------------------------------------------<br>
                        CHÚNG TÔI CAM KẾT: XUẤT HÀNG ĐÚNG CHỦNG LOẠI <br>
                        Sản xuất tại Việt Nam + Giá tốt nhất Thị Trường. <br>
                        Mẫu in ra nét như hình + Không bay màu + Không chứa chất độc hại <br>
                        Mẫu in ra nét như hình + Không bay màu + Không chứa chất độc hại <br>
                        Bảo hành 3 Năm + Đổi trả trong 7 ngày không cần lý do <br>
                        Miễn phí tư vấn, thiết kế và sản xuất theo yêu cầu<br>
                        ---------------------------------------------------------<br>
                        VIDEO UP SHOPEE bị giảm dung lượng nhiều nên nhìn không rõ sản phẩm<br>
                        QUÝ KHÁCH VUI LÒNG KẾT NỐI  ZALO 033.356.8062 để xem VIDEO sắc nét thực tế sản phẩm<br>
                        Miễn phí tư vấn, thiết kế và sản xuất theo yêu cầu<br>
                        ---------------------------------------------------------<br>
                        Địa chỉ: Fairy Decor - Hà Trì , Hà Đông, Hà Nội<br>
                        Hotline tư vấn bán hàng : 033.356.8062<br>
                    </p>
                `,
                avatar : 'https://down-vn.img.susercontent.com/file/sg-11134201-22110-eaet66fp0tjv45', 
                image_slide :[
                    {id: 1, link : 'https://down-vn.img.susercontent.com/file/sg-11134201-22110-u3iwel9o0tjvd8'},
                    {id: 2, link : 'https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lil4gso3padu5e'},
                    {id: 3, link : 'https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lil4gso3qoyab3'},
                    {id: 4, link : 'https://down-vn.img.susercontent.com/file/sg-11134201-22110-mk8sb6fp0tjvd8'},
                    {id: 5, link : 'https://down-vn.img.susercontent.com/file/sg-11134201-22110-eaet66fp0tjv45'},
                ],
                
                reviews:[
                    {
                        id : 1,
                        user_name : 'manhpvd',
                        star : 5,
                        avatar:'https://down-vn.img.susercontent.com/file/vn-11134233-7qukw-lhrahwom3kp113_tn',
                        description :'Chất lượng tốt, đáng mua nha, sẽ ủng hộ thêm shop nhé',
                        info:"2022-05-03 11:27 | Phân loại hàng: SET 7,40x60 cm",
                        rating: 5,
                        image_rate :[
                            {
                                id: 1,
                                link: 'https://down-bs-vn.img.susercontent.com/1c5551ae8d072e6665e67f17769a68e1.webp',
                                type : "image"
                            }
                        ],
                     
                    },
                    {
                        id : 2,
                        user_name : 'thuhang.vcu',
                        star : 5,
                        avatar:'https://down-vn.img.susercontent.com/file/9bff1b33671a5cb8dcbe21451e4dfe0c_tn',
                        description :'Tranh rất xinh, shop đóng gói cẩn thận, cho shop 10 điểm, kể to hơn 1 tí nữa thì đẹp, nhưng giá này quá ok rồi nha',
                        info:"2024-01-18 23:28 | Phân loại hàng: SET 3,50x75 cm",
                        rating: 5,
                        image_rate :[
                           {
                                id: 1,
                                link: 'https://down-bs-vn.img.susercontent.com/vn-11134103-7r98o-lnwhuvmu7vu587.webp',
                                type : "image"
                            },
                            {
                                id: 2,
                                link : 'https://down-bs-vn.img.susercontent.com/vn-11134103-7r98o-lnwhuvno6nzhd1.webp',
                                type : "image"
                            }
                        ]
                    },
                    {
                        id : 3,
                        user_name : 'homiemart_100416',
                        star : 5,
                        avatar:'https://down-vn.img.susercontent.com/file/b9acfd93662133476479e6ff983a7552_tn',
                        description :'Tranh đẹp lắm ạ. Treo lên ai cũng hỏi chỗ mua ạ',
                        info:"2023-06-14 08:03 | Phân loại hàng: SET 11,50x75 cm",
                        rating: 5,
                        image_rate :[
                            {
                                id: 1,
                                link: 'https://down-bs-vn.img.susercontent.com/vn-11134103-7qukw-lilaudpwsvrm29.webp',
                                type : "image"
                            }
                        ],
                    },
                    {
                        id : 4,
                        user_name : 'mindo92vn',
                        star : 5,
                        avatar:'https://down-vn.img.susercontent.com/file/df49d8f9810b59a1dc3345051f1de462_tn',
                        description :'tranh vừa xinh. ship rất cẩn thận. Bóc ra vừa ý treo lên tương ngayyyyy. Tóm lại là rất đáng mua nha',
                        info:"2023-06-14 08:03 | Phân loại hàng: SET 11,50x75 cm",
                        rating: 5,
                        image_rate :[
                            {
                                id: 1,
                                link: 'https://down-tx-sg.vod.susercontent.com/api/v4/11110103/mms/vn-11110103-6ke17-lmt74wer1hi7a3.default.mp4',
                                type : "video"
                            },
                            {
                                id: 2,
                                link: 'https://down-bs-vn.img.susercontent.com/vn-11134103-7r98o-lmt74qgtqjfjd8.webp',
                                type : "image"
                            },
                            {
                                id: 3,
                                link: 'https://down-bs-vn.img.susercontent.com/vn-11134103-7r98o-lmt74qgtrxzz0d.webp',
                                type : "image"
                            },
                            
                        ],
                    },
                    {
                        id : 5,
                        user_name : 'duyentlu',
                        star : 5,
                        avatar:'https://down-vn.img.susercontent.com/file/5744f6547c290565176091d71d595534_tn',
                        description :'Shop đóng gói chắc chắn , tặng kèm nhiều đinh treo, tranh đẹp màu sắc tươi như hình , sẽ ủng hộ lần sau',
                        info:"2023-05-11 12:28 | Phân loại hàng: SET 1,40x60 cm",
                        rating: 5,
                        image_rate :[
                            {
                                id: 1,
                                link: 'https://down-bs-vn.img.susercontent.com/vn-11134103-7qukw-lgna52msxlv779.webp',
                                type : "image"
                            },
                        ],
                    },
                    {
                        id : 5,
                        user_name : 'duyentlu',
                        star : 5,
                        avatar:'https://down-vn.img.susercontent.com/file/5744f6547c290565176091d71d595534_tn',
                        description :'Shop đóng gói chắc chắn , tặng kèm nhiều đinh treo, tranh đẹp màu sắc tươi như hình , sẽ ủng hộ lần sau',
                        info:"2023-05-11 12:28 | Phân loại hàng: SET 1,40x60 cm",
                        rating: 5,
                        image_rate :[
                            {
                                id: 1,
                                link: 'https://down-bs-vn.img.susercontent.com/vn-11134103-7qukw-lgna52msxlv779.webp',
                                type : "image"
                            },
                        ],
                    },
                ]
            },
        ]
    },
    getProductDetail(id)
    {
        return this.getProductsData().filter((product) => {
            return product.id == id
        })
    },
    topSoldProducts()
    {
        return this.getProductsData().slice(0, 4);
    },
    topSoldProducts()
    {
        return this.getProductsData().slice()
        .sort((a, b) => b.sold - a.sold)
        .slice(0, 4);
    }
}