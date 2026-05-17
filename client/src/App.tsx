import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import ScrollToTop from "./components/ScrollToTop";
import { ThemeProvider } from "./contexts/ThemeContext";

// Main pages
import Home from "./pages/Home";
import About from "./pages/About";
import Podcast from "./pages/Podcast";
import Speaking from "./pages/Speaking";
import Reflections from "./pages/Reflections";
import MediaKit from "./pages/MediaKit";
import Contact from "./pages/Contact";

// Audience landing pages
import ForWomenOfFaith from "./pages/ForWomenOfFaith";
import ForPodcastFans from "./pages/ForPodcastFans";
import ForEventPlanners from "./pages/ForEventPlanners";
import ForMediaPress from "./pages/ForMediaPress";
import ForWomenInTransition from "./pages/ForWomenInTransition";
import ForFriendsAndFamily from "./pages/ForFriendsAndFamily";
import ForFaithCommunities from "./pages/ForFaithCommunities";

function Router() {
  return (
    <Switch>
      {/* Main pages */}
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/podcast" component={Podcast} />
      <Route path="/speaking" component={Speaking} />
      <Route path="/reflections" component={Reflections} />
      <Route path="/media-kit" component={MediaKit} />
      <Route path="/contact" component={Contact} />

      {/* Audience landing pages */}
      <Route path="/for-women-of-faith" component={ForWomenOfFaith} />
      <Route path="/for-podcast-fans" component={ForPodcastFans} />
      <Route path="/for-event-planners" component={ForEventPlanners} />
      <Route path="/for-media-press" component={ForMediaPress} />
      <Route path="/for-women-in-transition" component={ForWomenInTransition} />
      <Route path="/for-friends-and-family" component={ForFriendsAndFamily} />
      <Route path="/for-faith-communities" component={ForFaithCommunities} />

      {/* 404 */}
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster />
          <ScrollToTop />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
