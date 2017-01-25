const axios       = require('axios')
const fs          = require('graceful-fs')
const path        = require('path')

const baseURL     = 'https://api.github.com'
const fileBaseURL = 'https://raw.githubusercontent.com'

const ownerURI    = 'luizpedone'
const repoURI     = 'municipal-brazilian-geodata'
const branchURI   = 'master'
const pathURI     = 'data'

const writePath   = path.join(__dirname, './files')

function write(filename, boundary, cb) {
  const fileName = path.join(writePath, filename)
  fs.writeFile(fileName, JSON.stringify(boundary), cb)
}

async function downloadData(element, index, arr) {

    try {

      const response = await axios.get(`${fileBaseURL}/${ownerURI}/${repoURI}/${branchURI}/${pathURI}/${element.name}`)
      const content = response.data
      write(element.name, content, () => console.log(`${element.name} successfully downloaded.`))

    } catch (error) {

      console.log(error)

    }

}

async function fetchData() {

    try {

      const repoContents = await axios.get(`${baseURL}/repos/${ownerURI}/${repoURI}/contents/${pathURI}`);
      const files = repoContents.data;
      files.forEach(downloadData)

    } catch (error) {

      console.log(error)

    }

}

fetchData()