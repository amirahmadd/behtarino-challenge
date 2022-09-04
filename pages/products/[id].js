import { Paper } from "@mui/material";
import Head from "next/head";
import style from "../../styles/product.module.css";

const product = (props) => {
  const { product } = props;
  return (
    <>
      <Head>
        <title>{product.title}</title>
      </Head>
      <article className={style.container}>
        <Paper className={style.paper}>
            <div>test</div>
            <div>{product.description}</div>
        </Paper>
      </article>
    </>
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
