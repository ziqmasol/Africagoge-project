

import React from 'react'
import BlogPageStyle from './BlogPageStyle';
import { BlogData } from './BlogData';
import { Card } from './Card';
import Counter from './Counter';
import Header from '../HeaderAndFooter/Header';
import Footer from '../HeaderAndFooter/Footer/Footer';

export const BlogPage = () => {
  return (<>
  <Header />
    <BlogPageStyle>
        {/* section-content */}
        <div className='section-content'>
            <div className='hero-content'>
            <h1>welcome to our forever update blog post</h1>
            <small>be informed! Never miss a single post</small>
            </div>
        </div>
        {/*section image  */}
        <div className='section-image'>
            <img  src='BlogPage.png' alt='pics' />
        </div>

        {/* section card */}



    </BlogPageStyle>
        {BlogData.map((card,index)=>{
          return <Card key={index} image={card.pics} id={card.id} header={card.header} paragraph={card.paragraph} time={card.time}  />
        })
      }
        <div style={{display: 'flex' , margin: '0 0 0 2rem'}}>
      {

        BlogData.map((card , index)=>{
          return <Counter key={index} count={index} />
        })
      }
        </div>
        <Footer />
      </>
  )
}
