import { Container, Grid, Paper } from "@mui/material";
import Head from "next/head";
import style from "../../styles/product.module.css";

const product = (props) => {
  const { product } = props;
  return (
    <Container>
      <Head>
        <title>{product.title}</title>
      </Head>
      <main className={style.container}>
        <Paper className={style.paper} elevation={4}>
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            className={style.cardContainer}
          >
            <Grid item md={4} xs={12} className={style.imageContainer}></Grid>
            <Grid item md={8} xs={12} className={style.content}></Grid>
          </Grid>
        </Paper>
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
