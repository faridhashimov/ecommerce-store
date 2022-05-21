import {
    LocationOnOutlined,
    PhoneOutlined,
    EmailOutlined,
    AccessTimeOutlined,
    CalendarMonthOutlined,
    ArrowRightAltOutlined,
} from '@mui/icons-material'
import styled from 'styled-components'
import { Announcement, Navbar, Footer } from '../components'
import ReactMapGL, {
    FullscreenControl,
    Marker,
    NavigationControl,
} from 'react-map-gl'
import { useState } from 'react'
import 'mapbox-gl/dist/mapbox-gl.css'
import { mobile } from '../responsive'

const Container = styled.div``

const Wrapper = styled.div`
    width: 93vw;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const Main = styled.div`
    margin: 40px 0px;
    border-radius: 5px;
    overflow: hidden;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
`

const MainImage = styled.img`
    width: 100%;
`
const MainTitle = styled.div`
    position: absolute;
    text-align: center;
    color: #fff;
`
const TitleInfo = styled.h1`
    font-size: 40px;
    font-weight: 400;
`
const SecTitle = styled.span`
    font-size: 16px;
    font-weight: 400;
`

const Contacts = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    margin-bottom: 40px;
    /* ${mobile({ flexDirection: 'column' })} */
`
const ContactInfo = styled.div`
    flex: 1;
    padding: 0px 10px;
`
const Title = styled.h2`
    font-size: 24px;
    font-weight: 500;
    line-height: 28px;
    margin-bottom: 10px;
    width: 100%;
`
const Info = styled.p`
    font-size: 14px;
    font-weight: 300;
    margin-bottom: 20px;
    line-height: 26px;
    color: #777;
        ${mobile({ fontSize: '10px', lineHeight: '22px', marginBottom: '7px' })}

`
const AdressContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
`
const Adress = styled.div`
    width: 340px;
    margin-right: 10px;
    ${mobile({ width: '200px', marginRight: '0px' })}
`
const AressTitle = styled.h3`
    font-size: 18px;
    font-weight: 400;
    line-height: 20px;
    margin-bottom: 15px;
`
const AddressInfo = styled.ul`
    list-style: none;
`
const AddressItem = styled.li`
    font-size: 14px;
    font-weight: 300;
    line-height: 26px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    margin-bottom: 15px;
    color: #666;
    /* padding-top: 4px; */
    ${mobile({ fontSize: '12px', lineHeight: '22px', marginBottom: '5px' })}
`
const IconContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
    margin-top: 5px;
    color: #F27A1A;
    ${mobile({  marginRight: '0px' })}
`
const OfficeHours = styled.div`
    width: 205px;
    margin: 0px 10px;
    ${mobile({ width: '145px'})}
`
const QuestionForm = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 0px 10px;
    ${mobile({ display: 'none' })};
`
const Form = styled.form`
    margin-bottom: 30px;
`
const Input = styled.input`
    width: 235px;
    margin-right: ${(props) => props.right}px;
    margin-bottom: 20px;
    padding: 8.5px 20px;
    background-color: #fafafa;
    outline: none;
    border: 1px solid #ebebeb;
    &:focus {
        outline: none;
        border: 1px solid #F27A1A;
    }
`
const Message = styled.textarea`
    width: 533px;
    height: 130px;
    resize: vertical;
    padding: 8.5px 20px;
    border: 1px solid #ebebeb;
    background-color: #fafafa;
    &:focus {
        outline: none;
        border: 1px solid #F27A1A;
    }
`
const Submit = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    font-weight: 400;
    color: #F27A1A;
    border: 1px solid #F27A1A;
    min-width: 120px;
    text-transform: uppercase;
    padding: 6px 10px;
    margin-top: 15px;
    cursor: pointer;
    transition: all 0.2s ease;
    background-color: transparent;
    &:hover {
        background-color: #f08936;
        color: #fff;
    }
`

const Stores = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;
`
const Store = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px 10px;
    flex: 1;
    /* ${mobile({ flexDirection: 'column' })}; */
`
const StoreContainer = styled.div`
    height: 275px;
    display: flex;
    justify-content: center;
    align-items: center;
    ${mobile({ flexDirection: 'column' })};
`
const StoreTitle = styled(Title)`
    text-align: center;
    margin-bottom: 30px;
    ${mobile({ marginBottom: '0px'})};
`

const ImageContainer = styled.div`
    width: 30%;
    height: 30%;
    margin-right: 10px;
    ${mobile({ display: 'none' })};
`
const InfoContainer = styled.div`
    margin-left: 10px;
    ${mobile({ marginLeft: '0px', width: '100%', display: 'flex' })};
`
const Top = styled.div`
 ${mobile({ marginRight: '10px' })};`
const ViewButton = styled.button`
    background: transparent;
    border: none;
    color: #F27A1A;
    padding-bottom: 5px;
    border-bottom: 1.5px solid #fff;
    cursor: pointer;
    transition: all 0.2s ease;
    &:hover {
        border-bottom: 1.5px solid #F27A1A;
        transition: all 0.2s ease;
    }
    ${mobile({ display: 'none' })};
`
const TopTitle = styled.h3`
    font-weight: 400;
    font-size: 16px;
    ${mobile({ fontSize: '12px' })}
`
const BottomTitle = styled.h3`
    font-weight: 400;
    font-size: 14px;
`
const Phone = styled.span``
const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`
const Br = styled.br``

const MapContainer = styled.div`
    background-color: #666;
    height: 500px;
    width: 98%;
    margin-bottom: 30px;
    overflow: hidden;
    box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.5);
    ${mobile({ display: 'none' })}
`

const Contact = () => {
    const [view, setView] = useState({
        latitude: 40.705646,
        longitude: -74.006647,
        zoom: 10,
    })

    const adress = {
        first: { latitude: 40.7057, longitude: -74.0061, zoom: 18 },
        sec: { latitude: 40.7021, longitude: -74.0122, zoom: 18 },
    }
    const TOKEN =
        'pk.eyJ1IjoiZmFyZ21vdiIsImEiOiJjbDB5MWl5djcwY2x0M2JveXR3ajgyZGk0In0.oFZCf90L7hQ5_Qts98B3qA'
    return (
        <Container>
            {/* <Announcement /> */}
            <Navbar />
            <Wrapper>
                <Main>
                    <MainImage src="https://d-themes.com/react/molla/demo-8/images/contact-header-bg.jpg" />
                    <MainTitle>
                        <TitleInfo>Contact us</TitleInfo>
                        <SecTitle>keep in touch with us</SecTitle>
                    </MainTitle>
                </Main>
                <Contacts>
                    <ContactInfo>
                        <Title>Contact Information</Title>
                        <Info>
                            Vestibulum volutpat, lacus a ultrices sagittis, mi
                            neque euismod dui, eu pulvinar nunc sapien ornare
                            nisl. Phasellus pede arcu, dapibus eu, fermentum et,
                            dapibus sed, urna.
                        </Info>
                        <AdressContainer>
                            <Adress>
                                <AressTitle>The Office</AressTitle>
                                <AddressInfo>
                                    <AddressItem>
                                        <IconContainer>
                                            <LocationOnOutlined
                                                style={{ fontSize: 20 }}
                                            />
                                        </IconContainer>
                                        70 Washington Square South New <Br />
                                        York, NY 10012, United States
                                    </AddressItem>
                                    <AddressItem>
                                        <IconContainer>
                                            <PhoneOutlined
                                                style={{ fontSize: 20 }}
                                            />
                                        </IconContainer>
                                        +92 423 567
                                    </AddressItem>
                                    <AddressItem>
                                        <IconContainer>
                                            <EmailOutlined
                                                style={{ fontSize: 20 }}
                                            />
                                        </IconContainer>
                                        info@Molla.com
                                    </AddressItem>
                                </AddressInfo>
                            </Adress>
                            <OfficeHours>
                                <AressTitle>The Office</AressTitle>
                                <AddressInfo>
                                    <AddressItem>
                                        <IconContainer>
                                            <AccessTimeOutlined
                                                style={{ fontSize: 20 }}
                                            />
                                        </IconContainer>
                                        Monday-Saturday <Br /> 11am-7pm ET
                                    </AddressItem>
                                    <AddressItem>
                                        <IconContainer>
                                            <CalendarMonthOutlined
                                                style={{ fontSize: 20 }}
                                            />
                                        </IconContainer>
                                        Sunday 11am-6pm ET
                                    </AddressItem>
                                </AddressInfo>
                            </OfficeHours>
                        </AdressContainer>
                    </ContactInfo>
                    <QuestionForm>
                        <Title>Got Any Questions?</Title>
                        <Info>
                            Use the form below to get in touch with the sales
                            team
                        </Info>
                        <Form>
                            <Input
                                type="text"
                                placeholder="Name *"
                                right="17"
                            ></Input>
                            <Input type="email" placeholder="Email *"></Input>
                            <Input
                                type="text"
                                placeholder="Phone"
                                right="17"
                            ></Input>
                            <Input type="text" placeholder="Subject"></Input>
                            <Message placeholder="Message *"></Message>
                            <Submit type="submit">
                                Submit
                                <ArrowRightAltOutlined
                                    style={{
                                        marginLeft: 12,
                                        fontSize: 15,
                                        fontWeight: 300,
                                    }}
                                />
                            </Submit>
                        </Form>
                    </QuestionForm>
                </Contacts>
                <Stores>
                    <StoreTitle>Our Stores</StoreTitle>
                    <StoreContainer>
                        <Store>
                            <ImageContainer>
                                <Image src="https://d-themes.com/react/molla/demo-8/images/stores/img-1.jpg" />
                            </ImageContainer>
                            <InfoContainer>
                                <Top>
                                    <TopTitle>Wall Street Plaza</TopTitle>
                                    <Info>
                                        88 Pine St, New York, NY 10005, USA{' '}
                                        <Br />
                                        <Phone>+1 987-876-6543</Phone>
                                    </Info>
                                </Top>
                                <Top>
                                    <BottomTitle>Store Hours:</BottomTitle>
                                    <Info>
                                        Monday - Saturday 11am to 7pm <Br/> Sunday
                                        11am to 6pm
                                    </Info>
                                </Top>
                                <ViewButton
                                    onClick={() => {
                                        setView(adress.first)
                                        window.scrollTo(0, 1400)
                                    }}
                                >
                                    View Map
                                </ViewButton>
                            </InfoContainer>
                        </Store>
                        <Store>
                            <ImageContainer>
                                <Image src="https://d-themes.com/react/molla/demo-8/images/stores/img-2.jpg" />
                            </ImageContainer>
                            <InfoContainer>
                                <Top>
                                    <TopTitle>One New York Plaza</TopTitle>
                                    <Info>
                                        88 Pine St, New York, NY 10005, USA
                                        <Phone>+1 987-876-6543</Phone>
                                    </Info>
                                </Top>
                                <Top>
                                    <BottomTitle>Store Hours:</BottomTitle>
                                    <Info>
                                        Monday - Friday 9am to 8pm <Br />
                                        Saturday - 9am to 2pm <Br /> Sunday -
                                        Closed
                                    </Info>
                                </Top>
                                <ViewButton
                                    onClick={() => {
                                        setView(adress.sec)
                                        window.scrollTo(0, 1400)
                                    }}
                                >
                                    View Map
                                </ViewButton>
                            </InfoContainer>
                        </Store>
                    </StoreContainer>
                </Stores>
                {/* <MapContainer>
                    <ReactMapGL
                        {...view}
                        onMove={(evt) => setView(evt.viewState)}
                        style={{ width: '100%', height: 500 }}
                        mapboxAccessToken={TOKEN}
                        mapStyle="mapbox://styles/mapbox/streets-v9"
                    >
                        <Marker
                            longitude={-74.0061}
                            latitude={40.7057}
                            color="#3FB1CE"
                        />
                        <Marker
                            longitude={-74.0122}
                            latitude={40.7021}
                            color="#1DC8CA"
                        />
                        <FullscreenControl />
                        <NavigationControl />
                    </ReactMapGL>
                </MapContainer> */}
            </Wrapper>
            <Footer />
        </Container>
    )
}

export default Contact
