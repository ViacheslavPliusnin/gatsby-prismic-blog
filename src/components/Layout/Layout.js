import React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import { Header, HeaderConainer, PagesContainer, MainLink, SearchButton, PagesLinks, CategoriesContainer, Footer, Newslatter, TextInput, SubmitInput } from "./Layout.style";
import Search from '../../images/search.png'
import Menu from '../../images/menu.png'

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
                        <SearchButton backgroundColor="#f6f6f6" width="60px"><img src={Search} alt="search icon" /></SearchButton>
                        <PagesLinks>
                            <Link to="/about">About</Link>
                            <Link to="/cooperation">Cooperation</Link>
                            <Link to="/contact">Contact</Link>
                        </PagesLinks>
                    </PagesContainer>
                    <CategoriesContainer>
                        {filteredCategories.map((category, i) => {
                            return <Link key={i} to={`/`}>{category}</Link>
                        })}
                        <SearchButton backgroundColor="white"><img src={Menu} alt="menu icon" /></SearchButton>
                    </CategoriesContainer>
                </Header>
            </HeaderConainer>
            <main>{children}</main>
            <Newslatter>
                    <h2>Newsletter</h2>
                    <h4>Donec elementum dui semper, pretium dui quis, pretium nisl.</h4>
                    <form>
                        <TextInput type="text" />
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