const AGPLv3 = {
  badge: 'https://img.shields.io/badge/License-AGPL%20v3-blue.svg',
  link: 'https://www.gnu.org/licenses/agpl-3.0',
}

const GPLv3 = {
  badge: 'https://img.shields.io/badge/License-GPLv3-blue.svg',
  link: 'https://www.gnu.org/licenses/gpl-3.0',
}

const LGPLv3 = {
  badge: 'https://img.shields.io/badge/License-LGPL%20v3-blue.svg',
  link: 'https://www.gnu.org/licenses/lgpl-3.0',
}

const Mozilla2 = {
  badge: 'https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg',
  link: 'https://opensource.org/licenses/MPL-2.0',
}

const Apache2 = {
  badge: 'https://img.shields.io/badge/License-Apache%202.0-blue.svg',
  link: 'https://opensource.org/licenses/Apache-2.0',
}

const MIT = {
  badge: 'https://img.shields.io/badge/License-MIT-yellow.svg',
  link: 'https://opensource.org/licenses/MIT'
}

const Boost1 = {
  badge: 'https://img.shields.io/badge/License-Boost%201.0-lightblue.svg',
  link: 'https://www.boost.org/LICENSE_1_0.txt'
}

const Unlicense = {
  badge: 'https://img.shields.io/badge/license-Unlicense-blue.svg',
  link: 'http://unlicense.org/'
}

const getLicenseInfo = ({badge, link}, license) => {
  return `## License
  [![License Badge](${badge})](${link})
  This work is covered by ${license} license. For more information [see full license.](${link})`
}

function renderLicenseSection(license, name) {
  let licenseCode;

  switch (license){
    case 'AGPLv3':
      licenseCode = AGPLv3;
      break;
    case 'GPLv3':
      licenseCode = GPLv3;
      break;
    case 'LGPLv3':
      licenseCode = LGPLv3;
      break;
    case 'Mozilla 2.0':
      licenseCode = Mozilla2;
      break;
      case 'Apache 2.0':
      licenseCode = Apache2;
      break;
    case 'MIT':
      licenseCode = MIT;
      break;
    case 'Boost 1.0':
      licenseCode = Boost1;
      break;
    case 'Unlicense':
      licenseCode = Unlicense;
      break; 
  }

  if (license === 'N/A') {
    return `## License
    No license.`
  } else {
    return `${getLicenseInfo(licenseCode, license)}
  ${license} © ${name}`
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
