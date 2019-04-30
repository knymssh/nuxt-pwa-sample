# nuxt-pwa

> Nuxt.js project

## Installation

``` bash
$ npm install -g vue-cli

$ vue init nuxt-community/starter-template {project name}
? Project name ({project name}) 
? Project description (Nuxt.js project)
? Author ({author name}) 

   vue-cli · Generated "{project name}".

   To get started:
   
     cd nuxt-pwa
     npm install # Or yarn
     npm run dev
```

## Project Setup

``` bash
$ brew install gibo

$ gibo dump Node >> .gitignore
```

## Build Setup

``` bash
# install dependencies
$ npm install # Or yarn install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, checkout the [Nuxt.js docs](https://github.com/nuxt/nuxt.js).

### prettier

``` bash
# upgrade eslint
$ npm install -g npm-check-updates
$ ncu -u eslint eslint-loader eslint-plugin-vue

# install prettier packages
$ npm install -D prettier
$ npm install -D eslint eslint-config-prettier eslint-plugin-prettier
```

### PWA

``` bash
$ npm install -D @nuxtjs/pwa
```
#### Modify nuxt.config.js
``` js
  modules: [
    '@nuxtjs/pwa'
  ],
  manifest: {
    name: 'nuxt-pwa-sample',
    lang: 'ja',
    short_name: 'nuxt',
    title: 'nuxt-pwa-sample',
    'og:title': 'nuxt-pwa-sample',
    description: 'nuxt-pwa-sample',
    'og:description': 'nuxt-pwa-sample',
    theme_color: '#ffffff',
    background_color: '#ffffff'
  },
  workbox: {
    dev: true
  }
```

### SASS

``` bash
$ npm install -D node-sass sass-loader
$ npm install -D @nuxtjs/style-resources
```

#### Modify nuxt.config.js
``` js
  modules: [
    '@nuxtjs/pwa',
    '@nuxtjs/style-resources'
  ],
  styleResources: {
    scss: [
      './assets/style/vars/*.scss',
      './assets/style/abstracts/_mixins.scss',
      './assets/style/abstracts/_variables.scss'
      ]
  },
```

### dotengv

``` bash
$ npm i @nuxtjs/dotenv
```

#### Modify nuxt.config.js
``` js
  modules: [
    '@nuxtjs/pwa',
    '@nuxtjs/style-resources',
    '@nuxtjs/dotenv'
  ],
```

### vue2-google-maps

``` bash
$ npm i vue2-google-maps
```

``` js
  build: {
    extend(config, { isDev, isClient }) {
      ...
      config.externals = config.externals || [];
      if (!isClient) {
        config.externals.splice(0, 0, function(context, request, callback) {
          if (/^vue2-google-maps($|\/)/.test(request)) {
            callback(null, false);
          } else {
            callback();
          }
        });
      }
    },
  },

  plugins: [{ src: '~plugins/vue2-google-maps.js', ssr: false }],
  vendor: ['vue2-google-maps'],
```