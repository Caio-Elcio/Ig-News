import Head from "next/head";
import Prismic from "@prismicio/client";
import { GetStaticProps } from "next/";
import { getPrismicClient } from "../../services/prismic";
import styles from "./styles.module.scss";

export default function Posts() {
    return (
        <>
            <Head>
                <title>Posts | Ignews</title>
            </Head>

            <main className={styles.container}>
                <div className={styles.posts}>
                    <a href="">
                        <time>12 de março de 2021</time>
                        <strong>Lorem ipsum dolor sit amet consectetur adipisicing elit.</strong>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </a>
                    <a href="">
                        <time>12 de março de 2021</time>
                        <strong>Lorem ipsum dolor sit amet consectetur adipisicing elit.</strong>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </a>
                    <a href="">
                        <time>12 de março de 2021</time>
                        <strong>Lorem ipsum dolor sit amet consectetur adipisicing elit.</strong>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </a>
                </div>
            </main>
        </>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    const prismic = getPrismicClient;

    const response = await prismic.query([
        Prismic.predicates.at('document.type', 'publication')
    ], {
        fetch: ['publication.title', 'publication.content'],
        pageSize: 100,
    });

    // const posts = response.results.map(post =>{
    //     return {
    //         slug: post.uid,
    //         title: post.data.title,
    //     };
    // });

    // console.log(JSON.stringify(response, null, 2));

    return {
        props: {}
    }
}