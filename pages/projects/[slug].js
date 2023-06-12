import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { gsap } from "gsap";
import { project } from "../../data/projects";
import { capitalizeFirstLetter } from "../../utils/capitalizeFirstLetter";
import ProjectLayout from "../../components/layout/ProjectLayout";

const Projet = ({ post }) => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const titleRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(titleRef.current, { opacity: 0 }, { opacity: 1, duration: 2 });
  }, []);

  return (
    <ProjectLayout bg={post.color} text={post.textColor}>
      <main
        className="w-screen flex justify-center items-center min-h-[calc(100vh-112px-80px)]"
        style={{ backgroundColor: post.color }}
      >
        <div className="flex flex-col">
          <a href="/" className="flex items-center flex-col">
            <h1
              ref={titleRef}
              className="text-xs text-center font-bold"
              style={{ color: post.textColor }}
            >
              {capitalizeFirstLetter(post.title)}
            </h1>
            <div
              className={`w-4 h-0.5 rotate-90 mt-3`}
              style={{ backgroundColor: post.textColor }}
            ></div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill={post.textColor}
              className="w-4 h-4 mt-3"
            >
              <path
                fillRule="evenodd"
                d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </a>
          <div></div>
        </div>
      </main>
    </ProjectLayout>
  );
};

export async function getStaticPaths() {
  const paths = project.map((post) => ({
    params: { slug: post.title },
  }));

  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const post = project.find((post) => post.title === params.slug);

  return {
    props: {
      post,
    },
    revalidate: 1,
  };
}

export default Projet;
