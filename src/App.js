import React, { Component } from "react";
import Banner from "./component/Banner/Banner";
import Footer from "./component/Footer/Footer";
import Logo from "./component/Header/Logo/Logo";
import Menu from "./component/Header/Menu/Menu";
import Right from "./component/Header/Right/Right";
import Introduce from "./component/Introduce/Introduce";
import ItemPolicy from "./component/ItemPolicy/ItemPolicy";
import ListProductTrend from "./component/ListProductTrend/ListProductTrend";
import ListTip from "./component/ListTip/ListTip";
import NewProduct from "./component/NewProduct/NewProduct";

class App extends Component {
  render() {
    return (
      <>
        <div className="header">
          <div className="header-bar">
            <Logo />
            <Menu />
            <Right />
          </div>
        </div>
        <div className="advertisement">
          <Banner />
        </div>
        <div className="product-introduction">
          <div className="about-product">
            <Introduce />
          </div>
        </div>
        <div className="new-product">
          <div className="new-item-product">
            <NewProduct />
          </div>
        </div>
        <div className="distributors">
          <div className="item-distributors">
            <div className="title">
              <img src="img/flower.PNG" alt="" style={{ margin: "auto" }} />
              <h2>
                <span>Nhà phân phối tiêu biểu và đánh giá khách hàng</span>
              </h2>
              <div className="title-introduction">
                <p>
                  Danh sách các nhà phân phối, các đại lý tiêu biểu và đánh giá
                  của khách hàng về sản phẩm của Delta Cosmetic Việt Nam
                </p>
                <hr />
              </div>
            </div>
            <div className="supplier-list">
              <div className="table-supplier-list">
                <p>Danh sách nhà phân phối & đại lý tiêu biểu</p>
                <table>
                  <tbody>
                    <tr>
                      <th>
                        <i>Tên</i>
                      </th>
                      <th>
                        <i>Cấp bậc</i>
                      </th>
                      <th>
                        <i>Khu vực</i>
                      </th>
                    </tr>
                    <tr>
                      <td>Lê Việt Nga</td>
                      <td>NPP Vàng</td>
                      <td>Đà Nẵng</td>
                    </tr>
                    <tr>
                      <td>Nguyễn Thị Hằng</td>
                      <td>NPP</td>
                      <td>Q.Bình Tân</td>
                    </tr>
                    <tr>
                      <td>Nguyễn Thanh Thảo</td>
                      <td>NPP</td>
                      <td>Đà Nẵng</td>
                    </tr>
                    <tr>
                      <td>Thùy Linh</td>
                      <td>Đại Lý</td>
                      <td>Hà Nội</td>
                    </tr>
                    <tr>
                      <td>Hoa Lan</td>
                      <td>Đại Lý</td>
                      <td>Q.Gò Vấp</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="comment-customs">
                <p>Nhận xét của khách hàng</p>
                <div className="information-customs">
                  <div className="images-custom">
                    <img
                      src="img/image_dg_3.jpg"
                      alt=""
                      style={{ margin: "auto" }}
                    />
                    <p>Khách hàng</p>
                  </div>
                  <div className="name-custom">
                    <p>Thu Trang</p>
                  </div>
                  <div className="comment">
                    <p>
                      "Sản phẩm dùng rất tốt, hợp cho mọi lứa tuổi, 100% thiên
                      nhiên, rất an toàn".
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="product-trend">
          <div className="the-item-product-trend">
            <div className="title">
              <img src="img/flower.PNG" alt="" style={{ margin: "auto" }} />
              <h2>
                <span>Sản phẩm xu hướng</span>
              </h2>
              <div className="title-introduction">
                <p>Những sản phẩm được khách hàng lựa chọn nhiều nhất</p>
                <hr />
              </div>
            </div>
            <div className="product">
              <ListProductTrend />
              <ListProductTrend />
              <ListProductTrend />
              <ListProductTrend />
              <ListProductTrend />
              <ListProductTrend />
              <ListProductTrend />
              <ListProductTrend />
              <ListProductTrend />
              <ListProductTrend />
              <ListProductTrend />
            </div>
          </div>
        </div>
        <div className="tips">
          <div className="tips-beauty">
            <div className="title">
              <img src="img/flower.PNG" alt="" style={{ margin: "auto" }} />
              <h2>
                <span>Tin tức & Mẹo</span>
              </h2>
              <div className="title-introduction">
                <p>Nắm bắt những tin tức & mẹo vặt mới nhất</p>
                <hr />
              </div>
            </div>
            <div className="news-beauty" style={{ marginTop: "1rem" }}>
              <ListTip />
              <ListTip />
              <ListTip />
            </div>
          </div>
        </div>
        <div className="policy">
          <div className="policies">
            <ItemPolicy />
            <ItemPolicy />
            <ItemPolicy />
            <ItemPolicy />
          </div>
        </div>
        <div className="sign-up-for">
          <div className="registration">
            <div className="content-registration">
              <h2>
                <p>Đăng ký nhận tin</p>
              </h2>
              <span>
                Bạn có thể đăng ký nhận tin khuyến mãi bất cứ lúc nào, những
                thông tin sẽ được gửi tới bạn nhanh nhất.
              </span>
            </div>
            <div className="input-email-registration">
              <input type="text" placeholder="Nhập email của bạn" />
              <span>
                <i className="fas fa-paper-plane"></i> ĐĂNG KÝ
              </span>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default App;
