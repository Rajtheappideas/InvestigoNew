import React from "react";

const Faq = () => {
  return (
    <section className="faq section__space">
      <div className="container">
        <div className="faq__area">
          <div className="faq__tab__content" id="start">
            <div className="faq__group">
              <div className="accordion" id="accordionExampleStart">
                <div className="accordion-item content__space">
                  <h5 className="accordion-header" id="headingStartOne">
                    <span className="icon_box">
                      <img src={require("../assets/images/icons/message.png")} alt="Start" />
                    </span>
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseStartOne"
                      aria-expanded="true"
                      aria-controls="collapseStartOne"
                    >
                      What is Revest?
                    </button>
                  </h5>
                  <div
                    id="collapseStartOne"
                    className="accordion-collapse collapse show"
                    aria-labelledby="headingStartOne"
                    data-bs-parent="#accordionExampleStart"
                  >
                    <div className="accordion-body">
                      <p>
                        combined with a handful of model sentence structures, to
                        generate Lorem Ipsum which looks reasonable. The
                        generated Lorem Ipsum is therefore always free from
                        repetition, injected humour, or
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item content__space">
                  <h5 className="accordion-header" id="headingStartTwo">
                    <span className="icon_box">
                      <img src={require("../assets/images/icons/message.png")} alt="Start" />
                    </span>
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseStartTwo"
                      aria-expanded="false"
                      aria-controls="collapseStartTwo"
                    >
                      What are the benefits of investing via Revest?
                    </button>
                  </h5>
                  <div
                    id="collapseStartTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingStartTwo"
                    data-bs-parent="#accordionExampleStart"
                  >
                    <div className="accordion-body">
                      <p>
                        combined with a handful of model sentence structures, to
                        generate Lorem Ipsum which looks reasonable. The
                        generated Lorem Ipsum is therefore always free from
                        repetition, injected humour, or
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item content__space">
                  <h5 className="accordion-header" id="headingStartThree">
                    <span className="icon_box">
                      <img src={require("../assets/images/icons/message.png")} alt="Start" />
                    </span>
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseStartThree"
                      aria-expanded="false"
                      aria-controls="collapseStartThree"
                    >
                      What makes Revest different?
                    </button>
                  </h5>
                  <div
                    id="collapseStartThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingStartThree"
                    data-bs-parent="#accordionExampleStart"
                  >
                    <div className="accordion-body">
                      <p>
                        combined with a handful of model sentence structures, to
                        generate Lorem Ipsum which looks reasonable. The
                        generated Lorem Ipsum is therefore always free from
                        repetition, injected humour, or
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item content__space">
                  <h5 className="accordion-header" id="headingStartFour">
                    <span className="icon_box">
                      <img src={require("../assets/images/icons/message.png")} alt="Start" />
                    </span>
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseStartFour"
                      aria-expanded="false"
                      aria-controls="collapseStartFour"
                    >
                      What happens to my investments if Revest goes into
                      bankruptcy?
                    </button>
                  </h5>
                  <div
                    id="collapseStartFour"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingStartFour"
                    data-bs-parent="#accordionExampleStart"
                  >
                    <div className="accordion-body">
                      <p>
                        combined with a handful of model sentence structures, to
                        generate Lorem Ipsum which looks reasonable. The
                        generated Lorem Ipsum is therefore always free from
                        repetition, injected humour, or
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item content__space">
                  <h5 className="accordion-header" id="headingStartFive">
                    <span className="icon_box">
                      <img src={require("../assets/images/icons/message.png")} alt="Start" />
                    </span>
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseStartFive"
                      aria-expanded="false"
                      aria-controls="collapseStartFive"
                    >
                      What regulations apply to Revest?
                    </button>
                  </h5>
                  <div
                    id="collapseStartFive"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingStartFive"
                    data-bs-parent="#accordionExampleStart"
                  >
                    <div className="accordion-body">
                      <p>
                        combined with a handful of model sentence structures, to
                        generate Lorem Ipsum which looks reasonable. The
                        generated Lorem Ipsum is therefore always free from
                        repetition, injected humour, or
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item content__space">
                  <h5 className="accordion-header" id="headingStartSix">
                    <span className="icon_box">
                      <img src={require("../assets/images/icons/message.png")} alt="Start" />
                    </span>
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseStartSix"
                      aria-expanded="false"
                      aria-controls="collapseStartSix"
                    >
                      How do I start investing in Revest?
                    </button>
                  </h5>
                  <div
                    id="collapseStartSix"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingStartSix"
                    data-bs-parent="#accordionExampleStart"
                  >
                    <div className="accordion-body">
                      <p className="neutral-top neutral-bottom">
                        combined with a handful of model sentence structures, to
                        generate Lorem Ipsum which looks reasonable. The
                        generated Lorem Ipsum is therefore always free from
                        repetition, injected humour, or
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="faq__tab__content" id="funds">
            <div className="faq__group">
              <div className="accordion" id="accordionExampleFund">
                <div className="accordion-item content__space">
                  <h5 className="accordion-header" id="headingFundOne">
                    <span className="icon_box">
                      <img src={require("../assets/images/icons/message.png")} alt="Fund" />
                    </span>
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFundOne"
                      aria-expanded="true"
                      aria-controls="collapseFundOne"
                    >
                      What is Revest?
                    </button>
                  </h5>
                  <div
                    id="collapseFundOne"
                    className="accordion-collapse collapse show"
                    aria-labelledby="headingFundOne"
                    data-bs-parent="#accordionExampleFund"
                  >
                    <div className="accordion-body">
                      <p>
                        combined with a handful of model sentence structures, to
                        generate Lorem Ipsum which looks reasonable. The
                        generated Lorem Ipsum is therefore always free from
                        repetition, injected humour, or
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item content__space">
                  <h5 className="accordion-header" id="headingFundTwo">
                    <span className="icon_box">
                      <img src={require("../assets/images/icons/message.png")} alt="Fund" />
                    </span>
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFundTwo"
                      aria-expanded="false"
                      aria-controls="collapseFundTwo"
                    >
                      What are the benefits of investing via Revest?
                    </button>
                  </h5>
                  <div
                    id="collapseFundTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingFundTwo"
                    data-bs-parent="#accordionExampleFund"
                  >
                    <div className="accordion-body">
                      <p>
                        combined with a handful of model sentence structures, to
                        generate Lorem Ipsum which looks reasonable. The
                        generated Lorem Ipsum is therefore always free from
                        repetition, injected humour, or
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item content__space">
                  <h5 className="accordion-header" id="headingFundThree">
                    <span className="icon_box">
                      <img src={require("../assets/images/icons/message.png")} alt="Fund" />
                    </span>
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFundThree"
                      aria-expanded="false"
                      aria-controls="collapseFundThree"
                    >
                      What makes Revest different?
                    </button>
                  </h5>
                  <div
                    id="collapseFundThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingFundThree"
                    data-bs-parent="#accordionExampleFund"
                  >
                    <div className="accordion-body">
                      <p>
                        combined with a handful of model sentence structures, to
                        generate Lorem Ipsum which looks reasonable. The
                        generated Lorem Ipsum is therefore always free from
                        repetition, injected humour, or
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item content__space">
                  <h5 className="accordion-header" id="headingFundFour">
                    <span className="icon_box">
                      <img src={require("../assets/images/icons/message.png")} alt="Fund" />
                    </span>
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFundFour"
                      aria-expanded="false"
                      aria-controls="collapseFundFour"
                    >
                      What happens to my investments if Revest goes into
                      bankruptcy?
                    </button>
                  </h5>
                  <div
                    id="collapseFundFour"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingFundFour"
                    data-bs-parent="#accordionExampleFund"
                  >
                    <div className="accordion-body">
                      <p>
                        combined with a handful of model sentence structures, to
                        generate Lorem Ipsum which looks reasonable. The
                        generated Lorem Ipsum is therefore always free from
                        repetition, injected humour, or
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item content__space">
                  <h5 className="accordion-header" id="headingFundFive">
                    <span className="icon_box">
                      <img src={require("../assets/images/icons/message.png")} alt="Fund" />
                    </span>
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFundFive"
                      aria-expanded="false"
                      aria-controls="collapseFundFive"
                    >
                      What regulations apply to Revest?
                    </button>
                  </h5>
                  <div
                    id="collapseFundFive"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingFundFive"
                    data-bs-parent="#accordionExampleFund"
                  >
                    <div className="accordion-body">
                      <p>
                        combined with a handful of model sentence structures, to
                        generate Lorem Ipsum which looks reasonable. The
                        generated Lorem Ipsum is therefore always free from
                        repetition, injected humour, or
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item content__space">
                  <h5 className="accordion-header" id="headingFundSix">
                    <span className="icon_box">
                      <img src={require("../assets/images/icons/message.png")} alt="Fund" />
                    </span>
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFundSix"
                      aria-expanded="false"
                      aria-controls="collapseFundSix"
                    >
                      How do I Fund investing in Revest?
                    </button>
                  </h5>
                  <div
                    id="collapseFundSix"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingFundSix"
                    data-bs-parent="#accordionExampleFund"
                  >
                    <div className="accordion-body">
                      <p className="neutral-top neutral-bottom">
                        combined with a handful of model sentence structures, to
                        generate Lorem Ipsum which looks reasonable. The
                        generated Lorem Ipsum is therefore always free from
                        repetition, injected humour, or
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="faq__tab__content" id="investing">
            <div className="faq__group">
              <div className="accordion" id="accordionExampleinvesting">
                <div className="accordion-item content__space">
                  <h5 className="accordion-header" id="headinginvestingOne">
                    <span className="icon_box">
                      <img
                        src={require("../assets/images/icons/message.png")}
                        alt="investing"
                      />
                    </span>
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseinvestingOne"
                      aria-expanded="true"
                      aria-controls="collapseinvestingOne"
                    >
                      What is Revest?
                    </button>
                  </h5>
                  <div
                    id="collapseinvestingOne"
                    className="accordion-collapse collapse show"
                    aria-labelledby="headinginvestingOne"
                    data-bs-parent="#accordionExampleinvesting"
                  >
                    <div className="accordion-body">
                      <p>
                        combined with a handful of model sentence structures, to
                        generate Lorem Ipsum which looks reasonable. The
                        generated Lorem Ipsum is therefore always free from
                        repetition, injected humour, or
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item content__space">
                  <h5 className="accordion-header" id="headinginvestingTwo">
                    <span className="icon_box">
                      <img
                        src={require("../assets/images/icons/message.png")}
                        alt="investing"
                      />
                    </span>
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseinvestingTwo"
                      aria-expanded="false"
                      aria-controls="collapseinvestingTwo"
                    >
                      What are the benefits of investing via Revest?
                    </button>
                  </h5>
                  <div
                    id="collapseinvestingTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="headinginvestingTwo"
                    data-bs-parent="#accordionExampleinvesting"
                  >
                    <div className="accordion-body">
                      <p>
                        combined with a handful of model sentence structures, to
                        generate Lorem Ipsum which looks reasonable. The
                        generated Lorem Ipsum is therefore always free from
                        repetition, injected humour, or
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item content__space">
                  <h5 className="accordion-header" id="headinginvestingThree">
                    <span className="icon_box">
                      <img
                        src={require("../assets/images/icons/message.png")}
                        alt="investing"
                      />
                    </span>
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseinvestingThree"
                      aria-expanded="false"
                      aria-controls="collapseinvestingThree"
                    >
                      What makes Revest different?
                    </button>
                  </h5>
                  <div
                    id="collapseinvestingThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="headinginvestingThree"
                    data-bs-parent="#accordionExampleinvesting"
                  >
                    <div className="accordion-body">
                      <p>
                        combined with a handful of model sentence structures, to
                        generate Lorem Ipsum which looks reasonable. The
                        generated Lorem Ipsum is therefore always free from
                        repetition, injected humour, or
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item content__space">
                  <h5 className="accordion-header" id="headinginvestingFour">
                    <span className="icon_box">
                      <img
                        src={require("../assets/images/icons/message.png")}
                        alt="investing"
                      />
                    </span>
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseinvestingFour"
                      aria-expanded="false"
                      aria-controls="collapseinvestingFour"
                    >
                      What happens to my investments if Revest goes into
                      bankruptcy?
                    </button>
                  </h5>
                  <div
                    id="collapseinvestingFour"
                    className="accordion-collapse collapse"
                    aria-labelledby="headinginvestingFour"
                    data-bs-parent="#accordionExampleinvesting"
                  >
                    <div className="accordion-body">
                      <p>
                        combined with a handful of model sentence structures, to
                        generate Lorem Ipsum which looks reasonable. The
                        generated Lorem Ipsum is therefore always free from
                        repetition, injected humour, or
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item content__space">
                  <h5 className="accordion-header" id="headinginvestingFive">
                    <span className="icon_box">
                      <img
                        src={require("../assets/images/icons/message.png")}
                        alt="investing"
                      />
                    </span>
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseinvestingFive"
                      aria-expanded="false"
                      aria-controls="collapseinvestingFive"
                    >
                      What regulations apply to Revest?
                    </button>
                  </h5>
                  <div
                    id="collapseinvestingFive"
                    className="accordion-collapse collapse"
                    aria-labelledby="headinginvestingFive"
                    data-bs-parent="#accordionExampleinvesting"
                  >
                    <div className="accordion-body">
                      <p>
                        combined with a handful of model sentence structures, to
                        generate Lorem Ipsum which looks reasonable. The
                        generated Lorem Ipsum is therefore always free from
                        repetition, injected humour, or
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item content__space">
                  <h5 className="accordion-header" id="headinginvestingSix">
                    <span className="icon_box">
                      <img
                        src={require("../assets/images/icons/message.png")}
                        alt="investing"
                      />
                    </span>
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseinvestingSix"
                      aria-expanded="false"
                      aria-controls="collapseinvestingSix"
                    >
                      How do I investing investing in Revest?
                    </button>
                  </h5>
                  <div
                    id="collapseinvestingSix"
                    className="accordion-collapse collapse"
                    aria-labelledby="headinginvestingSix"
                    data-bs-parent="#accordionExampleinvesting"
                  >
                    <div className="accordion-body">
                      <p className="neutral-top neutral-bottom">
                        combined with a handful of model sentence structures, to
                        generate Lorem Ipsum which looks reasonable. The
                        generated Lorem Ipsum is therefore always free from
                        repetition, injected humour, or
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="faq__tab__content" id="security">
            <div className="faq__group">
              <div className="accordion" id="accordionExamplesecurity">
                <div className="accordion-item content__space">
                  <h5 className="accordion-header" id="headingsecurityOne">
                    <span className="icon_box">
                      <img
                        src={require("../assets/images/icons/message.png")}
                        alt="security"
                      />
                    </span>
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapsesecurityOne"
                      aria-expanded="true"
                      aria-controls="collapsesecurityOne"
                    >
                      What is Revest?
                    </button>
                  </h5>
                  <div
                    id="collapsesecurityOne"
                    className="accordion-collapse collapse show"
                    aria-labelledby="headingsecurityOne"
                    data-bs-parent="#accordionExamplesecurity"
                  >
                    <div className="accordion-body">
                      <p>
                        combined with a handful of model sentence structures, to
                        generate Lorem Ipsum which looks reasonable. The
                        generated Lorem Ipsum is therefore always free from
                        repetition, injected humour, or
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item content__space">
                  <h5 className="accordion-header" id="headingsecurityTwo">
                    <span className="icon_box">
                      <img
                        src={require("../assets/images/icons/message.png")}
                        alt="security"
                      />
                    </span>
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapsesecurityTwo"
                      aria-expanded="false"
                      aria-controls="collapsesecurityTwo"
                    >
                      What are the benefits of security via Revest?
                    </button>
                  </h5>
                  <div
                    id="collapsesecurityTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingsecurityTwo"
                    data-bs-parent="#accordionExamplesecurity"
                  >
                    <div className="accordion-body">
                      <p>
                        combined with a handful of model sentence structures, to
                        generate Lorem Ipsum which looks reasonable. The
                        generated Lorem Ipsum is therefore always free from
                        repetition, injected humour, or
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item content__space">
                  <h5 className="accordion-header" id="headingsecurityThree">
                    <span className="icon_box">
                      <img
                        src={require("../assets/images/icons/message.png")}
                        alt="security"
                      />
                    </span>
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapsesecurityThree"
                      aria-expanded="false"
                      aria-controls="collapsesecurityThree"
                    >
                      What makes Revest different?
                    </button>
                  </h5>
                  <div
                    id="collapsesecurityThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingsecurityThree"
                    data-bs-parent="#accordionExamplesecurity"
                  >
                    <div className="accordion-body">
                      <p>
                        combined with a handful of model sentence structures, to
                        generate Lorem Ipsum which looks reasonable. The
                        generated Lorem Ipsum is therefore always free from
                        repetition, injected humour, or
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item content__space">
                  <h5 className="accordion-header" id="headingsecurityFour">
                    <span className="icon_box">
                      <img
                        src={require("../assets/images/icons/message.png")}
                        alt="security"
                      />
                    </span>
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapsesecurityFour"
                      aria-expanded="false"
                      aria-controls="collapsesecurityFour"
                    >
                      What happens to my investments if Revest goes into
                      bankruptcy?
                    </button>
                  </h5>
                  <div
                    id="collapsesecurityFour"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingsecurityFour"
                    data-bs-parent="#accordionExamplesecurity"
                  >
                    <div className="accordion-body">
                      <p>
                        combined with a handful of model sentence structures, to
                        generate Lorem Ipsum which looks reasonable. The
                        generated Lorem Ipsum is therefore always free from
                        repetition, injected humour, or
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item content__space">
                  <h5 className="accordion-header" id="headingsecurityFive">
                    <span className="icon_box">
                      <img
                        src={require("../assets/images/icons/message.png")}
                        alt="security"
                      />
                    </span>
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapsesecurityFive"
                      aria-expanded="false"
                      aria-controls="collapsesecurityFive"
                    >
                      What regulations apply to Revest?
                    </button>
                  </h5>
                  <div
                    id="collapsesecurityFive"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingsecurityFive"
                    data-bs-parent="#accordionExamplesecurity"
                  >
                    <div className="accordion-body">
                      <p>
                        combined with a handful of model sentence structures, to
                        generate Lorem Ipsum which looks reasonable. The
                        generated Lorem Ipsum is therefore always free from
                        repetition, injected humour, or
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item content__space">
                  <h5 className="accordion-header" id="headingsecuritySix">
                    <span className="icon_box">
                      <img
                        src={require("../assets/images/icons/message.png")}
                        alt="security"
                      />
                    </span>
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapsesecuritySix"
                      aria-expanded="false"
                      aria-controls="collapsesecuritySix"
                    >
                      How do I security security in Revest?
                    </button>
                  </h5>
                  <div
                    id="collapsesecuritySix"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingsecuritySix"
                    data-bs-parent="#accordionExamplesecurity"
                  >
                    <div className="accordion-body">
                      <p className="neutral-top neutral-bottom">
                        combined with a handful of model sentence structures, to
                        generate Lorem Ipsum which looks reasonable. The
                        generated Lorem Ipsum is therefore always free from
                        repetition, injected humour, or
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="faq__tab__content" id="taxes">
            <div className="faq__group">
              <div className="accordion" id="accordionExampletaxes">
                <div className="accordion-item content__space">
                  <h5 className="accordion-header" id="headingtaxesOne">
                    <span className="icon_box">
                      <img src={require("../assets/images/icons/message.png")} alt="taxes" />
                    </span>
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapsetaxesOne"
                      aria-expanded="true"
                      aria-controls="collapsetaxesOne"
                    >
                      What is Revest?
                    </button>
                  </h5>
                  <div
                    id="collapsetaxesOne"
                    className="accordion-collapse collapse show"
                    aria-labelledby="headingtaxesOne"
                    data-bs-parent="#accordionExampletaxes"
                  >
                    <div className="accordion-body">
                      <p>
                        combined with a handful of model sentence structures, to
                        generate Lorem Ipsum which looks reasonable. The
                        generated Lorem Ipsum is therefore always free from
                        repetition, injected humour, or
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item content__space">
                  <h5 className="accordion-header" id="headingtaxesTwo">
                    <span className="icon_box">
                      <img src={require("../assets/images/icons/message.png")} alt="taxes" />
                    </span>
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapsetaxesTwo"
                      aria-expanded="false"
                      aria-controls="collapsetaxesTwo"
                    >
                      What are the benefits of taxes via Revest?
                    </button>
                  </h5>
                  <div
                    id="collapsetaxesTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingtaxesTwo"
                    data-bs-parent="#accordionExampletaxes"
                  >
                    <div className="accordion-body">
                      <p>
                        combined with a handful of model sentence structures, to
                        generate Lorem Ipsum which looks reasonable. The
                        generated Lorem Ipsum is therefore always free from
                        repetition, injected humour, or
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item content__space">
                  <h5 className="accordion-header" id="headingtaxesThree">
                    <span className="icon_box">
                      <img src={require("../assets/images/icons/message.png")} alt="taxes" />
                    </span>
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapsetaxesThree"
                      aria-expanded="false"
                      aria-controls="collapsetaxesThree"
                    >
                      What makes Revest different?
                    </button>
                  </h5>
                  <div
                    id="collapsetaxesThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingtaxesThree"
                    data-bs-parent="#accordionExampletaxes"
                  >
                    <div className="accordion-body">
                      <p>
                        combined with a handful of model sentence structures, to
                        generate Lorem Ipsum which looks reasonable. The
                        generated Lorem Ipsum is therefore always free from
                        repetition, injected humour, or
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item content__space">
                  <h5 className="accordion-header" id="headingtaxesFour">
                    <span className="icon_box">
                      <img src={require("../assets/images/icons/message.png")} alt="taxes" />
                    </span>
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapsetaxesFour"
                      aria-expanded="false"
                      aria-controls="collapsetaxesFour"
                    >
                      What happens to my investments if Revest goes into
                      bankruptcy?
                    </button>
                  </h5>
                  <div
                    id="collapsetaxesFour"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingtaxesFour"
                    data-bs-parent="#accordionExampletaxes"
                  >
                    <div className="accordion-body">
                      <p>
                        combined with a handful of model sentence structures, to
                        generate Lorem Ipsum which looks reasonable. The
                        generated Lorem Ipsum is therefore always free from
                        repetition, injected humour, or
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item content__space">
                  <h5 className="accordion-header" id="headingtaxesFive">
                    <span className="icon_box">
                      <img src={require("../assets/images/icons/message.png")} alt="taxes" />
                    </span>
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapsetaxesFive"
                      aria-expanded="false"
                      aria-controls="collapsetaxesFive"
                    >
                      What regulations apply to Revest?
                    </button>
                  </h5>
                  <div
                    id="collapsetaxesFive"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingtaxesFive"
                    data-bs-parent="#accordionExampletaxes"
                  >
                    <div className="accordion-body">
                      <p>
                        combined with a handful of model sentence structures, to
                        generate Lorem Ipsum which looks reasonable. The
                        generated Lorem Ipsum is therefore always free from
                        repetition, injected humour, or
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item content__space">
                  <h5 className="accordion-header" id="headingtaxesSix">
                    <span className="icon_box">
                      <img src={require("../assets/images/icons/message.png")} alt="taxes" />
                    </span>
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapsetaxesSix"
                      aria-expanded="false"
                      aria-controls="collapsetaxesSix"
                    >
                      How do I taxes taxes in Revest?
                    </button>
                  </h5>
                  <div
                    id="collapsetaxesSix"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingtaxesSix"
                    data-bs-parent="#accordionExampletaxes"
                  >
                    <div className="accordion-body">
                      <p className="neutral-top neutral-bottom">
                        combined with a handful of model sentence structures, to
                        generate Lorem Ipsum which looks reasonable. The
                        generated Lorem Ipsum is therefore always free from
                        repetition, injected humour, or
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Faq;
