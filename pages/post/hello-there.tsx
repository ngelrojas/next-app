import Image from 'next/image'
import Head from 'next/head'

const Hello = () => (
    <article>
        <Head>
            <title>hello :: this is my blog</title>
            <meta property="og:title" content="hello there :: my blog " />
        </Head>
        <h1>hello there...!</h1>
        <Image 
            alt="the image is iron man"
            src="/post/hello-there/iron_man.jpg"
            width={640}
            height={427}
        />
    </article>
)

export default Hello

