import {useNavigate} from "react-router-dom"
import styles from "./ProductCard.module.scss"
import {favorites} from "../../utils/mock"
export const ProductCard = ({title, price, image, id}) => {
  const navigate = useNavigate()

  return (
    <div onClick={() => navigate(`/product/${id}`)} className={styles.wrapper}>
      <img src={image} alt="" />
      <h4>{title}</h4>
      <p>{price}</p>
    </div>
  )
}
