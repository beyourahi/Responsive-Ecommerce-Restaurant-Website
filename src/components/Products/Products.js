import {
    ProductsContainer,
    ProductWrapper,
    ProductCard,
    ProductImg,
    ProductsHeading,
    ProductTitle,
    ProductInfo,
    ProductDesc,
    ProductPrice,
    ProductButton,
} from "./ProductsElements";

const Products = ({ heading, data }) => (
    <ProductsContainer>
        <ProductsHeading>{heading}</ProductsHeading>

        <ProductWrapper>
            {data.map((product, index) => (
                <ProductCard key={index}>
                    <ProductImg src={product.img} alt={product.alt} />
                    <ProductInfo>
                        <ProductTitle>{product.name}</ProductTitle>
                        <ProductDesc>{product.desc}</ProductDesc>
                        <ProductPrice>{product.price}</ProductPrice>
                        <ProductButton>{product.button}</ProductButton>
                    </ProductInfo>
                </ProductCard>
            ))}
        </ProductWrapper>
    </ProductsContainer>
);

export default Products;
