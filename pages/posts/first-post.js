import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Script from "next/script";

import Layout from "../../components/layout";

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />
      <h1>First Post</h1>

      {/* <img src="/images/profile.jpg" alt="Your Name" /> */}

      <Image
        src="/images/profile.jpg" // Route of the image file
        height={400} // Desired size with correct aspect ratio
        width={400} // Desired size with correct aspect ratio
        alt="Your Name"
      />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur
        dolore totam dicta voluptatum animi explicabo accusamus rem nostrum
        perferendis deleniti unde, omnis, maiores corrupti quos minus tempore,
        officiis nulla perspiciatis.
      </p>
    </Layout>
  );
}
