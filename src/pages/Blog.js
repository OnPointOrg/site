import React, { Component } from "react";
import DefaultNav from "../components/nav/DefaultNav";
import VerifiedNav from "../components/nav/VerifiedNav";
import BlogGrid from "../components/blog/BlogGrid";
import Footer from "../components/Footer";
import firebase from "firebase";

// import getDocs from "../hooks/ReadArticlesFromFirebase";

class Blog extends Component {
  state = {
    currentNav: <DefaultNav />,
  };

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          currentNav: <VerifiedNav />,
        });
      } else {
        this.setState({
          currentNav: <DefaultNav />,
        });
      }
    });
  };

  render() {
    return (
      <div>
        {this.state.currentNav}
        {/* <BlogTrendingNew /> */}
        <BlogGrid />
        {/* <Button onClick={getDocs}>
          Click Me For Juicy Firebse Data! Members Only!
        </Button> */}
        <Footer />
      </div>
    );
  }
}

export default Blog;
