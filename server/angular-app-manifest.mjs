
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
    'index.csr.html': {size: 464, hash: '2b727a348781af6b32575cdf634c721138c2d8a35f09812e40f76aa960a16a06', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 977, hash: 'bddb570742d32fdc3998704f39d4d21c44ef353adf81b39d9dd87f4811f0661f', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'chat/index.html': {size: 3693, hash: 'e2743336fe10564ae41f287dd8f94ceedad9acf950cc663714833c50976138eb', text: () => import('./assets-chunks/chat_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
