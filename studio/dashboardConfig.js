export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5d7632ed6500f190af81753b',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-xikqtit6',
                  apiId: '7b74f673-5656-493f-9253-368f7090bd0f'
                },
                {
                  buildHookId: '5d7632edd6e05ea5b9e7ca04',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-1xr81kwv',
                  apiId: '161ad0a3-691c-4bdd-bf6f-2b1a7476caa4'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/thariniK/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-1xr81kwv.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
