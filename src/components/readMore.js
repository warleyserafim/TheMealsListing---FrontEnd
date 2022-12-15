import { Button } from "antd";
import React, { useState } from "react";

const ReadMore = ({ text }) => {
  const [isTruncated, setIsTruncated] = useState(true);

  const toggleIsTruncated = () => {
    setIsTruncated(!isTruncated);
  };

  return (
    <div>
      {isTruncated ? text.slice(0, 150) + "..." : text}
      <span onClick={toggleIsTruncated} className="read-more">
        {isTruncated ? (
          <Button type="link">Ver Mais</Button>
        ) : (
          <Button type="link">Ver Menos</Button>
        )}
      </span>
    </div>
  );
};

export default ReadMore;
