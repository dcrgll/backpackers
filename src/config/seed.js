const { faker } = require('@faker-js/faker')
const admin = require('firebase-admin')

const projectId = 'backpackers-e1027'
process.env.FIRESTORE_EMULATOR_HOST = 'localhost:8080'
admin.initializeApp({ projectId })

const db = admin.firestore()

// seed function
async function getSeedData () {
  try {
    ;[...Array(10).keys()].map(() =>
      db.collection('users').add({
        username: faker.internet.userName(),
        first_name: faker.name.firstName(),
        last_name: faker.name.lastName(),
        avatar: faker.image.imageUrl(),
        email: faker.internet.email()
      })
    )
    console.log('database seed was successful')
  } catch (error) {
    console.log(error, 'database seed failed')
  }
}

getSeedData()
