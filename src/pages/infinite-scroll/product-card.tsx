import React from 'react'

interface IProductCard {
  data: {
    category: { image: string }
    title: string
    description: string
  }
}

export const ProductCard: React.FC<IProductCard> = ({ data }) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      <img height={300} width={300} src={data.category.image}></img>
      <p>{data.title}</p>
      <p>{data.description}</p>
    </div>
  )
}
