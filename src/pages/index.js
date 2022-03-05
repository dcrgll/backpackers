import { doc, setDoc } from 'firebase/firestore'
import { db } from 'config/firebase'

export default function Home () {
  return (
    <div className='container' />
  )
}

export async function getServerSideProps (context) {
  await setDoc(doc(db, 'cities', 'LA'), {
    name: 'Los Angeles',
    state: 'CA',
    country: 'USA'
  })

  return {
    props: {}
  }
}
