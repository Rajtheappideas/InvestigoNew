import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faArrowCircleRight,
} from "@fortawesome/free-solid-svg-icons";

const BlogOverview = ({ blogs, loading }) => {
  return (
    <section className="blog__overview section__space">
      <div className="container">
        <div className="blog__overview__area">
          <div className="search__bar">
            <h2>Articles &amp; Resources</h2>
            <form action="#" method="post">
              <div>
                <input
                  type="text"
                  name="post_search"
                  id="postSearch"
                  placeholder="Search for articles"
                  required="required"
                />
                <i className="fa-solid fa-magnifying-glass"></i>
              </div>
              <button type="submit" className="button">
                Search
              </button>
            </form>
          </div>
          {blogs.length === 0 ? (
            <div className="row">
              <div className="col-lg-7">loading...</div>
              <div className="col-lg-5">loading...</div>
            </div>
          ) : (
            <div className="row">
              <div className="col-lg-7">
                <div className="featured__large__post">
                  <a
                    href={`/singleblog/${blogs[0]?._id}`}
                    className="thumbnail"
                  >
                    <img
                      src={`https://investigo-tai.herokuapp.com/${blogs[0].image}                          `}
                      alt={blogs[0].title}
                    />
                  </a>
                  <div className="blog__content">
                    <h4>
                      <a href={`/singleblog/${blogs[0]?._id}`}>
                        {!loading && blogs[0].title}
                      </a>
                    </h4>
                    <p>{blogs[0].description}</p>
                    <a href={`/singleblog/${blogs[0]?._id}`}>
                      Read More <FontAwesomeIcon icon={faArrowCircleRight} />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-5">
                {blogs.slice(1, 5).map((blog) => (
                  <div className="featured__post" key={blog._id}>
                    <div className="featured__post-single">
                      <a
                        href={`/singleblog/${blog?._id}`}
                        className="thumbnail"
                      >
                        <img
                          src={`https://investigo-tai.herokuapp.com/${blog?.image}                          `}
                          alt={blog?.title}
                        />
                      </a>
                      <div className="featured__post-single-content">
                        <h5>
                          <a href={`/singleblog/${blog?._id}`}>{blog?.title}</a>
                        </h5>
                        <a href={`/singleblog/${blog?._id}`}>
                          Read More{" "}
                          <FontAwesomeIcon icon={faArrowCircleRight} />
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default BlogOverview;
