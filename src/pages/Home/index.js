import { Link } from "react-router-dom";
import green from "../../components/img/greenjoy.jpg";
import bg1 from "../../components/img/bg1.jpg";
import "../../Layout/LayoutDefault.css";
function Home() {
  return (
    <>
      <div className="main__image-bg">
        <img src={green} alt="photo" />
      </div>
      {/* main social */}
      <div className="main__social">
        <div className="row content">
          <div className="main__social-left">
            <div className="main__box">
              <h1 className="main__title">
                Giảm thiểu đồ nhựa dùng 1 lần bằng nguyên liệu thiên nhiên làm
                từ mo cau.
              </h1>
              <p className="main__desc">
                Cung cấp đồ dùng từ mo cau và các dụng cụ cho bàn ăn và nhà bếp
                làm từ mo cau
              </p>
            </div>
            <div className="main__btn">
              <a
                target="_blank"
                className="btn btn__shopee"
                href="https://shopee.vn/"
              >
                Shopee
              </a>
              <a
                target="_blank"
                className="btn  btn__tiki"
                href="https://tiki.vn/"
              >
                Tiki
              </a>
              <a
                target="_blank"
                className="btn  btn__amazon"
                href="https://Amazon.vn/"
              >
                Amazon
              </a>
            </div>
          </div>
          <div className="main__social-right">
            <img
              alt="photo"
              src="https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2020/11/28/858012/Khoi-Nghiep-Tu-Mo-Ca-05.jpg"
            />
          </div>
        </div>
      </div>
      {/* main person */}
      <div className="main__person">
        <img
          src="https://greenjoystraw.com/_next/image?url=https%3A%2F%2Fd24rsy7fvs79n4.cloudfront.net%2Fgreenjoystraw.eraweb.net%2F20221210154314_3692_1670661794.7985.png&w=1920&q=75"
          alt="photo"
        />
        <div className="main__person-box">
          <h3 className="main__person-title">
            <strong>Đồ dùng từ mo cau</strong> của Green Glee được làm từ
            <strong> mo cau </strong> ở vùng Đồng bằng Cửu Long
          </h3>
        </div>
      </div>
      {/* main origin */}
      <div className="main__origin">
        <img src={bg1} />
        <div className="main__origin-content">
          <h4 className="main__origin-title">Nguồn gốc của Green Glee</h4>
          <p className="main__origin-desc">
            Bắt nguồn từ chữ <strong>GREEN</strong>, nghĩa là màu{" "}
            <strong>xanh-sạch-sự hy vọng</strong>, và <strong>Glee</strong>,
            nghĩa là niềm vui sướng, hạnh phúc. <br />
            <strong>GREEN Glee</strong> có nghĩa là làm điều gì đó tốt đẹp cho
            cá nhân, cho tổ chức, môi trường và cộng đồng.
          </p>
        </div>
      </div>
      {/* main vision */}
      <div className="main__vision">
        <div className="main__vision-left">
          <div className="vision_left-box">
            <h4 className="vision__left-title">Tầm nhìn</h4>
            <p className="vision__left-desc">
              Green Glee đặt mục tiêu trở thành nhà cung cấp đồ dùng từ mo cau
              bền vững hàng đầu và đáng tin cậy trên toàn cầu. Chúng tôi cố gắng
              hỗ trợ, nâng cao nhận thức và truyền cảm hứng cho người tiêu dùng
              muốn áp dụng lối sống bền vững hơn và tổ chức hướng tới bền vững
              đang tìm cách giảm lượng khí thải carbon của họ trong nền kinh tế
              tuần hoàn mới.
            </p>
          </div>
          <img src="https://laxanh.net/wp-content/uploads/2020/03/dia-mo-cau-124.jpg" />
        </div>
        <div className="main__vision-right">
          <img src="https://media.baoquangninh.vn/dataimages/201806/original/images1074696_dung_cu_an_uong_tot_cho_suc_khoe_1529395879_680x0.jpg" />
          <div className="vision_left-box  vision_left-box2 ">
            <h4 className="vision__left-title">Sứ mệnh</h4>

            <p className="vision__left-desc ">
              Đẩy nhanh quá trình loại bỏ dần các sản phẩm nhựa dùng một lần
              bằng cách tạo ra các sản phẩm có nguồn gốc thực vật bền vững và
              giá cả phải chăng nhất.
            </p>
          </div>
        </div>
      </div>
      {/* main value  */}
      <div className="main__value">
        <div className="main__value-list">
          <img src="https://greenjoystraw.com/_next/image?url=https%3A%2F%2Fd24rsy7fvs79n4.cloudfront.net%2Fgreenjoystraw.eraweb.net%2F120x120%2F20221124105807_3692_1669262287.4147.png&w=128&q=75" />
          <p className="main__value-desc">
            Cung cấp sản phẩm từ mo cau hoàn toàn tự nhiên
          </p>
        </div>

        <div className="main__value-list">
          <img src="https://greenjoystraw.com/_next/image?url=https%3A%2F%2Fd24rsy7fvs79n4.cloudfront.net%2Fgreenjoystraw.eraweb.net%2F120x120%2F20221124110151_3692_1669262511.3884.png&w=128&q=75" />
          <p className="main__value-desc">
            Nâng cao nhận thức của người tiêu dùng về môi trường
          </p>
        </div>

        <div className="main__value-list">
          <img src="https://greenjoystraw.com/_next/image?url=https%3A%2F%2Fd24rsy7fvs79n4.cloudfront.net%2Fgreenjoystraw.eraweb.net%2F120x120%2F20221124110655_3692_1669262815.1567.png&w=128&q=75" />
          <p className="main__value-desc">
            Mang tinh thần “Green” của Green Glee trong từng sản phẩm và hy vọng
            việc sử dụng ống hút cỏ này sẽ giúp mọi người hiểu được giá trị của
            cỏ quanh mình
          </p>
        </div>

        <div className="main__value-list">
          <img src="https://greenjoystraw.com/_next/image?url=https%3A%2F%2Fd24rsy7fvs79n4.cloudfront.net%2Fgreenjoystraw.eraweb.net%2F120x120%2F20221124110405_3692_1669262645.8155.png&w=128&q=75" />
          <p className="main__value-desc">
            Tạo cơ hội việc làm và thu nhập ổn định cho người dân địa phương
          </p>
        </div>

        <div className="main__value-list">
          <img src="https://greenjoystraw.com/_next/image?url=https%3A%2F%2Fd24rsy7fvs79n4.cloudfront.net%2Fgreenjoystraw.eraweb.net%2F120x120%2F20221124110955_3692_1669262995.0218.png&w=128&q=75" />
          <p className="main__value-desc">
            Đóng góp một giải pháp kinh doanh bền vững cho cộng đồng
          </p>
        </div>
      </div>
      {/* main-whyperso */}
      <div className="main-whyperson">
        <h2 className="whyperson__title">
          Tại sao mọi người chọn sản phẩm mo cau từ Green Glee?
        </h2>
        <div className="whyperson__row content">
          <div className="whyperson__item">
            <img src="https://greenjoystraw.com/_next/image?url=https%3A%2F%2Fd24rsy7fvs79n4.cloudfront.net%2Fgreenjoystraw.eraweb.net%2FAUTOxAUTO%2F20221206115858_29_1670302738.3616.png&w=1920&q=75" />
            <p className="whyperson__desc">
              100% tự nhiên & Phân huỷ hoàn toàn
            </p>
          </div>

          <div className="whyperson__item">
            <img src="https://greenjoystraw.com/_next/image?url=https%3A%2F%2Fd24rsy7fvs79n4.cloudfront.net%2Fgreenjoystraw.eraweb.net%2FAUTOxAUTO%2F20221206115858_29_1670302738.5014.png&w=1920&q=75" />
            <p className="whyperson__desc">Phát triển tái sinh</p>
          </div>

          <div className="whyperson__item">
            <img src="https://greenjoystraw.com/_next/image?url=https%3A%2F%2Fd24rsy7fvs79n4.cloudfront.net%2Fgreenjoystraw.eraweb.net%2FAUTOxAUTO%2F20221208112027_29_1670473227.0124.png&w=1920&q=75" />
            <p className="whyperson__desc">Sạch từ nông trại tới bàn ăn</p>
          </div>

          <div className="whyperson__item">
            <img src="https://greenjoystraw.com/_next/image?url=https%3A%2F%2Fd24rsy7fvs79n4.cloudfront.net%2Fgreenjoystraw.eraweb.net%2FAUTOxAUTO%2F20221206115910_29_1670302750.2521.png&w=1920&q=75" />
            <p className="whyperson__desc">Thương mại công bằng</p>
          </div>
        </div>
      </div>
      {/* main-production-process */}
      <div className="main-production-process">
        <img
          src="https://salt.tikicdn.com/ts/tmp/d2/70/4a/f24430ca63934e20184b8e4496dbc12c.jpg"
          alt="mocau"
        />
        <p className="production__process-desc">
          Quy trình sản xuất, sử dụng và phân hủy
        </p>
      </div>
      {/* main-buy  */}
      <div className="main-buy ">
        <div className="buy__row content">
          <div className="buy__item">
            <img src="https://salt.tikicdn.com/cache/750x750/ts/product/f1/c5/b9/c35aa4917786fa206c4434dea7c4b49f.jpg.webp" />
            <h4 className="buyt__title">Đĩa từ mo cau </h4>
          </div>

          <div className="buy__item">
            <img src="https://media-cdn-v2.laodong.vn/storage/newsportal/2023/4/20/1182620/Anh-14.jpg" />

            <h4 className="buyt__title">
              Sản phẩm thủ công mỹ <br /> nghệ từ mo cau
            </h4>
          </div>

          <div className="buy__item">
            <img src="https://media.thuonghieucongluan.vn/uploads/2022/07/31/04-1659269715.JPG" />
            <h4 className="buyt__title">Dụng cụ ăn thân thiện</h4>
          </div>
        </div>
      </div>

      {/* main-goals */}
      <div className="main-goals">
        <div className="goals-row content">
          <div className="goals-content">
            <p className="goals__content-title">
              <strong> Giá trị cốt lõi</strong> của GreenGlee luôn kết nối với
              các tiêu chí
              <strong> phát triển bền vững</strong> của Liên Hiệp Quốc (UNDP).
            </p>
            <Link className="goals__content-btn" to="/Sustainability">
              Đọc thêm...
            </Link>
          </div>
          <div className="goals-image">
            <img
              src="https://greenjoystraw.com/_next/image?url=https%3A%2F%2Fd24rsy7fvs79n4.cloudfront.net%2Fgreenjoystraw.eraweb.net%2F20221221102318_29_1671592998.0698.jpg&w=1920&q=75"
              alt="photo"
            />
          </div>
        </div>
      </div>

      {/* main-value */}
      <div className="main-value">
        <div className="value__row">
          <div className="main-list">
            <div className="main__list-right">
              <img
                src="https://d24rsy7fvs79n4.cloudfront.net/greenjoystraw.eraweb.net/20221212160015_29_1670835615.8812.jpg"
                alt="photo"
              />
              <h3>
                <strong>20 tấn</strong> <br />
                rác nhựa được giảm thiểu
              </h3>
            </div>
          </div>
          <div className="main-bottom">
            <div className="main__list-btleft">
              <img
                src="https://d24rsy7fvs79n4.cloudfront.net/greenjoystraw.eraweb.net/20221212160015_29_1670835615.9477.jpg"
                alt="photo"
              />
              <h3>
                <strong>50 tấn</strong> <br />
                khí thải CO2 được giảm thiểu
              </h3>
            </div>

            <div className="main__list-btright">
              <img
                src="https://d24rsy7fvs79n4.cloudfront.net/greenjoystraw.eraweb.net/20221212160015_29_1670835615.925.jpeg"
                alt="photo"
              />
              <h3>
                <strong>100</strong> <br />
                nông dân và người dân ĐBSCL được cải thiện sinh kế
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Home;
