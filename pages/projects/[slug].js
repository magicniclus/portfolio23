import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { project } from "../../data/projects";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import ProjectLayout from "../../components/layout/ProjectLayout";
import { useSelector } from "react-redux";

const Projet = ({ post }) => {
  const titleRef = useRef(null);
  const logoRef = useRef(null);
  const desktopRef = useRef(null);
  const technoRef = useRef(null);
  const statusRef = useRef(null);
  const yearsRef = useRef(null);
  const roleRef = useRef(null);
  const clientRef = useRef(null);

  const state = useSelector((state) => state);

  useEffect(() => {
    const timeline = gsap.timeline({
      defaults: { duration: 0.3, ease: "power4.out" },
    });

    timeline
      .fromTo(titleRef.current, { opacity: 0 }, { opacity: 1 })
      .fromTo(logoRef.current, { y: 50, opacity: 0 }, { y: 0, opacity: 1 })
      .fromTo(
        technoRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1 },
        "-=0.2"
      )
      .fromTo(
        statusRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1 },
        "-=0.2"
      )
      .fromTo(
        yearsRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1 },
        "-=0.2"
      )
      .fromTo(
        roleRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1 },
        "-=0.2"
      )
      .fromTo(
        clientRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1 },
        "-=0.2"
      )
      .fromTo(desktopRef.current, { opacity: 0 }, { opacity: 1, duration: 2 });
  }, []);

  useEffect(() => {
    if (state.changePage) {
      gsap.fromTo(titleRef.current, { opacity: 1 }, { opacity: 0 });
      gsap.fromTo(logoRef.current, { y: 0, opacity: 1 }, { y: 50, opacity: 0 });
      gsap.fromTo(
        technoRef.current,
        { y: 0, opacity: 1 },
        { y: 50, opacity: 0 }
      );
      gsap.fromTo(
        statusRef.current,
        { y: 0, opacity: 1 },
        { y: 50, opacity: 0 }
      );
      gsap.fromTo(
        yearsRef.current,
        { y: 0, opacity: 1 },
        { y: 50, opacity: 0 }
      );
      gsap.fromTo(roleRef.current, { y: 0, opacity: 1 }, { y: 50, opacity: 0 });
      gsap.fromTo(
        clientRef.current,
        { y: 0, opacity: 1 },
        { y: 50, opacity: 0 }
      );
      gsap.fromTo(desktopRef.current, { opacity: 1 }, { opacity: 0 });
    } else null;
  }, [state.changePage]);

  return (
    <ProjectLayout
      all={post}
      title={`Nicolas | ${post.title}`}
      bg={post.color}
      text={post.textColor}
    >
      <main
        className="w-screen flex justify-center items-center h-full min-h-[calc(100vh-112px-80px)]  px-3 md:px-16"
        style={{ backgroundColor: post.color }}
      >
        <div className="flex md:flex-row flex-col justify-between">
          <div className="md:w-5/12 hidden md:flex justify-between flex-col">
            <div></div>
            <div className="overflow-hidden">
              <a
                target="_blank"
                href={post.url ? post.url : null}
                className="cursor-pointor relative overflow-hidden"
              >
                <img
                  className="w-48 max-h-[250px] object-contain opacity-0 translate-y-96"
                  src={post.logo}
                  alt="logo"
                  ref={logoRef}
                />
              </a>
              <div className="flex items-end mt-5 overflow-hidden">
                <ul className="flex opacity-0" ref={technoRef}>
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
                {post.url ? (
                  <a href={post.url} target="_blank">
                    <ArrowUpRightIcon
                      className="w-4 h-4 ml-4"
                      style={{ color: post.textColor }}
                    />
                  </a>
                ) : null}
              </div>
            </div>
            <ul
              className="text-xs overflow-hidden"
              style={{ color: post.textColor }}
            >
              <li ref={statusRef} className="mt-1 opacity-0 ">
                <div className=" overflow-hidden">
                  A <span className="mx-2"></span> STATUS: {post.status}
                </div>
              </li>
              <li ref={yearsRef} className="mt-1 ">
                <div className=" overflow-hidden">
                  B <span className="mx-2"></span> COMPLETED: {post.years}
                </div>
              </li>
              <li ref={roleRef} className="mt-1 ">
                <div className=" overflow-hidden">
                  C <span className="mx-2"></span> ROLE: {post.role}
                </div>
              </li>
              <li ref={clientRef} className="mt-1 ">
                <div className=" overflow-hidden">
                  D <span className="mx-2"></span> CLIENT: {post.client}
                </div>
              </li>
            </ul>
          </div>
          <div className="md:hidden flex flex-col mb-10">
            {" "}
            <a
              target="_blank"
              href={post.url ? post.url : null}
              className="cursor-pointor relative overflow-hidden flex items-end "
            >
              <img
                className="w-48 max-h-[250px] max-w-[50vw] object-contain opacity-1 "
                src={post.logo}
                alt="logo"
              />
              <ArrowUpRightIcon
                className="w-4 h-4 ml-4 mb-2"
                style={{ color: post.textColor }}
              />
            </a>
            <ul
              className="text-xs overflow-hidden mt-5"
              style={{ color: post.textColor }}
            >
              <li className="mt-1 opacity-1 ">
                <div className=" overflow-hidden">
                  A <span className="mx-2"></span> STATUS: {post.status}
                </div>
              </li>
              <li className="mt-1 ">
                <div className=" overflow-hidden">
                  B <span className="mx-2"></span> COMPLETED: {post.years}
                </div>
              </li>
              <li className="mt-1 ">
                <div className=" overflow-hidden">
                  C <span className="mx-2"></span> ROLE: {post.role}
                </div>
              </li>
              <li className="mt-1 ">
                <div className=" overflow-hidden">
                  D <span className="mx-2"></span> CLIENT: {post.client}
                </div>
              </li>
            </ul>
          </div>
          <div className="md:w-6/12 w-full flex justify-end items-end">
            <div className="relative overflow-hidden">
              <img
                ref={desktopRef}
                src={post.desktop}
                className="rounded-xl shadow-md opacity-0"
              />
              <a
                target="_blank"
                href={post.url ? post.url : null}
                className="absolute bottom-5 right-5"
                style={{ display: post.url ? "block" : "none" }}
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
                    style={{ color: post.textColor }}
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </main>
    </ProjectLayout>
  );
};

export async function getStaticPaths() {
  const paths = project.map((project) => ({
    params: { slug: project.title },
  }));

  console.log(paths); // Log the paths to the console

  return { paths, fallback: false };
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
