export const PhotoService = {
    getData() {
        return [
            {
                itemImageSrc: 'https://s.rmjo.in/Price_drop_HP_Web_july.webp',
                thumbnailImageSrc: 'https://s.rmjo.in/Price_drop_HP_Web_july.webp',
                alt: 'Description for Image 1',
                title: 'Title 1'
            },
            {
                itemImageSrc: '	https://s.rmjo.in/bed_june_web.webp',
                thumbnailImageSrc: '	https://s.rmjo.in/bed_june_web.webp',
                alt: 'Description for Image 2',
                title: 'Title 2'
            },
            {
                itemImageSrc: 'https://s.rmjo.in/sofa_june_web.webp',
                thumbnailImageSrc: 'https://s.rmjo.in/sofa_june_web.webp',
                alt: 'Description for Image 3',
                title: 'Title 3'
            },
            {
                itemImageSrc: '	https://s.rmjo.in/Refer_HP_Banner_web.webp',
                thumbnailImageSrc: '	https://s.rmjo.in/Refer_HP_Banner_web.webp',
                alt: 'Description for Image 4',
                title: 'Title 4'
            },
            {
                itemImageSrc: 'https://s.rmjo.in/Price_drop_HP_Web_july.webp',
                thumbnailImageSrc: 'https://s.rmjo.in/Price_drop_HP_Web_july.webp',
                alt: 'Description for Image 4',
                title: 'Title 1'
            },
            {
                itemImageSrc: '	https://s.rmjo.in/bed_june_web.webp',
                thumbnailImageSrc: '	https://s.rmjo.in/bed_june_web.webp',
                alt: 'Description for Image 5',
                title: 'Title 2'
            },
            {
                itemImageSrc: 'https://s.rmjo.in/sofa_june_web.webp',
                thumbnailImageSrc: 'https://s.rmjo.in/sofa_june_web.webp',
                alt: 'Description for Image 6',
                title: 'Title 3'
            },
            {
                itemImageSrc: '	https://s.rmjo.in/Refer_HP_Banner_web.webp',
                thumbnailImageSrc: '	https://s.rmjo.in/Refer_HP_Banner_web.webp',
                alt: 'Description for Image 7',
                title: 'Title 4'
            },
        ];
    },

    getImages() {
        return Promise.resolve(this.getData());
    }
};

