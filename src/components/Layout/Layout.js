import React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import { Header, HeaderConainer, PagesContainer, MainLink, SearchButton, CategoriesContainer, Footer, Newslatter, TextInput, SubmitInput, Navigation } from "./Layout.style";
import { StaticImage } from "gatsby-plugin-image";

const Layout = ({ children }) => {
    const data = useStaticQuery(graphql`
        query ArticleCategories {
            allPrismicArticles {
            nodes {
                data {
                category {
                    text
                }
                }
            }
            }
        }           
    `)
    const categories = data.allPrismicArticles.nodes.map(node => {
        return node.data.category[0].text;
    });
    const filteredCategories = categories.filter((item, index) => {
        return categories.indexOf(item) === index;
    });

    return(
        <div>
            <HeaderConainer>
                <Header>
                    <PagesContainer>
                        <MainLink to="/">Blog <span>template</span></MainLink>
                        <SearchButton backgroundColor="#f6f6f6" width="60px"><StaticImage src="../../images/search.png" alt="search icon" layout="fixed" /></SearchButton>
                        <Navigation>
                            <Link to="/about">About</Link>
                            <Link to="/cooperation">Cooperation</Link>
                            <Link to="/contact">Contact</Link>
                        </Navigation>
                    </PagesContainer>
                    <CategoriesContainer>
                        {filteredCategories.map((category, i) => {
                            return <Link key={i} to={`/`}>{category}</Link>
                        })}
                        <SearchButton backgroundColor="white"><StaticImage src="../../images/menu.png" alt="menu icon" layout="fixed"/></SearchButton>
                    </CategoriesContainer>
                </Header>
            </HeaderConainer>
            <main>{children}</main>
            <Newslatter>
                    <h2>Newsletter</h2>
                    <h4>Donec elementum dui semper, pretium dui quis, pretium nisl.</h4>
                    <form>
                        <TextInput type="text" name="Email input" />
                        <SubmitInput type="button" value="Sign up" />
                    </form>
            </Newslatter>
            <Footer>
                <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                <p>Viacheslav Pliusnin. 2021. My profile: <a href="https://github.com/ViacheslavPliusnin" rel="noopener noreferrer" target="_blank">GitHub</a></p>
            </Footer>
        </div>
    );
};
export default Layout;