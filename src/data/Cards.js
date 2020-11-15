import React from "react";
import ParentCard from "./ParentCard";
// import poligondata from "./poligondata";

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

export default function cards() {
  console.log(poligondata);
  return <>{poligondata.map(renderCard)}</>;
}
