import "./Sustainability.css";
import green from "../../components/img/greenjoy.jpg";
function Sustainability() {
  return (
    <>
      <div className="sustainability-bg">
        <img alt="flag" src={green} />
        <h3>Phát triển bền vững</h3>
      </div>
      <div className="sustainability-corevalues content">
        <p className="corevalues__title">
          Giá trị cốt lõi của Green Joy luôn kết nối với các tiêu chí phát triển
          bền vững của Liên Hiệp Quốc.
        </p>
        <div className="corevalues__list">
          <div className="corevalues__item">
            <img
              alt="flag"
              src="https://d24rsy7fvs79n4.cloudfront.net/greenjoystraw.com/AUTOxAUTO/20230524082646_3692_1684891606.5163.svg"
            />
            <ul>
              <li>Sử dụng 100% từ mo cau tự nhiên</li>
              <li>Sử dụng vật liệu tái chế để đóng gói</li>
              <li>
                Từ sản xuất đến tiêu thụ và thải bỏ là hoàn toàn tự nhiên.
              </li>
            </ul>
          </div>

          <div className="corevalues__item">
            <img
              alt="flag"
              src="https://d24rsy7fvs79n4.cloudfront.net/greenjoystraw.com/AUTOxAUTO/20230524082922_3692_1684891762.8661.svg"
            />
            <p className="corevalues__desc">
              Tránh sử dụng sản phẩm nhựa để giữ sạch đại dương (giảm 5 triệu đồ
              nhựa, thay thế 18 triệu kg khối lượng nhựa mỗi năm)
            </p>
          </div>

          <div className="corevalues__item">
            <img
              alt="flag"
              src="https://d24rsy7fvs79n4.cloudfront.net/greenjoystraw.com/AUTOxAUTO/20230524083248_3692_1684891968.8918.svg"
            />
            <p className="corevalues__desc">
              Thông qua sản xuất và quan hệ đối tác của chúng tôi, GreenGlee
              cung cấp hơn 1000 nông dân và người dân địa phương công việc tốt
              và cải thiện nền kinh tế địa phương.
            </p>
          </div>
        </div>
      </div>

      <div className="sustainability-icon ">
        <div className="sustainability__icon-list content">
          <div className="sustainabilit__box">
            <img
              alt="flag"
              src="https://d24rsy7fvs79n4.cloudfront.net/greenjoystraw.com/20230524083353_3692_1684892033.5178.svg"
            />
          </div>
          <div className="sustainabilit__box">
            <img
              alt="flag"
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA3MjAgNzIwIj48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6I2ZmM2EyMTt9LmNscy0ye2ZpbGw6I2ZmZjt9PC9zdHlsZT48L2RlZnM+PHRpdGxlPlZOX1NER19pY29uc19SR0Igb3V0bGluZXMtMDE8L3RpdGxlPjxnIGlkPSJnb2FsX2JhY2tncm91bmQiIGRhdGEtbmFtZT0iZ29hbCBiYWNrZ3JvdW5kIj48cmVjdCBjbGFzcz0iY2xzLTEiIHg9Ii0xLjA4IiB5PSItMS4wOCIgd2lkdGg9IjcyMi4xNiIgaGVpZ2h0PSI3MjIuMTYiLz48L2c+PGcgaWQ9IkVOR190ZXh0X2dyYXBoaWNzIiBkYXRhLW5hbWU9IkVORyB0ZXh0ICZhbXA7IGdyYXBoaWNzIj48cGF0aCBjbGFzcz0iY2xzLTIiIGQ9Ik01NS42MywxNTkuNDhoMjUuNWMwLDE1LjEzLDEuODcsMjMsMTEuMzksMjIuNjEsMTAtLjM0LDEwLjU0LTExLjU2LDEwLjU0LTI5LjU4LDAtMTQuNjItMS41My0yNS0xMS43My0yNS02LjEyLDAtMTAsNC4yNS0xMS43MywxMi40MUg1N2wxLjg3LTc4LjJIMTIyLjFWODQuMzRIODAuMjhsLTEuMzYsMzAuNDNjMi43Mi0zLjQsOS42OS02LjEyLDE3LjM0LTYuNjMsMjEuMjUtMS44NywzMS42MiwxNSwzMS42Miw0My4xOCwwLDI5LjI0LTUuNjEsNTAuMzItMzYuODksNTAuMzJDNjEuOTIsMjAxLjY0LDU1LjYzLDE4NSw1NS42MywxNTkuNDhaIi8+PHBhdGggY2xhc3M9ImNscy0yIiBkPSJNMTg5LDYxLjYzaDEzYzkuMjMsMCwxNS40MSwzLjEyLDE1LjQxLDEzLjUyLDAsNi40My0yLjY3LDEwLTcuNjEsMTAuNzksNi4xOCwxLjE3LDkuMSw1LjU5LDkuMSwxMywwLDEwLjA3LTQuOTQsMTUuMzQtMTQuNjksMTUuMzRIMTg5Wm0xMi44NywyMS41MWM1LjcyLDAsNy4yMi0yLjUzLDcuMjItNy44NiwwLTUuNTktMi43My03LTguNTgtN2gtMS45NVY4My4xNFptLjM5LDI0LjM4YzUuODUsMCw3LjQ4LTIuNzMsNy40OC04LjY1LDAtNi4yNC0yLjA4LTkuMS03LjgtOS4xaC0zLjM4djE3Ljc1WiIvPjxwYXRoIGNsYXNzPSJjbHMtMiIgZD0iTTIxOS43MSw0NWg5bDMuODMsMTNoLTUuMDdabTUuMzksMTYuNjRoOS40OXY1Mi42NUgyMjUuMVoiLz48cGF0aCBjbGFzcz0iY2xzLTIiIGQ9Ik0yNDIuMzksNjEuNjNoNi43bDEyLjgsMzB2LTMwaDcuOTN2NTIuNjVoLTYuMzdMMjUwLjU4LDgyLjgydjMxLjQ2aC04LjE5WiIvPjxwYXRoIGNsYXNzPSJjbHMtMiIgZD0iTTI3Ny42Miw2MS42M2g5LjU2djIySDI5Ny45di0yMmg5LjYydjUyLjY1SDI5Ny45VjkwLjQ5SDI4Ny4xOHYyMy43OWgtOS41NloiLz48cGF0aCBjbGFzcz0iY2xzLTIiIGQ9Ik0zMzEsODkuNTFoLTMuMjVWODQuN0gzMzFWNjEuNjNIMzQzLjRDMzU2LjIxLDYxLjYzLDM2MCw2Ni43NiwzNjAsNzhWOTcuMThjMCwxMS41Ny00LDE3LjEtMTYuMzEsMTcuMUgzMzFabTEyLjYxLDE4LjA3YzYuNjMsMCw2LjgyLTMuNTEsNi44Mi0xMC4wN1Y3Ny4zNmMwLTYuMzEtLjY1LTguOTEtNi45NS04LjkxaC0zLjA2Vjg0LjdoMy41MXY0LjgxaC0zLjUxdjE4LjA3WiIvPjxwYXRoIGNsYXNzPSJjbHMtMiIgZD0iTTM3NC4yOCw2MS42M2gxMC4yN2wxMC41Myw1Mi42NWgtOC45MWwtMi4wOC0xMi4xNmgtOS4xNmwtMi4xNSwxMi4xNmgtOVpNMzcwLjEyLDQ4aDVjLjA3LDMuMTgsMS4yNCw0LjgxLDQuMzYsNC44MVMzODMuODMsNTEsMzgzLjgzLDQ4aDUuMDdjMCw1Ljc4LTMuMTgsOS40OS05LjQyLDkuNDlTMzcwLjEyLDUzLjc2LDM3MC4xMiw0OFptNy4zNC0zLjA2YzEuNjktMS4xNywyLjczLTIuMjEsMi43My0zLjgzcy0xLjIzLTIuNTQtMy4wNS0yLjU0YTEwLjQsMTAuNCwwLDAsMC0zLjE5LjUydi00YTE1LDE1LDAsMCwxLDUuMDctLjg1YzQsMCw3LjA5LDIsNy4wOSw2LjA1LDAsMy43Ny0yLjczLDYtNi4wNSw3LjU0Wk0zODMuMDUsOTZsLTMuNTctMjIuMUwzNzUuOSw5NloiLz48cGF0aCBjbGFzcz0iY2xzLTIiIGQ9Ik00MDAsNjEuNjNoNi42OWwxMi44MSwzMHYtMzBoNy45M3Y1Mi42NWgtNi4zN0w0MDguMjEsODIuODJ2MzEuNDZINDAwWiIvPjxwYXRoIGNsYXNzPSJjbHMtMiIgZD0iTTQzNC4yNyw5Ni45MlY3OS4yNGMwLTExLjMxLDMuNDUtMTguMiwxNS0xOC4yLDEwLjc5LDAsMTQuNTYsNS41OSwxNC41NiwxNS4zNHYyLjczaC05LjE3di0zYzAtNS4wNy0uNTItOC4wNi01LjI2LTguMDYtNS4wNywwLTUuNDYsNC4xLTUuNDYsOC45MVY5OWMwLDUuNDYsMSw4LjkxLDUuNzIsOC45MXM1Ljc4LTMuNjQsNS43OC05LjM2VjkzLjYxaC01LjY1di02aDE0LjN2MjYuNzJoLTYuMjRsLS42NS01LjE0Yy0xLjQzLDMuMzgtNCw1Ljg1LTguOTEsNS44NUM0MzcuOTEsMTE1LDQzNC4yNywxMDgsNDM0LjI3LDk2LjkyWiIvPjxwYXRoIGNsYXNzPSJjbHMtMiIgZD0iTTE4OC4xMiwxODIuOTJWMTY1LjI0YzAtMTEuMzEsMy40NC0xOC4yLDE1LTE4LjIsMTAuNzksMCwxNC41Niw1LjU5LDE0LjU2LDE1LjM0djIuNzNoLTkuMTZ2LTNjMC01LjA3LS41Mi04LjA2LTUuMjctOC4wNi01LjA3LDAtNS40Niw0LjEtNS40Niw4LjkxdjIyYzAsNS40NiwxLDguOTEsNS43Miw4LjkxczUuNzktMy42NCw1Ljc5LTkuMzZ2LTQuOTRoLTUuNjZ2LTYuMDVIMjE4djI2LjcyaC02LjI0bC0uNjUtNS4xNGE4Ljg3LDguODcsMCwwLDEtOC45LDUuODVDMTkxLjc2LDIwMSwxODguMTIsMTk0LDE4OC4xMiwxODIuOTJaIi8+PHBhdGggY2xhc3M9ImNscy0yIiBkPSJNMjI1LjIzLDE0Ny42M2g5LjQ5djUyLjY1aC05LjQ5WiIvPjxwYXRoIGNsYXNzPSJjbHMtMiIgZD0iTTI3MiwxNjR2MTkuNzZjMCwxMC41OS0zLjksMTcuMjItMTUuMTQsMTcuMjJzLTE1LjIxLTYuNTYtMTUuMjEtMTcuMjJWMTY0YzAtMTAuNjYsMy45LTE3LDE1LjIxLTE3YTI0Ljc4LDI0Ljc4LDAsMCwxLDUuMTMuNTJjMi4wOC0uMjYsMi44LTEuOTUsMi44LTUuMTNoNi40M2MwLDMuNy0xLjQzLDYuMy0zLjksNy43M0MyNzAuNzMsMTUzLDI3MiwxNTcuNzcsMjcyLDE2NFptLTkuNzUtMi4yMWMwLTQuNDItLjcxLTcuNzQtNS4zOS03Ljc0cy01LjQ2LDMuMzItNS40Niw3Ljc0VjE4NmMwLDQuMzYuNzEsNy44Nyw1LjQ2LDcuODdzNS4zOS0zLjUxLDUuMzktNy44N1pNMjU5LjM2LDE0NGgtNS4xNGwzLjktMTNoOVoiLz48cGF0aCBjbGFzcz0iY2xzLTIiIGQ9Ik0yNzkuMDUsMTQ3LjYzaDkuNDl2NTIuNjVoLTkuNDlaIi8+PHBhdGggY2xhc3M9ImNscy0yIiBkPSJNNTI1LjY4LDI3MS43N0g0MzUuNTJhMS4xNSwxLjE1LDAsMCwwLTEuMTUsMS4xNHYzMGExLjE2LDEuMTYsMCwwLDAsMS4xNSwxLjE1aDM1LjlMNDMxLjU2LDM0My45YTExOCwxMTgsMCwwLDAtMTkwLjkxLDkyLjg4YzAsNjAsNDQuOTIsMTA5LjU3LDEwMi44NSwxMTcuMDh2MzQuNTJIMzA3Ljk0YTEuMTQsMS4xNCwwLDAsMC0xLjE2LDEuMTR2MzIuMTJhMS4xMywxLjEzLDAsMCwwLDEuMTYsMS4xNEgzNDMuNXYzNGExLjE0LDEuMTQsMCwwLDAsMS4xNSwxLjE1aDMyLjFhMS4xNSwxLjE1LDAsMCwwLDEuMTYtMS4xNXYtMzRoMzUuNTZhMS4xMywxLjEzLDAsMCwwLDEuMTQtMS4xNFY1ODkuNTJhMS4xNCwxLjE0LDAsMCwwLTEuMTQtMS4xNEgzNzcuOTFWNTUzLjNhMTE4LDExOCwwLDAsMCw3Ny4zNi0xODQuNDRsMzkuMy0zOS4zMXYzMy41NGExLjE1LDEuMTUsMCwwLDAsMS4xNiwxLjE0aDI5Ljk1YTEuMTYsMS4xNiwwLDAsMCwxLjE3LTEuMTRWMjcyLjkxYTEuMTYsMS4xNiwwLDAsMC0xLjE3LTEuMTRNMzU4Ljc1LDUyMy43MWE4Ni45Myw4Ni45MywwLDEsMSw4Ni45Mi04Ni45Myw4Nyw4NywwLDAsMS04Ni45Miw4Ni45MyIvPjxwYXRoIGNsYXNzPSJjbHMtMiIgZD0iTTQxMS44NCw0MDEuMUgzMDYuNDFhMS4xLDEuMSwwLDAsMC0xLjE1LDF2MjUuNTJhMS4wOSwxLjA5LDAsMCwwLDEuMTUsMS4wNUg0MTEuODRhMS4wOSwxLjA5LDAsMCwwLDEuMTctMS4wNVY0MDIuMTNhMS4xLDEuMSwwLDAsMC0xLjE3LTEiLz48cGF0aCBjbGFzcz0iY2xzLTIiIGQ9Ik00MTEuODQsNDQ2LjY4SDMwNi40MWExLjExLDEuMTEsMCwwLDAtMS4xNSwxLjA2djI1LjUyYTEuMDgsMS4wOCwwLDAsMCwxLjE1LDFINDExLjg0YTEuMDksMS4wOSwwLDAsMCwxLjE3LTFWNDQ3Ljc0YTEuMTEsMS4xMSwwLDAsMC0xLjE3LTEuMDYiLz48L2c+PC9zdmc+"
            />
          </div>
          <div className="sustainabilit__box">
            <img
              alt="flag"
              src="https://d24rsy7fvs79n4.cloudfront.net/greenjoystraw.com/20230524083632_3692_1684892192.9768.svg"
            />
          </div>
          <div className="sustainabilit__box">
            <img
              alt="flag"
              src="https://d24rsy7fvs79n4.cloudfront.net/greenjoystraw.com/20230524083654_3692_1684892214.0344.svg"
            />
          </div>
          <div className="sustainabilit__box">
            {" "}
            <img
              alt="flag"
              src="https://d24rsy7fvs79n4.cloudfront.net/greenjoystraw.com/20230524083711_3692_1684892231.5518.svg"
            />
          </div>
        </div>
      </div>

      <div className="sustainability-impact ">
        <h3 className="impact__title">Tác động môi trường</h3>
        <div className="impact__row content">
          <div className="impact__image">
            <img
              alt="flag"
              src="https://greenjoystraw.com/_next/image?url=https%3A%2F%2Fd24rsy7fvs79n4.cloudfront.net%2Fgreenjoystraw.eraweb.net%2F20221207110223_3692_1670385743.0301.jpg&w=1920&q=75"
            />
            <img
              alt="flag"
              className="impact__active"
              src="https://greenjoystraw.com/_next/image?url=https%3A%2F%2Fd24rsy7fvs79n4.cloudfront.net%2Fgreenjoystraw.eraweb.net%2F20221207110654_3692_1670386014.1582.png&w=1920&q=75"
            />
          </div>

          <div className="impact__list">
            <div className="impact__box">
              <div className="impact__list-image">
                <img
                  alt="flag"
                  src="https://greenjoystraw.com/_next/image?url=https%3A%2F%2Fd24rsy7fvs79n4.cloudfront.net%2Fgreenjoystraw.eraweb.net%2F80x80%2F20221123143123_3692_1669188683.0621.png&w=96&q=75"
                />
              </div>
              <p>
                <strong>40 triệu:</strong> số lượng đồ nhựa giảm thiểu
              </p>
            </div>

            <div className="impact__box">
              <div className="impact__list-image">
                <img
                  alt="flag"
                  src="https://greenjoystraw.com/_next/image?url=https%3A%2F%2Fd24rsy7fvs79n4.cloudfront.net%2Fgreenjoystraw.eraweb.net%2F80x80%2F20221123143214_3692_1669188734.9537.png&w=96&q=75"
                />
              </div>
              <p>
                <strong>50 Tấn:</strong> giảm lượng phát thải CO2 ra môi trường
              </p>
            </div>

            <div className="impact__box">
              <div className="impact__list-image">
                <img
                  alt="flag"
                  src="https://greenjoystraw.com/_next/image?url=https%3A%2F%2Fd24rsy7fvs79n4.cloudfront.net%2Fgreenjoystraw.eraweb.net%2F80x80%2F20221123135523_3692_1669186523.2651.png&w=96&q=75"
                />
              </div>
              <p>
                <strong>100 héc-ta:</strong> Bảo tồn hệ sinh thái cánh đồng cỏ
                bảng
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="sustainability-society">
        <div className="society__box ">
          <h3 className="society__title">Tác động xã hội</h3>
          <p className="society__desc">
            Nâng cao sinh kế tại tỉnh Long An, Đồng bằng Sông Cửu Long
          </p>
        </div>
        <div className="society__row content">
          <div className="society__left">
            <div className="society__item">
              <img
                alt="flag"
                src="https://greenjoystraw.com/_next/image?url=https%3A%2F%2Fd24rsy7fvs79n4.cloudfront.net%2Fgreenjoystraw.eraweb.net%2F80x80%2F20221123144842_3692_1669189722.3223.png&w=96&q=75"
              />
              <span>100 nông dân & người dân địa phương</span>
            </div>

            <div className="society__item">
              <img
                alt="flag"
                src="https://greenjoystraw.com/_next/image?url=https%3A%2F%2Fd24rsy7fvs79n4.cloudfront.net%2Fgreenjoystraw.eraweb.net%2F80x80%2F20221123145231_3692_1669189951.4392.png&w=96&q=75"
              />
              <span>3X thu nhập cao hơn</span>
            </div>

            <div className="society__item">
              <img
                alt="flag"
                src="https://greenjoystraw.com/_next/image?url=https%3A%2F%2Fd24rsy7fvs79n4.cloudfront.net%2Fgreenjoystraw.eraweb.net%2F80x80%2F20221123145125_3692_1669189885.9421.png&w=96&q=75"
              />
              <span>
                70% phụ nữ (nội trợ, phụ nữ lớn tuổi, không có công việc cố
                định)
              </span>
            </div>
          </div>
          <div className="society__right">
            <img
              alt="flag"
              src="https://greenjoystraw.com/_next/image?url=https%3A%2F%2Fd24rsy7fvs79n4.cloudfront.net%2Fgreenjoystraw.eraweb.net%2F20221210092159_3692_1670638919.5008.png&w=1920&q=75"
            />
          </div>
        </div>
      </div>
    </>
  );
}
export default Sustainability;
