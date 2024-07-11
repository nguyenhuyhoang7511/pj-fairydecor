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
                price_text: '₫199.000 - ₫299.000',
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
                        option1: '249.000',
                        option2: '299.000',
                        image: 'https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lkd9476kxxgo4d',
                        thumbnail: 'https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lkd9476kxxgo4d'
                    },
                    {
                        id :2,
                        name: "SET2",
                        option1: '350.000',
                        option2: '420.000',
                        image: 'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lpkc10vrnreq51',
                        thumbnail: 'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lpkc10vrnreq51'
                    },
                    {
                        id :3,
                        name: "SET3",
                        option1: '510.000',
                        option2: '799.000',
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
                    <h1>FAIRY DECOR</h1>
                    <h2>••• BẢNG WELCOME ĐÁM CƯỚI •••</h2>
                    <hr>
                    <h3>Chất liệu :</h3>
                    <ul>
                        <li>Tranh được in trên nền vải canvas, và được ép lên tấm formex chống nước (5mm).</li>
                        <li>In UV, mực tốt, lên chuẩn màu, sắc nét.</li>
                    </ul>
                    <hr>
                    <h3>Kích thước:</h3>
                    <ul>
                        <li>50x75cm</li>
                        <li>60x90cm</li>
                        <li>In cỡ tùy thích: Ib cho shop nha</li>
                    </ul>
                    <hr>
                    <p>Sđt : 033.356.8062 (Zalo/Call)</p>
                    <hr>
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
                
                votes:[
                    {
                        id : 1,
                        user_name : 'thuytrang148',
                        star : 5,
                        avatar:'',
                        description :'Hàng đẹp, in nhanh và màu nét, đóng gói rất kỹ, mặc dù vội sát ngày cưới nhưng shop vẫn tư vấn và hỗ trợ nhiệt tình để kịp thời nhận trc ngày cưới. Cảm ơn shop nhiều. Ngày vội k kịp chụp ảnh',
                        product : 'SET 3,50x75 cm',
                        time :'2023-10-27 10:35',
                        image_rate :[
                            'https://down-bs-vn.img.susercontent.com/vn-11134103-7r98o-luz4j4gscu8i9d.webp',
                            'https://down-bs-vn.img.susercontent.com/vn-11134103-7r98o-luz4j4grxdzmd8.webp'
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