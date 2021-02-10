function licenseGen(data) {
  if (data.license === 'GNU AGPLv3') {
    data.path = `AGPL%20v3-blue.svg`;
    data.link = `https://www.gnu.org/licenses/agpl-3.0`
  }
  else if (data.license === 'GNU GPLv3') {
    data.path = `GPLv3-blue.svg`;
    data.link = `https://www.gnu.org/licenses/gpl-3.0`
  }
  else if (data.license === 'GNU LGPLv3') {
    data.path = `LGPL%20v3-blue.svg`;
    data.link = `https://www.gnu.org/licenses/lgpl-3.0`
  }
  else if (data.license === 'Mozilla Public License 2.0') {
    data.path = `MPL%202.0-orange.svg`;
    data.link = `https://opensource.org/licenses/MPL-2.0`
  }
  else if (data.license === 'Apache License 2.0') {
    data.path = `Apache%202.0-yellow.svg`;
    data.link = `https://opensource.org/licenses/Apache-2.0`
  }
  else if (data.license === 'MIT License') {
    data.path = `MIT-lightgrey.svg`;
    data.link = `https://opensource.org/licenses/MIT`
  }
  else if (data.license === 'Boost Software License 1.0') {
    data.path = `Boost%201.0-lightblue.svg`;
    data.link = `https://www.boost.org/LICENSE_1_0.txt`
  }
  else if (data.license === 'The Unlicense') {
    data.path = `Unlicense-brightgreen.svg`;
    data.link = `http://unlicense.org/`
  }
}

function generateMarkdown(data) {
  licenseGen(data);
  if (data.license === 'N/A') {
    data.badge = `_No License_`;
    data.blurb = `This project does not have a license.`
  }
  else {
    data.badge = `[![License Badge](https://img.shields.io/badge/license-${data.path}).`
    data.blurb = `This work is covered by ${data.license} license.
  For more information [see full license.](${data.link})`
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

  # Questions?
  Here's how to get in touch:
  * [Github](https://github.com/${data.git})
  * [Email](mailto:${data.email})
`;
}

module.exports = generateMarkdown;
