export default function robots() {
      return {
        rules: {
          userAgent: '*',
          allow: '/',
          disallow: [
        '/admin/', 
        '/private/', 
        '/assets/home-img/gdkyd_video.mp4' 
      ],
          disallow: '/private/',
        },
        sitemap: 'https://gdkyd.com/sitemap.xml',
      }
    }