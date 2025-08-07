import {useEffect, useState} from "react"
import {ProductCard} from "../../components/ProductCard"
import {favorites} from "../../utils/mock"

const Favorites = () => {
  const [favorite, setFavorite] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(favorites)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Ошибка при загрузке данных")
        }
        return response.json()
      })
      .then((data) => {
        setFavorite(data)
        setLoading(false)
      })
      .catch((error) => {
        console.error("Ошибка:", error)
        setLoading(false)
      })
  }, [])

  if (loading) return <p>Загрузка...</p>
  if (favorite.length === 0) return <p>Нет избранных товаров.</p>

  return (<Link to={"/favorite"} />)(
    <div className="favorites-container">
      <h2>Избранные товары</h2>
      <div className="favorites-list">
        {favorite.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default Favorites
