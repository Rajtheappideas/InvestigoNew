import React from "react";
import { Helmet } from "react-helmet";
import { DashboardFooter, DashboardNav } from "../components";

const Checkout = () => {
  return (
    <>
      <Helmet>
        <title>Investigo - Checkout</title>
      </Helmet>
      <DashboardNav />
      <section style={{ paddingTop: "115px" }}>
        <div className="container">
          <div className="intro my-lg-5">
            <h3>Check out</h3>
            <h6>You’re almost there! Complete your order</h6>
            <hr />
          </div>
          <h5 className="my-3">1. Choose your Package</h5>
          {/* Checkout Package */}
          <div className="checkout-wrapper py-3" style={{ width: "100%" }}>
            <div className="row align-items-center checkout-wrapper">
              <div className="col-lg-3 col-md-4 col-sm-12">
                <div className="checkout-box shadow p-3 ">
                  <span className="badge rounded-pill bg-danger">
                    Exclusive
                  </span>
                  <img
                    src={require("../assets/images/property/pack-01.png")}
                    alt="pack"
                  />
                  <h4 className="text-center">250 €</h4>
                  <label htmlFor="classic" />
                  <input
                    className="form-check-input"
                    type="radio"
                    name="package"
                    id="classic"
                    defaultValue={250}
                  />
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-12">
                <div className="checkout-box shadow p-3">
                  <span className="badge rounded-pill bg-danger">
                    Exclusive
                  </span>
                  <img
                    src={require("../assets/images/property/pack-02.png")}
                    alt="pack"
                  />
                  <h4 className="text-center">500 €</h4>
                  <label htmlFor="elite" />
                  <input
                    className="form-check-input"
                    type="radio"
                    name="package"
                    id="elite"
                    defaultValue={500}
                  />
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-12">
                <div className="checkout-box shadow p-3">
                  <span className="badge rounded-pill bg-danger">Popular</span>
                  <img
                    src={require("../assets/images/property/pack-03.png")}
                    alt="pack"
                  />
                  <h4 className="text-center">1000 €</h4>
                  <label htmlFor="ultimate" />
                  <input
                    className="form-check-input"
                    type="radio"
                    name="package"
                    id="ultimate"
                    defaultValue={1000}
                  />
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-12">
                <div className="checkout-box shadow p-3">
                  <span className="badge rounded-pill bg-danger">Business</span>
                  <img
                    src={require("../assets/images/property/pack-04.png")}
                    alt="pack"
                  />
                  <h4 className="text-center">5000+ €</h4>
                  <label htmlFor="premium" />
                  <input
                    className="form-check-input"
                    type="radio"
                    name="package"
                    id="premium"
                    defaultValue={5000}
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Checkout Investment Project */}
          <div className="choose-project">
            <h5 className="my-3">2. Choose your Investment Project</h5>
            <div className="row py-3 project-wrapper">
              <div className="col-lg-2 col-md-6 col-sm-12 invest-project">
                <div className="project-box">
                  <h6 className="text-center">Real Estate</h6>
                  <img
                    src={require("../assets/images/checkout-img/one.png")}
                    alt="project-one"
                    className="project-img"
                  />
                  <label htmlFor="Real Estate" />
                  <input
                    className="form-check-input"
                    type="radio"
                    name="exampleRadios"
                    id="real_estate"
                    defaultValue="real-estate"
                  />
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-sm-12 invest-project">
                <div className="project-box">
                  <h6 className="text-center">Telecommunication</h6>
                  <img
                    src={require("../assets/images/checkout-img/two.png")}
                    alt="project-one"
                    className="project-img"
                  />
                  <label htmlFor="telecommunication" />
                  <input
                    className="form-check-input"
                    type="radio"
                    name="exampleRadios"
                    id="telecommunication"
                    defaultValue="telecommunication"
                  />
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-sm-12 invest-project">
                <div className="project-box">
                  <h6 className="text-center">Transport</h6>
                  <img
                    src={require("../assets/images/checkout-img/three.png")}
                    alt="project-one"
                    className="project-img"
                  />
                  <label htmlFor="transport" />
                  <input
                    className="form-check-input"
                    type="radio"
                    name="exampleRadios"
                    id="transport"
                    defaultValue="transport"
                  />
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-sm-12 invest-project">
                <div className="project-box">
                  <h6 className="text-center">Agriculture</h6>
                  <img
                    src={require("../assets/images/checkout-img/four.png")}
                    alt="project-one"
                    className="project-img"
                  />
                  <label htmlFor="agriculture" />
                  <input
                    className="form-check-input"
                    type="radio"
                    name="exampleRadios"
                    id="agriculture"
                    defaultValue="agriculture"
                  />
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-sm-12 invest-project">
                <div className="project-box">
                  <h6 className="text-center">Extraction, mining</h6>
                  <img
                    src={require("../assets/images/checkout-img/five.png")}
                    alt="project-one"
                    className="project-img"
                  />
                  <label htmlFor="mine" />
                  <input
                    className="form-check-input"
                    type="radio"
                    name="exampleRadios"
                    id="mine"
                    defaultValue="mine"
                  />
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-sm-12 invest-project">
                <div className="project-box">
                  <h6 className="text-center">Hotel</h6>
                  <img
                    src={require("../assets/images/checkout-img/six.png")}
                    alt="project-one"
                    className="project-img"
                  />
                  <label htmlFor="hotel" />
                  <input
                    className="form-check-input"
                    type="radio"
                    name="exampleRadios"
                    id="hotel"
                    defaultValue="hotel"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Payment Method  */}
          <div className="select-payment-method">
            <h5 className="my-3">3. Select Payment Method</h5>
            <div className="row py-3">
              <div className="col-lg-4 col-md-6 col-sm-12 invest-method">
                <div className="payment-box shadow p-3">
                  <div className="form-check">
                    <label className="form-check-label" htmlFor="credit-card">
                      Credit Card
                    </label>
                    <br />
                    <input
                      className="form-check-input"
                      type="radio"
                      name="payment"
                      id="credit-card"
                      defaultValue="credit-card"
                    />
                    <img
                      src={require("../assets/images/checkout")}
                      alt="payment"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 invest-method">
                <div className="payment-box shadow p-3">
                  <div className="form-check">
                    <label className="form-check-label" htmlFor="paypal">
                      PayPal
                    </label>
                    <br />
                    <input
                      className="form-check-input"
                      type="radio"
                      name="payment"
                      id="paypal"
                      defaultValue="paypal"
                    />
                    <img
                      src={require("../assets/images/paypal.webp")}
                      alt="paypal"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 invest-method">
                <div className="payment-box shadow p-3">
                  <div>
                    <label className="form-check-label" htmlFor="googlepay">
                      Google Pay
                    </label>
                    <br />
                    <input
                      className="form-check-input"
                      type="radio"
                      name="payment"
                      id="googlepay"
                      defaultValue="googlepay"
                    />
                    <img
                      src={require("../assets/images/googlepay.webp")}
                      alt="googlepay"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <form className="mb-5">
            <div className="row">
              <div className="col-lg-8">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="input input--secondary">
                      <label htmlFor="card-name">Name on card</label>
                      <input type="text" name="card-name" required="required" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="input input--secondary">
                      <label htmlFor="card-number">Card Number</label>
                      <input
                        type="text"
                        name="card-number"
                        required="required"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="input input--secondary">
                      <label htmlFor="expiry-date">Expiry date</label>
                      <input
                        type="text"
                        name="expiry-date"
                        required="required"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="input input--secondary">
                      <label htmlFor="cvc-code">CVC code</label>
                      <input type="text" name="cvc-code" required="required" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="group alt__brin">
                  <h5>Features</h5>
                  <hr />
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>

      <DashboardFooter />
    </>
  );
};

export default Checkout;
