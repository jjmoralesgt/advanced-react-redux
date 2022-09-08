/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import {Routes, Route } from "react-router-dom";
import CommentBox from "components/CommentBox";
import CommentList from "components/CommentList";

export default () => {
  return (
    <div>      
        <Routes>
          <Route path="/post" element={<CommentBox />} />
          <Route path="/*" element={<CommentList />} />
        </Routes>      
    </div>
  );
};
