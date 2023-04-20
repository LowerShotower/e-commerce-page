/* eslint-disable no-undef */
module.exports = function (plop) {
  // create your generators here
  plop.setGenerator('React component generator', {
    description: 'A generator for React components',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Component name',
      },
    ],
    actions: [
      {
        type: 'addMany',
        destination: '__plopped__/{{name}}',
        base: `template-builder/plop-templates/react-component/`,
        templateFiles: 'template-builder/plop-templates/react-component/*',
      },
    ],
  })
  // Helpers
  plop.setHelper('toLowerCase', function (text) {
    return text.toLowerCase()
  })
}
