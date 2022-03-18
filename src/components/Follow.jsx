import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
const TitleContainer = styled.div`
    width: 93vw;
`;
const Title = styled.h1``;
const Info = styled.p``;
const SocialPosts = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    justify-content: center;
    align-items: center;
`;
const PostContainer = styled.div`
    width: 252px;
    height: 252px;
`;
const PostImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;
const LikesNComments = styled.div``;
const Likes = styled.div``;
const Comments = styled.div``;

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
                        <Likes></Likes>
                        <Comments></Comments>
                    </LikesNComments>
                </PostContainer>
                <PostContainer>
                    <PostImage src="https://d-themes.com/react/molla/demo-8/images/home/instagram/2.jpg" />
                    <LikesNComments>
                        <Likes></Likes>
                        <Comments></Comments>
                    </LikesNComments>
                </PostContainer>
                <PostContainer>
                    <PostImage src="https://d-themes.com/react/molla/demo-8/images/home/instagram/3.jpg" />
                    <LikesNComments>
                        <Likes></Likes>
                        <Comments></Comments>
                    </LikesNComments>
                </PostContainer>
                <PostContainer>
                    <PostImage src="https://d-themes.com/react/molla/demo-8/images/home/instagram/4.jpg" />
                    <LikesNComments>
                        <Likes></Likes>
                        <Comments></Comments>
                    </LikesNComments>
                </PostContainer>
                <PostContainer>
                    <PostImage src="https://d-themes.com/react/molla/demo-8/images/home/instagram/5.jpg" />
                    <LikesNComments>
                        <Likes></Likes>
                        <Comments></Comments>
                    </LikesNComments>
                </PostContainer>
            </SocialPosts>
        </Container>
    );
};

export default Follow;
