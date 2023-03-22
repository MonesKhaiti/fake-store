export const ShowProduct = ({ product }) => {
    console.log(product)
    return (
        <>
            <div className='col-md-6'>
                <img src={product?.image} alt={product?.title} height='400px' width='400px' />
            </div>
            <div className='col-md-6'>
                <h4 className='text-uppercase text-black-50'>{product?.category}</h4>
                <h1 className='display-5'>{product?.title}</h1>
                <p className='lead fw-bolder'>
                    {`rate: ${product?.rating?.rate}   count: ${product?.rating?.count}`}
                    <i className='fa fa-star'></i>
                </p>
                <h3 className='display-6 fw-bold my-4'>${product?.price}</h3>
                <p className='lead'>{product?.description}</p>
                <button className='btn btn-outline-dark'>Add to Cart</button>
            </div>
        </>
    );
}