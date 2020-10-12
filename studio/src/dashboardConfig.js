export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f84128156987d4040c31351',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-pekafbfw',
                  apiId: 'a54004e5-7427-417c-b148-4325cd26f116'
                },
                {
                  buildHookId: '5f841281e6479b574f3df298',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-ftbobbk7',
                  apiId: 'ac1bbd9a-57e0-4ae7-87e7-a79c7230decf'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/vecoweb2021/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-ftbobbk7.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
