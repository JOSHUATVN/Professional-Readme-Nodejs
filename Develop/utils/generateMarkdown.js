const renderLicenseBadge = (license) => {
  if (license !== 'None') {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`
  }
  return ''
};

const renderLicenseLink = (license) => {
  if (license !== 'None') {
    return (
      `\n  * [License](#license)\n`
    )
  }
  return ''
};

const renderLicenseSection = (license) => {
  if (license !== 'None') {
    return (
      `# License
      
This project is licensed under the ${license} license.`
    )
  }
  return ''
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
