export default fetchProductData = () => {
        fetch('http://localhost:9000/cosmeticsoms/v1/products')
        .then((response) =>{
            const data = response.json();
            
            return data;
        })
        .then(productdata => {
            console.log(productdata);
            this.setState({ 
                ...this.state,
                productList: productdata,
                cp_productList: productdata
             });
        });        
    }