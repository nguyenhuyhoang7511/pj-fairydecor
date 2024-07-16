export const ProductServiceApi = {
    getProductsData() {
        return [
            {
                id: '1',
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
                        user_name : 'iammieoo',
                        star : 5,
                        avatar:'https://down-vn.img.susercontent.com/file/vn-11134233-7r98o-lqlk2q1xg4pebe_tn',
                        description :'Sốp rất là cute, chỉnh từng tí từng tí do khách rất là khó chiều, sản phẩm nhìn ưng, chất liệu thì mình nghĩ nó sẽ dày dặn hơn nhưng giá này thì vậy là oke lắm rồi, gom mãi mới được mấy ảnh để đánh giá cho sốp',
                        info:"2024-01-18 23:28 | Phân loại hàng: SET 3,50x75 cm",
                        rating: 5,
                        image_rate :[
                            {
                                id: 1,
                                link: 'https://down-bs-vn.img.susercontent.com/vn-11134103-7r98o-lqnm043f1yyf14.webp'
                            }
                        ],
                        video:[
                            {
                                id: 1,
                                link : 'https://down-aka-sg.vod.susercontent.com/api/v4/11110103/mms/vn-11110103-6ke17-lqnm27pmecs73f.default.mp4'
                            }
                        ]
                    }
                ]
            },
           
        ]
    },
    getProductDetail(id)
    {
        return this.getProductsData().filter((product) => {
            return product.id == id
        })
    }
}