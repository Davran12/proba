import {ProductCard} from "../../components/ProductCard"
import {products} from "../../utils/mock"
import styles from "./Home.module.scss"
export function Home() {
  return (
    <main>
      <h1>Главная</h1>
      <div className={styles.productsContainer}>
        {products.map((item) => (
          <ProductCard key={item.id} {...item} />
        ))}
      </div>
    </main>
  )
}
