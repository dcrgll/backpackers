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
        first_name: faker.name.firstName(),
        last_name: faker.name.lastName(),
        avatar: faker.image.imageUrl(),
        title: faker.commerce.productName(),
        description: faker.commerce.productDescription(),
        address: {
          addr_1: faker.address.streetAddress(),
          addr_2: faker.address.secondaryAddress(),
          city: faker.address.city(),
          state: faker.address.state(),
          zipCode: faker.address.zipCode()
        }
      })
    )
    console.log('database seed was successful')
  } catch (error) {
    console.log(error, 'database seed failed')
  }
}

getSeedData()
