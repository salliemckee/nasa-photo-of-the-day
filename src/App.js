import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import NasaPhoto from "./Components/NasaPhoto";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=fYTAhhRocLSNHwZu562ODaesWcgefHt9K2jdcQtW"
      )
      .then((resp) => {
        setData(resp.data);
      })
      .catch((err) => console.error(err));
  }, []);
  return <div className="App">{data && <NasaPhoto photo={data} />}</div>;
}

export default App;

//https://api.nasa.gov/planetary/apod?api_key=fYTAhhRocLSNHwZu562ODaesWcgefHt9K2jdcQtW

// copyright: "Hawk Wolinski"
// date: "2022-02-16"
// explanation: "What's that on the Sun? Although it may look like a flowing version of the Eiffel Tower, it is a solar prominence that is actually much bigger -- about the height of Jupiter. The huge prominence emerged about ten days ago, hovered over the Sun's surface for about two days, and then erupted -- throwing a coronal mass ejection (CME) into the Solar System. The featured video, captured from the astrophotographer's backyard in Hendersonville, Tennessee, USA, shows an hour time-lapse played both forwards and backwards. That CME did not impact the Earth, but our Sun had unleashed  other recent CMEs that not only triggered Earthly auroras, but puffed out the Earth's atmosphere enough to cause just-launched Starlink satellites to fall back. Activity on the Sun, including sunspots, prominences, CMEs and flares, continues to increase as the Sun evolves away from a deep minimum in its 11-year magnetic cycle.   Birthday Surprise: What picture did APOD feature on your birthday? (post 1995)"
// media_type: "video"
// service_version: "v1"
// title: "Eiffel Tower Prominence on the Sun"
// url: "https://www.youtube.com/embed/liapnqj9GDc?rel=0"

// copyright: "Robert Eder"
// date: "2022-02-17"
// explanation: "Dark markings and bright nebulae in this telescopic southern sky view are telltale signs of young stars and active star formation. They lie a mere 650 light-years away, at the boundary of the local bubble and the Chamaeleon molecular cloud complex. Regions with young stars identified as dusty reflection nebulae from the 1946 Cederblad catalog include the C-shaped Ced 110 just above and left of center, and bluish Ced 111 below it. Also a standout in the frame, the orange tinted V-shape of the Chamaeleon Infrared Nebula (Cha IRN) was carved by material streaming from a newly formed low-mass star.  The well-composed image spans 1.5 degrees. That's about 17 light-years at the estimated distance of the nearby Chamaeleon I molecular cloud."
// hdurl: "https://apod.nasa.gov/apod/image/2202/Chamaeleon_RobertEder.jpg"
// media_type: "image"
// service_version: "v1"
// title: "Chamaeleon I Molecular Cloud"
// url: "https://apod.nasa.gov/apod/image/2202/Chamaeleon_RobertEder1024.jpg"
