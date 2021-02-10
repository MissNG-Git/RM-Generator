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

function generateMarkdown(data) {
  if (data.license === 'N/A') {
    data.badge = `_No License_`;
    data.blurb = `This project does not have a license.`
  }
  else {
    data.badge = `[![License Badge](https://img.shields.io/badge/license-${data.license}-blue.svg).`
    data.blurb = `This work is covered by ${data.license} license.`
  // For more information [see full license.](${data.link})`
  };

  return `
  # ${data.title}
  ${data.description}
  ${data.badge}

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
  ${data.license}:
  ${data.blurb}
  
  ## Contribution
  ${data.contributions}

  ## Testing
  ${data.testing}

  # Contact
  * [Github](https://github.com/${data.git})
  * [Email](mailto:${data.email})
`;
}

module.exports = generateMarkdown;
