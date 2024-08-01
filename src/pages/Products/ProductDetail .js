import { Link, useParams } from "react-router-dom";
import productData from "./ProductData";
import green from "../../components/img/greenjoy.jpg";
import "./ProductDetail.css";
import { useRef, useState } from "react";
import Swal from "sweetalert2";

function ProductDetail() {
  const { productId } = useParams();
  console.log(productId);
  const product = productData.find((item) => item.id === productId);
  const [value, setValue] = useState(1);
  const inputRef = useRef();
  const inputRef1 = useRef();
  const inputRef2 = useRef();
  const increaseValue = () => {
    setValue(value + 1);
  };

  const decreaseValue = () => {
    if (value > 1) {
      setValue(value - 1);
    }
  };
  const handleBuy = () => {
    if (value > 0) {
      Swal.fire({
        icon: "success",
        title: "Bạn đã mua hàng thành công",
        showConfirmButton: false,
        timer: 1500,
      });
      setValue(1);
      inputRef2.current.value = 1;
    }
  };
  const handleComment = () => {
    Swal.fire({
      icon: "success",
      title: "Cảm ơn bạn đã đánh giá",
      showConfirmButton: false,
      timer: 1500,
    });
    inputRef.current.value = "";
    inputRef1.current.value = "";
  };
  return (
    <>
      <div className="product-detail">
        <img src={green} alt="greenjoy" />
      </div>
      <div className="product__detail-main content">
        <div className="detail__main-left">
          <img src={product.imageUrl} alt={product.title} />
          <h2>Đánh giá sản phẩm</h2>
          <div class="rating">
            <input type="radio" id="star-1" name="star-radio" value="star-1" />
            <label for="star-1">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                  pathLength="360"
                  d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
                ></path>
              </svg>
            </label>
            <input type="radio" id="star-2" name="star-radio" value="star-1" />
            <label for="star-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                  pathLength="360"
                  d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
                ></path>
              </svg>
            </label>
            <input type="radio" id="star-3" name="star-radio" value="star-1" />
            <label for="star-3">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                  pathLength="360"
                  d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
                ></path>
              </svg>
            </label>
            <input type="radio" id="star-4" name="star-radio" value="star-1" />
            <label for="star-4">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                  pathLength="360"
                  d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
                ></path>
              </svg>
            </label>
            <input type="radio" id="star-5" name="star-radio" value="star-1" />
            <label for="star-5">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                  pathLength="360"
                  d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
                ></path>
              </svg>
            </label>
          </div>
          <div class="container">
            <div class="modal">
              <div class="modal__body">
                <div class="input">
                  <label class="input__label">Email</label>
                  <input ref={inputRef1} class="input__field" type="text" />
                </div>
                <div class="input">
                  <label class="input__label">Description</label>
                  <textarea
                    ref={inputRef}
                    class="input__field input__field--textarea"
                  ></textarea>
                </div>
              </div>
              <div class="modal__footer">
                <button onClick={handleComment} class="button button--primary">
                  Đăng bình luận
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="detail__main-right">
          <h1>{product.title}</h1>
          <p className="detail__main-category">
            Category: <Link to="/products">{product.Category}</Link>
          </p>
          <p className="detail__main-value">{product.price}</p>
          <span className="detail__main-packaging">500 chiếc</span>
          <h3 className="detail__main-quatiny">Số lượng</h3>
          <div className="detail__main-button">
            <button onClick={decreaseValue}>-</button>
            <input ref={inputRef2} type="text" value={value} readOnly />
            <button className="btn-active" onClick={increaseValue}>
              +
            </button>
          </div>
          <button onClick={handleBuy} className="detail__main-buy">
            <span>Mua ngay</span>
          </button>
          <p className="detail__main-desc">
            <strong>Mô tả sản phẩm</strong> <br />
            Set đĩa vuông mo cau của Green Joy bao gồm (500 hoặc 1000 đĩa) được
            dùng bằng mo cau tự nhiên 100% phân hủy, không chất độc hại, dùng
            một lần. Có thể dùng để đựng cơm, cá, thịt, salad... thiết kế và
            kích thước vừa vặn{product.description}dễ dàng mang theo khi đi du
            lịch, dã ngoại cùng gia đình và bạn bè.
          </p>
        </div>
      </div>

      {/* Bảo quản */}
      <div className="product__detail-preserve">
        <h2>Bảo quản như thế nào?</h2>
        <div className="detail__preserve-box content">
          <div className="detail__preserve-left">
            <img
              alt="Bảo quản "
              src="https://greenjoystraw.com/_next/image?url=https%3A%2F%2Fd24rsy7fvs79n4.cloudfront.net%2Fgreenjoystraw.eraweb.net%2FAUTOxAUTO%2F20221208112026_29_1670473226.9931.png&w=1920&q=75"
            />
            <p>Bảo quản tốt nhất ở nơi khô ráo, thoáng mát</p>
          </div>
          <div className="detail__preserve-right">
            <img
              alt="Bảo quản "
              src="https://greenjoystraw.com/_next/image?url=https%3A%2F%2Fd24rsy7fvs79n4.cloudfront.net%2Fgreenjoystraw.eraweb.net%2FAUTOxAUTO%2F20221208112026_29_1670473226.8571.png&w=1920&q=75"
            />
            <p>Bảo quản tốt nhất ở nơi khô ráo, thoáng mát</p>
          </div>
        </div>
      </div>
    </>
  );
}
export default ProductDetail;
