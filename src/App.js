import React from "react";
// import SearchForm from "./Components/SearchForm";
import "./App.css";
import Gallery from "./Components/Gallery";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      {/* <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Poppins:wght@200&family=Roboto+Condensed:wght@700&display=swap');
      </style> */}

      <Gallery />
    </ChakraProvider>
  );
}

export default App;
