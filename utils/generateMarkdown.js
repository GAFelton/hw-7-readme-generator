// function to generate markdown for README
function generateMarkdown({title, description, installation, usage, license, contribution, tests, username, email}) {
  return `# ${title}

  ![GitHub](https://img.shields.io/github/license/${username}/${ title })

  ## Description:

  ${ description }
  
  
  
  ## Table of Contents
    
 * [Installation](#Installation)

 * [Usage](#Usage)
 
 * [Contributing](#Contributing)
 
 * [Tests](#Tests)
 
 * [Questions](#Questions)
 
 * [License](#License)
 
  
  
  ## Installation
  
  ${ installation }
  
  
  
  ## Usage
  
  ${ usage }
  


  ## License
  
  ${ license }
  
  

  ## Contribution Guidelines
  
  ${ contribution }
  
  
  
  ## Tests
  
  ${ tests }
  
  
  
  ## Questions
  
  Please address questions to ${ username }.
  
  [Link to Profile](https://github.com/${ username })
  
  [E-mail](${ email })
  
  
  `;
}

module.exports = generateMarkdown;
