const express = require('express')
const router = express.Router()
const getData = require('../getData.js')

router.get('/', (req, res) => {
  res.render('./templates/index')
})

router.get('/cohort', (req, res) => {
  res.render('./templates/cohort')
})
router.get('/cohort', (req, res) => {
  res.render('./templates/cohort')
})

router.get('/puppies/:id', (req, res) => {
  const id = Number(req.params.id)
  getData((err, data) => {
    if (err) {
      res.send('unable to read data file').status(500)
    } else {
      const peeps = JSON.parse(data)
      const person = peeps.peeps.find(peep => peep.id === id)
      res.render('./templates/profile', person)
    }
  })
})
// router.get('/')

module.exports = router
