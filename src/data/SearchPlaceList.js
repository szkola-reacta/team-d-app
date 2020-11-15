import React, { useState } from "react";
import ParentCard from "./ParentCard";
// import poligondata from "./poligondata";

export default function SearchPlaceList() {
  const poligondata = [
    {
      id: 1,
      imageurl: "/assets/obr01.jpg",
      title: "wycieczka po Gdańsku",
      description: `"Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Suspendisse ut enim faucibus, ultricies lacus eget, venenatis arcu. 
                Nunc tincidunt blandit felis, eget rhoncus diam blandit ac. 
                Etiam volutpat leo aliquam ex finibus, vel aliquet sapien fermentum.
                 Nam nunc libero, porttitor eget dui at, porttitor dapibus arcu. V
                 estibulum consectetur non tellus a vestibulum. 
                 Quisque elementum risus non sem consectetur pharetra. 
                 Suspendisse iaculis mi a nunc varius tristique. 
                 Phasellus a massa tortor. Fusce suscipit arcu neque, 
                 ac pulvinar dolor tincidunt non. 
                 Nunc fringilla lacus at elementum tincidunt. 
                 Mauris sed enim est. Duis convallis aliquam metus, 
                 sed convallis odio facilisis id. P
                 ellentesque facilisis nisl vestibulum lacus mattis faucibus. 
                 Maecenas posuere erat vitae purus iaculis, nec pulvinar justo tincidunt. 
                 Pellentesque pharetra sapien a quam iaculis pulvinar."`,

      tags: "Gdańsk wycieczka motława statek fujifilm",
      atractions: "trza cos wymyslic",
    },
    {
      id: 2,
      imageurl: "/assets/obr02.jpg",
      title: "zachód nad zatoką gdańska",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ut enim faucibus, ultricies lacus eget, venenatis arcu. Nunc tincidunt blandit felis, eget rhoncus diam blandit ac. Etiam volutpat leo aliquam ex finibus, vel aliquet sapien fermentum. Nam nunc libero, porttitor eget dui at, porttitor dapibus arcu. Vestibulum consectetur non tellus a vestibulum. Quisque elementum risus non sem consectetur pharetra. Suspendisse iaculis mi a nunc varius tristique. Phasellus a massa tortor. Fusce suscipit arcu neque, ac pulvinar dolor tincidunt non. Nunc fringilla lacus at elementum tincidunt. Mauris sed enim est. Duis convallis aliquam metus, sed convallis odio facilisis id. Pellentesque facilisis nisl vestibulum lacus mattis faucibus. Maecenas posuere erat vitae purus iaculis, nec pulvinar justo tincidunt. Pellentesque pharetra sapien a quam iaculis pulvinar.",
      tags: "Gdańsk morze zachód woda chmurki fujifilm",
      atractions: "trza cos wymyslic2",
    },
    {
      id: 3,
      imageurl: "/assets/obr03.jpg",
      title: "motyle zatoka pucka",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ut enim faucibus, ultricies lacus eget, venenatis arcu. Nunc tincidunt blandit felis, eget rhoncus diam blandit ac. Etiam volutpat leo aliquam ex finibus, vel aliquet sapien fermentum. Nam nunc libero, porttitor eget dui at, porttitor dapibus arcu. Vestibulum consectetur non tellus a vestibulum. Quisque elementum risus non sem consectetur pharetra. Suspendisse iaculis mi a nunc varius tristique. Phasellus a massa tortor. Fusce suscipit arcu neque, ac pulvinar dolor tincidunt non. Nunc fringilla lacus at elementum tincidunt. Mauris sed enim est. Duis convallis aliquam metus, sed convallis odio facilisis id. Pellentesque facilisis nisl vestibulum lacus mattis faucibus. Maecenas posuere erat vitae purus iaculis, nec pulvinar justo tincidunt. Pellentesque pharetra sapien a quam iaculis pulvinar.",
      tags: "Puck zatoka wiatr motyle fujifilm",
      atractions: "trza cos wymyslic3",
    },
  ];

  // console.log(filterData);

  const [searchText, setSearchText] = useState("");
  const [data, setData] = useState(poligondata);

  // exclude column list from filter
  const excludeColumns = ["id"];

  // handle change event of search input
  const handleChange = (value) => {
    setSearchText(value);
    filterData(value);
  };

  // filter records by search text
  const filterData = (value) => {
    const lowercasedValue = value.toLowerCase().trim();
    if (lowercasedValue === "") setData(poligondata);
    else {
      const filteredData = poligondata.filter((item) => {
        return Object.keys(item).some((key) =>
          excludeColumns.includes(key)
            ? false
            : item[key].toString().toLowerCase().includes(lowercasedValue)
        );
      });
      setData(filteredData);
    }
  };

  const renderCard = (card, id) => {
    console.log(card.title);
    return (
      <ParentCard
        key={id}
        title={card.title}
        description={card.description}
        imgurl={card.imageurl}
      ></ParentCard>
    );
  };

  return (
    <>
      <div>
        Search:{" "}
        <input
          style={{ marginLeft: 5 }}
          type="text"
          placeholder="Type to search..."
          value={searchText}
          onChange={(e) => handleChange(e.target.value)}
        />
        {data.map(renderCard)}
      </div>
    </>
  );
}
