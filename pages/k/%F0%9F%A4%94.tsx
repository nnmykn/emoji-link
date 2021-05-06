import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

export default function Index() {
    var page = (
        <html lang="ja">
            <Head>
                <meta charSet="utf-8"/>
                <link rel="canonical" href="https://👋🤘🤞.tk/"/>
                <meta name="format-detection" content="telephone=no"/>
                <meta httpEquiv="refresh" content="0;URL='https://twitter.com/linux123pc/'"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover"/>

                <title>Hi! - Emoji profile</title>
                <meta name="description" content="Hi there👋🤘🤞"/>

                {/* PWA */}
                <link rel="manifest" href="/manifest.json"/>
                <meta name="msapplication-TileColor" content="#1f286f"/>
                <meta name="theme-color" content="#1f286f"/>


                <link rel="stylesheet" href="/main.css"/>

                <script src="https://twemoji.maxcdn.com/v/latest/twemoji.min.js" crossOrigin="anonymous"></script>
            </Head>
            <body>
                <h1>Hi there👋🤘🤞</h1>
            </body>
        {/* GoogleFonts */}
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100;300;400;500;700;900&display=swap" rel="stylesheet"/>
        </html>
    )
    return page
}