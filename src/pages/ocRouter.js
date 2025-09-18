import React from "react";
import { Routes, Route } from "react-router-dom";
import OcHome from "./Home";
import OcPlan from "./Plan";
import OcVideo from "./Video";
import OcPhoto from "./Photo";
import OcIoTPhoto from "./ocIoTPhoto";
import OcMarketPhoto from "./ocMarketPhoto";
import OcSixturtlePhoto from "./ocSixturtlePhoto";
import OcNanlongPhoto from "./ocNanlongPhoto";
import OcMeinongPhoto from "./ocMeinongPhoto";
import OcMember from "./Member";
import { OcError404 } from './404';

function OcRouter() {
  return (
    <Routes >
      <Route path="/" element={<OcHome />} />
      <Route path="/ocHome" element={<OcHome />} />
      <Route path="/ocPlan" element={<OcPlan />} />
      <Route path="/ocVideo" element={<OcVideo />} />
      <Route path="/ocPhoto" element={<OcPhoto />} />
      <Route path="/ocIoTPhoto" element={<OcIoTPhoto />} />
      <Route path="/ocMarketPhoto" element={<OcMarketPhoto />} />
      <Route path="/ocSixturtlePhoto" element={<OcSixturtlePhoto />} />
      <Route path="/ocMeinongPhoto" element={<OcMeinongPhoto />} />
      <Route path="/ocNanlongPhoto" element={<OcNanlongPhoto />} />
      <Route path="/ocMember" element={<OcMember />} />
      <Route path="/*" element={<OcError404 />} />
    </Routes>
  );
}

export default OcRouter;
