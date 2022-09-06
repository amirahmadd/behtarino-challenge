import { Container, Grid } from "@mui/material";
import Head from "next/head";
import style from "../../styles/product.module.css";
import ProductContent from "../../components/ProductContent";
import ProductImages from "../../components/ProductImages";

const product = (props) => {
  const { product } = props;
  return (
    <Container>
      <Head>
        <title>{product.title}</title>
        <meta name="description" content={product.description} />
      </Head>
      <main className={style.container}>
        <div className={style.paper}>
          <Grid container className={style.cardContainer}>
            <Grid item md={4} xs={12} className={style.imageContainer}>
              <ProductImages src={product.image} productTitle={product.title} />
            </Grid>
            <Grid item md={8} xs={12} className={style.content}>
              <ProductContent product={product} />
            </Grid>
          </Grid>
        </div>
      </main>
    </Container>
  );
};

export default product;

export async function getStaticPaths() {
  const res = await fetch("https://fakestoreapi.com/products");
  const product = await res.json();
  const paths = product.map((product) => ({
    params: { id: product.id.toString() },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const productId = params.id;
  const res = await fetch(`https://fakestoreapi.com/products/${productId}`);
  const product = await res.json();
  return {
    props: {
      product,
    },
  };
}
