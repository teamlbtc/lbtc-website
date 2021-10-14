import React from "react";

import "./App.css";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/homepage/HomePage";
import AboutUS from "./pages/aboutus/AboutUS";
import Gallery from "./pages/gallery/Gallery";
import Gallery2 from "./pages/gallery/Gallery4";
import Gallery3 from "./pages/gallery/Gallery2";
import Gallery4 from "./pages/gallery/Gallery3";
import Events from "./pages/events/Events";
import ContactUS from "./pages/contactus/ContactUS";
import EventDetails from "./pages/events/EventDetails";
import EventDetails2 from "./pages/events/EventDetails2";
import Blog from "./pages/blog/Blog";
import EventDetails3 from "./pages/events/EventDetails3";
import EventDetails4 from "./pages/events/EventDetails4";
import EventDetails5 from "./pages/events/EventDetails5";
import EventDetails6 from "./pages/events/EventDetails6";
import EventDetails7 from "./pages/events/EventDetails7";
import EventDetails8 from "./pages/events/EventDetails8";
import EventDetails9 from "./pages/events/EventDetails9";
import EventDetails10 from "./pages/events/EventDetails10";
import Events3 from "./pages/events/Events3";
import Events4 from "./pages/events/Events4";
import Covid19 from "./pages/covid19/Covid19";
import Events2 from "./pages/events/Events2";
import EventDetails11 from "./pages/events/EventDetails11";
import EventDetails12 from "./pages/events/EventDetails12";
import EventDetails13 from "./pages/events/EventDetails13";
import EventDetails14 from "./pages/events/EventDetails14";
import EventDetails15 from "./pages/events/EventDetails15";
import EventDetails16 from "./pages/events/EventDetails16";
import EventDetails17 from "./pages/events/EventDetails17";
import EventDetails18 from "./pages/events/EventDetails18";
import EventDetails19 from "./pages/events/EventDetails19";
import EventDetails20 from "./pages/events/EventDetails20";
import BlogDetails from "./pages/blog/BlogDetails";
import BlogDetails2 from "./pages/blog/BlogDetails2";
import BlogDetails3 from "./pages/blog/BlogDetails3";
import BlogDetails4 from "./pages/blog/BlogDetails4";
import BlogDetails5 from "./pages/blog/BlogDetails5";
import BlogDetails6 from "./pages/blog/BlogDetails6";
import BlogDetails7 from "./pages/blog/BlogDetails7";
import BlogDetails8 from "./pages/blog/BlogDetails8";
import BlogDetails9 from "./pages/blog/BlogDetails9";
import MainForm from "./pages/forms/MainForm";
import SignUpForm from "./pages/signupform/SignUpForm";
import Finance from "./pages/financial/finance";
import Supporters from "./pages/supporters/supporters";
import Newsletters from "./pages/newsletters/Newsletters";
import Aug2021 from "./pages/newsletters/Aug2021";
import Sept2021 from "./pages/newsletters/Sept2021";

function App() {
  return (
    <Switch>
      <Route exact path="/" render={() => <HomePage></HomePage>}></Route>

      <Route exact path="/about" render={() => <AboutUS></AboutUS>}></Route>

      <Route exact path="/finance" render={() => <Finance></Finance>}></Route>
      <Route
        exact
        path="/newsletters"
        render={() => <Newsletters></Newsletters>}
      ></Route>
      <Route exact path="/naug2021" render={() => <Aug2021></Aug2021>}></Route>
      <Route
        exact
        path="/nsept2021"
        render={() => <Sept2021></Sept2021>}
      ></Route>
      <Route
        exact
        path="/supporters"
        render={() => <Supporters></Supporters>}
      ></Route>

      <Route exact path="/covid19" render={() => <Covid19></Covid19>}></Route>
      <Route
        exact
        path="/contact"
        render={() => <ContactUS></ContactUS>}
      ></Route>

      <Route
        exact
        path="/signupform"
        render={() => <SignUpForm></SignUpForm>}
      ></Route>

      <Route exact path="/gallery" render={() => <Gallery></Gallery>}></Route>

      <Route exact path="/events" render={() => <Events></Events>}></Route>

      <Route exact path="/events2" render={() => <Events2></Events2>}></Route>

      <Route exact path="/events3" render={() => <Events3></Events3>}></Route>

      <Route exact path="/events4" render={() => <Events4></Events4>}></Route>

      <Route
        exact
        path="/events/event-1"
        render={() => <EventDetails></EventDetails>}
      ></Route>

      <Route
        exact
        path="/events/event-2"
        render={() => <EventDetails2></EventDetails2>}
      ></Route>

      <Route
        exact
        path="/events/event-3"
        render={() => <EventDetails3></EventDetails3>}
      ></Route>

      <Route
        exact
        path="/events/event-4"
        render={() => <EventDetails4></EventDetails4>}
      ></Route>

      <Route
        exact
        path="/events/event-5"
        render={() => <EventDetails5></EventDetails5>}
      ></Route>

      <Route
        exact
        path="/events/event-6"
        render={() => <EventDetails6></EventDetails6>}
      ></Route>

      <Route
        exact
        path="/events/event-7"
        render={() => <EventDetails7></EventDetails7>}
      ></Route>

      <Route
        exact
        path="/events/event-8"
        render={() => <EventDetails8></EventDetails8>}
      ></Route>

      <Route
        exact
        path="/events/event-9"
        render={() => <EventDetails9></EventDetails9>}
      ></Route>

      <Route
        exact
        path="/events/event-10"
        render={() => <EventDetails10></EventDetails10>}
      ></Route>

      <Route
        exact
        path="/events/event-11"
        render={() => <EventDetails11></EventDetails11>}
      ></Route>

      <Route
        exact
        path="/events/event-12"
        render={() => <EventDetails12></EventDetails12>}
      ></Route>

      <Route
        exact
        path="/events/event-13"
        render={() => <EventDetails13></EventDetails13>}
      ></Route>

      <Route
        exact
        path="/events/event-14"
        render={() => <EventDetails14></EventDetails14>}
      ></Route>

      <Route
        exact
        path="/events/event-15"
        render={() => <EventDetails15></EventDetails15>}
      ></Route>

      <Route
        exact
        path="/events/event-16"
        render={() => <EventDetails16></EventDetails16>}
      ></Route>

      <Route
        exact
        path="/events/event-17"
        render={() => <EventDetails17></EventDetails17>}
      ></Route>

      <Route
        exact
        path="/events/event-18"
        render={() => <EventDetails18></EventDetails18>}
      ></Route>

      <Route
        exact
        path="/events/event-19"
        render={() => <EventDetails19></EventDetails19>}
      ></Route>

      <Route
        exact
        path="/events/event-20"
        render={() => <EventDetails20></EventDetails20>}
      ></Route>

      <Route exact path="/blog/" render={() => <Blog></Blog>}></Route>

      <Route
        exact
        path="/blog/blog-1"
        render={() => <BlogDetails></BlogDetails>}
      ></Route>

      <Route
        exact
        path="/blog/blog-2"
        render={() => <BlogDetails2></BlogDetails2>}
      ></Route>

      <Route
        exact
        path="/blog/blog-3"
        render={() => <BlogDetails3></BlogDetails3>}
      ></Route>

      <Route
        exact
        path="/blog/blog-4"
        render={() => <BlogDetails4></BlogDetails4>}
      ></Route>

      <Route
        exact
        path="/blog/blog-5"
        render={() => <BlogDetails5></BlogDetails5>}
      ></Route>

      <Route
        exact
        path="/blog/blog-6"
        render={() => <BlogDetails6></BlogDetails6>}
      ></Route>

      <Route
        exact
        path="/blog/blog-7"
        render={() => <BlogDetails7></BlogDetails7>}
      ></Route>

      <Route
        exact
        path="/blog/blog-8"
        render={() => <BlogDetails8></BlogDetails8>}
      ></Route>

      <Route
        exact
        path="/blog/blog-9"
        render={() => <BlogDetails9></BlogDetails9>}
      ></Route>

      <Route exact path="/form" render={() => <MainForm></MainForm>}></Route>

      <Route
        exact
        path="/gallery-2/"
        render={() => <Gallery3></Gallery3>}
      ></Route>
      <Route
        exact
        path="/gallery-1/"
        render={() => <Gallery2></Gallery2>}
      ></Route>
      <Route
        exact
        path="/gallery-3/"
        render={() => <Gallery4></Gallery4>}
      ></Route>
    </Switch>
  );
}

export default App;
