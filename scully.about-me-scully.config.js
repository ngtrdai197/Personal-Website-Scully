"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
var scully_1 = require("@scullyio/scully");
var scully_plugin_http404_1 = require("@gammastream/scully-plugin-http404");
var scully_plugin_minify_html_1 = require("scully-plugin-minify-html");
var hljs_1 = require("./plugins/hljs");
var PageNotFoundPlugin = scully_plugin_http404_1.getHttp404Plugin();
var minifyHtmlOptions = {
    minifyOptions: {
        removeComments: false,
    },
};
scully_1.setPluginConfig(scully_plugin_minify_html_1.MinifyHtml, minifyHtmlOptions);
scully_1.setPluginConfig('md', { enableSyntaxHighlighting: true });
var postRenderers = [scully_plugin_minify_html_1.MinifyHtml];
exports.config = {
    projectRoot: './src',
    projectName: 'about-me-scully',
    outDir: './dist/static',
    appPort: 8080,
    staticPort: 8000,
    defaultPostRenderers: postRenderers,
    routes: {
        '/blog/:slug': {
            type: scully_1.RouteTypes.contentFolder,
            slug: {
                folder: './blog',
            },
            postRenderers: [hljs_1.HljsHtml],
        },
        '/404': {
            type: scully_1.RouteTypes.default,
            postRenderers: [PageNotFoundPlugin],
        },
    },
};
