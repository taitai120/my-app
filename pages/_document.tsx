import React from 'react'
import Document, {
    Html,
    Head,
    Main,
    NextScript,
    DocumentContext,
    DocumentInitialProps,
} from 'next/document'
import { CssBaseline } from '@nextui-org/react'

class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const initalProps = await Document.getInitialProps(ctx)
        return {
            ...initalProps,
            styles: React.Children.toArray([initalProps.styles]),
        }
    }

    render() {
        return (
            <Html lang="en">
                <Head>{CssBaseline.flush()}</Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument
