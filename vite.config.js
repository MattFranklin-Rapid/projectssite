import vituum from 'vituum'
import nunjucks from '@vituum/vite-plugin-nunjucks'
import Sitemap from 'vite-plugin-sitemap'

export default {
    plugins: [vituum(), nunjucks({
        root: './src'
    }), Sitemap({ hostname: "https://rapidplatform.com" })]
}
