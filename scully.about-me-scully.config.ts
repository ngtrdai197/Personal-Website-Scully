import { ScullyConfig, RouteTypes, setPluginConfig } from '@scullyio/scully'
import { getHttp404Plugin } from '@gammastream/scully-plugin-http404'
import { MinifyHtml } from 'scully-plugin-minify-html'

import { HljsHtml } from './plugins/hljs'

const PageNotFoundPlugin = getHttp404Plugin()
const minifyHtmlOptions = {
  minifyOptions: {
    removeComments: false,
  },
}
setPluginConfig(MinifyHtml, minifyHtmlOptions)
setPluginConfig('md', { enableSyntaxHighlighting: true })

const postRenderers = [MinifyHtml]

export const config: ScullyConfig = {
  projectRoot: './src',
  projectName: 'about-me-scully',
  outDir: './dist/static',
  appPort: 8080,
  staticPort: 8000,
  defaultPostRenderers: postRenderers,
  routes: {
    '/blog/:slug': {
      type: RouteTypes.contentFolder,
      slug: {
        folder: './blog',
      },
      postRenderers: [HljsHtml],
    },
    '/404': {
      type: RouteTypes.default,
      postRenderers: [PageNotFoundPlugin],
    },
  },
}
