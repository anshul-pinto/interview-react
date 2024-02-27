import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import { ProductCard } from './product-card'

export const InfiniteScrollPage = () => {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [index, setIndex] = useState(1)
  const loaderRef = useRef(null)
  const [stopScroll, setStopScroll] = useState(false)

  const fetchData = () => {
    setIsLoading(true)
    axios
      .get(`https://api.escuelajs.co/api/v1/products?offset=${index}0&limit=12`)
      .then((res) => {
        if (!res.data.length) {
          setStopScroll(true)
          return
        }
        setItems((prevItems) => [...prevItems, ...res.data])
        setIndex((prev) => prev + 1)
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setIsLoading(false)
      })
  }

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const loader = entries[0]
      if (loader.isIntersecting) fetchData()
    })

    if (loaderRef.current && stopScroll) observer.disconnect()

    if (loaderRef.current) observer.observe(loaderRef.current)

    return () => {
      if (loaderRef.current) observer.unobserve(loaderRef.current)
    }
  }, [index, stopScroll])

  return (
    <>
      <div className="container">
        <div className="row">
          {items.map((item, index) => (
            <ProductCard data={item} key={item.id} />
          ))}
        </div>
        <div ref={loaderRef}>{isLoading && <div>Loading....</div>}</div>
      </div>
    </>
  )
}
