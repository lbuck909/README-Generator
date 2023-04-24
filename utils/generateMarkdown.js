// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "none") {
    return '![Repo license](https://img.shields.io/badge/license-${license}-blue.svg)';
  }
  return "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "none") {
    return '\n* [License](#license)\n';
  }
  return "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "none") {
    return `## License
    
    License under the ${license} license.`;
  }
  return "";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  by ${data.name}
  ##Badge
  ${renderLicenseBadge(data.license)}

  ##Table of Contents
  * [Description](#description)
  * [Install](#install)
  * [Usage](#usage)
  * [Contributor](#contributor)
  * [ Username](#username)
  * [Email](#email)
  
  ##License
  ${renderLicenseSection(data.license)}
  ${renderLicenseLink(data.license)}

  ##Description
  ${data.decription}

  ##Installation
  ${data.install}

  ##Usage
  ${data.usage}

  ##Contributor
  ${data.contributor}
  
  ##Contact Information
  [${data.username}](https://github.com/${data.username})
  ${data.email}`;




}

module.exports = generateMarkdown;
