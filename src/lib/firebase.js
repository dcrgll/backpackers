import { db } from 'config/firebase'
import { collection, where, getDocs, query, limit } from 'firebase/firestore'

export async function getUserWithUsername (username) {
  const q = query(
    collection(db, 'users'),
    where('username', '==', username),
    limit(1)
  )
  const userDoc = (await getDocs(q)).docs[0]
  return userDoc
}

/** `
 * Converts a firestore document to JSON
 * @param  {DocumentSnapshot} doc
 */
export function postToJSON (doc) {
  const data = doc.data()
  return {
    ...data,
    createdAt: data?.createdAt.toMillis() || 0,
    updatedAt: data?.updatedAt.toMillis() || 0
  }
}
