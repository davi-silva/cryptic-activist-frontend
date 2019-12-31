/* eslint-disable class-methods-use-this */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import slugify from 'slugify';

import {
  FaSpinner,
} from 'react-icons/fa';

import SubNavBar from '../../components/UI/navbar/SubNavBar';
// import AdSense from '../components/UI/ads/AdvertisementSquare.component';
import Newsletter from '../../components/UI/newsletter/NewsletterSide.component';
import RecentCategories from '../../components/UI/categories/RecentCategoriesBlogPost';
import ShareButtons from '../../components/UI/buttons/ShareButtons';

// import AdvertisementsTopPage from '../../components/UI/ads/AdvertisementsTopPage';

import Helmet from '../../components/UI/helmet/Helmet';

import {
  Cover,
  Author,
  Title,
  Content,
  TagsUl,
  TagLi,
  Tag,
  // LoadingTags,
  RelatedPost,
  UploadedOn,
  RelatedPostLabel,
  LoadingRelatedPostLabel,
  // AllContent,
  LoadingAllContent,
  Fluid,
  ColumnLeft,
  ColumnCenterLeft,
  ColumnCenterRight,
  ColumnRight,
  RelatedPostList,
  RelatedPostBackgroundWrapper,
  RelatedPostLi,
  RelatedPostH6,
  StickyWrapper,
} from '../../styled-components/post.styled-components';

export default class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: '',
      title: '',
      content: '',
      tags: [],
      publishedOn: null,
      updatedOn: null,
      cover: '',
      coverAlt: '',
      relatedCategoryPosts: [],
      author: null,
    };
    this.componentDidMount = this.componentDidMount.bind(this);
    this.getPostBySlug = this.getPostBySlug.bind(this);
    this.getPostByCategory = this.getPostByCategory.bind(this);
    this.parseDate = this.parseDate.bind(this);
    // this.covertAllTags = this.covertAllTags.bind(this);
  }

  async componentDidMount() {
    const post = await this.getPostBySlug();
    if (post.length > 0) {
      const {
        slug,
        category,
        title,
        tags,
        content,
        publishedOn,
        updatedOn,
        cover,
        author,
      } = post[0];
      const relatedCategoryPosts = await this.getPostByCategory(category, slug);
      // this.covertAllTags()
      const dateFormatted = this.parseDate(publishedOn);
      const months = [
        'January',
        'February',
        'March',
        'April',
        'may',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ];
      const formattedDate = `${months[dateFormatted.getMonth()]} ${dateFormatted.getDate()} ${dateFormatted.getFullYear()}`;
      if (updatedOn === null) {
        await this.setStateAsync({
          slug,
          category,
          title,
          content,
          tags,
          publishedOn: formattedDate,
          cover: cover.url,
          coverAlt: cover.name,
          relatedCategoryPosts,
          author,
        });
      }
      if (updatedOn !== null) {
        const dateFormattedUpdated = this.parseDate(updatedOn);
        const formattedDateUpdated = `${months[dateFormattedUpdated.getMonth()]} ${dateFormattedUpdated.getDate()} ${dateFormattedUpdated.getFullYear()}`;

        await this.setStateAsync({
          slug,
          category,
          title,
          content,
          tags,
          publishedOn: formattedDate,
          updatedOn: formattedDateUpdated,
          cover: cover.url,
          coverAlt: cover.name,
          relatedCategoryPosts,
        });
      }
    } else {
      const { history } = this.props;
      history.push('/404');
    }
  }

  async getPostBySlug() {
    const { match } = this.props;
    const { slug } = match.params;
    this.response = await fetch(
      `http://localhost:5000/blog/get/slug/${slug}`,
      {
        method: 'GET',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
    const data = await this.response.json();
    return data;
  }

  async getPostByCategory(category, slug) {
    this.response = await fetch(
      `http://localhost:5000/blog/get/category/newest/${slug}/${category}`,
      {
        method: 'GET',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
    const data = await this.response.json();
    return data;
  }

  setStateAsync(state) {
    return new Promise((resolve) => {
      this.setState(state, resolve);
    });
  }

  getColumn(post, index) {
    let column;
    if (index === 0) {
      console.log('index:', index);
      column = (
        <>
          <ColumnLeft className="col-lg-3 col-md-3 col-sm-6 col-12">

            <RelatedPost to={post.slug}>
              <div
                style={{
                  backgroundImage: `url(${post.cover.url})`,
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                  height: '170px',
                  width: '100%',
                }}
              >
                <RelatedPostBackgroundWrapper />
                <RelatedPostH6>
                  {post.title}
                </RelatedPostH6>
              </div>
            </RelatedPost>
          </ColumnLeft>
        </>
      );
    } else if (index === 1) {
      column = (
        <>
          <ColumnCenterLeft className="col-lg-3 col-md-3 col-sm-6 col-12">

            <RelatedPost to={post.slug}>
              <div
                style={{
                  backgroundImage: `url(${post.cover.url})`,
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                  height: '170px',
                  width: '100%',
                }}
              >
                <RelatedPostBackgroundWrapper />
                <RelatedPostH6>
                  {post.title}
                </RelatedPostH6>
              </div>
            </RelatedPost>
          </ColumnCenterLeft>
        </>
      );
    } else if (index === 2) {
      column = (
        <>
          <ColumnCenterRight className="col-lg-3 col-md-3 col-sm-6 col-12">

            <RelatedPost to={post.slug}>
              <div
                style={{
                  backgroundImage: `url(${post.cover.url})`,
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                  height: '170px',
                  width: '100%',
                }}
              >
                <RelatedPostBackgroundWrapper />
                <RelatedPostH6>
                  {post.title}
                </RelatedPostH6>
              </div>
            </RelatedPost>
          </ColumnCenterRight>
        </>
      );
    } else if (index === 3) {
      column = (
        <>
          <ColumnRight className="col-lg-3 col-md-3 col-sm-6 col-12">

            <RelatedPost to={post.slug}>
              <div
                style={{
                  backgroundImage: `url(${post.cover.url})`,
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                  height: '170px',
                  width: '100%',
                }}
              >
                <RelatedPostBackgroundWrapper />
                <RelatedPostH6>
                  {post.title}
                </RelatedPostH6>
              </div>
            </RelatedPost>
          </ColumnRight>
        </>
      );
    }

    return column;
  }

  parseDate(input) {
    this.parts = input.match(/(\d+)/g);
    return new Date(this.parts[0], this.parts[1] - 1, this.parts[2]);
  }

  render() {
    const {
      title,
      category,
      cover,
      coverAlt,
      content,
      tags,
      relatedCategoryPosts,
      publishedOn,
      updatedOn,
      author,
    } = this.state;
    const {
      location,
    } = this.props;

    let helmet;
    let allContentPost;
    let postPublished;
    let postRelatedPost;

    if (title === '') {
      helmet = (
        <>
          <Helmet title="Loading" media="Blog" />
        </>
      );
    } else {
      helmet = (
        <>
          <Helmet title={title} media="Blog" />
        </>
      );
    }


    if (title === ''
    || cover === ''
    || coverAlt === ''
    || content === ''
    || tags === ''
    || relatedCategoryPosts.length === 0
    || publishedOn === '') {
      allContentPost = (
        <LoadingAllContent>
          <FaSpinner />
        </LoadingAllContent>
      );
    } else {
      if (publishedOn === null) {
        postPublished = (
          <UploadedOn>
            {updatedOn}
          </UploadedOn>
        );
      } else {
        postPublished = (
          <UploadedOn>
            {publishedOn}
          </UploadedOn>
        );
      }
      if (relatedCategoryPosts.found === false) {
        postRelatedPost = (
          <LoadingRelatedPostLabel />
        );
      } else {
        postRelatedPost = (
          <RelatedPostLabel>
            Related Blog Posts
            <br />
            <div className="container">
              <div className="row">
                {
                relatedCategoryPosts.map((post, key) => this.getColumn(post, key))
                }
              </div>
            </div>
            <RelatedPostList />
          </RelatedPostLabel>
        );
      }
      allContentPost = (
        <>
          <div className="col-lg-9 col-md-9 col-sm-12 col-12">
            <Author>
              <ul>
                <li>
                  <img src={author.profileImage.url} alt="Author" />
                </li>
                <li>
                  <div>
                    <span>{author.name}</span>
                    <span>
                      <button type="submit">Follow +</button>
                    </span>
                    {postPublished}
                  </div>
                </li>
              </ul>
            </Author>
            <ShareButtons path={`https://hardcore-tesla-e87eac.netlify.com${location.pathname}`} />
            <Title>
              {title}
            </Title>
            <Content dangerouslySetInnerHTML={{ __html: content }} />
            <TagsUl>
              {
                tags.map((tag, key) => (
                  <>
                    <TagLi key={key}>
                      <Tag to={`/blog/tags/${slugify(tag.toLowerCase())}`}>
                        {tag}
                      </Tag>
                    </TagLi>
                  </>
                ))
              }
            </TagsUl>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-12 col-12">
            <StickyWrapper>
              <RecentCategories />
              <Newsletter />
            </StickyWrapper>
          </div>
          <Fluid className="container-fluid">
            <div className="row">
              <div className="col-12">
                {postRelatedPost}
              </div>
            </div>
          </Fluid>
        </>
      );
    }
    return (
      <>
        {helmet}
        <SubNavBar media="Blog" category={category} title={title} />
        {/* <AdvertisementsTopPage /> */}
        <div className="container-fluid p-0">
          <div className="row">
            <div className="col-12">
              <Cover
                src={cover}
                alt={coverAlt}
              />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            {allContentPost}
          </div>
        </div>
      </>
    );
  }
}

Post.propTypes = {
  history: PropTypes.shape,
  match: PropTypes.shape,
};

Post.defaultProps = {
  history: Object,
  match: Object,
};