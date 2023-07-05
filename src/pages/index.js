import React from "react";
import {
  Seo,
} from "gatsby-theme-portfolio-minimal";
import Question from "../../content/sections/questions";
import Q1 from "../../content/sections/q1";
import S1 from "../../content/sections/s1";
import QuestionsHeading from "../../content/sections/q2";
import Q3 from "../../content/sections/q3";
import Q4 from "../../content/sections/q4";
import Feedback from "../../content/sections/feedback";
import Navigation from "../../content/sections/navigation";
import Header from "../../content/sections/header";
import Layout from "../../content/sections/layout";

export default function IndexPage() {
  return (
    <Layout>
      <Seo title="Ashish Kumar" />
      <Navigation />
      <div>
        <Header />
        <QuestionsHeading />
        <Question />
        <Q1 />
        <S1 />
        <Q3 />
        <Q4 />
        <Feedback />
      </div>
    </Layout>
  );
}
