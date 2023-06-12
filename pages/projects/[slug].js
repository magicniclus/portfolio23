import React, { useEffect, useRef, useState, useCallback } from "react";
import { gsap } from "gsap";
import { project } from "../../data/projects";
import { capitalizeFirstLetter } from "../../utils/capitalizeFirstLetter";
import ProjectLayout from "../../components/layout/ProjectLayout";

const Projet = ({ post }) => {
  const titleRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(titleRef.current, { opacity: 0 }, { opacity: 1, duration: 2 });
  }, []);

  return (
    <ProjectLayout bg={post.color} text={post.textColor} all={post}>
      <main
        className="w-screen flex justify-center items-center h-full min-h-[calc(100vh-112px-80px)] px-16"
        style={{ backgroundColor: post.color }}
      >
        <div className="flex flex-col justify-between h-full w-screen">
          <div className="flex justify-between">
            <div className="w-5/12 flex justify-between flex-col">
              <div></div>
              <div>
                <a
                  target="_blank"
                  href={post.url}
                  className="cursor-pointor relative"
                >
                  <img
                    className="w-48 max-h-[250px] object-contain"
                    src={post.logo}
                    alt="logo"
                  />
                </a>
                <ul className="flex mt-5">
                  {post.techno.map((item, index) => (
                    <li
                      className="text-xs"
                      style={{ color: post.textColor }}
                      key={index}
                    >
                      {item}
                      {index !== post.techno.length - 1 ? (
                        <span
                          className="mx-2"
                          style={{ color: post.textColor }}
                        >
                          -
                        </span>
                      ) : null}
                    </li>
                  ))}
                </ul>
              </div>
              <ul className="text-xs" style={{ color: post.textColor }}>
                <li className="mt-1">
                  A <span className="mx-2"></span> STATUS: {post.status}
                </li>
                <li className="mt-1">
                  B <span className="mx-2"></span> COMPLETED: {post.years}
                </li>
                <li className="mt-1">
                  C <span className="mx-2"></span> ROLE: {post.role}
                </li>
                <li className="mt-1">
                  D <span className="mx-2"></span> CLIENT: {post.client}
                </li>
              </ul>
            </div>
            <div className="w-6/12 flex justify-end items-end">
              <div className="relative">
                <img src={post.desktop} className="rounded-xl shadow-md" />
                <a
                  target="_blank"
                  href={post.url}
                  className="absolute bottom-5 right-5"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                    style={{ color: post.textColor }}
                  >
                    <path
                      fillRule="evenodd"
                      d="M15.75 2.25H21a.75.75 0 01.75.75v5.25a.75.75 0 01-1.5 0V4.81L8.03 17.03a.75.75 0 01-1.06-1.06L19.19 3.75h-3.44a.75.75 0 010-1.5zm-10.5 4.5a1.5 1.5 0 00-1.5 1.5v10.5a1.5 1.5 0 001.5 1.5h10.5a1.5 1.5 0 001.5-1.5V10.5a.75.75 0 011.5 0v8.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V8.25a3 3 0 013-3h8.25a.75.75 0 010 1.5H5.25z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
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
