import React, { useState, useEffect } from 'react'
import { setConfig } from 'react-hot-loader'

import Layout from '../components/layout'
import { Collection } from '../components/collection'
import collectionOne from '../images/collection-1.jpg'
import collectionTwo from '../images/collection-2.jpg'

setConfig({ pureSFC: true })

const useCollections = () => {
  const [collections, setCollections] = useState([])

  useEffect(() => {
    window.shopify.collection
      .fetchAllWithProducts()
      .then(collections =>
        collections.map((collection, i) => {
          return {
            ...collection,
            image: i === 0 ? collectionOne : collectionTwo
          }
        })
      )
      .then(setCollections)
      .catch(e => console.error(e))
  }, [])

  return collections
}

const ReadyToWearPage = () => {
  const collections = useCollections()
  return (
    <Layout>
      <div className="full-container">
        <h1 className="title has-text-black">Ready to Wear</h1>
        {collections.map(collection => (
          <Collection key={collection.id} collection={collection} />
        ))}
      </div>
    </Layout>
  )
}

export default ReadyToWearPage
