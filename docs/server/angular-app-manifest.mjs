
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/Ai_form_submition/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/Ai_form_submition/chat",
    "route": "/Ai_form_submition"
  },
  {
    "renderMode": 2,
    "route": "/Ai_form_submition/chat"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 464, hash: 'ea515098f4e980ce28face483fdc2c0f4108643b028d5e4131e39cdcb1464449', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 977, hash: '5e673392e276f0419eabf6273e157429b07083c44359158d9be71bd15535e88e', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'chat/index.html': {size: 3693, hash: 'c2a845a99c4738c6e0082a81f0aa3584d3089dcd526cb0c8a6b16fc07cf6212f', text: () => import('./assets-chunks/chat_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
