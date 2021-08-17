// vite.config.js
// you can also make a public folder and have it store any images
// not advise to put html in the public folder 
// the public folder is for anything that doesn't want any changes, and you want it with the dist.
import {resolve} from 'path';

export default {
  build: {
    rollupOptions: {
      input: {
        main: resolve('index.html'),
        qa: resolve('quality_assurance.html'),
        security: resolve('security.html'),
        badexample: resolve('bad_example.html')
      }
    }
  }
}
