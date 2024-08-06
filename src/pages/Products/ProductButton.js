import "./ProductButton.css";
import { useState, useRef, useEffect } from "react";
function ProductButton(props) {
  const { product } = props;
  const [price, setPrice] = useState("1,233đ"); // Giá tiền mặc định
  const [activeButton, setActiveButton] = useState("button1"); // Đặt giá trị mặc định là 'button1'
  const button1Ref = useRef(null); // Tạo ref cho Button 1
  useEffect(() => {
    if (button1Ref.current) {
      button1Ref.current.focus();
    }
  }, []);

  const handleButtonClick = (value, buttonId, buttonRef) => {
    setPrice(value);
    setActiveButton(buttonId); // Đặt nút đang được nhấn
    if (buttonRef && buttonRef.current) {
      buttonRef.current.focus(); // Đặt focus vào nút được truyền
    }
  };

  return (
    <div className="container">
      <div className="price-container">
        <p>{price}</p> {/* Giá tiền nằm trên button */}
      </div>
      <div>
        <button
          ref={button1Ref} // Gán ref cho Button 1
          className={
            activeButton === "button1" ? "btn-test btn active" : "btn-test"
          }
          onClick={() => handleButtonClick("1,233 đ", "button1", button1Ref)}
        >
          1 chiếc
        </button>
        <button
          className={
            activeButton === "button2" ? "btn-test btn active" : "btn-test"
          }
          onClick={() =>
            handleButtonClick(product.price.toString(), "button2", null)
          }
        >
          500 chiếc
        </button>
      </div>
    </div>
  );
}

export default ProductButton;
