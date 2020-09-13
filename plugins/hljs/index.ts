import { registerPlugin, getPluginConfig } from '@scullyio/scully'

export const HljsHtml = 'hljsHtml'
export interface HljsHtmlOptions {
  classList: string
}

const defaultOptions: HljsHtmlOptions = {
  classList: 'hljs',
}

export const hljsHtmlPlugin = (html: string) => {
  const customHljsOptions = getPluginConfig<HljsHtmlOptions>(HljsHtml, 'render')
  const hljsOptions = { ...defaultOptions, ...customHljsOptions }
  const currentHtml = html.replace(
    /\<code\s+class="language/g,
    '<code class="' + hljsOptions.classList + ' language',
  )
  return Promise.resolve(currentHtml)
}

// no validation implemented
const hljsHtmlPluginValidator = async () => []
registerPlugin('render', HljsHtml, hljsHtmlPlugin)
