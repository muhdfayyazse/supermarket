/**
 *  Admin Site Product Add
 */
import React, { Component } from 'react';
import ImageUploader from 'react-images-upload';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import { Container, FormGroup, Input, Label, Row } from 'reactstrap';

const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
const productslider = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1
  };
const productdata = {
    Product_single: "product-single.jpg",
    product_gallery: [
       "product-single.jpg",
       "product-single.jpg",
       "product-single.jpg",
       "product-single.jpg"
    ],
    size:[
        "M",
        "L",
        "XXL",
        "S"
    ],
    colors:[
        "Black",
        "Red",
        "Blue",
        "Green"
    ],
    tags:[
        "Athleisure",
        "Jacket",
        "Women",
        "Clothing",
        "Blazers"
    ]

 }
class Productadd extends Component{
        constructor(props) {
            super(props);
            this.state = {
                pictures: [] ,
                photoIndex: 0,
                isOpen: false,
                ErrorMsg:"",
                productName:'',
                productPrice:'',
                productDesc:'',
                productBrand:'',
                productSize: new Map(),
                productColor: new Map(),
                productTag: new Map(),
                productStock: '',
                productTotal:''
            };
            this.Uploadimage = this.Uploadimage.bind(this);
            this.productNameChangeHandler=this.productNameChangeHandler.bind(this);                
            this.productPriceChangeHandler=this.productPriceChangeHandler.bind(this);                
            this.productDescChangeHandler=this.productDescChangeHandler.bind(this);                
            this.productBrandChangeHandler=this.productBrandChangeHandler.bind(this);                

            this.productSizeChangeHandler=this.productSizeChangeHandler.bind(this);                
            this.productColorChangeHandler=this.productColorChangeHandler.bind(this);                
            this.productTagChangeHandler=this.productTagChangeHandler.bind(this);                
            this.productStockChangeHandler=this.productStockChangeHandler.bind(this);                
            this.productTotalChangeHandler=this.productTotalChangeHandler.bind(this);                

            this.saveProduct = this.saveProduct.bind(this);
        }
        componentDidMount() {
            window.scrollTo(0, 0)
        }
        Uploadimage(picture) {
            if(picture == '')
            {
                this.setState({
                    ...this.state,
                    ErrorMsg:"File Not Supported"
                })
            }
            else
            {
                this.setState({
                    pictures: this.state.pictures.concat(picture),
                    ErrorMsg:''
                });
            }
        }
        productNameChangeHandler=(event)=>{
            this.setState({
                productName: event.target.value    
            })
        }                
        productPriceChangeHandler=(event)=>{
            this.setState({
                productPrice: event.target.value    
            })
        };
        productDescChangeHandler=(event)=>{
            this.setState({
                productDesc: event.target.value    
            })
        };
        productBrandChangeHandler=(event)=>{
            this.setState({
                productBrand: event.target.value    
            })
        };
        productSizeChangeHandler=(event)=>{
            this.setState({
                productSize: this.state.productSize.set(event.target.name,event.target.checked) 
            })
        };
        productColorChangeHandler=(event)=>{
            this.setState({
                productColor: this.state.productColor.set(event.target.name,event.target.checked) 
            })
        };
        productTagChangeHandler=(event)=>{
            this.setState({
                productTag: this.state.productTag.set(event.target.name,event.target.checked) 
            })
        };
        productStockChangeHandler=(event)=>{
            this.setState({
                productStock: event.target.value    
            })
        };
        productTotalChangeHandler=(event)=>{
            this.setState({
                productTotal: event.target.value    
            })
        };

        toBased64 = (img) => {
            let base64='';
            const reader = new FileReader();
            reader.onloadend = function() {
                //console.log('RESULT', reader.result);
                base64  = Buffer.from(reader.result).toString('base64');   
            }
            reader.readAsDataURL(img); 
            return base64;
        };

        saveProduct = (event)=> {
            event.preventDefault();
            const formData = new FormData();
            var data = {
                code:this.state.productName,
                name:this.state.productName,
                description:this.state.productDesc,
                stock:this.state.productStock,
                price:this.state.productPrice,
                discount:0,
                rating:0,
                salePrice:this.state.productPrice,
                categoryId:this.state.productBrand,
                productTag:[
                ],
                productSize:[
                ],
                productColor:[
                ],
                productImage:[

                ]
            }  
            this.state.productSize.forEach((value, key, map)=>{
                if(value){
                    data.productSize.push({
                        sizeId:key
                    })
                }    
            });

            this.state.productColor.forEach((value, key, map)=>{
                if(value){
                    data.productColor.push({
                        colorId:key
                    })
                }    
            });

            this.state.productTag.forEach((value, key, map)=>{
                if(value){
                    data.productTag.push({
                        categoryId:key
                    })
                }    
            });

            formData.append("reqData",JSON.stringify(data))

            this.state.pictures.forEach((image, idex)=>{
                formData.append(image.name,image);
            });    

            

            console.log(formData);
            
            const requestOptions = {
                method: 'POST',
                //enctype: 'multipart/form-data',
                // headers: { 
                //     'Content-Type': 'multipart/form-data;charset=UTF-8'
                //     //'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' 
                // },
                body: formData
            };
            fetch('http://localhost:9000/cosmeticsoms/v1/product', requestOptions)
            .then(response => {
                if (!response.ok) {
                  throw new Error(response.statusText)
                }

                //this.props.history.push("/admin-panel/Product");
              }).catch(err=>{
                console.log(err)
                })
                
        }
      render(){
        return(
                <div>
                    <div className="site-content">
                        <div className="content-wrapper section-ptb">
                            <Container>
                                <div className="product-content-top single-product single-product-edit">
                                    <Row>
                                        <div className="product-top-left col-xl-5 col-md-6">
                                            <div className="product-top-left-inner">
                                                <div className="ciyashop-product-images">
                                                <div className="ciyashop-product-images-wrapper ciyashop-gallery-style-default ciyashop-gallery-thumb_position-bottom ciyashop-gallery-thumb_vh-horizontal">
                                                    <div className="ciyashop-product-gallery ciyashop-product-gallery--with-images slick-carousel">
                                                    <Slider {...settings} className="ciyashop-product-gallery__wrapper popup-gallery">
                                                        <div className="ciyashop-product-gallery__image">
                                                                <img src={require(`../../../assets/images/${productdata.Product_single}`)}   className="img-fluid" />
                                                        </div>

                                                    </Slider>

                                                    </div>
                                                    <div className="ciyashop-product-thumbnails">
                                                        <Slider {...productslider} className="ciyashop-product-thumbnails__wrapper">
                                                            {productdata.product_gallery.map((pictureimage,index) =>
                                                                <div key={index}>
                                                                    <div className="ciyashop-product-thumbnail__image">
                                                                        <a href="javascript:void(0)">
                                                                            <img src={require(`../../../assets/images/${pictureimage}`)}  className="img-fluid" />
                                                                        </a>
                                                                        <div className="d-flex justify-content-center image-content align-items-center">
                                                                            <ImageUploader
                                                                                buttonText=""
                                                                                withIcon={false}
                                                                                withPreview={true}
                                                                                fileTypeError={this.state.ErrorMsg}
                                                                                onChange={this.Uploadimage}
                                                                                imgExtension={['.jpg', '.jpeg', '.png']}
                                                                            />
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            )}
                                                        </Slider>
                                                    </div>
                                                    <div className="clearfix" />
                                                </div>
                                                </div>
                                            </div>
                                        </div>
                                       <div className="product-top-right col-xl-7 col-md-6">
                                        <div className="product-top-right-inner">
                                                <div className="summary entry-summary">
                                                        <FormGroup className="edit-icon">
                                                            <Input type="text" className="form-control product_title" placeholder="Product Name" onChange={this.productNameChangeHandler} />
                                                        </FormGroup>
                                                        <FormGroup className="edit-icon">
                                                            <Input type="text" className="form-control price" placeholder="Product Price" onChange={this.productPriceChangeHandler} />
                                                        </FormGroup>
                                                        <FormGroup className="edit-icon">
                                                            <Input  type="textarea" className="form-control" rows="3" placeholder="Product Description" onChange={this.productDescChangeHandler} />
                                                        </FormGroup>
                                                        <Label className="title">Size</Label>
                                                        <FormGroup>
                                                            {productdata.size.map((size) =>
                                                                <Label>
                                                                    <Input type="checkbox" name={size} onChange={this.productSizeChangeHandler}/>{' '}
                                                                    {size}
                                                                </Label>
                                                            )}
                                                        </FormGroup>
                                                        <Label className="title">Color</Label>
                                                        <FormGroup>
                                                            {productdata.colors.map((color) =>
                                                                <Label>
                                                                    <Input type="checkbox" name={color} onChange={this.productColorChangeHandler}/>{' '}
                                                                    {color}
                                                                </Label>
                                                            )}
                                                        </FormGroup>
                                                         <FormGroup>
                                                        <Label className="title pl-0">Brand</Label>
                                                        <Input type="text" class="form-control" placeholder="Product Brand" onChange={this.productBrandChangeHandler}/>
                                                        </FormGroup>

                                                        <Label className="title mb-2">Category</Label>
                                                        <FormGroup>
                                                            {productdata.tags.map((brand) =>
                                                            <Label>
                                                                <Input type="checkbox" name={brand} onChange={this.productTagChangeHandler} />{' '}
                                                                {brand}
                                                            </Label>
                                                            )}
                                                        </FormGroup>
                                                        <FormGroup>
                                                        <Label className="title pl-0">Product Stock</Label>
                                                        <input type="text" class="form-control" placeholder="Product Stock" onChange={this.productStockChangeHandler}></input>
                                                        </FormGroup>
                                                        <FormGroup>
                                                        <Label className="title pl-0">Total Products</Label>
                                                        <input type="text" className="form-control" placeholder="Total Product" onChange={this.productTotalChangeHandler} ></input>
                                                        </FormGroup>

                                                        {/* <a href="#" class="btn btn-primary mb-2 mr-2" onClick={this.saveProduct}> Save </a> */}
                                                        <Link to="/admin-panel/Product" class="btn btn-primary mb-2 mr-2" onClick={this.saveProduct}> Save </Link>
                                                        <Link to="/admin-panel/Product" class="btn btn-danger mb-2"> Cancel </Link>
                                                    </div>
                                                </div>
                                        </div>
                                    </Row>
                                    </div>
                            </Container>
                        </div>
                    </div>
            </div>
        )
    }
}
export default Productadd;
