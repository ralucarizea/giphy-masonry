import React, { useState, useEffect } from "react";
import GalleryItem from "./GalleryItem";
import "./Gallery.css";
import Loading from "./Loading";
import randomWords from "random-words";
import { Input, Button, Grid } from "@chakra-ui/react";

let random = randomWords();
const Gallery = () => {
  const [results, setResults] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=NBNMgpv4VDeVMgcb0f6FMBSxgu4CnaXB&rating=g&q=${random}&limit=8`
    )
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        return setResults(res.data);
      })
      .then(() => setLoading(false))
      .catch(console.error);
  }, []);

  // displaying random images after the first rendering of the page (or after refreshing the page)

  // useEffect(() => {
  //     console.log(results)
  //  }, [results])

  const imageFetchHandler = (event) => {
    event.preventDefault();
    setLoading(true);
    fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=NBNMgpv4VDeVMgcb0f6FMBSxgu4CnaXB&rating=g&q=${input}&limit=8`
    )
      .then((res) => res.json())

      .then((res) => setResults(res.data))
      .then(() => setLoading(false))
      .catch(console.error);
  };

  return (
    <>
      <nav>
        <h1 className="form-title"> Fill me with... </h1>
        <form onSubmit={imageFetchHandler} className="form">
          {/* <input
            type="text"
            placeholder={random}
            value={input}
            onChange={(e) => setInput(e.target.value)}
          /> */}
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={random}
            size="sm"
          />
          <Button type="submit" colorScheme="teal" size="sm">
            Search
          </Button>
        </form>
      </nav>
      {loading ? (
        <Loading />
      ) : (
        <Grid
          // spacing={4}
          // templateColumns="repeat(auto-fill, minmax(400px, 1fr))"
          // autoFlow="row"
          // w={100 + "vw"}
          // autoColumns={"auto"}
          // autoRows={"auto"}
          gap={1+"rem"}
          templateColumns="repeat(auto-fit, minmax(240px, 1fr))"
          autoRows={240+"px"}
        >
          {results?.map((object) => (
            <GalleryItem
              src={object.images.original.url}
              key={object.id}
              width={object.images.original.width}
              height={object.images.original.height}
            />
          ))}
        </Grid>
      )}
    </>
  );
};
export default Gallery;
