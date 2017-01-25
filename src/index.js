const fs    = require('graceful-fs')
const join  = require('path').join

const dir   = join(__dirname, 'files')

const fin = (resolve, reject, cb) => (err, res) => {
  
  if (err) {
    reject(err)
    if (cb) cb(err)
    return
  }

  resolve(res)
  
  if (cb) cb(null, res)
}

export const list = (cb) =>

  new Promise((resolve, reject) => {

    const done = fin(resolve, reject, cb)

    fs.readdir(dir, (err, res) => {
      if (err) return done(err)
      done(null, res.map((f) => join(dir, f)))
    })

  })

export const read = (path, cb) =>

  new Promise((resolve, reject) => {

    const done = fin(resolve, reject, cb)
    fs.readFile(path, (err, d) => {
      if (err) return done(err)
      done(null, JSON.parse(d))
    })
    
  }) 
