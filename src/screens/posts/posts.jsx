import React, { Suspense, useState, useEffect } from "react";
import GetPosts from "../../services/api_request/get_post";
import { Text_slicer } from "../../utilis/text_slicer";
import ErrorBoundary from "../../utilis/error_boundary";

import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardFooter,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import {
  Link,
  useSearchParams,
  useLoaderData,
  defer,
  Await,
  NavLink,
} from "react-router-dom";
import { MdComment } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
import { CgMoreVerticalO } from "react-icons/cg";
import { base_url } from "../../utilis/apiv1/end_point";

export async function loader({ request }) {
  //   await RequireAuth({ request });
  console.log("calling the fetch logic");
  return defer({ posts: GetPosts() });
}

function Posts() {
  const [searchParams, setsearchParams] = useSearchParams();
  const postFilter = searchParams.get("type");
  const dataPromise = useLoaderData();
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    const storedErrorMessage = localStorage.getItem("errorMessage");
    if (storedErrorMessage) {
      setErrorMessage(storedErrorMessage);
      localStorage.removeItem("errorMessage");
    }
  }, []);

  useEffect(() => {
    if (errorMessage) {
      localStorage.setItem("errorMessage", errorMessage);
    }
  }, [errorMessage]);

  return (
    
    <ErrorBoundary>
      <Suspense
        fallback={
          // <OrbitProgres
          //   variant="bubble-dotted"
          //   color="#32cd32"
          //   size="small"
          //   text=""
          //   textColor=""
          // />
          <h1>loading..</h1>
        }
      >
        <Await resolve={dataPromise.posts}>
          {(posts) => {
            try {
              console.log("inside the return logic");
              const displayedPosts = postFilter
                ? posts.filter((post) => post.Post_type === postFilter)
                : posts;

              function handleSearchParams(key, value) {
                setsearchParams((prevParams) => {
                  const newParams = new URLSearchParams(prevParams);
                  if (value === null) {
                    newParams.delete(key);
                  } else {
                    newParams.set(key, value);
                  }
                  return newParams;
                });
              }
              

              const PostsElement = displayedPosts.map((post) => (
                
                <div className="post_page">
                       
                <MDBCol key={post.id} className="" >
                  <MDBCard className="h-100 post_card">
                  <MDBCardTitle>{post.title}</MDBCardTitle>
                    <MDBCardImage
                      src={`${base_url}storage/${post.post_image}`}
                      alt="..."
                      position="top"
                    />

                    <MDBCardBody>
                    {/* <MDBCardTitle>{post.title}</MDBCardTitle> */}
                      <MDBCardText>
                        {Text_slicer(post.description, 100)}
                        <Link
                          to={`/posts/${post.id}`}
                          state={{
                            search: searchParams.toString(),
                            type: postFilter,
                          }}
                        >
                          Read more
                        </Link>
                      </MDBCardText>
                    </MDBCardBody>

                    <div className="d-flex justify-content-between align-items-center">
                      <div className="d-flex align-items-center">
                        <a href="#!" className="link-muted me-2">
                          <AiOutlineLike size={20} color="grey" />
                          132 You
                        </a>
                        <a href="#!" className="link-muted">
                          <MdComment size={20} color="grey" />
                          15
                        </a>
                      </div>
                    </div>
                  </MDBCard>
                </MDBCol>
                </div>
              ));

              return (
                <div className="content">
                  <div className="main_screen_nav">
                  <h4>taged for you</h4>
                  <NavLink to={"/group"} className="group_header_nav">My Group</NavLink>
                  </div>

                  <MDBRow className="row-cols-1 row-cols-md-3 g-4">
                    {PostsElement}
                  </MDBRow>
                  ;
                </div>
              );
            } 
            catch (error) {
              // Handle the error here
              console.error("An error occurred:", error);
              setErrorMessage(error.message);
              return null;
            }
          }}
        </Await>
      </Suspense>
    </ErrorBoundary>
  );
}

export default Posts;
