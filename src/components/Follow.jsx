import { FavoriteBorder, ForumOutlined } from '@mui/icons-material'
import styled from 'styled-components'
import { mobile } from '../responsive'

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* ${mobile({ padding: '0px 10px'})} */
`
const TitleContainer = styled.div`
    width: 93vw;
    text-align: center;
    margin-bottom: 30px;
    ${mobile({ marginBottom: '10px' })}
`
const Title = styled.h1`
    font-size: 22px;
    font-weight: 700;
    line-height: 26px;
    margin-bottom: 10px;
    color: #333;
    ${mobile({fontSize: '16px', marginBottom: '5px' })}

`
const Info = styled.p`
    font-size: 13px;
    font-weight: 300;
    color: #777;
`
const SocialPosts = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    /* ${mobile({ display: 'grid', gridTemplateColumns: 'repeat(2 100px)' })} */
`
const LikesNComments = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    position: absolute;
    z-index: 10;
    opacity: 0;
    transition: all 0.3s ease;
    ${mobile({flexDirection: 'column'})}
`
const PostContainer = styled.div`
    width: 252.656px;
    height: 252.656px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    &:hover ${LikesNComments} {
        opacity: 1;
        transition: all 0.3s ease;
    }
    &:after {
        content: '';
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background-color: rgba(0, 0, 0, 0.3);
        opacity: 0;
        transition: all 0.2s ease;
    }
    &:hover::after {
        opacity: 1;
        transition: all 0.2s ease;
    }
    ${mobile({ width: '100%', height: '100%' })}
`
const PostImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

const Likes = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    &:hover {
        color: #F27A1A;
        transition: all 0.2s ease-in-out;
    }
    ${mobile({  marginRight: '0px'})}
`
const Comments = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    &:hover {
        color: #F27A1A;
        transition: all 0.2s ease-in-out;
    }
`

const Follow = () => {
    return (
        <Container>
            <TitleContainer>
                <Title>FOLLOW US ON INSTAGRAM</Title>
                <Info>Wanna share your style with us?</Info>
            </TitleContainer>
            <SocialPosts>
                <PostContainer>
                    <PostImage src="https://d-themes.com/react/molla/demo-8/images/home/instagram/1.jpg" />
                    <LikesNComments>
                        <Likes>
                            <FavoriteBorder
                                style={{ fontSize: 16, marginRight: 5 }}
                            />{' '}
                            456
                        </Likes>
                        <Comments>
                            <ForumOutlined
                                style={{ fontSize: 16, marginRight: 5 }}
                            />{' '}
                            65
                        </Comments>
                    </LikesNComments>
                </PostContainer>
                <PostContainer>
                    <PostImage src="https://d-themes.com/react/molla/demo-8/images/home/instagram/2.jpg" />
                    <LikesNComments>
                        <Likes>
                            <FavoriteBorder
                                style={{ fontSize: 16, marginRight: 5 }}
                            />{' '}
                            691
                        </Likes>
                        <Comments>
                            <ForumOutlined
                                style={{ fontSize: 16, marginRight: 5 }}
                            />{' '}
                            87
                        </Comments>
                    </LikesNComments>
                </PostContainer>
                <PostContainer>
                    <PostImage src="https://d-themes.com/react/molla/demo-8/images/home/instagram/3.jpg" />
                    <LikesNComments>
                        <Likes>
                            <FavoriteBorder
                                style={{ fontSize: 16, marginRight: 5 }}
                            />{' '}
                            508
                        </Likes>
                        <Comments>
                            <ForumOutlined
                                style={{ fontSize: 16, marginRight: 5 }}
                            />{' '}
                            127
                        </Comments>
                    </LikesNComments>
                </PostContainer>
                <PostContainer>
                    <PostImage src="https://d-themes.com/react/molla/demo-8/images/home/instagram/4.jpg" />
                    <LikesNComments>
                        <Likes>
                            <FavoriteBorder
                                style={{ fontSize: 16, marginRight: 5 }}
                            />{' '}
                            433
                        </Likes>
                        <Comments>
                            <ForumOutlined
                                style={{ fontSize: 16, marginRight: 5 }}
                            />{' '}
                            27
                        </Comments>
                    </LikesNComments>
                </PostContainer>
                <PostContainer>
                    <PostImage src="https://d-themes.com/react/molla/demo-8/images/home/instagram/5.jpg" />
                    <LikesNComments>
                        <Likes>
                            <FavoriteBorder
                                style={{ fontSize: 16, marginRight: 5 }}
                            />{' '}
                            122
                        </Likes>
                        <Comments>
                            <ForumOutlined
                                style={{ fontSize: 16, marginRight: 5 }}
                            />{' '}
                            55
                        </Comments>
                    </LikesNComments>
                </PostContainer>
            </SocialPosts>
        </Container>
    )
}

export default Follow
