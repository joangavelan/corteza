// eslint-disable-next-line import/no-anonymous-default-export
export default function (plop) {
  plop.setGenerator('full-component', {
    description:
      'creates a new component and all the necessary files for its development',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of the component?'
      }
    ],
    actions: [
      {
        type: 'add',
        path: 'components/{{titleCase name}}.tsx',
        templateFile: 'templates/component.template.hbs'
      },
      {
        type: 'add',
        path: 'stories/{{titleCase name}}.stories.tsx',
        templateFile: 'templates/story.template.hbs'
      },
      {
        type: 'add',
        path: 'styles/{{titleCase name}}.module.scss',
        templateFile: 'templates/style.template.hbs'
      }
    ]
  })

  plop.setHelper('titleCase', (str) => {
    return str
      .replace(/\w\S*/g, (txt) => {
        return txt.charAt(0).toUpperCase() + txt.substring(1).toLowerCase()
      })
      .replace(/\s/g, '')
  })
}
