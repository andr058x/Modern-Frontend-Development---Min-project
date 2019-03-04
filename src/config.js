// Globals

export const BASE_APP_URL = '';
//'http://localhost:999/';
//process.env.VUE_APP_BASE_URL;

//console.log(BASE_APP_URL);

export default (value, [length]) => {
  if (value === undefined || value === null) {
    return length >= 0;
  }

  return String(value).length <= length;
};

export const SHOP_PRODUCTS = {
    ProductList: [
        { 
          ActualPrice : 78.50,
          PreSaledPrice: 83.00,
          Description: "Men's Blazer",
          IsNew: false,
          Stars: [true,true,true,true,false],
          Image: "http://bestjquery.com/tutorial/product-grid/demo4/images/img-1.jpg",
          SlideImage: "http://bestjquery.com/tutorial/product-grid/demo4/images/img-2.jpg"
        },
        { 
          ActualPrice : 29.50,
          Description: "Women's Blouse",
          IsNew: true,
          Stars: [true,true,false,false,false],
          Image: "http://bestjquery.com/tutorial/product-grid/demo4/images/img-3.jpg",
          SlideImage: "http://bestjquery.com/tutorial/product-grid/demo4/images/img-4.jpg"
        },
        { 
          ActualPrice : 45.00,
          Description: "Men's polo",
          IsNew: true,
          Stars: [true,true,true,true,true],
          Image: "http://bestjquery.com/tutorial/product-grid/demo4/images/img-5.jpg",
          SlideImage: "http://bestjquery.com/tutorial/product-grid/demo4/images/img-6.jpg"
        },
        { 
          ActualPrice : 35.50,
          PreSaledPrice: 56.50,
          Description: "Women's shirt",
          IsNew: false,
          Stars: [true,true,true,true,false],
          Image: "http://bestjquery.com/tutorial/product-grid/demo4/images/img-7.jpg",
          SlideImage: "http://bestjquery.com/tutorial/product-grid/demo4/images/img-8.jpg"
        },
        { 
          ActualPrice : 15.50,
          PreSaledPrice: 25.00,
          Description: "Women's Blouse",
          IsNew: false,
          Stars: [true,true,true,false,false],
          Image: "http://bestjquery.com/tutorial/product-grid/demo3/images/img-1.jpeg",
          SlideImage: "http://bestjquery.com/tutorial/product-grid/demo3/images/img-2.jpeg"
        },
        { 
          ActualPrice : 29.50,
          PreSaledPrice: 35.50,
          Description: "Women's Shirt",
          IsNew: false,
          Stars: [true,true,true,false,false],
          Image: "http://bestjquery.com/tutorial/product-grid/demo3/images/img-3.jpeg",
          SlideImage: "http://bestjquery.com/tutorial/product-grid/demo3/images/img-4.jpeg"
        },
        { 
          ActualPrice : 34.00,
          Description: "Women's Blouse",
          IsNew: true,
          Stars: [true,true,false,false,false],
          Image: "http://bestjquery.com/tutorial/product-grid/demo3/images/img-5.jpeg",
          SlideImage: "http://bestjquery.com/tutorial/product-grid/demo3/images/img-6.jpeg"
        },
        { 
          ActualPrice : 19.50,
          Description: "Women's Shirt",
          IsNew: true,
          Stars: [true,true,true,false,false],
          Image: "http://bestjquery.com/tutorial/product-grid/demo3/images/img-7.jpeg",
          SlideImage: "http://bestjquery.com/tutorial/product-grid/demo3/images/img-8.jpeg"
        },


        { 
          ActualPrice : 14.50,
          PreSaledPrice: 35.00,
          Description: "Women's Blouse",
          IsNew: false,
          Stars: [true,true,true,true,true],
          Image: "http://bestjquery.com/tutorial/product-grid/demo9/images/img-1.jpg",
          SlideImage: "http://bestjquery.com/tutorial/product-grid/demo9/images/img-2.jpg"
        },
        { 
          ActualPrice : 24.50,
          PreSaledPrice: 37.50,
          Description: "Men's Shirt",
          IsNew: false,
          Stars: [true,true,true,true,false],
          Image: "http://bestjquery.com/tutorial/product-grid/demo9/images/img-3.jpg",
          SlideImage: "http://bestjquery.com/tutorial/product-grid/demo9/images/img-4.jpg"
        },
        { 
          ActualPrice : 26.00,
          Description: "Women's Blouse",
          IsNew: true,
          Stars: [true,true,false,false,false],
          Image: "http://bestjquery.com/tutorial/product-grid/demo9/images/img-5.jpg",
          SlideImage: "http://bestjquery.com/tutorial/product-grid/demo9/images/img-6.jpg"
        },
        { 
          ActualPrice : 26.50,
          PreSaledPrice: 34.50,
          Description: "Men's Shirt",
          IsNew: false,
          Stars: [true,true,false,false,false],
          Image: "http://bestjquery.com/tutorial/product-grid/demo9/images/img-7.jpg",
          SlideImage: "http://bestjquery.com/tutorial/product-grid/demo9/images/img-8.jpg"
        },



        { 
          ActualPrice : 20.50,
          Description: "Women's Shirt",
          IsNew: true,
          Stars: [true,true,true,true,false],
          Image: "http://bestjquery.com/tutorial/product-grid/demo5/images/img-1.jpg",
          SlideImage: "http://bestjquery.com/tutorial/product-grid/demo5/images/img-2.jpg"
        },
        { 
          ActualPrice : 28.50,
          Description: "Men's Shirt",
          IsNew: true,
          Stars: [true,true,false,false,false],
          Image: "http://bestjquery.com/tutorial/product-grid/demo5/images/img-3.jpg",
          SlideImage: "http://bestjquery.com/tutorial/product-grid/demo5/images/img-4.jpg"
        },
        { 
          ActualPrice : 30.00,
          PreSaledPrice: 35.50,
          Description: "Men's Blouse",
          IsNew: false,
          Stars: [true,true,true,false,false],
          Image: "http://bestjquery.com/tutorial/product-grid/demo5/images/img-5.jpg",
          SlideImage: "http://bestjquery.com/tutorial/product-grid/demo5/images/img-6.jpg"
        },
        { 
          ActualPrice : 15.50,
          Description: "Women's Blouse",
          IsNew: true,
          Stars: [true,true,true,false,false],
          Image: "http://bestjquery.com/tutorial/product-grid/demo5/images/img-7.jpg",
          SlideImage: "http://bestjquery.com/tutorial/product-grid/demo5/images/img-8.jpg"
        }         
    ]
}
