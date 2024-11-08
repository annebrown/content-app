export default defineNuxtConfig({

    devtools: { enabled: true },
  
    modules: [
        '@nuxt/ui',
        '@nuxt/content', 
        '@nuxt/image', 
        '@nuxtjs/mdc', 
        '@nuxtjs/tailwindcss', 
        '@nuxtjs/color-mode',
        '@nuxtjs/google-fonts',
        '@nuxt/icon',
    ],
    colorMode: {
        classSuffix: '',
        preference: 'dark',
    },
    srcDir: 'src/',

    content: {
        documentDriven: true,
        // Ignore "Number Dot" ordering in /content
        ignores: ['^\\.', '^-', '^[0-5]\\d*\\.'],
        
        highlight: {
            theme: {
              default: 'github-light',
              dark: 'github-dark',
            },
            langs: ['regexp', 'json', 'js', 'ts', 'tsx', 'html', 'css', 'vue','shell' , 'mdc', 'yaml', 'md' ],
        },
        

        sources: {
            github: {
              prefix: '/docs', // Prefix for routes used to query contents
              driver: 'github', // 
              repo: "annebrown/content-base",
              branch: "main",
              dir: "content", 
            },
        }
      
    },
    nitro: {
        prerender: {
            crawlLinks: true,
            failOnError: false,
        },
    },
    compatibilityDate: '2024-09-28',
    
    css: ['@/assets/styles/fleet.css'],
    googleFonts: {
    download: true,
    families: {
      Roboto: true,
    }
  }
  })
  

