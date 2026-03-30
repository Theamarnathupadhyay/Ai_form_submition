
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/chat",
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/chat"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 446, hash: '20841c04ef48dee24c4d226ae4cf817c1d2d0dceaeeb89cb94cee78cc328eb7d', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 959, hash: '32220cf54e70521ef0f340bf7c32af840ed819a3c6077409ecb0ae37aa25ec48', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'chat/index.html': {size: 3675, hash: 'da9b77a76443fff022fca1b8bb648d62850a655cd7aabc112a65155534ee6f35', text: () => import('./assets-chunks/chat_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
