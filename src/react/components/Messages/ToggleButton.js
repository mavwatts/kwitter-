import React from "react";
import { Rating } from "semantic-ui-react";
import { useDispatch } from "react-redux";
import { receiveMessages } from "../../../redux";

const RatingExampleHeart = ({ id, likeId }) => {
  const likesURL = `https://kwitter-api.herokuapp.com/likes`;
  const dispatch = useDispatch();

  const onratechange = async () => {
    console.log("clicked");
    const storedAuthToken =
      JSON.parse(localStorage?.getItem("login"))?.result?.token ?? undefined;
    const storedName =
      JSON.parse(localStorage?.getItem("login"))?.result?.username ?? undefined;

    for (const like of likeId) {
      console.log(like.username);
      if (like.username === storedName) {
        console.log(storedName + "likes this message");
        console.log(like.id);
        try {
          const response = await fetch(likesURL + `/${like.id}`, {
            method: "Delete",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + storedAuthToken
            }
          });
          const data = await response.json();
          console.log(data);
          dispatch(receiveMessages());
          return;
        } catch (err) {
          console.error(err.name);
          console.error(err.message);
        }
      }
    }

    try {
      const response = await fetch(likesURL, {
        method: "Post",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + storedAuthToken
        },
        body: JSON.stringify({ messageId: id })
      });
      const data = await response.json();
      console.log(data);

      if (data.message === "Like already exists") {
        console.log("message already liked");
      }

      dispatch(receiveMessages());
    } catch (error) {
      console.error(error.name);
      console.error(error.message);
    }
  };

  return (
    <Rating
      onRate={onratechange}
      icon="heart"
      defaultRating={0}
      maxRating={1}
    />
  );
};

export default RatingExampleHeart;
