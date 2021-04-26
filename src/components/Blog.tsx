import React, { useState, useEffect } from "react";

import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

import { PostItem, Wrapper } from ".";
import { graphql, useStaticQuery } from "gatsby";

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

// const POSTS = [
//   {
//     id: "1",
//     title: "Post #1",
//     description: `The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy veldt fox.`,
//   },
//   {
//     id: "2",
//     title: "Post #2",
//     description: `The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps.`,
//   },
//   {
//     id: "3",
//     title: "Post #3",
//     description: `The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex!`,
//   },
// ];

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

const parsePost = (data: any): PostItem[] => {
  return data.nodes.map((singlePost) => ({
    description: singlePost.description.description,
    id: singlePost.id,
    title: singlePost.title,
    readMore: singlePost.readMore,
  }));
};

const Blog: React.FC = () => {
  const [[index, direction], setIndex] = useState<number[]>([0, 0]);
  const [items, setItems] = useState<PostItem[]>();

  const handlePaginationClick = (newIndex: number) =>
    setIndex((curIndex) => [
      newIndex > items.length
        ? 0
        : newIndex === -1
        ? items.length - 1
        : newIndex === items.length
        ? 0
        : newIndex,
      curIndex[0] > newIndex ? -1 : 1,
    ]);

  const data = useStaticQuery(graphql`
    {
      allContentfulBlogPostMinified(limit: 4, sort: { fields: createdAt }) {
        nodes {
          id
          title
          description {
            description
          }
          readMore
        }
      }
    }
  `);

  useEffect(() => {
    setItems(parsePost(data.allContentfulBlogPostMinified));
  }, [data]);

  if (items)
    return (
      <Wrapper id="articles">
        <BlogContainer>
          <PostsContainer custom={direction} initial={false}>
            <div style={{ position: "relative", height: 150 }}>
              <PostContainer
                drag="x"
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(_, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);

                  if (swipe < -swipeConfidenceThreshold) {
                    handlePaginationClick(index + 1);
                  } else if (swipe > swipeConfidenceThreshold) {
                    handlePaginationClick(index - 1);
                  }
                }}
                key={items[index].id}
                style={{ color: "#fff" }}
              >
                <PostHeading>{items[index].title}</PostHeading>
                <PostDescription>{items[index].description}</PostDescription>
                <PostReadMore href={items[index].readMore} target="_blank">
                  Leggi di pi&ugrave;...
                </PostReadMore>
              </PostContainer>
            </div>
            <ButtonsContainer>
              {[...new Array(items.length)].map((_, curIndex) => (
                <BlogPageButton
                  style={{
                    backgroundColor:
                      index !== curIndex
                        ? "rgba(255, 255, 255, 0.5)"
                        : "rgb(255, 255, 255)",
                  }}
                  disabled={curIndex === index}
                  onClick={() => handlePaginationClick(curIndex)}
                />
              ))}
            </ButtonsContainer>
          </PostsContainer>
        </BlogContainer>
      </Wrapper>
    );

  return <div></div>;
};

export default Blog;

const BlogContainer = styled.div`
  display: grid;

  gap: 4rem;
`;

const PostsContainer = styled(AnimatePresence)`
  display: grid;
  gap: 1.4rem;
`;

const PostContainer = styled(motion.div)`
  width: 100%;
  height: 120px;

  display: grid;
  gap: 1rem;

  position: absolute;
  top: 0;
  left: 0;

  cursor: grab;

  :active {
    cursor: grabbing;
  }
`;

const PostHeading = styled.h3`
  font-size: 1.2rem;
  font-weight: 700;
`;

const PostDescription = styled.div`
  font-size: 1rem;
`;

const PostReadMore = styled.a`
  font-size: 0.8rem;
  justify-self: flex-end;

  color: white;
  cursor: pointer;
`;

const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  *:not(:first-child) {
    margin-left: 0.3rem;
  }
`;

const BlogPageButton = styled.button`
  width: 0.8rem;
  height: 0.8rem;

  border-radius: 50%;
  border: none;
  padding: 0;

  cursor: pointer;
`;
