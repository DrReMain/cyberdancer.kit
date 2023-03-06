const capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const camelCase = (str) => {
  return str.replace(/[-_](\w)/g, (_, c) => c.toUpperCase());
};

const workspaces = ['components', 'hooks', 'utilities', 'integrations'];

/**
 * @param {import("plop").NodePlopAPI} plop
 */
module.exports = function main(plop) {
  plop.setHelper('capitalize', (text) => {
    return capitalize(camelCase(text));
  });

  plop.setGenerator('component', {
    description: '生成组件',
    prompts: [
      {
        type: 'input',
        name: 'componentName',
        message: '输入组件名称:',
      },
      {
        type: 'input',
        name: 'description',
        message: '组件描述:',
      },
      {
        type: 'list',
        name: 'outDir',
        message: '放在哪个目录?',
        default: 'packages',
        choices: workspaces,
      },
    ],
    actions(answers) {
      const actions = [];

      if (!answers) return actions;

      const { componentName, description, outDir } = answers;

      actions.push({
        type: 'addMany',
        templateFiles: 'plop/component/**',
        destination: `./cyber-ui/{{outDir}}/{{dashCase componentName}}`,
        base: 'plop/component',
        data: { description, componentName, outDir },
        abortOnFail: true,
      });

      return actions;
    },
  });
};
