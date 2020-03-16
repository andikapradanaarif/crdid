import React from "react";
import { FooterWrapper } from "./style";
import { CenterLayout, RowWrapper } from "../";
import img from "../../assets/img";
// import { Button } from '../';

const Index = () => {
  const contributor = [
    {
      image: img.arif,
      link: "https://www.instagram.com/andikaarfw/"
    },
    {
      image: img.azkar,
      link: "https://www.instagram.com/adzkarfauzie/"
    },
    {
      image: img.phillip,
      link: "https://www.instagram.com/daelypt/"
    },
    {
      image: img.rezka,
      link: "https://www.instagram.com/rezprayudha/"
    }
  ];
  const support = [
    {
      image: img.pcs,
      link: "https://proclubstudio.com/"
    },
    {
      image: img.idch,
      link: "https://idcloudhost.com/"
    }
  ];
  const ImageLink = ({ people }) => {
    return (
      <a href={people.link} target="_blank" rel="noopener noreferrer">
        <img alt="contributor" src={people.image} />
      </a>
    );
  };

  return (
    <FooterWrapper>
      <div className="component_footer_content">
        <CenterLayout>
          <RowWrapper className="component_footer_content">
            <div className="component_footer_contributor">
              <p>Supported by:</p>
              {support.map(people => {
                return <ImageLink people={people} />;
              })}
            </div>

            <div className="component_footer_right">
              <p>Contributor:</p>
              {contributor.map(people => {
                return <ImageLink people={people} />;
              })}
            </div>
            {/* <img alt="contributor" src={contributor} />
            <p>Supported By:</p> */}
          </RowWrapper>
          <p>information and support, email us infocorona.id@gmail.com</p>
        </CenterLayout>
      </div>
    </FooterWrapper>
  );
};

export default Index;
