import { PostItem } from "../interface/Props";

const resolvedContent = (postsArray: PostItem[]) => {
  return postsArray.reduce((acc: PostItem[], cur: PostItem) => {
    if (Array.isArray(cur.content)) {
      let content = [];

      for (let i = 0; i < cur.content.length; i++) {
        const newContent = {
          hasCollision: true,
          collisionData: {
            collisionSource: cur.id,
            contentIndex: i,
          },
          id: cur.id + "colInx" + i,
          content: cur.content[i],
        };

        content.push(newContent);
      }
      return [...acc, ...content];
    }
    return [...acc, cur];
  }, []);
};

export default resolvedContent;
