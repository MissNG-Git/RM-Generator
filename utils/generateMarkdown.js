// const AGPLv3 = {
//   badge: 'https://img.shields.io/badge/License-AGPL%20v3-blue.svg',
//   link: 'https://www.gnu.org/licenses/agpl-3.0',
// }

// const GPLv3 = {
//   badge: 'https://img.shields.io/badge/License-GPLv3-blue.svg',
//   link: 'https://www.gnu.org/licenses/gpl-3.0',
// }

// const LGPLv3 = {
//   badge: 'https://img.shields.io/badge/License-LGPL%20v3-blue.svg',
//   link: 'https://www.gnu.org/licenses/lgpl-3.0',
// }

// const Mozilla2 = {
//   badge: 'https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg',
//   link: 'https://opensource.org/licenses/MPL-2.0',
// }

// const Apache2 = {
//   badge: 'https://img.shields.io/badge/License-Apache%202.0-blue.svg',
//   link: 'https://opensource.org/licenses/Apache-2.0',
// }

// const MIT = {
//   badge: 'https://img.shields.io/badge/License-MIT-yellow.svg',
//   link: 'https://opensource.org/licenses/MIT'
// }

// const Boost1 = {
//   badge: 'https://img.shields.io/badge/License-Boost%201.0-lightblue.svg',
//   link: 'https://www.boost.org/LICENSE_1_0.txt'
// }

// const Unlicense = {
//   badge: 'https://img.shields.io/badge/license-Unlicense-blue.svg',
//   link: 'http://unlicense.org/'
// }

function renderLicenseSection(data) {
  if (data.license === 'N/A') {
    return `No license.`
  } 
  else {
    return `[![License Badge](https://img.shields.io/badge/license-${data.license}blue.svg). 
    This work is covered by ${data.license} license. 
    For more information [see full license.](${data.link})`
  }
}

function generateMarkdown(data) {
  const licenseSection = renderLicenseSection(data.license, data.name);

  return `
  # ${data.title}
  ${data.description}

  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license) 
  * [Contribution](#contribution)
  * [Testing](#testing)
   
  # Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ### Instructions
  ${data.instructions}

  ## License
  ${licenseSection}

  ## Contribution
  ${data.contribution}

  ## Testing
  ${data.testing}

  # Contact
  * [Github](https://github.com/${data.git})
  * [Email](mailto:${data.email})
`;
}

module.exports = generateMarkdown;
