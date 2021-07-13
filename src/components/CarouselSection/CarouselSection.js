import { Link } from "gatsby";
import React, { useState } from "react"
import { Button, Carousel } from "./CarouselSection.style";
import { ImageContainer, HeadingContainer, MainImage, Category, Date } from "../../templates/BlogPost/BlogPost.style";
import PrevArrow from '../../images/prev-arrow.png';
import NextArrow from '../../images/next-arrow.png';


const CarouselSection = (props) => {
  const length = props.blogs.length;
  const [current, setCurrent] = useState(Math.floor(length / 2));

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  };
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  };

  return (
    <Carousel className="carousel">
      <Button className="arrow prev" onClick={prevSlide} left="0px"><img src={PrevArrow} alt="Previous slide arrow" /></Button>
      {props.blogs.map((blog, index) => {
        return <div className={index === current ? 'slide active' : 'slide'} key={index}>
            {index === current && (
              <Link to={`/${blog.uid}`}>
                <ImageContainer height="815px">
                  <HeadingContainer>
                    <h2>{blog.data.heading[0].text}</h2>
                    <h3>{blog.data.subheading[0].text}</h3>
                  </HeadingContainer>
                  <MainImage src={blog.data.main_image.url} alt={blog.data.main_image.alt} />
                  <Category style={{backgroundColor: `${blog.data.category_color}`}}>{blog.data.category[0].text}</Category>
                  <Date>{blog.data.date} | <span>{blog.data.author[0].text}</span></Date>
                </ImageContainer>
              </Link>
            )}
          </div>
      })}
      <Button className="arrow next" onClick={nextSlide} right="0px"><img src={NextArrow} alt="Next slide arrow" /></Button>
    </Carousel>
  )
}

export default CarouselSection;