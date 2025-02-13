

function ProductCard( props ) {
    const products = props.products;

    return (
        <>
            <div className="product_container">
                <div className="product_card">
                    {products.map((data) => {
                        return (
                            <>
                                <div key={data.id} className="product_data">
                                    <div className="title">{data.title}</div>
                                    <img className="image" src={data.thumbnail} alt={data.title}></img>
                                    <div className="description">{data.description}</div>
                                    <div className="price">Price: {data.price}</div>
                                </div>
                            </>
                        );
                    })

                    }
                </div>
            </div>
        </>
    );

}

export default ProductCard;