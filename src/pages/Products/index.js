import { Link, Outlet } from "react-router-dom";
import green from "../../components/img/greenjoy.jpg";
import green1 from "../../components/img/green1.jpg";
import green2 from "../../components/img/green2.jpg";
import green3 from "../../components/img/green3.jpg";
import green4 from "../../components/img/green4.jpg";
import green5 from "../../components/img/green5.jpg";
import green6 from "../../components/img/green6.jpg";
import green7 from "../../components/img/green7.jpg";
import green8 from "../../components/img/green8.jpg";
import green9 from "../../components/img/green9.jpg";
import green10 from "../../components/img/green10.jpg";
import green12 from "../../components/img/green12.jpg";

import "./Product.css";
function Products() {
  return (
    <>
      <div className="product-mocau">
        <img src={green} alt="flag" />
        <h3>Sản phẩm</h3>
      </div>
      <div className="product__mocau-title">
        <h2>Đồ dùng từ Mo Cau</h2>
      </div>
      <div className="product__body content">
        <div className="product__list">
          <Link to="/products/item-1" className="product__item">
            <img alt="photo" src={green1} />
            <h3 className="product__title">Set muỗng mo cau Green Joy 17cm</h3>
            <span className="product__value">616,500₫</span>
          </Link>

          <Link to="/products/item-2" className="product__item">
            <img alt="photo" src={green2} />
            <h3 className="product__title">
              Set muỗng mo cau Green Joy (13 cm)
            </h3>
            <span className="product__value">616,500₫</span>
          </Link>

          <Link to="/products/item-3" className="product__item">
            <img alt="photo" src={green3} />
            <h3 className="product__title">
              Set chén mo cau vuông Green Joy (8cm)
            </h3>
            <span className="product__value">1,015,000₫</span>
          </Link>

          <Link to="/products/item-4" className="product__item">
            <img alt="photo" src={green4} />
            <h3 className="product__title">
              Set đĩa/dĩa mo cau tròn Green Joy (18cm)
            </h3>
            <span className="product__value">1,377,500₫</span>
          </Link>

          <Link to="/products/item-5" className="product__item">
            <img alt="photo" src={green5} />
            <h3 className="product__title">
              Set đĩa/dĩa vuông mo cau Green Joy (16cm)
            </h3>
            <span className="product__value">1,450,000₫</span>
          </Link>

          <Link to="/products/item-6" className="product__item">
            <img alt="photo" src={green6} />
            <h3 className="product__title">
              Set tô tròn mo cau Green Joy (16cm)
            </h3>
            <span className="product__value">2,030,000₫</span>
          </Link>

          <Link to="/products/item-7" className="product__item">
            <img alt="photo" src={green7} />
            <h3 className="product__title">
              Set đĩa/dĩa mo cau chữ nhật Green Joy (28cm)
            </h3>
            <span className="product__value">2,102,500₫</span>
          </Link>

          <Link to="/products/item-8" className="product__item">
            <img alt="photo" src={green12} />
            <h3 className="product__title">
              Set đĩa/dĩa mo cau vuông Green Joy (20cm)
            </h3>
            <span className="product__value">2,102,500₫</span>
          </Link>

          <Link to="/products/item-9" className="product__item">
            <img alt="photo" src={green9} />
            <h3 className="product__title">
              Set đĩa/dĩa vuông mo cau Green Joy (20cm)
            </h3>
            <span className="product__value">2,102,500₫</span>
          </Link>

          <Link to="/products/item-10" className="product__item">
            <img alt="photo" src={green10} />
            <h3 className="product__title">
              Set đĩa/dĩa tròn mo cau Green Joy (đường kính 25cm)
            </h3>
            <span className="product__value">2,392,500₫</span>
          </Link>

          <Link to="/products/item-11" className="product__item">
            <img alt="photo" src={green8} />
            <h3 className="product__title">
              Set đĩa/dĩa vuông mo cau Green Joy (25cm)
            </h3>
            <span className="product__value">2,537,500₫</span>
          </Link>

          <Link to="/products/item-12" className="product__item">
            <img
              alt="photo"
              src="https://greenjoystraw.com/_next/image?url=https%3A%2F%2Fd24rsy7fvs79n4.cloudfront.net%2Fgreenjoystraw.com%2F500x500%2F20230612233405_5088_1686587645.799.webp&w=1920&q=75"
            />
            <h3 className="product__title">
              Set đĩa/dĩa vuông mo cau Green Joy (16cm)
            </h3>
            <span className="product__value">2,827,500₫</span>
          </Link>
        </div>
      </div>
      {/* product-best */}
      <div className="product-best">
        <h2>Các sản phẩm bán chạy nhất</h2>
        <div className="best__list content">
          <Link to="/products/item-1" className="best__item">
            <img
              alt="photo"
              src="https://greenjoystraw.com/_next/image?url=https%3A%2F%2Fd24rsy7fvs79n4.cloudfront.net%2Fgreenjoystraw.com%2F500x500%2F20230612220203_5088_1686582123.8827.webp&w=1920&q=75"
            />
            <h3 className="best__title">Set muỗng mo cau Green Joy 17cm</h3>
            <span className="best__value">616,500₫</span>
          </Link>

          <Link to="/products/item-10" className="best__item">
            <img alt="photo" src={green10} />
            <h3 className="best__title">
              Set đĩa/dĩa mo cau vuông Green Joy (20cm)
            </h3>
            <span className="best__value">2,392,500₫</span>
          </Link>

          <Link to="/products/item-4" className="best__item">
            <img
              alt="photo"
              src="https://greenjoystraw.com/_next/image?url=https%3A%2F%2Fd24rsy7fvs79n4.cloudfront.net%2Fgreenjoystraw.com%2F500x500%2F20230612230133_5088_1686585693.7982.webp&w=1920&q=75"
            />
            <h3 className="best__title">
              Set đĩa/dĩa mo cau tròn Green Joy (18cm)
            </h3>
            <span className="best__value">1,377,500₫</span>
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
}
export default Products;
