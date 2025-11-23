import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Exhibitions from "./pages/Exhibitions";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Artwork from "./pages/Artwork";
import Namedropping from "./pages/Namedropping";
import ExtravertedPaintings from "./pages/Extraverted-paintings";
import WatchToEarn from "./pages/Watch-to-earn";
import MadameBovary from "./pages/Madame-Bovary";
import LaCapitaleVolII from "./pages/La-capitale-vol-II";
import LaCapitale from "./pages/La-capitale";
import AuBordDeLAgeAdulte from "./pages/Au-bord-de-l-age-adulte";
import LeVingtiemePrix from "./pages/Le-Vingtieme-Prix";


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/artwork/:id" element={<Artwork />} />
          <Route path="/exhibitions" element={<Exhibitions />} />
          <Route path="/exhibitions/Namedropping" element={<Namedropping />} />
          <Route path="/exhibitions/Extraverted-paintings" element={<ExtravertedPaintings />} />
          <Route path="/exhibitions/Watch-to-earn" element={<WatchToEarn />} />
          <Route path="/exhibitions/Madame-Bovary" element={<MadameBovary />} />
          <Route path="/exhibitions/La-capitale-vol-II" element={<LaCapitaleVolII />} />
          <Route path="/exhibitions/La-capitale" element={<LaCapitale />} />
          <Route path="/exhibitions/Au-bord-de-l-age-adulte" element={<AuBordDeLAgeAdulte />} />
          <Route path="/exhibitions/Le-Vingtieme-Prix" element={<LeVingtiemePrix />} />
          <Route path="/about" element={<About />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
          
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
