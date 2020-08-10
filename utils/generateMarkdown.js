// function to generate markdown for README
function generateMarkdown({title, description, toc, }) {
  return `# ${title}

`;
}

module.exports = generateMarkdown;
