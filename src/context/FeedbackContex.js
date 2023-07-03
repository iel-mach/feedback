import { createContext, useState } from "react";

const FeedbackContex = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: "this is iteam from context",
      rating: 10,
    },
  ]);
  return (
    <FeedbackContex.Provider
      value={{
        feedback,
      }}
    >
      {children}
    </FeedbackContex.Provider>
  );
};

export default FeedbackContex;
