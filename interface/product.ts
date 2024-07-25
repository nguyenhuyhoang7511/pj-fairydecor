export interface Product{
    id :number,
    code : string,
    title:string,
    rating: string,
    total_rating: number,
    total_review:number,
    sold : number,
    price_text : string,
    price_start : number,
    avatar: string,
    price_end : number,
    quantity : number,
    product_category:number,
    option: Option[]
    list_type: ProductType[],
    favorite_count: number,
    information : {
        category_info: string,
        total: number
    },
    description: string,
    image_slide: any,
    reviews: Reviews[]
}

export interface Reviews{
    id: number,
    user_name: string,
    avatar: string,
    description: string,
    rating: number,
    info: string,
    image_rate: Media[]
    video: Media[]
}

export interface Media{
    id : number,
    link: string,
    type : 'video' | 'image'
}
export interface Option{
    id: number,
    value: string
}

export interface ProductType{
    id: number,
    name: string,
    option1: number,
    option2: number,
    [key: string]: any; 
    image: string,
    thumbnail: string
}